import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { POOL_BASE, POOL_MEME, CREATE_POSITION_ID} from "../utils/constants";
import { getPools, getPositions } from "../utils/reader"

import { DepositUtils } from "../typechain-types/contracts/exchange/DepositHandler";


async function main() {
    const [owner] = await ethers.getSigners();

    const exchangeRouter = await getContract("ExchangeRouter"); 
    const router = await getContract("Router");
    const roleStore = await getContract("RoleStore"); 
    const dataStore = await getContract("DataStore"); 
    const reader = await getContract("Reader"); 

    const pools =  await getPools(dataStore, reader);
    const pool0 = pools[0]; 
    const usdtAddress = pool0.assets[0].token;
    const usdtDecimals = pool0.assets[0].decimals;
    const usdt = await contractAt("MintableToken", usdtAddress);
    const uniAddress = pool0.assets[1].token;
    const uniDecimals = pool0.assets[1].decimals;
    const uni = await contractAt("MintableToken", uniAddress);  

    const usdtAmount = expandDecimals(10000, usdtDecimals);
    await sendTxn(usdt.approve(router.target, usdtAmount), `usdt.approve(${router.target})`) 

    const paramsDeposit: DepositUtils.DepositParamsStructOutput = {
        positionId: CREATE_POSITION_ID,
        token0: usdtAddress,
        token1: uniAddress,
        tokenIndex: POOL_BASE,
    };
    const multicallArgs = [
        exchangeRouter.interface.encodeFunctionData("sendTokens", [usdtAddress, pool0.bank, usdtAmount]),
        exchangeRouter.interface.encodeFunctionData("executeDeposit", [paramsDeposit]),
    ];
    await sendTxn(exchangeRouter.multicall(multicallArgs), "exchangeRouter.multicall");

    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });
    console.dir(await getPositions(dataStore, reader, owner.address), {depth: null, colors: true });
    // console.log("usdt", await usdt.balanceOf(pool0.bank))
    // console.log("uni", await uni.balanceOf(pool0.bank))

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })