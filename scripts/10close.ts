import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { POOL_BASE, POOL_MEME,CREATE_POSITION_ID, REPAYMENT_PARTIAL} from "../utils/constants";
import { getPools, getPositions } from "../utils/reader"

import { SwapUtils } from "../typechain-types/contracts/exchange/SwapHandler";


async function main() {
    const [owner, user1, user2] = await ethers.getSigners();

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


    //owner
    const usdtAmount = expandDecimals(100000, usdtDecimals);
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
        tokenIndex: POOL_BASE,
        borrowAmount: usdtAmount*bigNumberify(3),
    };
    const paramsSwapInPosition: SwapInPositionUtils.SwapInPositionParamsStructOutput = {
        positionId: positionId,
        amount0In: usdtAmount*bigNumberify(4),
        amount1In: bigNumberify(0),
        amount0Out: bigNumberify(0),
        amount1Out: uniAmount
    };
    // const paramsClose: CloseUtils.CloseParamsStructOutput = {
    //     positionId: positionId
    // };
    const multicallArgs = [
        exchangeRouter.interface.encodeFunctionData("sendTokens", [usdtAddress, pool0.bank, usdtAmount]),
        exchangeRouter.interface.encodeFunctionData("executeDeposit", [paramsDeposit]),
        exchangeRouter.interface.encodeFunctionData("executeBorrow", [paramsBorrow]),
        exchangeRouter.interface.encodeFunctionData("executeSwapInPosition", [paramsSwapInPosition]),
        //exchangeRouter.interface.encodeFunctionData("executeClose", [paramsClose]),
    ];
    await sendTxn(exchangeRouter.multicall(multicallArgs), "exchangeRouter.multicall");
  

    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });

    //user1
    const usdtAmount2 = expandDecimals(900000, usdtDecimals);
    const usdtAmountBorrow2 = expandDecimals(697199, usdtDecimals);
    //const uniAmount = expandDecimals(1500, uniDecimals);
    //const positionId = bigNumberify(1);
    await sendTxn(usdt.connect(user1).approve(router.target, usdtAmount2), `usdt.approve(${router.target})`) 
    const paramsDeposit2: DepositUtils.DepositParamsStructOutput = {
        positionId: CREATE_POSITION_ID,
        token0: usdtAddress,
        token1: uniAddress,
        tokenIndex: POOL_BASE,
    };
    const paramsBorrow2: BorrowUtils.BorrowParamsStructOutput = {
        positionId: positionId,
        tokenIndex: POOL_BASE,
        borrowAmount: usdtAmountBorrow2,
    };
    // const paramsSwapInPosition: SwapInPositionUtils.SwapInPositionParamsStructOutput = {
    //     positionId: positionId,
    //     amount0In: usdtAmount,
    //     amount1In: bigNumberify(0),
    //     amount0Out: bigNumberify(0),
    //     amount1Out: bigNumberify(0)
    // };
    // const paramsClose: CloseUtils.CloseParamsStructOutput = {
    //     positionId: positionId
    // };
    const multicallArgs2 = [
        exchangeRouter.interface.encodeFunctionData("sendTokens", [usdtAddress, pool0.bank, usdtAmount2]),
        exchangeRouter.interface.encodeFunctionData("executeDeposit", [paramsDeposit2]),
        exchangeRouter.interface.encodeFunctionData("executeBorrow", [paramsBorrow2]),
        //exchangeRouter.interface.encodeFunctionData("executeSwapInPosition", [paramsSwapInPosition]),
        //exchangeRouter.interface.encodeFunctionData("executeClose", [paramsClose]),
    ];
    await sendTxn(exchangeRouter.connect(user1).multicall(multicallArgs2), "exchangeRouter.multicall");

    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });
    console.dir(await getPositions(dataStore, reader, owner.address), {depth: null, colors: true });
    console.dir(await getPositions(dataStore, reader, user1.address), {depth: null, colors: true });

    //close
    const paramsClose3: CloseUtils.CloseParamsStructOutput = {
        positionId: positionId
    };
    const multicallArgs3 = [
        exchangeRouter.interface.encodeFunctionData("executeClose", [paramsClose3]),
    ];
    await sendTxn(exchangeRouter.multicall(multicallArgs3), "exchangeRouter.multicall");
    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });
    console.dir(await getPositions(dataStore, reader, owner.address), {depth: null, colors: true });

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })