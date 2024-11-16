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
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MintableToken,
  MintableTokenInterface,
} from "../../../contracts/mock/MintableToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161158538038061158583398181016040528101906100329190610227565b8282816003908161004391906104d3565b50806004908161005391906104d3565b50505080600560006101000a81548160ff021916908360ff1602179055505050506105a5565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6100e082610097565b810181811067ffffffffffffffff821117156100ff576100fe6100a8565b5b80604052505050565b6000610112610079565b905061011e82826100d7565b919050565b600067ffffffffffffffff82111561013e5761013d6100a8565b5b61014782610097565b9050602081019050919050565b60005b83811015610172578082015181840152602081019050610157565b60008484015250505050565b600061019161018c84610123565b610108565b9050828152602081018484840111156101ad576101ac610092565b5b6101b8848285610154565b509392505050565b600082601f8301126101d5576101d461008d565b5b81516101e584826020860161017e565b91505092915050565b600060ff82169050919050565b610204816101ee565b811461020f57600080fd5b50565b600081519050610221816101fb565b92915050565b6000806000606084860312156102405761023f610083565b5b600084015167ffffffffffffffff81111561025e5761025d610088565b5b61026a868287016101c0565b935050602084015167ffffffffffffffff81111561028b5761028a610088565b5b610297868287016101c0565b92505060406102a886828701610212565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061030457607f821691505b602082108103610317576103166102bd565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261037f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610342565b6103898683610342565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006103d06103cb6103c6846103a1565b6103ab565b6103a1565b9050919050565b6000819050919050565b6103ea836103b5565b6103fe6103f6826103d7565b84845461034f565b825550505050565b600090565b610413610406565b61041e8184846103e1565b505050565b5b818110156104425761043760008261040b565b600181019050610424565b5050565b601f821115610487576104588161031d565b61046184610332565b81016020851015610470578190505b61048461047c85610332565b830182610423565b50505b505050565b600082821c905092915050565b60006104aa6000198460080261048c565b1980831691505092915050565b60006104c38383610499565b9150826002028217905092915050565b6104dc826102b2565b67ffffffffffffffff8111156104f5576104f46100a8565b5b6104ff82546102ec565b61050a828285610446565b600060209050601f83116001811461053d576000841561052b578287015190505b61053585826104b7565b86555061059d565b601f19841661054b8661031d565b60005b828110156105735784890151825560018201915060208501945060208101905061054e565b86831015610590578489015161058c601f891682610499565b8355505b6001600288020188555050505b505050505050565b610fd1806105b46000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f191461016857806370a082311461018457806395d89b41146101b45780639dc29fac146101d2578063a9059cbb146101ee578063dd62ed3e1461021e576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b661024e565b6040516100c39190610c25565b60405180910390f35b6100e660048036038101906100e19190610ce0565b6102e0565b6040516100f39190610d3b565b60405180910390f35b610104610303565b6040516101119190610d65565b60405180910390f35b610134600480360381019061012f9190610d80565b61030d565b6040516101419190610d3b565b60405180910390f35b61015261033c565b60405161015f9190610def565b60405180910390f35b610182600480360381019061017d9190610ce0565b610353565b005b61019e60048036038101906101999190610e0a565b610361565b6040516101ab9190610d65565b60405180910390f35b6101bc6103a9565b6040516101c99190610c25565b60405180910390f35b6101ec60048036038101906101e79190610ce0565b61043b565b005b61020860048036038101906102039190610ce0565b610449565b6040516102159190610d3b565b60405180910390f35b61023860048036038101906102339190610e37565b61046c565b6040516102459190610d65565b60405180910390f35b60606003805461025d90610ea6565b80601f016020809104026020016040519081016040528092919081815260200182805461028990610ea6565b80156102d65780601f106102ab576101008083540402835291602001916102d6565b820191906000526020600020905b8154815290600101906020018083116102b957829003601f168201915b5050505050905090565b6000806102eb6104f3565b90506102f88185856104fb565b600191505092915050565b6000600254905090565b6000806103186104f3565b905061032585828561050d565b6103308585856105a1565b60019150509392505050565b6000600560009054906101000a900460ff16905090565b61035d8282610695565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103b890610ea6565b80601f01602080910402602001604051908101604052809291908181526020018280546103e490610ea6565b80156104315780601f1061040657610100808354040283529160200191610431565b820191906000526020600020905b81548152906001019060200180831161041457829003601f168201915b5050505050905090565b6104458282610717565b5050565b6000806104546104f3565b90506104618185856105a1565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6105088383836001610799565b505050565b6000610519848461046c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461059b578181101561058b578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161058293929190610ee6565b60405180910390fd5b61059a84848484036000610799565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106135760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161060a9190610f1d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106855760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161067c9190610f1d565b60405180910390fd5b610690838383610970565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107075760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106fe9190610f1d565b60405180910390fd5b61071360008383610970565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107895760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107809190610f1d565b60405180910390fd5b61079582600083610970565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361080b5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016108029190610f1d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361087d5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016108749190610f1d565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550801561096a578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109619190610d65565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109c25780600260008282546109b69190610f67565b92505081905550610a95565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a4e578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610a4593929190610ee6565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ade5780600260008282540392505081905550610b2b565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b889190610d65565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610bcf578082015181840152602081019050610bb4565b60008484015250505050565b6000601f19601f8301169050919050565b6000610bf782610b95565b610c018185610ba0565b9350610c11818560208601610bb1565b610c1a81610bdb565b840191505092915050565b60006020820190508181036000830152610c3f8184610bec565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c7782610c4c565b9050919050565b610c8781610c6c565b8114610c9257600080fd5b50565b600081359050610ca481610c7e565b92915050565b6000819050919050565b610cbd81610caa565b8114610cc857600080fd5b50565b600081359050610cda81610cb4565b92915050565b60008060408385031215610cf757610cf6610c47565b5b6000610d0585828601610c95565b9250506020610d1685828601610ccb565b9150509250929050565b60008115159050919050565b610d3581610d20565b82525050565b6000602082019050610d506000830184610d2c565b92915050565b610d5f81610caa565b82525050565b6000602082019050610d7a6000830184610d56565b92915050565b600080600060608486031215610d9957610d98610c47565b5b6000610da786828701610c95565b9350506020610db886828701610c95565b9250506040610dc986828701610ccb565b9150509250925092565b600060ff82169050919050565b610de981610dd3565b82525050565b6000602082019050610e046000830184610de0565b92915050565b600060208284031215610e2057610e1f610c47565b5b6000610e2e84828501610c95565b91505092915050565b60008060408385031215610e4e57610e4d610c47565b5b6000610e5c85828601610c95565b9250506020610e6d85828601610c95565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ebe57607f821691505b602082108103610ed157610ed0610e77565b5b50919050565b610ee081610c6c565b82525050565b6000606082019050610efb6000830186610ed7565b610f086020830185610d56565b610f156040830184610d56565b949350505050565b6000602082019050610f326000830184610ed7565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f7282610caa565b9150610f7d83610caa565b9250828201905080821115610f9557610f94610f38565b5b9291505056fea26469706673582212202b98e5bc888794cc402111576886bd48ee60a009e2464c8fe877f22a1fa040a464736f6c634300081b0033";

type MintableTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintableTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintableToken__factory extends ContractFactory {
  constructor(...args: MintableTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  override deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, decimals_, overrides || {}) as Promise<
      MintableToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MintableToken__factory {
    return super.connect(runner) as MintableToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintableTokenInterface {
    return new Interface(_abi) as MintableTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MintableToken {
    return new Contract(address, _abi, runner) as unknown as MintableToken;
  }
}
