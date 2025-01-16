import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { POOL_BASE, POOL_MEME,CREATE_POSITION_ID, REPAYMENT_PARTIAL} from "../utils/constants";
import { getPools, getPositions, parsePool} from "../utils/reader"
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { LIQUIDATION_KEEPER, FEE_KEEPER } from "../utils/keys"
import { poolKey } from "../utils/hash"

async function main() {
    const [owner, user1, user2] = await ethers.getSigners();

    const exchangeRouter = await getContract("ExchangeRouter"); 
    const router = await getContract("Router");
    const roleStore = await getContract("RoleStore"); 
    const dataStore = await getContract("DataStore"); 
    const reader = await getContract("Reader"); 

    // const poolStoreUtils = await getContract("PoolStoreUtils"); 
    // console.dir(
    //   await poolStoreUtils.get(
    //     dataStore.target, 
    //     poolKey("0x29B31150ffF343fB6CD5C6947A7AD8672B7Cc76A", "0x955ced08721cBb7713Ff7A1378620e28073AA9eA")),
    //   {depth: null, colors: true }
    // );

    // const bank =  await contractAt("PoolBank", "0xAA0d9749b42a58976278A8878197De108ECD35bC");  
    // const usdt = await contractAt("MintableToken", "0x29B31150ffF343fB6CD5C6947A7AD8672B7Cc76A");
    // const ceshi6 = await contractAt("MintableToken", "0x955ced08721cBb7713Ff7A1378620e28073AA9eA");
    // console.log("usdt", await usdt.balanceOf("0xAA0d9749b42a58976278A8878197De108ECD35bC"));
    // console.log("ceshi6", await ceshi6.balanceOf("0xAA0d9749b42a58976278A8878197De108ECD35bC"));
    // console.log("symbol", await ceshi6.symbol());

    // const poolCount = await reader.getPoolsCount(dataStore);
    // console.log("poolCount", poolCount);
    // let pools = await reader.getPools(dataStore, 0, poolCount/bigNumberify(2)+bigNumberify(1));
    // for (let i = 0; i < pools.length; i++) {
    //   console.dir(parsePool(pools[i]),  {depth: null, colors: true });
    // }
    // //console.dir(parsePool(pools[0]),  {depth: null, colors: true });
    // pools = await reader.getPools(dataStore, poolCount/bigNumberify(2)+bigNumberify(2), poolCount);
    // for (let i = 0; i < pools.length; i++) {
    //   console.dir(parsePool(pools[i]),  {depth: null, colors: true });
    // }


    // const interestPaymentPeriodInSeconds = BigInt(14 * 24 * 60 * 60);
    // await time.increase(interestPaymentPeriodInSeconds);
    //await sendTxn(roleStore.revokeRole("0x0000000000000000000000000000000000000000", LIQUIDATION_KEEPER), "roleStore.grantRole ${owner.address}");
    //console.log(await roleStore.hasRole(owner.address, LIQUIDATION_KEEPER));
    //console.dir(await getPools(dataStore, reader), {depth: null, colors: true });

    const poolCount = await reader.getPoolsCount(dataStore);
    const pools = await reader.getPools(dataStore, 0, poolCount);
    //console.dir(parsePool(pools[0]),  {depth: null, colors: true });

    // const positions = await getPositions(dataStore, reader, "0xe87069a64c32e3bf7a40b2ce2778995533359074");
    // // const positions = await getPositions(dataStore, reader, "0x189717188db6C85EA050f74Dd9Ab15a461D920e1");
    // console.dir(positions, {depth: null, colors: true });

    //calcAmountOut
    const pool0 = pools[0];
    const usdtAddress = pool0.assets[POOL_BASE].token;
    const usdtDecimals = pool0.assets[POOL_BASE].decimals;
    const uniAddress = pool0.assets[POOL_MEME].token;
    const uniDecimals = pool0.assets[POOL_MEME].decimals;
    const Out = await reader.calcAmountOut(
        dataStore,
        usdtAddress,
        uniAddress,
        expandDecimals(10000, usdtDecimals),
        0
    );
    console.log("amountOut",Out[0], "fee", Out[1], "priceImpact", Out[2]);
    const In = await reader.calcAmountIn(
        dataStore,
        usdtAddress,
        uniAddress,
        Out[0],
        1
    );
    console.log("amountIn",In[0], "fee", In[1], "priceImpact", In[2]);


    // //calcLiquidityOut
    // const liquidity = await reader.calcLiquidityOut(
    //     dataStore,
    //     usdtAddress,
    //     uniAddress,
    //     expandDecimals(10000, usdtDecimals),
    //     expandDecimals(8000, uniDecimals)
    // );
    // console.log("liquidity", liquidity);

    // //calcTokenPairOut
    // const tokenPair = await reader.calcTokenPairOut(
    //     dataStore,
    //     usdtAddress,
    //     uniAddress,
    //     liquidity,
    // );
    // console.log("baseToken", tokenPair[0], "memToken", tokenPair[1]);

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })