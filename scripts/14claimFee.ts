import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { poolKey} from "../utils/hash"
import { POOL_BASE, POOL_MEME} from "../utils/constants";
import { getPools, getPositions } from "../utils/reader"

import { SwapUtils } from "../typechain-types/contracts/exchange/SwapHandler";


async function main() {
    const [owner] = await ethers.getSigners();

    const roleStore = await getContract("RoleStore"); 
    const dataStore = await getContract("DataStore"); 
    const reader = await getContract("Reader"); 
    const feeHandler = await getContract("FeeHandler"); 

    const pools =  await getPools(dataStore, reader);
    const pool0 = pools[0];
    const usdtAddress = pool0.assets[POOL_BASE].token;
    const usdtDecimals = pool0.assets[POOL_BASE].decimals;
    const usdt = await contractAt("MintableToken", usdtAddress);
    const uniAddress = pool0.assets[POOL_MEME].token;
    const uniDecimals = pool0.assets[POOL_MEME].decimals;
    const uni = await contractAt("MintableToken", uniAddress);  

    const usdtBalanceBefore = await usdt.balanceOf(owner.address);
    const key = poolKey(usdtAddress, uniAddress);
    console.log("poolKey", key);
    await sendTxn(feeHandler.claimFees([key]), "feeHandler.claimFees ${key}");
    const usdtBalanceAfter = await usdt.balanceOf(owner.address);

    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });
    console.log(usdtBalanceBefore, usdtBalanceAfter);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })