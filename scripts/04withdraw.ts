import { contractAt, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { POOL_BASE, POOL_MEME, CREATE_POSITION_ID} from "../utils/constants";
import { getPools, getPositions } from "../utils/reader"

import { WithdrawUtils } from "../typechain-types/contracts/exchange/WithdrawHandler";


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

    const usdtBalance0 = await usdt.balanceOf(owner.address);
    const usdtBalancePool0 = await usdt.balanceOf(pool0.bank);

    const usdtAmount = expandDecimals(5000, usdtDecimals);
    const paramsWithdraw: WithdrawUtils.WithdrawParamsStructOutput = {
        positionId: bigNumberify(1),
        tokenIndex: POOL_BASE,
        withdrawAmount: usdtAmount,
        to: owner.address,
    };
    const multicallArgs = [
        exchangeRouter.interface.encodeFunctionData("executeWithdraw", [paramsWithdraw]),
    ];
    await sendTxn(exchangeRouter.multicall(multicallArgs), "exchangeRouter.multicall");

    const usdtBalance1 = await usdt.balanceOf(owner.address);
    const usdtBalancePool1 = await usdt.balanceOf(pool0.bank);

    console.dir(await getPools(dataStore, reader), {depth: null, colors: true });
    console.dir(await getPositions(dataStore, reader, owner.address), {depth: null, colors: true });

    console.log("usdtOwner", usdtBalance0, usdtBalance1, usdtBalance1 -usdtBalance0); 
    console.log("usdtPool", usdtBalancePool0, usdtBalancePool1, usdtBalancePool0 - usdtBalancePool1); 

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })