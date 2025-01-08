import { deployContract, contractAtWithCode, getContract, sendTxn } from "../utils/deploy"
import { bigNumberify, expandDecimals} from "../utils/math"
import { usdtDecimals, uniDecimals, ethDecimals} from "../utils/constants";
import { getPools, getTokens } from "../utils/reader"
import { LIQUIDATION_KEEPER, FEE_KEEPER } from "../utils/keys"
import { CreatePoolParamsStructOutput } from "../typechain-types/contracts/pool/PoolFactory";


async function main() {
    const [owner] = await ethers.getSigners();

    const roleStore = await getContract("RoleStore"); 
    const dataStore = await getContract("DataStore"); 
    const reader = await getContract("Reader");  

    //set owner as LIQUIDATION_KEEPER and treasury to FEE_KEEPER
    const treasury = "0xBC34aF883e63A7E1be2439d8c8d3Db7695e306e2";
    //const treasury = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
    await sendTxn(roleStore.grantRole(treasury, FEE_KEEPER), "roleStore.grantRole ${owner.address}");
    await sendTxn(roleStore.grantRole(owner.address, LIQUIDATION_KEEPER), "roleStore.grantRole ${owner.address}");

    //create underlyingAssets
    const usdt = await deployContract("MintableToken", ["Tether", "USDT", usdtDecimals])
    const uni = await deployContract("MintableToken", ["UNI", "UNI", uniDecimals])
    const eth = await deployContract("MintableToken", ["ETH", "ETH", ethDecimals])
    await sendTxn(usdt.mint(owner.address, expandDecimals(100000000, usdtDecimals)), "usdt.mint");
    await sendTxn(uni.mint(owner.address, expandDecimals(10000000, uniDecimals)), "uni.mint");
    await sendTxn(eth.mint(owner.address, expandDecimals(10000, ethDecimals)), "eth.mint");

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
        config.interface.encodeFunctionData("setShortLiquidityThreshold", [expandDecimals(1000000, 27)]),//1millon
        config.interface.encodeFunctionData("setMaxBorrowRate", [expandDecimals(8, 26)]),//80%
        config.interface.encodeFunctionData("setTreasury", [treasury]),//80%
        config.interface.encodeFunctionData("setLiquidationFee", [expandDecimals(1, usdtDecimals)]),//1usdt
    ];
    await sendTxn(config.multicall(multicallArgs), "config.multicall");

    //create pools
    const poolFactory = await getContract("PoolFactory");
    const paramsUni: CreatePoolParamsStructOutput = {token: uni.target, source:owner.address};
    await sendTxn(poolFactory.createPool(paramsUni), "poolFactory.createPool(uni)");    
    // const paramsEth: CreatePoolParamsStructOutput = {token: eth.target, source:owner.address};
    // await sendTxn(poolFactory.createPool(paramsEth), "poolFactory.createPool(eth)");

    // // pools configuration
    // const multicallArgs2 = [
    //     config.interface.encodeFunctionData("setSwapFeeFactor", [usdt.target, uni.target, 100]), //1%
    //     config.interface.encodeFunctionData("setTreasuryFeeFactor", [usdt.target, uni.target, 7000]), //70%
    // ];
    // await sendTxn(
    //     config.multicall(multicallArgs2),
    //     "config.multicall"
    // );

    const pools = await getPools(dataStore, reader);
    console.dir(pools, {depth: null, colors: true });
    //console.log(pools[0].configuration.toString(16));

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })