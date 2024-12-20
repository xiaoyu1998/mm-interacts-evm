/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  GlobalReentrancyGuard,
  GlobalReentrancyGuardInterface,
} from "../../../contracts/utils/GlobalReentrancyGuard";

const _abi = [
  {
    inputs: [],
    name: "dataStore",
    outputs: [
      {
        internalType: "contract DataStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class GlobalReentrancyGuard__factory {
  static readonly abi = _abi;
  static createInterface(): GlobalReentrancyGuardInterface {
    return new Interface(_abi) as GlobalReentrancyGuardInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): GlobalReentrancyGuard {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as GlobalReentrancyGuard;
  }
}
