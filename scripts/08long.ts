import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { POOL_BASE, POOL_MEME,CREATE_POSITION_ID, REPAYMENT_PARTIAL} from "../utils/constants";
import { getPools, getPositions } from "../utils/reader"

import { SwapUtils } from "../typechain-types/contracts/exchange/SwapHandler";


async function main() {
    const [owner] = await ethers.getSigners();

    const exchangeRouter = await getContract("ExchangeRouter"); 
    const router = await getContract("Router");
    const roleStore = await getContract("RoleStore"); 
    const dataStore = await getContract("DataStore"); 
    const reader = await getContract("Reader"); 
    //console.log("ExchangeRouter", exchangeRouter.target);

    const pools =  await getPools(dataStore, reader);
    const pool0 = pools[0];
    const usdtAddress = pool0.assets[POOL_BASE].token;
    const usdtDecimals = pool0.assets[POOL_BASE].decimals;
    const usdt = await contractAt("MintableToken", usdtAddress);
    const uniAddress = pool0.assets[POOL_MEME].token;
    const uniDecimals = pool0.assets[POOL_MEME].decimals;
    const uni = await contractAt("MintableToken", uniAddress);  

    const usdtAmount = expandDecimals(100000, usdtDecimals);
    //const uniAmount = expandDecimals(12000, uniDecimals);
    const uniAmount = (await reader.calcAmountOut(
        dataStore,
        usdtAddress,
        uniAddress,
        usdtAmount*bigNumberify(2),
        0
    ))[0];//the first one in tokenOut
    console.log(uniAmount);
    console.log(uniAmount-expandDecimals(1, uniDecimals));

    await sendTxn(usdt.approve(router.target, usdtAmount), `usdt.approve(${router.target})`) 
    const paramsDeposit: DepositUtils.DepositParamsStructOutput = {
        positionId: CREATE_POSITION_ID,
        //positionId: bigNumberify(1),
        token0: usdtAddress,
        token1: uniAddress,
        tokenIndex: POOL_BASE,
    };
    const paramsBorrow: BorrowUtils.BorrowParamsStructOutput = {
        positionId: bigNumberify(1),
        tokenIndex: POOL_BASE,
        borrowAmount: usdtAmount,
    };

    console.log(uniAmount-expandDecimals(1, uniDecimals));
    const paramsSwapInPosition: SwapInPositionUtils.SwapInPositionParamsStructOutput = {
        positionId: bigNumberify(1),
        amount0In: usdtAmount*bigNumberify(2),
        amount1In: bigNumberify(0),
        amount0Out: bigNumberify(0),
        amount1Out: uniAmount-expandDecimals(1, uniDecimals)//should a little less than uniAmount
    };
    const multicallArgs = [
        exchangeRouter.interface.encodeFunctionData("sendTokens", [usdtAddress, pool0.bank, usdtAmount]),
        exchangeRouter.interface.encodeFunctionData("executeDeposit", [paramsDeposit]),
        exchangeRouter.interface.encodeFunctionData("executeBorrow", [paramsBorrow]),
        exchangeRouter.interface.encodeFunctionData("executeSwapInPosition", [paramsSwapInPosition]),
    ];
    try {
        await sendTxn(exchangeRouter.multicall(multicallArgs), "exchangeRouter.multicall");
    } catch (err) {
        for (const key in err) {
            if (err.hasOwnProperty(key)) {
                console.log(`${key}: ${err[key]}`);
            }
        }
    }

    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });
    console.dir(await getPositions(dataStore, reader, owner.address), {depth: null, colors: true });

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })