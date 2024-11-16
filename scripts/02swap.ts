import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { getPools } from "../utils/reader"

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
    const bank =  await contractAt("PoolBank", pool0.bank);  
    const usdtAddress = pool0.assets[0].token;
    const usdtDecimals = pool0.assets[0].decimals;
    const usdt = await contractAt("MintableToken", usdtAddress);
    const uniAddress = pool0.assets[1].token;
    const uniDecimals = pool0.assets[1].decimals;
    const uni = await contractAt("MintableToken", uniAddress);  

    const uniAmountIn = expandDecimals(1000, uniDecimals);
    await sendTxn(uni.approve(router.target, uniAmountIn), `uni.approve(${router.target})`) 

    const usdtBalance0 = await usdt.balanceOf(owner.address);
    const uniBalance0 = await uni.balanceOf(owner.address);
    const usdtBalancePool0 = await usdt.balanceOf(pool0.bank);
    const uniBalancePool0 = await uni.balanceOf(pool0.bank);

    const paramsSwap: SwapUtils.SwapParamsStructOutput = {
        token0: usdtAddress,
        token1: uniAddress,
        amount0In: 0,
        amount1In: uniAmountIn,
        amount0Out: expandDecimals(7500, usdtDecimals),
        amount1Out: 0,
        to: owner.address,
    };
    const multicallArgs = [
        exchangeRouter.interface.encodeFunctionData("sendTokens", [uniAddress, pool0.bank, uniAmountIn]),
        exchangeRouter.interface.encodeFunctionData("executeSwap", [paramsSwap]),
    ];
    await sendTxn(exchangeRouter.multicall(multicallArgs), "exchangeRouter.multicall");


    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });

    const usdtBalance1 = await usdt.balanceOf(owner.address);
    const uniBalance1 = await uni.balanceOf(owner.address);
    const usdtBalancePool1 = await usdt.balanceOf(pool0.bank);
    const uniBalancePool1 = await uni.balanceOf(pool0.bank);

    console.log("usdtOwner", usdtBalance0, usdtBalance1, usdtBalance1-usdtBalance0); 
    console.log("uniOwner", uniBalance0, uniBalance1, uniBalance0-uniBalance1); 
    console.log("usdtPool", usdtBalancePool0, usdtBalancePool1); 
    console.log("uniPool", uniBalancePool0, uniBalancePool1); 

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })