import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { usdtDecimals, uniDecimals, ethDecimals} from "../utils/constants";
import { getPools, getTokens } from "../utils/reader"

import { LiquidityUtils } from "../typechain-types/contracts/exchange/LiquidityHandler";


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

    const addAmountUsdt = expandDecimals(900000, usdtDecimals);
    await sendTxn(usdt.approve(router.target, addAmountUsdt), `usdt.approve(${router.target})`)  
    const addAmountUni = expandDecimals(100000, uniDecimals);
    await sendTxn(uni.approve(router.target, addAmountUni), `uni.approve(${router.target})`) 

    // const usdtBalance0 = await usdt.balanceOf(owner.address);
    // const uniBalance0 = await uni.balanceOf(owner.address);

    //add
    const paramsAdd: LiquidityUtils.AddParamsStructOutput = {
        token0: usdtAddress,
        token1: uniAddress,
        to: owner.address,
    };
    const multicallArgs = [
        exchangeRouter.interface.encodeFunctionData("sendTokens", [usdtAddress, pool0.bank, addAmountUsdt]),
        exchangeRouter.interface.encodeFunctionData("sendTokens", [uniAddress, pool0.bank, addAmountUni]),
        exchangeRouter.interface.encodeFunctionData("executeAdd", [paramsAdd]),
    ];
    await sendTxn(exchangeRouter.multicall(multicallArgs), "exchangeRouter.multicall");

    console.log("usdt", await usdt.balanceOf(pool0.bank))
    console.log("uni", await uni.balanceOf(pool0.bank))

    // const usdtBalance1 = await usdt.balanceOf(owner.address);
    // const uniBalance1 = await uni.balanceOf(owner.address);

    // //remove
    // const liquidity = await bank.balanceOf(owner.address);
    // const paramsRemove: LiquidityUtils.RemoveParamsStructOutput = {
    //     token0: usdtAddress,
    //     token1: uniAddress,
    //     liquidity: liquidity,
    //     to: owner.address,
    // };
    // const multicallArgs2 = [
    //     exchangeRouter.interface.encodeFunctionData("executeRemove", [paramsRemove]),
    // ];
    // await sendTxn(exchangeRouter.multicall(multicallArgs2), "exchangeRouter.multicall");
    // const usdtBalance2 = await usdt.balanceOf(owner.address);
    // const uniBalance2 = await uni.balanceOf(owner.address);
    // console.log("liquidity", liquidity); 
    // console.log("usdt", usdtBalance0, usdtBalance1, usdtBalance2); 
    // console.log("uni", uniBalance0, uniBalance1, uniBalance2); 
    console.log("usdtPool", await usdt.balanceOf(pool0.bank))
    console.log("uniPool", await uni.balanceOf(pool0.bank))
    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })