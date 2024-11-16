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
import type {
  SwapHandler,
  SwapHandlerInterface,
} from "../../../contracts/exchange/SwapHandler";

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
      {
        internalType: "contract EventEmitter",
        name: "_eventEmitter",
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
    name: "eventEmitter",
    outputs: [
      {
        internalType: "contract EventEmitter",
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
        name: "swapParams",
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
        name: "swapParams",
        type: "tuple",
      },
    ],
    name: "executeSwapInPosition",
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
  "0x60e060405234801561001057600080fd5b506040516112b63803806112b6833981810160405281019061003291906101cb565b82828073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505050505061021e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061010a826100df565b9050919050565b600061011c826100ff565b9050919050565b61012c81610111565b811461013757600080fd5b50565b60008151905061014981610123565b92915050565b600061015a826100ff565b9050919050565b61016a8161014f565b811461017557600080fd5b50565b60008151905061018781610161565b92915050565b6000610198826100ff565b9050919050565b6101a88161018d565b81146101b357600080fd5b50565b6000815190506101c58161019f565b92915050565b6000806000606084860312156101e4576101e36100da565b5b60006101f28682870161013a565b935050602061020386828701610178565b9250506040610214868287016101b6565b9150509250925092565b60805160a05160c051611032610284600039600081816101c8015281816102d001526103a901526000818160f001526106d901526000818161018c015281816102ac0152818161036d0152818161050f0152818161061201526107bc01526110326000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634a4a7b041461005c57806352b5de3d1461007a578063660d0d67146100965780639ff78c30146100b4578063d9c42742146100d2575b600080fd5b6100646100ee565b60405161007191906108ff565b60405180910390f35b610094600480360381019061008f9190610981565b610112565b005b61009e6102aa565b6040516100ab91906109e2565b60405180910390f35b6100bc6102ce565b6040516100c99190610a1e565b60405180910390f35b6100ec60048036038101906100e79190610a58565b6102f2565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b61011a61050b565b61017d60405160200161012c90610af6565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c4552000000000000000000000000000000000000000000008152506106d7565b60006040518060e001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602001836000013581526020018360200135815260200183604001358152602001836060013581526020018360800135815250905073__$2ebd8d293950cf319742e0db402ead4961$__63213d306c84836040518363ffffffff1660e01b815260040161026d929190610bdb565b60006040518083038186803b15801561028557600080fd5b505af4158015610299573d6000803e3d6000fd5b50505050506102a66107ba565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6102fa61050b565b61035d60405160200161030c90610af6565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c4552000000000000000000000000000000000000000000008152506106d7565b60006040518061012001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018360000160208101906103f69190610c05565b73ffffffffffffffffffffffffffffffffffffffff1681526020018360200160208101906104249190610c05565b73ffffffffffffffffffffffffffffffffffffffff1681526020018360400135815260200183606001358152602001836080013581526020018360a0013581526020018360c001602081019061047a9190610c05565b73ffffffffffffffffffffffffffffffffffffffff16815250905073__$2ebd8d293950cf319742e0db402ead4961$__63af22def384836040518363ffffffff1660e01b81526004016104ce929190610ce9565b60006040518083038186803b1580156104e657600080fd5b505af41580156104fa573d6000803e3d6000fd5b50505050506105076107ba565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bd02d0f560405160200161055890610d5f565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161058a9190610d98565b602060405180830381865afa1580156105a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cb9190610ddf565b905060008114610610576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060790610e58565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e2a4853a60405160200161065b90610d5f565b6040516020818303038152906040528051906020012060016040518363ffffffff1660e01b8152600401610690929190610e87565b6020604051808303816000875af11580156106af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d39190610ddf565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac4ab3fb33846040518363ffffffff1660e01b8152600401610732929190610ebf565b602060405180830381865afa15801561074f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107739190610f20565b6107b65733816040517fa35b150b0000000000000000000000000000000000000000000000000000000081526004016107ad929190610fcc565b60405180910390fd5b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e2a4853a60405160200161080590610d5f565b6040516020818303038152906040528051906020012060006040518363ffffffff1660e01b815260040161083a929190610e87565b6020604051808303816000875af1158015610859573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087d9190610ddf565b50565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006108c56108c06108bb84610880565b6108a0565b610880565b9050919050565b60006108d7826108aa565b9050919050565b60006108e9826108cc565b9050919050565b6108f9816108de565b82525050565b600060208201905061091460008301846108f0565b92915050565b600080fd5b600061092a82610880565b9050919050565b61093a8161091f565b811461094557600080fd5b50565b60008135905061095781610931565b92915050565b600080fd5b600060a082840312156109785761097761095d565b5b81905092915050565b60008060c083850312156109985761099761091a565b5b60006109a685828601610948565b92505060206109b785828601610962565b9150509250929050565b60006109cc826108cc565b9050919050565b6109dc816109c1565b82525050565b60006020820190506109f760008301846109d3565b92915050565b6000610a08826108cc565b9050919050565b610a18816109fd565b82525050565b6000602082019050610a336000830184610a0f565b92915050565b600060e08284031215610a4f57610a4e61095d565b5b81905092915050565b6000806101008385031215610a7057610a6f61091a565b5b6000610a7e85828601610948565b9250506020610a8f85828601610a39565b9150509250929050565b600082825260208201905092915050565b7f434f4e54524f4c4c455200000000000000000000000000000000000000000000600082015250565b6000610ae0600a83610a99565b9150610aeb82610aaa565b602082019050919050565b60006020820190508181036000830152610b0f81610ad3565b9050919050565b610b1f8161091f565b82525050565b610b2e8161091f565b82525050565b6000819050919050565b610b4781610b34565b82525050565b60e082016000820151610b636000850182610b25565b506020820151610b766020850182610b25565b506040820151610b896040850182610b3e565b506060820151610b9c6060850182610b3e565b506080820151610baf6080850182610b3e565b5060a0820151610bc260a0850182610b3e565b5060c0820151610bd560c0850182610b3e565b50505050565b600061010082019050610bf16000830185610b16565b610bfe6020830184610b4d565b9392505050565b600060208284031215610c1b57610c1a61091a565b5b6000610c2984828501610948565b91505092915050565b61012082016000820151610c496000850182610b25565b506020820151610c5c6020850182610b25565b506040820151610c6f6040850182610b25565b506060820151610c826060850182610b25565b506080820151610c956080850182610b3e565b5060a0820151610ca860a0850182610b3e565b5060c0820151610cbb60c0850182610b3e565b5060e0820151610cce60e0850182610b3e565b50610100820151610ce3610100850182610b25565b50505050565b600061014082019050610cff6000830185610b16565b610d0c6020830184610c32565b9392505050565b7f5245454e5452414e43595f47554152445f535441545553000000000000000000600082015250565b6000610d49601783610a99565b9150610d5482610d13565b602082019050919050565b60006020820190508181036000830152610d7881610d3c565b9050919050565b6000819050919050565b610d9281610d7f565b82525050565b6000602082019050610dad6000830184610d89565b92915050565b610dbc81610b34565b8114610dc757600080fd5b50565b600081519050610dd981610db3565b92915050565b600060208284031215610df557610df461091a565b5b6000610e0384828501610dca565b91505092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000610e42601f83610a99565b9150610e4d82610e0c565b602082019050919050565b60006020820190508181036000830152610e7181610e35565b9050919050565b610e8181610b34565b82525050565b6000604082019050610e9c6000830185610d89565b610ea96020830184610e78565b9392505050565b610eb98161091f565b82525050565b6000604082019050610ed46000830185610eb0565b610ee16020830184610d89565b9392505050565b60008115159050919050565b610efd81610ee8565b8114610f0857600080fd5b50565b600081519050610f1a81610ef4565b92915050565b600060208284031215610f3657610f3561091a565b5b6000610f4484828501610f0b565b91505092915050565b600081519050919050565b60005b83811015610f76578082015181840152602081019050610f5b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f9e82610f4d565b610fa88185610a99565b9350610fb8818560208601610f58565b610fc181610f82565b840191505092915050565b6000604082019050610fe16000830185610eb0565b8181036020830152610ff38184610f93565b9050939250505056fea264697066735822122006daa69098e5dd7caf9b0bee52c0425a44ac168630bf73e8aab3f311752bce0d64736f6c634300081b0033";

type SwapHandlerConstructorParams =
  | [linkLibraryAddresses: SwapHandlerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class SwapHandler__factory extends ContractFactory {
  constructor(...args: SwapHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        SwapHandler__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: SwapHandlerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$2ebd8d293950cf319742e0db402ead4961\\$__", "g"),
      linkLibraryAddresses["contracts/swap/SwapUtils.sol:SwapUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    _roleStore: AddressLike,
    _dataStore: AddressLike,
    _eventEmitter: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _eventEmitter,
      overrides || {}
    );
  }
  override deploy(
    _roleStore: AddressLike,
    _dataStore: AddressLike,
    _eventEmitter: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _roleStore,
      _dataStore,
      _eventEmitter,
      overrides || {}
    ) as Promise<
      SwapHandler & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SwapHandler__factory {
    return super.connect(runner) as SwapHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapHandlerInterface {
    return new Interface(_abi) as SwapHandlerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SwapHandler {
    return new Contract(address, _abi, runner) as unknown as SwapHandler;
  }
}

export interface SwapHandlerLibraryAddresses {
  ["contracts/swap/SwapUtils.sol:SwapUtils"]: string;
}