import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
// import { usdtDecimals, uniDecimals, ethDecimals} from "../utils/constants";
import { getPools } from "../utils/reader"
import { LiquidationUtils } from "../typechain-types/contracts/exchange/LiquidationHandler";


async function main() {
    const [owner] = await ethers.getSigners();
    console.log("owner", owner.address);

    const exchangeRouter = await getContract("ExchangeRouter"); 
    const dataStore = await getContract("DataStore"); 
    const reader = await getContract("Reader"); 
    const config = await getContract("Config");

    const pools =  await getPools(dataStore, reader);
    const pool0 = pools[0];
    const usdtAddress = pool0.assets[0].token;
    const usdt = await contractAt("MintableToken", usdtAddress);


    //configuration
    const multicallArgs = [
        //config.interface.encodeFunctionData("setMarginLevelThreshold", [expandDecimals(110, 25)]),//110%
        config.interface.encodeFunctionData("setMarginLevelThreshold", [expandDecimals(300, 25)]),//200%
    ];
    await sendTxn(config.multicall(multicallArgs), "config.multicall");

    //liquidation
    const usdtBalanceBefore = await usdt.balanceOf(owner.address);
    const paramsLiquidation: LiquidationUtils.LiquidationParamsStructOutput = {
        account: owner.address,
        positionId: bigNumberify(1)
    };
    const multicallArgs2 = [
        exchangeRouter.interface.encodeFunctionData("executeLiquidation", [paramsLiquidation]),
    ];
    await sendTxn(exchangeRouter.multicall(multicallArgs2), "exchangeRouter.multicall");
    const usdtBalanceAfter = await usdt.balanceOf(owner.address);
    console.log(usdtBalanceBefore, usdtBalanceAfter);

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })