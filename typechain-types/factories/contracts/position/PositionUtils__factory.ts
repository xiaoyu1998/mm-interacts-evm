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
  PositionUtils,
  PositionUtilsInterface,
} from "../../../contracts/position/PositionUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "accountInPosition",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AccountNotMatch",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyPosition",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "getAndValidate",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "collateral",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "debtScaled",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryLongPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryShortPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "accumulatedLongAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "accumulatedShortAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "positionType",
                type: "uint256",
              },
            ],
            internalType: "struct Position.Asset[2]",
            name: "assets",
            type: "tuple[2]",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        internalType: "struct Position.Props",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610a6d610052600b82828239805160001a6073146045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063f5c7898c1461003a575b600080fd5b610054600480360381019061004f91906103e5565b61006b565b6040516100629291906105f3565b60405180910390f35b61007361027d565b600061008085858561008c565b91509150935093915050565b61009461027d565b6000806100a1868561013c565b9050600073__$3d31b232fb363902662fbc281b11ab3357$__637b82d74e87846040518363ffffffff1660e01b81526004016100de92919061062d565b61024060405180830381865af41580156100fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012091906108ff565b905061012c8782610195565b8082935093505050935093915050565b600060405160200161014d9061098a565b604051602081830303815290604052805190602001208383604051602001610177939291906109d7565b60405160208183030381529060405280519060200120905092915050565b600073ffffffffffffffffffffffffffffffffffffffff16816040015173ffffffffffffffffffffffffffffffffffffffff16036101ff576040517f4dfbbff300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610279578060400151826040517f25c7157e000000000000000000000000000000000000000000000000000000008152600401610270929190610a0e565b60405180910390fd5b5050565b60405180606001604052806102906102ba565b815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60405180604001604052806002905b6102d16102e7565b8152602001906001900390816102c95790505090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000604051905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061037c82610351565b9050919050565b61038c81610371565b811461039757600080fd5b50565b6000813590506103a981610383565b92915050565b6000819050919050565b6103c2816103af565b81146103cd57600080fd5b50565b6000813590506103df816103b9565b92915050565b6000806000606084860312156103fe576103fd61034c565b5b600061040c8682870161039a565b935050602061041d8682870161039a565b925050604061042e868287016103d0565b9150509250925092565b600060029050919050565b600081905092915050565b6000819050919050565b61046181610371565b82525050565b610470816103af565b82525050565b6101008201600082015161048d6000850182610458565b5060208201516104a06020850182610467565b5060408201516104b36040850182610467565b5060608201516104c66060850182610467565b5060808201516104d96080850182610467565b5060a08201516104ec60a0850182610467565b5060c08201516104ff60c0850182610467565b5060e082015161051260e0850182610467565b50505050565b60006105248383610476565b6101008301905092915050565b6000602082019050919050565b61054781610438565b6105518184610443565b925061055c8261044e565b8060005b8381101561058d5781516105748782610518565b965061057f83610531565b925050600181019050610560565b505050505050565b610240820160008201516105ac600085018261053e565b5060208201516105c0610200850182610467565b5060408201516105d4610220850182610458565b50505050565b6000819050919050565b6105ed816105da565b82525050565b6000610260820190506106096000830185610595565b6106176102408301846105e4565b9392505050565b61062781610371565b82525050565b6000604082019050610642600083018561061e565b61064f60208301846105e4565b9392505050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106a48261065b565b810181811067ffffffffffffffff821117156106c3576106c261066c565b5b80604052505050565b60006106d6610342565b90506106e2828261069b565b919050565b600080fd5b600067ffffffffffffffff8211156107075761070661066c565b5b602082029050919050565b600080fd5b60008151905061072681610383565b92915050565b60008151905061073b816103b9565b92915050565b6000610100828403121561075857610757610656565b5b6107636101006106cc565b9050600061077384828501610717565b60008301525060206107878482850161072c565b602083015250604061079b8482850161072c565b60408301525060606107af8482850161072c565b60608301525060806107c38482850161072c565b60808301525060a06107d78482850161072c565b60a08301525060c06107eb8482850161072c565b60c08301525060e06107ff8482850161072c565b60e08301525092915050565b600061081e610819846106ec565b6106cc565b905080610100840283018581111561083957610838610712565b5b835b81811015610863578061084e8882610741565b8452602084019350506101008101905061083b565b5050509392505050565b600082601f830112610882576108816106e7565b5b600261088f84828561080b565b91505092915050565b600061024082840312156108af576108ae610656565b5b6108b960606106cc565b905060006108c98482850161086d565b6000830152506102006108de8482850161072c565b6020830152506102206108f384828501610717565b60408301525092915050565b600061024082840312156109165761091561034c565b5b600061092484828501610898565b91505092915050565b600082825260208201905092915050565b7f504f534954494f4e000000000000000000000000000000000000000000000000600082015250565b600061097460088361092d565b915061097f8261093e565b602082019050919050565b600060208201905081810360008301526109a381610967565b9050919050565b6109b3816105da565b82525050565b6109c281610371565b82525050565b6109d1816103af565b82525050565b60006060820190506109ec60008301866109aa565b6109f960208301856109b9565b610a0660408301846109c8565b949350505050565b6000604082019050610a2360008301856109b9565b610a3060208301846109b9565b939250505056fea2646970667358221220927d65d776a6221bd652c8a7b9d486a891ca0da86e2f29561e7252917b7fb1e364736f6c634300081c0033";

type PositionUtilsConstructorParams =
  | [linkLibraryAddresses: PositionUtilsLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PositionUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class PositionUtils__factory extends ContractFactory {
  constructor(...args: PositionUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        PositionUtils__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: PositionUtilsLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$3d31b232fb363902662fbc281b11ab3357\\$__", "g"),
      linkLibraryAddresses[
        "contracts/position/PositionStoreUtils.sol:PositionStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PositionUtils & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PositionUtils__factory {
    return super.connect(runner) as PositionUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionUtilsInterface {
    return new Interface(_abi) as PositionUtilsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PositionUtils {
    return new Contract(address, _abi, runner) as unknown as PositionUtils;
  }
}

export interface PositionUtilsLibraryAddresses {
  ["contracts/position/PositionStoreUtils.sol:PositionStoreUtils"]: string;
}
