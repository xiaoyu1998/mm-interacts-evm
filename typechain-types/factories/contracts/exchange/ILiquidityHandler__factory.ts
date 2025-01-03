/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILiquidityHandler,
  ILiquidityHandlerInterface,
} from "../../../contracts/exchange/ILiquidityHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        internalType: "struct LiquidityUtils.AddParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "executeAdd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        internalType: "struct LiquidityUtils.RemoveParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "executeRemove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILiquidityHandler__factory {
  static readonly abi = _abi;
  static createInterface(): ILiquidityHandlerInterface {
    return new Interface(_abi) as ILiquidityHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ILiquidityHandler {
    return new Contract(address, _abi, runner) as unknown as ILiquidityHandler;
  }
}
