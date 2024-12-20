/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISwapHandler,
  ISwapHandlerInterface,
} from "../../../contracts/exchange/ISwapHandler";

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
            internalType: "uint256",
            name: "amount0In",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount1In",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount0Out",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount1Out",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        internalType: "struct SwapUtils.SwapParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "executeSwap",
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
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount0In",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount1In",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount0Out",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount1Out",
            type: "uint256",
          },
        ],
        internalType: "struct SwapUtils.SwapInPositionParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "executeSwapInPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISwapHandler__factory {
  static readonly abi = _abi;
  static createInterface(): ISwapHandlerInterface {
    return new Interface(_abi) as ISwapHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ISwapHandler {
    return new Contract(address, _abi, runner) as unknown as ISwapHandler;
  }
}
