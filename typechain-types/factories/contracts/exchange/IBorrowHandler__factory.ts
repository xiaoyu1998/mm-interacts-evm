/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBorrowHandler,
  IBorrowHandlerInterface,
} from "../../../contracts/exchange/IBorrowHandler";

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
            internalType: "uint256",
            name: "positionId",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "tokenIndex",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "borrowAmount",
            type: "uint256",
          },
        ],
        internalType: "struct BorrowUtils.BorrowParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "executeBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBorrowHandler__factory {
  static readonly abi = _abi;
  static createInterface(): IBorrowHandlerInterface {
    return new Interface(_abi) as IBorrowHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBorrowHandler {
    return new Contract(address, _abi, runner) as unknown as IBorrowHandler;
  }
}
