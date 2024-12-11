/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Router, RouterInterface } from "../../../contracts/router/Router";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "pluginTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610a65380380610a65833981810160405281019061003291906100e3565b808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050610110565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009e82610073565b9050919050565b60006100b082610093565b9050919050565b6100c0816100a5565b81146100cb57600080fd5b50565b6000815190506100dd816100b7565b92915050565b6000602082840312156100f9576100f861006e565b5b6000610107848285016100ce565b91505092915050565b6080516109336101326000396000818161010d015261013101526109336000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631b8278781461003b5780634a4a7b0414610057575b600080fd5b6100556004803603810190610050919061057b565b610075565b005b61005f61010b565b60405161006c9190610641565b60405180910390f35b6100d8604051602001610087906106b9565b604051602081830303815290604052805190602001206040518060400160405280600d81526020017f524f555445525f504c5547494e0000000000000000000000000000000000000081525061012f565b6101058383838773ffffffffffffffffffffffffffffffffffffffff16610212909392919063ffffffff16565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac4ab3fb33846040518363ffffffff1660e01b815260040161018a929190610701565b602060405180830381865afa1580156101a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cb9190610762565b61020e5733816040517fa35b150b00000000000000000000000000000000000000000000000000000000815260040161020592919061080e565b60405180910390fd5b5050565b61028e848573ffffffffffffffffffffffffffffffffffffffff166323b872dd8686866040516024016102479392919061084d565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610294565b50505050565b60006102bf828473ffffffffffffffffffffffffffffffffffffffff1661032b90919063ffffffff16565b905060008151141580156102e45750808060200190518101906102e29190610762565b155b1561032657826040517f5274afe700000000000000000000000000000000000000000000000000000000815260040161031d9190610884565b60405180910390fd5b505050565b606061033983836000610341565b905092915050565b60608147101561038857306040517fcd78605900000000000000000000000000000000000000000000000000000000815260040161037f9190610884565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1684866040516103b191906108e6565b60006040518083038185875af1925050503d80600081146103ee576040519150601f19603f3d011682016040523d82523d6000602084013e6103f3565b606091505b509150915061040386838361040e565b925050509392505050565b6060826104235761041e8261049d565b610495565b6000825114801561044b575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561048d57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016104849190610884565b60405180910390fd5b819050610496565b5b9392505050565b6000815111156104b05780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610512826104e7565b9050919050565b61052281610507565b811461052d57600080fd5b50565b60008135905061053f81610519565b92915050565b6000819050919050565b61055881610545565b811461056357600080fd5b50565b6000813590506105758161054f565b92915050565b60008060008060808587031215610595576105946104e2565b5b60006105a387828801610530565b94505060206105b487828801610530565b93505060406105c587828801610530565b92505060606105d687828801610566565b91505092959194509250565b6000819050919050565b60006106076106026105fd846104e7565b6105e2565b6104e7565b9050919050565b6000610619826105ec565b9050919050565b600061062b8261060e565b9050919050565b61063b81610620565b82525050565b60006020820190506106566000830184610632565b92915050565b600082825260208201905092915050565b7f524f555445525f504c5547494e00000000000000000000000000000000000000600082015250565b60006106a3600d8361065c565b91506106ae8261066d565b602082019050919050565b600060208201905081810360008301526106d281610696565b9050919050565b6106e281610507565b82525050565b6000819050919050565b6106fb816106e8565b82525050565b600060408201905061071660008301856106d9565b61072360208301846106f2565b9392505050565b60008115159050919050565b61073f8161072a565b811461074a57600080fd5b50565b60008151905061075c81610736565b92915050565b600060208284031215610778576107776104e2565b5b60006107868482850161074d565b91505092915050565b600081519050919050565b60005b838110156107b857808201518184015260208101905061079d565b60008484015250505050565b6000601f19601f8301169050919050565b60006107e08261078f565b6107ea818561065c565b93506107fa81856020860161079a565b610803816107c4565b840191505092915050565b600060408201905061082360008301856106d9565b818103602083015261083581846107d5565b90509392505050565b61084781610545565b82525050565b600060608201905061086260008301866106d9565b61086f60208301856106d9565b61087c604083018461083e565b949350505050565b600060208201905061089960008301846106d9565b92915050565b600081519050919050565b600081905092915050565b60006108c08261089f565b6108ca81856108aa565b93506108da81856020860161079a565b80840191505092915050565b60006108f282846108b5565b91508190509291505056fea2646970667358221220d51b28fcadee7aa262548cfc063e0ea67d681de6cdcfcff841b094ffd034c1a264736f6c634300081c0033";

type RouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Router__factory extends ContractFactory {
  constructor(...args: RouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _roleStore: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_roleStore, overrides || {});
  }
  override deploy(
    _roleStore: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_roleStore, overrides || {}) as Promise<
      Router & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Router__factory {
    return super.connect(runner) as Router__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterInterface {
    return new Interface(_abi) as RouterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Router {
    return new Contract(address, _abi, runner) as unknown as Router;
  }
}
