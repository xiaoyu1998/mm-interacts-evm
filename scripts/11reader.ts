import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { POOL_BASE, POOL_MEME,CREATE_POSITION_ID, REPAYMENT_PARTIAL} from "../utils/constants";
import { getPools, getPositions, parsePool} from "../utils/reader"

async function main() {
    const [owner, user1, user2] = await ethers.getSigners();

    const exchangeRouter = await getContract("ExchangeRouter"); 
    const router = await getContract("Router");
    const roleStore = await getContract("RoleStore"); 
    const dataStore = await getContract("DataStore"); 
    const reader = await getContract("Reader"); 

    const poolCount = await reader.getPoolsCount(dataStore);
    const pools = await reader.getPools(dataStore, 0, poolCount);
    //console.dir(parsePool(pools[2]),  {depth: null, colors: true });
    console.dir(parsePool(pools[0]),  {depth: null, colors: true });

    const positions = await getPositions(dataStore, reader, owner.address);
    console.dir(positions, {depth: null, colors: true });

    //calcAmountOut
    const pool0 = pools[0];
    const usdtAddress = pool0.assets[POOL_BASE].token;
    const usdtDecimals = pool0.assets[POOL_BASE].decimals;
    const uniAddress = pool0.assets[POOL_MEME].token;
    const uniDecimals = pool0.assets[POOL_MEME].decimals;
    const amountOut = await reader.calcAmountOut(
        dataStore,
        usdtAddress,
        uniAddress,
        expandDecimals(10000, usdtDecimals),
        0
    );
    console.log("amountOut", amountOut);

    //calcLiquidityOut
    const liquidity = await reader.calcLiquidityOut(
        dataStore,
        usdtAddress,
        uniAddress,
        expandDecimals(10000, usdtDecimals),
        expandDecimals(8000, uniDecimals)
    );
    console.log("liquidity", liquidity);

    //calcTokenPairOut
    const tokenPair = await reader.calcTokenPairOut(
        dataStore,
        usdtAddress,
        uniAddress,
        liquidity,
    );
    console.log("tokenPair", tokenPair);

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })