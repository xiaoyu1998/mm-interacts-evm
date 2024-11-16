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
import type { Bank, BankInterface } from "../../../contracts/bank/Bank";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "_dataStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
    ],
    name: "InvalidNativeTokenSender",
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
    name: "SelfTransferNotSupported",
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
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferError",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returndata",
        type: "bytes",
      },
    ],
    name: "TokenTransferReverted",
    type: "event",
  },
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
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
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
    name: "transferOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161111e38038061111e83398181016040528101906100329190610156565b818073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050610196565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100d3826100a8565b9050919050565b60006100e5826100c8565b9050919050565b6100f5816100da565b811461010057600080fd5b50565b600081519050610112816100ec565b92915050565b6000610123826100c8565b9050919050565b61013381610118565b811461013e57600080fd5b50565b6000815190506101508161012a565b92915050565b6000806040838503121561016d5761016c6100a3565b5b600061017b85828601610103565b925050602061018c85828601610141565b9150509250929050565b60805160a051610f566101c860003960008181604401526102a001526000818161027c01526102c40152610f566000f3fe6080604052600436106100385760003560e01c8063078d3b79146100e15780634a4a7b041461010a578063660d0d6714610135576100dc565b366100dc5760006100687f0000000000000000000000000000000000000000000000000000000000000000610160565b90508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146100da57336040517fe71a51be0000000000000000000000000000000000000000000000000000000081526004016100d1919061082d565b60405180910390fd5b005b600080fd5b3480156100ed57600080fd5b50610108600480360381019061010391906108be565b610207565b005b34801561011657600080fd5b5061011f61027a565b60405161012c9190610970565b60405180910390f35b34801561014157600080fd5b5061014a61029e565b60405161015791906109ac565b60405180910390f35b60008173ffffffffffffffffffffffffffffffffffffffff166321f8a72160405160200161018d90610a24565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016101bf9190610a5d565b602060405180830381865afa1580156101dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102009190610a8d565b9050919050565b61026a60405160200161021990610b06565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c4552000000000000000000000000000000000000000000008152506102c2565b6102758383836103a5565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac4ab3fb33846040518363ffffffff1660e01b815260040161031d929190610b26565b602060405180830381865afa15801561033a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035e9190610b87565b6103a15733816040517fa35b150b000000000000000000000000000000000000000000000000000000008152600401610398929190610c33565b60405180910390fd5b5050565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361041557816040517fe70f915200000000000000000000000000000000000000000000000000000000815260040161040c919061082d565b60405180910390fd5b61042083838361042e565b610429836104ec565b505050565b60008103156104e757610440826104ef565b60008061044e858585610558565b91509150811561045f5750506104e7565b600061046a82610712565b5090507fc9f14d9a0a9b46470c7c0b6c508f8283abaab7f795f153953c58cd4250824dae818360405161049e929190610cb8565b60405180910390a18585856040517f979dc7800000000000000000000000000000000000000000000000000000000081526004016104de93929190610cfe565b60405180910390fd5b505050565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610555576040517fd551823d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60006060600063a9059cbb60e01b8585604051602401610579929190610d35565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000808773ffffffffffffffffffffffffffffffffffffffff16836040516106009190610d9a565b6000604051808303816000865af19150503d806000811461063d576040519150601f19603f3d011682016040523d82523d6000602084013e610642565b606091505b509150915081156106ff5760008151036106ba5760008873ffffffffffffffffffffffffffffffffffffffff163b116106b95760006040518060400160405280601481526020017f43616c6c20746f206e6f6e2d636f6e74726163740000000000000000000000008152509450945050505061070a565b5b600081511180156106dc5750808060200190518101906106da9190610b87565b155b156106f0576000819450945050505061070a565b6001819450945050505061070a565b600081945094505050505b935093915050565b6060600060448351101561073c5760006040518060200160405280600081525090915091506107d4565b6000610747846107d9565b90506308c379a060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036107bb57600484019350838060200190518101906107af9190610ed7565b600192509250506107d4565b6000604051806020016040528060008152509092509250505b915091565b6000806020830151905080915050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610817826107ec565b9050919050565b6108278161080c565b82525050565b6000602082019050610842600083018461081e565b92915050565b6000604051905090565b600080fd5b600080fd5b6108658161080c565b811461087057600080fd5b50565b6000813590506108828161085c565b92915050565b6000819050919050565b61089b81610888565b81146108a657600080fd5b50565b6000813590506108b881610892565b92915050565b6000806000606084860312156108d7576108d6610852565b5b60006108e586828701610873565b93505060206108f686828701610873565b9250506040610907868287016108a9565b9150509250925092565b6000819050919050565b600061093661093161092c846107ec565b610911565b6107ec565b9050919050565b60006109488261091b565b9050919050565b600061095a8261093d565b9050919050565b61096a8161094f565b82525050565b60006020820190506109856000830184610961565b92915050565b60006109968261093d565b9050919050565b6109a68161098b565b82525050565b60006020820190506109c1600083018461099d565b92915050565b600082825260208201905092915050565b7f574e540000000000000000000000000000000000000000000000000000000000600082015250565b6000610a0e6003836109c7565b9150610a19826109d8565b602082019050919050565b60006020820190508181036000830152610a3d81610a01565b9050919050565b6000819050919050565b610a5781610a44565b82525050565b6000602082019050610a726000830184610a4e565b92915050565b600081519050610a878161085c565b92915050565b600060208284031215610aa357610aa2610852565b5b6000610ab184828501610a78565b91505092915050565b7f434f4e54524f4c4c455200000000000000000000000000000000000000000000600082015250565b6000610af0600a836109c7565b9150610afb82610aba565b602082019050919050565b60006020820190508181036000830152610b1f81610ae3565b9050919050565b6000604082019050610b3b600083018561081e565b610b486020830184610a4e565b9392505050565b60008115159050919050565b610b6481610b4f565b8114610b6f57600080fd5b50565b600081519050610b8181610b5b565b92915050565b600060208284031215610b9d57610b9c610852565b5b6000610bab84828501610b72565b91505092915050565b600081519050919050565b60005b83811015610bdd578082015181840152602081019050610bc2565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c0582610bb4565b610c0f81856109c7565b9350610c1f818560208601610bbf565b610c2881610be9565b840191505092915050565b6000604082019050610c48600083018561081e565b8181036020830152610c5a8184610bfa565b90509392505050565b600081519050919050565b600082825260208201905092915050565b6000610c8a82610c63565b610c948185610c6e565b9350610ca4818560208601610bbf565b610cad81610be9565b840191505092915050565b60006040820190508181036000830152610cd28185610bfa565b90508181036020830152610ce68184610c7f565b90509392505050565b610cf881610888565b82525050565b6000606082019050610d13600083018661081e565b610d20602083018561081e565b610d2d6040830184610cef565b949350505050565b6000604082019050610d4a600083018561081e565b610d576020830184610cef565b9392505050565b600081905092915050565b6000610d7482610c63565b610d7e8185610d5e565b9350610d8e818560208601610bbf565b80840191505092915050565b6000610da68284610d69565b915081905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610df382610be9565b810181811067ffffffffffffffff82111715610e1257610e11610dbb565b5b80604052505050565b6000610e25610848565b9050610e318282610dea565b919050565b600067ffffffffffffffff821115610e5157610e50610dbb565b5b610e5a82610be9565b9050602081019050919050565b6000610e7a610e7584610e36565b610e1b565b905082815260208101848484011115610e9657610e95610db6565b5b610ea1848285610bbf565b509392505050565b600082601f830112610ebe57610ebd610db1565b5b8151610ece848260208601610e67565b91505092915050565b600060208284031215610eed57610eec610852565b5b600082015167ffffffffffffffff811115610f0b57610f0a610857565b5b610f1784828501610ea9565b9150509291505056fea2646970667358221220ade7629a8fb656d3d5a9be0418c029bcb810ee70fd1de43af321f000d17e764f64736f6c634300081b0033";

type BankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bank__factory extends ContractFactory {
  constructor(...args: BankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _roleStore: AddressLike,
    _dataStore: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_roleStore, _dataStore, overrides || {});
  }
  override deploy(
    _roleStore: AddressLike,
    _dataStore: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_roleStore, _dataStore, overrides || {}) as Promise<
      Bank & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Bank__factory {
    return super.connect(runner) as Bank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BankInterface {
    return new Interface(_abi) as BankInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Bank {
    return new Contract(address, _abi, runner) as unknown as Bank;
  }
}
