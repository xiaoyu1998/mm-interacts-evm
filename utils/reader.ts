
import { 
    Pool,
    ReaderPoolUtils,
    ReaderPositionUtils
} from "../typechain-types/contracts/reader/Reader";
import { POOL_BASE, POOL_MEME } from "../utils/constants";

export function parsePool2(pool) {
    const p: Pool.PropsStructOutput = {
        assets:[
            {
                token:pool[0][0][0],
                borrowIndex:pool[0][0][1],
                borrowRate:pool[0][0][2],
                totalCollateral:pool[0][0][3],
                totalCollateralWithDebt:pool[0][0][4],
                totalScaledDebt:pool[0][0][5],
                unclaimedFee:pool[0][0][6],
            },
            {
                token:pool[0][1][0],
                borrowIndex:pool[0][1][1],
                borrowRate:pool[0][1][2],
                totalCollateral:pool[0][1][3],
                totalCollateralWithDebt:pool[0][1][4],
                totalScaledDebt:pool[0][1][5],
                unclaimedFee:pool[0][1][6],
            }
        ],
        bank: pool[1],
        interestRateStrategy: pool[2],
        configuration: pool[3],
        lastUpdateTimestamp:pool[4],
    };
    return p;
}

export async function getPools2(dataStore, reader, poolKeys) {
    //console.log(poolKeys);
    const pools = await reader.getPools2(dataStore, poolKeys);
    let ps = [];
    for (let i = 0; i < pools.length; i++) {
         ps[i] = parsePool2(pools[i]);
    }
    return ps;
}

export function parsePool(pool) {
    const p: ReaderPoolUtils.GetPoolStructOutput = {
        assets:[
            {
                token:pool[0][0][0],
                symbol:pool[0][0][1],
                decimals:pool[0][0][2],
                borrowIndex:pool[0][0][3],
                borrowApy:pool[0][0][4],
                totalCollateral:pool[0][0][5],
                totalCollateralWithDebt:pool[0][0][6],
                totalScaledDebt:pool[0][0][7],
                poolBalance:pool[0][0][8],
                priceLiquidity:pool[0][0][9],
                avaiableLoan:pool[0][0][10],
                actualTradable:pool[0][0][11],
            },
            {
                token:pool[0][1][0],
                symbol:pool[0][1][1],
                decimals:pool[0][1][2],
                borrowIndex:pool[0][1][3],
                borrowApy:pool[0][1][4],
                totalCollateral:pool[0][1][5],
                totalCollateralWithDebt:pool[0][1][6],
                totalScaledDebt:pool[0][1][7],
                poolBalance:pool[0][1][8],
                priceLiquidity:pool[0][1][9],
                avaiableLoan:pool[0][1][10],
                actualTradable:pool[0][1][11],
            }
        ],
        bank: pool[1],
        interestRateStrategy: pool[2],
        configuration: pool[3],
        lastUpdateTimestamp:pool[4],
        priceDecimals: pool[5],
        price: pool[6],
        source: pool[7],
        shortEnabled:pool[8],
        createdTimestamp:pool[9],
        unclaimedFee:pool[10],
        memeMaxDepositAmount:pool[11],
        averagePrice:pool[12],
    };
    return p;
}

export async function getPools(dataStore, reader) {
    const pools = await reader.getPools(dataStore);
    let ps = [];
    for (let i = 0; i < pools.length; i++) {
         ps[i] = parsePool(pools[i]);
    }
    return ps;
}

export function parsePoolInfo(pool) {
    const p: ReaderPoolUtils.GetPoolInfoStructOutput = {
        assets:[
            {
                token:pool[0][0][0],
                symbol:pool[0][0][1],
                decimals:pool[0][0][2],
                borrowIndex:pool[0][0][3],
            },
            {
                token:pool[0][1][0],
                symbol:pool[0][1][1],
                decimals:pool[0][1][2],
                borrowIndex:pool[0][1][3],
            }
        ],
        priceDecimals: pool[1],
        price: pool[2],
    };
    return p;
}

export async function getPoolsInfo(dataStore, reader) {
    const pools = await reader.getPoolsInfo(dataStore);
    let ps = [];
    for (let i = 0; i < pools.length; i++) {
         ps[i] = parsePoolInfo(pools[i]);
    }
    return ps;
}

export function parsePosition(position) {
    const p: ReaderPositionUtils.GetPositionStructOutput = {
        assets:[
            {
                token:position[0][POOL_BASE][0],
                symbol:position[0][POOL_BASE][1],
                decimals:position[0][POOL_BASE][2],
                balance:position[0][POOL_BASE][3],
                debt:position[0][POOL_BASE][4],
                netWorth:position[0][POOL_BASE][5],
                maxRedeemAmount:position[0][POOL_BASE][6],
                borrowApy:position[0][POOL_BASE][7],
                equity:position[0][POOL_BASE][8],
                equityValue:position[0][POOL_BASE][9],
            },
            {
                token:position[0][POOL_MEME][0],
                symbol:position[0][POOL_MEME][1],
                decimals:position[0][POOL_MEME][2],
                balance:position[0][POOL_MEME][3],
                debt:position[0][POOL_MEME][4],
                netWorth:position[0][POOL_MEME][5],
                maxRedeemAmount:position[0][POOL_MEME][6],
                borrowApy:position[0][POOL_MEME][7],
                equity:position[0][POOL_MEME][8],
                equityValue:position[0][POOL_MEME][9],
            }
        ],
        id: position[1],
        account: position[2],
        marginLevel: position[3],
        entryPrice: position[4],
        IndexPrice: position[5],
        pnl: position[6],
        liquidationPrice: position[7],
        toLiquidationPrice: position[8],
    };
    return p;
}

export async function getPositions(dataStore, reader, account) {
    const positions = await reader.getPositions(dataStore, account);
    let ps = [];
    for (let i = 0; i < positions.length; i++) {
         ps[i] = parsePosition(positions[i]);
    }
    return ps;
}
