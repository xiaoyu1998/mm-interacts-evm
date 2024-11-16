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
  LiquidityHandler,
  LiquidityHandlerInterface,
} from "../../../contracts/exchange/LiquidityHandler";

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
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        internalType: "struct LiquidityUtils.AddParams",
        name: "AddParams",
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
        name: "removeParams",
        type: "tuple",
      },
    ],
    name: "executeRemove",
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
  "0x60e060405234801561001057600080fd5b5060405161128a38038061128a833981810160405281019061003291906101cb565b82828073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505050505061021e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061010a826100df565b9050919050565b600061011c826100ff565b9050919050565b61012c81610111565b811461013757600080fd5b50565b60008151905061014981610123565b92915050565b600061015a826100ff565b9050919050565b61016a8161014f565b811461017557600080fd5b50565b60008151905061018781610161565b92915050565b6000610198826100ff565b9050919050565b6101a88161018d565b81146101b357600080fd5b50565b6000815190506101c58161019f565b92915050565b6000806000606084860312156101e4576101e36100da565b5b60006101f28682870161013a565b935050602061020386828701610178565b9250506040610214868287016101b6565b9150509250925092565b60805160a05160c051611006610284600039600081816101c8015281816103dc015261052201526000818160f0015261071201526000818161018c01528181610304015281816103a0015281816105480152818161064b01526107f501526110066000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634a4a7b041461005c5780635ecd44e81461007a578063660d0d67146100965780637d237c99146100b45780639ff78c30146100d0575b600080fd5b6100646100ee565b6040516100719190610938565b60405180910390f35b610094600480360381019061008f91906109ba565b610112565b005b61009e610302565b6040516100ab9190610a1b565b60405180910390f35b6100ce60048036038101906100c99190610a55565b610326565b005b6100d8610520565b6040516100e59190610ab6565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b61011a610544565b61017d60405160200161012c90610b2e565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610710565b60006040518060a001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018360000160208101906102159190610b4e565b73ffffffffffffffffffffffffffffffffffffffff1681526020018360200160208101906102439190610b4e565b73ffffffffffffffffffffffffffffffffffffffff1681526020018360400160208101906102719190610b4e565b73ffffffffffffffffffffffffffffffffffffffff16815250905073__$d63cf8bf077f3dcda28034357cb208a710$__63f46f6fb784836040518363ffffffff1660e01b81526004016102c5929190610c01565b60006040518083038186803b1580156102dd57600080fd5b505af41580156102f1573d6000803e3d6000fd5b50505050506102fe6107f3565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61032e610544565b61039160405160200161034090610b2e565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610710565b60006040518060c001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018360000160208101906104299190610b4e565b73ffffffffffffffffffffffffffffffffffffffff1681526020018360200160208101906104579190610b4e565b73ffffffffffffffffffffffffffffffffffffffff1681526020018360400135815260200183606001602081019061048f9190610b4e565b73ffffffffffffffffffffffffffffffffffffffff16815250905073__$d63cf8bf077f3dcda28034357cb208a710$__63f3f3951584836040518363ffffffff1660e01b81526004016104e3929190610cbe565b60006040518083038186803b1580156104fb57600080fd5b505af415801561050f573d6000803e3d6000fd5b505050505061051c6107f3565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bd02d0f560405160200161059190610d33565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016105c39190610d6c565b602060405180830381865afa1580156105e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106049190610db3565b905060008114610649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064090610e2c565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e2a4853a60405160200161069490610d33565b6040516020818303038152906040528051906020012060016040518363ffffffff1660e01b81526004016106c9929190610e5b565b6020604051808303816000875af11580156106e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070c9190610db3565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac4ab3fb33846040518363ffffffff1660e01b815260040161076b929190610e93565b602060405180830381865afa158015610788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ac9190610ef4565b6107ef5733816040517fa35b150b0000000000000000000000000000000000000000000000000000000081526004016107e6929190610fa0565b60405180910390fd5b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e2a4853a60405160200161083e90610d33565b6040516020818303038152906040528051906020012060006040518363ffffffff1660e01b8152600401610873929190610e5b565b6020604051808303816000875af1158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b69190610db3565b50565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006108fe6108f96108f4846108b9565b6108d9565b6108b9565b9050919050565b6000610910826108e3565b9050919050565b600061092282610905565b9050919050565b61093281610917565b82525050565b600060208201905061094d6000830184610929565b92915050565b600080fd5b6000610963826108b9565b9050919050565b61097381610958565b811461097e57600080fd5b50565b6000813590506109908161096a565b92915050565b600080fd5b6000606082840312156109b1576109b0610996565b5b81905092915050565b600080608083850312156109d1576109d0610953565b5b60006109df85828601610981565b92505060206109f08582860161099b565b9150509250929050565b6000610a0582610905565b9050919050565b610a15816109fa565b82525050565b6000602082019050610a306000830184610a0c565b92915050565b600060808284031215610a4c57610a4b610996565b5b81905092915050565b60008060a08385031215610a6c57610a6b610953565b5b6000610a7a85828601610981565b9250506020610a8b85828601610a36565b9150509250929050565b6000610aa082610905565b9050919050565b610ab081610a95565b82525050565b6000602082019050610acb6000830184610aa7565b92915050565b600082825260208201905092915050565b7f434f4e54524f4c4c455200000000000000000000000000000000000000000000600082015250565b6000610b18600a83610ad1565b9150610b2382610ae2565b602082019050919050565b60006020820190508181036000830152610b4781610b0b565b9050919050565b600060208284031215610b6457610b63610953565b5b6000610b7284828501610981565b91505092915050565b610b8481610958565b82525050565b610b9381610958565b82525050565b60a082016000820151610baf6000850182610b8a565b506020820151610bc26020850182610b8a565b506040820151610bd56040850182610b8a565b506060820151610be86060850182610b8a565b506080820151610bfb6080850182610b8a565b50505050565b600060c082019050610c166000830185610b7b565b610c236020830184610b99565b9392505050565b6000819050919050565b610c3d81610c2a565b82525050565b60c082016000820151610c596000850182610b8a565b506020820151610c6c6020850182610b8a565b506040820151610c7f6040850182610b8a565b506060820151610c926060850182610b8a565b506080820151610ca56080850182610c34565b5060a0820151610cb860a0850182610b8a565b50505050565b600060e082019050610cd36000830185610b7b565b610ce06020830184610c43565b9392505050565b7f5245454e5452414e43595f47554152445f535441545553000000000000000000600082015250565b6000610d1d601783610ad1565b9150610d2882610ce7565b602082019050919050565b60006020820190508181036000830152610d4c81610d10565b9050919050565b6000819050919050565b610d6681610d53565b82525050565b6000602082019050610d816000830184610d5d565b92915050565b610d9081610c2a565b8114610d9b57600080fd5b50565b600081519050610dad81610d87565b92915050565b600060208284031215610dc957610dc8610953565b5b6000610dd784828501610d9e565b91505092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000610e16601f83610ad1565b9150610e2182610de0565b602082019050919050565b60006020820190508181036000830152610e4581610e09565b9050919050565b610e5581610c2a565b82525050565b6000604082019050610e706000830185610d5d565b610e7d6020830184610e4c565b9392505050565b610e8d81610958565b82525050565b6000604082019050610ea86000830185610e84565b610eb56020830184610d5d565b9392505050565b60008115159050919050565b610ed181610ebc565b8114610edc57600080fd5b50565b600081519050610eee81610ec8565b92915050565b600060208284031215610f0a57610f09610953565b5b6000610f1884828501610edf565b91505092915050565b600081519050919050565b60005b83811015610f4a578082015181840152602081019050610f2f565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f7282610f21565b610f7c8185610ad1565b9350610f8c818560208601610f2c565b610f9581610f56565b840191505092915050565b6000604082019050610fb56000830185610e84565b8181036020830152610fc78184610f67565b9050939250505056fea26469706673582212209641fd6db5939b53223cb54c7205f49c7a42eba2c92b0f25ccb6f7eef82ce45264736f6c634300081b0033";

type LiquidityHandlerConstructorParams =
  | [linkLibraryAddresses: LiquidityHandlerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class LiquidityHandler__factory extends ContractFactory {
  constructor(...args: LiquidityHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        LiquidityHandler__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: LiquidityHandlerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$d63cf8bf077f3dcda28034357cb208a710\\$__", "g"),
      linkLibraryAddresses[
        "contracts/liquidity/LiquidityUtils.sol:LiquidityUtils"
      ]
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
      LiquidityHandler & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LiquidityHandler__factory {
    return super.connect(runner) as LiquidityHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityHandlerInterface {
    return new Interface(_abi) as LiquidityHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LiquidityHandler {
    return new Contract(address, _abi, runner) as unknown as LiquidityHandler;
  }
}

export interface LiquidityHandlerLibraryAddresses {
  ["contracts/liquidity/LiquidityUtils.sol:LiquidityUtils"]: string;
}