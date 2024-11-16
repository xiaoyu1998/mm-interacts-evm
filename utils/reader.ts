
import { 
    ReaderPoolUtils,
    ReaderPositionUtils
} from "../typechain-types/contracts/reader/Reader";
import { POOL_BASE, POOL_MEME } from "../utils/constants";

// export function parseToken(token) {
//     const t: ReaderPoolUtils.GetTokenStructOutput = {
//         token: token[0],
//         symbol: token[1],
//         decimals: Number(token[2])
//     };
//     return t;
// }

// export async function getTokens(dataStore, reader) {
//     const tokens = await reader.getTokens(dataStore);
//     let ts = [];
//     for (let i = 0; i < tokens.length; i++) {
//          ts[i] = parseToken(tokens[i]);
//     }
//     return ts;
// }

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
                balance:pool[0][0][8],
                actualLiquidity:pool[0][0][9],
                avaiableLiquidity:pool[0][0][10],
                loan:pool[0][0][11]
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
                balance:pool[0][1][8],
                actualLiquidity:pool[0][1][9],
                avaiableLiquidity:pool[0][1][10],
                loan:pool[0][1][11]
            }
        ],
        bank: pool[1],
        interestRateStrategy: pool[2],
        configuration: pool[3],
        lastUpdateTimestamp:pool[4],
        priceDecimals: pool[5],
        price: pool[6],
        source: pool[7]
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
            }
        ],
        id: position[1],
        account: position[2],
        marginLevel: position[3],
        equity: position[4],
        equityValue: position[5],
        entryPrice: position[6],
        IndexPrice: position[7],
        pnl: position[8],
        liquidationPrice: position[9],
        toLiquidationPrice: position[10],
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
