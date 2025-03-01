/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  RepayUtils,
  RepayUtilsInterface,
} from "../../../contracts/repay/RepayUtils";

const _abi = [
  {
    inputs: [],
    name: "REPAYMENT_CLEAN",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REPAYMENT_PARTIAL",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e9610051600b82828239805160001a6073146044577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80637e5c9f27146042578063fbf7598414605c575b600080fd5b60486076565b60405160539190609a565b60405180910390f35b6062607b565b604051606d9190609a565b60405180910390f35b600181565b600081565b600060ff82169050919050565b6094816080565b82525050565b600060208201905060ad6000830184608d565b9291505056fea2646970667358221220ab1f9e5897290c156dbe78e6a5db61062bf130d05af473ef5ce1f7ae6b39e5ae64736f6c634300081c0033";

type RepayUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RepayUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RepayUtils__factory extends ContractFactory {
  constructor(...args: RepayUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      RepayUtils & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RepayUtils__factory {
    return super.connect(runner) as RepayUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RepayUtilsInterface {
    return new Interface(_abi) as RepayUtilsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): RepayUtils {
    return new Contract(address, _abi, runner) as unknown as RepayUtils;
  }
}
