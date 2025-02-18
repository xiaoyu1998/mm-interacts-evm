import { deployContract2, deployContract, contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { getPools2 } from "../utils/reader"
import { poolKey } from "../utils/hash"
import { LiquidationUtils } from "../typechain-types/contracts/exchange/LiquidationHandler";
import { usdtDecimals, tokenDecimals} from "../utils/constants";
import { POOL_BASE, POOL_MEME, CREATE_POSITION_ID} from "../utils/constants";
import { LIQUIDATION_KEEPER, FEE_KEEPER } from "../utils/keys"

const MOCK_TOKEN_COUNT = 100;

async function main() {
    const startTime = Date.now();

    const [owner, user1, ...users] = await ethers.getSigners();
    console.log("owner", owner.address);

    const exchangeRouter = await getContract("ExchangeRouter"); 
    const router = await getContract("Router");
    const dataStore = await getContract("DataStore"); 
    const reader = await getContract("Reader"); 
    const roleStore = await getContract("RoleStore"); 

    const treasury = owner.address;
    const liquidation_keeper = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
    await sendTxn(roleStore.grantRole(treasury, FEE_KEEPER), "roleStore.grantRole ${owner.address}");
    await sendTxn(roleStore.grantRole(liquidation_keeper, LIQUIDATION_KEEPER), "roleStore.grantRole ${liquidation_keeper}");

      //create usdt
    const usdt = await deployContract("MintableToken", ["Tether", "USDT", usdtDecimals])
    await sendTxn(usdt.mint(owner.address, expandDecimals(100000000000, usdtDecimals)), "usdt.mint");

     //configuration
    const configuration = bigNumberify(0x12061b58006400000000000000);
    const poolInterestRateStrategy = await getContract("PoolInterestRateStrategy");
    const config = await getContract("Config");
    const multicallArgs = [
        config.interface.encodeFunctionData("setDefaultPoolConfiguration", [configuration]),
        config.interface.encodeFunctionData("setTokenBase", [usdt.target]),
        config.interface.encodeFunctionData("setDefaultInterestRateStrategy", [poolInterestRateStrategy.target]),
        config.interface.encodeFunctionData("setTreasury", [owner.address]),
        config.interface.encodeFunctionData("setMarginLevelThreshold", [expandDecimals(110, 25)]),//110%
        config.interface.encodeFunctionData("setDebtSafetyFactor", [expandDecimals(2, 27)]),//2x
        config.interface.encodeFunctionData("setShortLiquidityThreshold", [expandDecimals(10000000, 27)]),//10millon
        config.interface.encodeFunctionData("setMaxDepositRate", [expandDecimals(1, 26)]),//10%
        config.interface.encodeFunctionData("setMaxBorrowRate", [expandDecimals(8, 26)]),//80%
        config.interface.encodeFunctionData("setTradableDebtMultipierFactor", [expandDecimals(11, 26)]),//110%
        config.interface.encodeFunctionData("setTreasury", [treasury]),
        config.interface.encodeFunctionData("setLiquidationFee", [expandDecimals(1, usdtDecimals)]),//1usdt
        config.interface.encodeFunctionData("setTwapPeriod", [600]),//10 minutes
    ];
    await sendTxn(config.multicall(multicallArgs), "config.multicall");

    let index = 0;
    const tradePromises = [];
    for (const user of users) {
        //console.log("user", user.address);
        await sendTxn(usdt.transfer(user, expandDecimals(2000000000, usdtDecimals)), "transfer to ${user}");  

        // Store the Promise for each `injectFakeTrades` call
        const tradePromise = injectFakeTrades(index, owner, user, exchangeRouter, router, reader, dataStore, usdt);
        tradePromises.push(tradePromise);
        index += 1;
    }

    // Wait for all trade injections to complete
    await Promise.all(tradePromises);
    console.log("All fake trades have been injected.");   

    const endTime = Date.now(); // Record the end time
    const duration = (endTime - startTime) / 1000; // Calculate duration in seconds
    console.log(`Execution completed in ${duration} seconds.`); 
}

async function injectFakeTrades(index, owner, user, exchangeRouter, router, reader, dataStore, usdt) {

    for (let i = 0; i < MOCK_TOKEN_COUNT; i++) {
        const tokenName = "token"+ index + "-" + i;
        console.log("token", tokenName);

        const token = await deployContract2(user, "MintableToken", [tokenName, tokenName, tokenDecimals], user)
        await sendTxn(token.connect(user).mint(user.address, expandDecimals(100000000, tokenDecimals)), "${tokenName}.mint");

        const usdtAddress  = usdt.target;
        const tokenAddress = token.target;

        const poolFactory = await getContract("PoolFactory");
        const paramsToken: CreatePoolParamsStructOutput = {token: tokenAddress, source:owner.address};
        await sendTxn(poolFactory.createPool(paramsToken), "poolFactory.createPool ${tokenName}");  

        //add
        const addAmountUsdt = expandDecimals(10000000, usdtDecimals);
        const addAmountToken = expandDecimals(1000000, tokenDecimals);
        await sendTxn(usdt.connect(user).approve(router.target, addAmountUsdt), `usdt.approve(${router.target})`) 
        await sendTxn(token.connect(user).approve(router.target, addAmountToken), `uni.approve(${router.target})`) 
        const pools = await getPools2(dataStore, reader, [poolKey(usdtAddress, tokenAddress)]);
        const pool = pools[0];
        const paramsAdd: LiquidityUtils.AddParamsStructOutput = {
            token0: usdtAddress,
            token1: tokenAddress,
            to: owner.address,
        };
        const multicallArgs = [
            exchangeRouter.interface.encodeFunctionData("sendTokens", [usdtAddress, pool.bank, addAmountUsdt]),
            exchangeRouter.interface.encodeFunctionData("sendTokens", [tokenAddress, pool.bank, addAmountToken]),
            exchangeRouter.interface.encodeFunctionData("executeAdd", [paramsAdd]),
        ];
        await sendTxn(exchangeRouter.connect(user).multicall(multicallArgs), "exchangeRouter.multicall")

        //long
        const borrowRatio = i%8 + 1;
        const usdtAmount = expandDecimals(10000, usdtDecimals);
        // const tokenAmount = (await reader.calcAmountOut(
        //     dataStore,
        //     usdtAddress,
        //     tokenAddress,
        //     usdtAmount*bigNumberify(borrowRatio + 1),
        //     0
        // ))[0];//the first one in tokenOut        
        await sendTxn(usdt.connect(user).approve(router.target, usdtAmount), `usdt.approve(${router.target})`) 
        const paramsDeposit: DepositUtils.DepositParamsStructOutput = {
            positionId: CREATE_POSITION_ID,
            token0: usdtAddress,
            token1: tokenAddress,
            tokenIndex: POOL_BASE,
        };
        const paramsBorrow: BorrowUtils.BorrowParamsStructOutput = {
            positionId: bigNumberify(i+1),
            tokenIndex: POOL_BASE,
            borrowAmount: usdtAmount*bigNumberify(borrowRatio),
        };

        // console.log(tokenAmount-expandDecimals(1, tokenDecimals));
        const paramsSwapInPosition: SwapInPositionUtils.SwapInPositionParamsStructOutput = {
            positionId: bigNumberify(i+1),
            amount0In: usdtAmount*bigNumberify(borrowRatio + 1),
            amount1In: bigNumberify(0),
            amount0Out: bigNumberify(0),
            //amount1Out: tokenAmount-expandDecimals(1, tokenDecimals)//should a little less than tokenAmount
            amount1Out: bigNumberify(0)//should a little less than tokenAmount
        };
        const multicallArgs2 = [
            exchangeRouter.interface.encodeFunctionData("sendTokens", [usdtAddress, pool.bank, usdtAmount]),
            exchangeRouter.interface.encodeFunctionData("executeDeposit", [paramsDeposit]),
            exchangeRouter.interface.encodeFunctionData("executeBorrow", [paramsBorrow]),
            exchangeRouter.interface.encodeFunctionData("executeSwapInPosition", [paramsSwapInPosition]),
        ];
        await sendTxn(exchangeRouter.connect(user).multicall(multicallArgs2), "exchangeRouter.multicall")

    }

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })