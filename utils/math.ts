import * as Math from 'mathjs'
import { RAY } from "../utils/constants";

export function bigNumberify(n) {
    return BigInt(n);
}

export function expandDecimals(n, decimals) {
    return bigNumberify(n)*(bigNumberify(10)**bigNumberify(decimals));
}

export function convertToRay(n, decimals) {
    return n*RAY/bigNumberify(10**decimals)
    //return bigNumberify(n)*(bigNumberify(10)**bigNumberify(decimals));
}