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
  FeeHandler,
  FeeHandlerInterface,
} from "../../../contracts/fee/FeeHandler";

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
    inputs: [],
    name: "EmptyPoolKeys",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "pool",
        type: "bytes32",
      },
    ],
    name: "EmptyUnclaimedFee",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
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
        internalType: "bytes32[]",
        name: "poolKeys",
        type: "bytes32[]",
      },
    ],
    name: "claimFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
  "0x60e060405234801561001057600080fd5b50604051611071380380611071833981810160405281019061003291906101d1565b8260016000819055508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505050610224565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610110826100e5565b9050919050565b600061012282610105565b9050919050565b61013281610117565b811461013d57600080fd5b50565b60008151905061014f81610129565b92915050565b600061016082610105565b9050919050565b61017081610155565b811461017b57600080fd5b50565b60008151905061018d81610167565b92915050565b600061019e82610105565b9050919050565b6101ae81610193565b81146101b957600080fd5b50565b6000815190506101cb816101a5565b92915050565b6000806000606084860312156101ea576101e96100e0565b5b60006101f886828701610140565b93505060206102098682870161017e565b925050604061021a868287016101bc565b9150509250925092565b60805160a05160c051610e0461026d6000396000818161028301526102df01526000818160ed015281816101d3015261026201526000818160c901526103490152610e046000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634a4a7b0414610051578063660d0d671461006f5780637aa7aac31461008d5780639ff78c30146100a9575b600080fd5b6100596100c7565b6040516100669190610756565b60405180910390f35b6100776100eb565b6040516100849190610792565b60405180910390f35b6100a760048036038101906100a29190610950565b61010f565b005b6100b16102dd565b6040516100be91906109ba565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b610117610301565b61017a60405160200161012990610a32565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f4645455f4b454550455200000000000000000000000000000000000000000000815250610347565b60008151036101b5576040517f7a439c4900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073__$e88f7802466f52242b4297337cdc57c299$__6378f212d17f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040161020e9190610a73565b602060405180830381865af415801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f9190610aba565b905060005b82518110156102d0576102c37f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008584815181106102b5576102b4610ae7565b5b60200260200101518561042a565b8080600101915050610254565b50506102da6106cd565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60026000540361033d576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600081905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac4ab3fb33846040518363ffffffff1660e01b81526004016103a2929190610b34565b602060405180830381865afa1580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e39190610b95565b6104265733816040517fa35b150b00000000000000000000000000000000000000000000000000000000815260040161041d929190610c30565b60405180910390fd5b5050565b600073__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__63071e386f86856040518363ffffffff1660e01b8152600401610465929190610c6f565b602060405180830381865af4158015610482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a69190610aba565b9050600073__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__6371f91a0587866040518363ffffffff1660e01b81526004016104e3929190610c6f565b602060405180830381865af4158015610500573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105249190610cce565b90506000810361056b57836040517f4e4b0d590000000000000000000000000000000000000000000000000000000081526004016105629190610cfb565b60405180910390fd5b600073__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__6303ed125c88876040518363ffffffff1660e01b81526004016105a6929190610c6f565b602060405180830381865af41580156105c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e79190610aba565b90508273ffffffffffffffffffffffffffffffffffffffff1663078d3b798286856040518463ffffffff1660e01b815260040161062693929190610d25565b600060405180830381600087803b15801561064057600080fd5b505af1158015610654573d6000803e3d6000fd5b5050505073__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__638c0cda66888760006040518463ffffffff1660e01b815260040161069493929190610d97565b60006040518083038186803b1580156106ac57600080fd5b505af41580156106c0573d6000803e3d6000fd5b5050505050505050505050565b6001600081905550565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061071c610717610712846106d7565b6106f7565b6106d7565b9050919050565b600061072e82610701565b9050919050565b600061074082610723565b9050919050565b61075081610735565b82525050565b600060208201905061076b6000830184610747565b92915050565b600061077c82610723565b9050919050565b61078c81610771565b82525050565b60006020820190506107a76000830184610783565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61080f826107c6565b810181811067ffffffffffffffff8211171561082e5761082d6107d7565b5b80604052505050565b60006108416107ad565b905061084d8282610806565b919050565b600067ffffffffffffffff82111561086d5761086c6107d7565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b61089681610883565b81146108a157600080fd5b50565b6000813590506108b38161088d565b92915050565b60006108cc6108c784610852565b610837565b905080838252602082019050602084028301858111156108ef576108ee61087e565b5b835b81811015610918578061090488826108a4565b8452602084019350506020810190506108f1565b5050509392505050565b600082601f830112610937576109366107c1565b5b81356109478482602086016108b9565b91505092915050565b600060208284031215610966576109656107b7565b5b600082013567ffffffffffffffff811115610984576109836107bc565b5b61099084828501610922565b91505092915050565b60006109a482610723565b9050919050565b6109b481610999565b82525050565b60006020820190506109cf60008301846109ab565b92915050565b600082825260208201905092915050565b7f4645455f4b454550455200000000000000000000000000000000000000000000600082015250565b6000610a1c600a836109d5565b9150610a27826109e6565b602082019050919050565b60006020820190508181036000830152610a4b81610a0f565b9050919050565b6000610a5d826106d7565b9050919050565b610a6d81610a52565b82525050565b6000602082019050610a886000830184610a64565b92915050565b610a9781610a52565b8114610aa257600080fd5b50565b600081519050610ab481610a8e565b92915050565b600060208284031215610ad057610acf6107b7565b5b6000610ade84828501610aa5565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b610b1f81610a52565b82525050565b610b2e81610883565b82525050565b6000604082019050610b496000830185610b16565b610b566020830184610b25565b9392505050565b60008115159050919050565b610b7281610b5d565b8114610b7d57600080fd5b50565b600081519050610b8f81610b69565b92915050565b600060208284031215610bab57610baa6107b7565b5b6000610bb984828501610b80565b91505092915050565b600081519050919050565b60005b83811015610beb578082015181840152602081019050610bd0565b60008484015250505050565b6000610c0282610bc2565b610c0c81856109d5565b9350610c1c818560208601610bcd565b610c25816107c6565b840191505092915050565b6000604082019050610c456000830185610b16565b8181036020830152610c578184610bf7565b90509392505050565b610c6981610883565b82525050565b6000604082019050610c846000830185610a64565b610c916020830184610c60565b9392505050565b6000819050919050565b610cab81610c98565b8114610cb657600080fd5b50565b600081519050610cc881610ca2565b92915050565b600060208284031215610ce457610ce36107b7565b5b6000610cf284828501610cb9565b91505092915050565b6000602082019050610d106000830184610b25565b92915050565b610d1f81610c98565b82525050565b6000606082019050610d3a6000830186610b16565b610d476020830185610b16565b610d546040830184610d16565b949350505050565b6000819050919050565b6000610d81610d7c610d7784610d5c565b6106f7565b610c98565b9050919050565b610d9181610d66565b82525050565b6000606082019050610dac6000830186610a64565b610db96020830185610c60565b610dc66040830184610d88565b94935050505056fea2646970667358221220c66c3b22be3d48a79538737fa4707ca91f82c487cae23aee7ce4b7a2b146f51064736f6c634300081b0033";

type FeeHandlerConstructorParams =
  | [linkLibraryAddresses: FeeHandlerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class FeeHandler__factory extends ContractFactory {
  constructor(...args: FeeHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        FeeHandler__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: FeeHandlerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e88f7802466f52242b4297337cdc57c299\\$__", "g"),
      linkLibraryAddresses["contracts/fee/FeeStoreUtils.sol:FeeStoreUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e0022d6f389ac14ff1ce1dc57a4018d0a3\\$__", "g"),
      linkLibraryAddresses["contracts/pool/PoolStoreUtils.sol:PoolStoreUtils"]
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
      FeeHandler & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FeeHandler__factory {
    return super.connect(runner) as FeeHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeHandlerInterface {
    return new Interface(_abi) as FeeHandlerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FeeHandler {
    return new Contract(address, _abi, runner) as unknown as FeeHandler;
  }
}

export interface FeeHandlerLibraryAddresses {
  ["contracts/fee/FeeStoreUtils.sol:FeeStoreUtils"]: string;
  ["contracts/pool/PoolStoreUtils.sol:PoolStoreUtils"]: string;
}
