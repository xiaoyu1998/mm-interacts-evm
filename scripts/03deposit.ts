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

    let pools =  await getPools(dataStore, reader);
    const pool0 = pools[0]; 
    const usdtAddress = pool0.assets[0].token;
    const usdtDecimals = pool0.assets[0].decimals;
    const usdt = await contractAt("MintableToken", usdtAddress);
    const uniAddress = pool0.assets[1].token;
    const uniDecimals = pool0.assets[1].decimals;
    const uni = await contractAt("MintableToken", uniAddress);  

    const usdtAmount = expandDecimals(900000, usdtDecimals);
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

    console.dir(pools = await getPools(dataStore, reader), {depth: null, colors: true });
    //console.dir(await getPositions(dataStore, reader, owner.address), {depth: null, colors: true });

    // //const uniAmount = pools[0].memeMaxDepositAmount + bigNumberify(1);//expandDecimals(10000, uniDecimals);
    // const uniAmount = pools[0].memeMaxDepositAmount ;//expandDecimals(10000, uniDecimals);
    // await sendTxn(uni.approve(router.target, uniAmount), `uni.approve(${router.target})`) 

    // const paramsDeposit2: DepositUtils.DepositParamsStructOutput = {
    //     positionId: bigNumberify(1),
    //     token0: usdtAddress,
    //     token1: uniAddress,
    //     tokenIndex: POOL_MEME,
    // };
    // const multicallArgs2 = [
    //     exchangeRouter.interface.encodeFunctionData("sendTokens", [uniAddress, pool0.bank, uniAmount]),
    //     exchangeRouter.interface.encodeFunctionData("executeDeposit", [paramsDeposit2]),
    // ];
    // await sendTxn(exchangeRouter.multicall(multicallArgs2), "exchangeRouter.multicall");
    // console.dir(pools = await getPools(dataStore, reader), {depth: null, colors: true });

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })