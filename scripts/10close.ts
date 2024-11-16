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

    const pools =  await getPools(dataStore, reader);
    const pool0 = pools[0];
    const usdtAddress = pool0.assets[POOL_BASE].token;
    const usdtDecimals = pool0.assets[POOL_BASE].decimals;
    const usdt = await contractAt("MintableToken", usdtAddress);
    const uniAddress = pool0.assets[POOL_MEME].token;
    const uniDecimals = pool0.assets[POOL_MEME].decimals;
    const uni = await contractAt("MintableToken", uniAddress);  

    // const usdtBalance0 = await usdt.balanceOf(owner.address);
    // const usdtBalancePool0 = await usdt.balanceOf(pool0.bank);

    const usdtAmount = expandDecimals(10000, usdtDecimals);
    const uniAmount = expandDecimals(1500, uniDecimals);
    const positionId = bigNumberify(1);
    await sendTxn(usdt.approve(router.target, usdtAmount), `usdt.approve(${router.target})`) 
    const paramsDeposit: DepositUtils.DepositParamsStructOutput = {
        positionId: CREATE_POSITION_ID,
        token0: usdtAddress,
        token1: uniAddress,
        tokenIndex: POOL_BASE,
    };
    const paramsBorrow: BorrowUtils.BorrowParamsStructOutput = {
        positionId: positionId,
        tokenIndex: POOL_MEME,
        borrowAmount: uniAmount,
    };
    const paramsSwapInPosition: SwapInPositionUtils.SwapInPositionParamsStructOutput = {
        positionId: positionId,
        amount0In: bigNumberify(0),
        amount1In: uniAmount,
        amount0Out: usdtAmount,
        amount1Out: bigNumberify(0)
    };
    const paramsClose: CloseUtils.CloseParamsStructOutput = {
        positionId: positionId
    };
    const multicallArgs = [
        exchangeRouter.interface.encodeFunctionData("sendTokens", [usdtAddress, pool0.bank, usdtAmount]),
        exchangeRouter.interface.encodeFunctionData("executeDeposit", [paramsDeposit]),
        exchangeRouter.interface.encodeFunctionData("executeBorrow", [paramsBorrow]),
        exchangeRouter.interface.encodeFunctionData("executeSwapInPosition", [paramsSwapInPosition]),
        exchangeRouter.interface.encodeFunctionData("executeClose", [paramsClose]),
    ];
    await sendTxn(exchangeRouter.multicall(multicallArgs), "exchangeRouter.multicall");

    // const usdtBalance1 = await usdt.balanceOf(owner.address);
    // const usdtBalancePool1 = await usdt.balanceOf(pool0.bank);

    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });
    console.dir(await getPositions(dataStore, reader, owner.address), {depth: null, colors: true });

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })