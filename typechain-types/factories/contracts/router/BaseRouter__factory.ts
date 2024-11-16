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
  BaseRouter,
  BaseRouterInterface,
} from "../../../contracts/router/BaseRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Router",
        name: "_router",
        type: "address",
      },
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
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
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
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
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
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract Router",
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
    name: "sendTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051610f57380380610f57833981810160405281019061003291906101d1565b8160016000819055508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505050610224565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610110826100e5565b9050919050565b600061012282610105565b9050919050565b61013281610117565b811461013d57600080fd5b50565b60008151905061014f81610129565b92915050565b600061016082610105565b9050919050565b61017081610155565b811461017b57600080fd5b50565b60008151905061018d81610167565b92915050565b600061019e82610105565b9050919050565b6101ae81610193565b81146101b957600080fd5b50565b6000815190506101cb816101a5565b92915050565b6000806000606084860312156101ea576101e96100e0565b5b60006101f886828701610140565b93505060206102098682870161017e565b925050604061021a868287016101bc565b9150509250925092565b60805160a05160c051610cfd61025a60003960006101420152600081816102b501526103540152600061011e0152610cfd6000f3fe60806040526004361061004a5760003560e01c80634a4a7b041461004f578063660d0d671461007a578063ac9650d8146100a5578063e6d66ac8146100d5578063f887ea40146100f1575b600080fd5b34801561005b57600080fd5b5061006461011c565b60405161007191906105f6565b60405180910390f35b34801561008657600080fd5b5061008f610140565b60405161009c9190610632565b60405180910390f35b6100bf60048036038101906100ba91906106c6565b610164565b6040516100cc9190610865565b60405180910390f35b6100ef60048036038101906100ea91906108fb565b61029d565b005b3480156100fd57600080fd5b50610106610352565b604051610113919061096f565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60608282905067ffffffffffffffff8111156101835761018261098a565b5b6040519080825280602002602001820160405280156101b657816020015b60608152602001906001900390816101a15790505b50905060005b83839050811015610296576000803073ffffffffffffffffffffffffffffffffffffffff168686858181106101f4576101f36109b9565b5b905060200281019061020691906109f7565b604051610214929190610a99565b600060405180830381855af49150503d806000811461024f576040519150601f19603f3d011682016040523d82523d6000602084013e610254565b606091505b5091509150816102685761026781610376565b5b8084848151811061027c5761027b6109b9565b5b6020026020010181905250505080806001019150506101bc565b5092915050565b6102a56103d7565b6102ae8261041d565b60003390507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631b827878858386866040518563ffffffff1660e01b81526004016103129493929190610ad0565b600060405180830381600087803b15801561032c57600080fd5b505af1158015610340573d6000803e3d6000fd5b505050505061034d610486565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008061038283610490565b9150915080156103c957816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c09190610b6a565b60405180910390fd5b6103d283610557565b505050565b600260005403610413576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600081905550565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610483576040517fd551823d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6001600081905550565b606060006044835110156104ba576000604051806020016040528060008152509091509150610552565b60006104c584610564565b90506308c379a060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191603610539576004840193508380602001905181019061052d9190610c7e565b60019250925050610552565b6000604051806020016040528060008152509092509250505b915091565b6000815190508060208301fd5b6000806020830151905080915050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006105bc6105b76105b284610577565b610597565b610577565b9050919050565b60006105ce826105a1565b9050919050565b60006105e0826105c3565b9050919050565b6105f0816105d5565b82525050565b600060208201905061060b60008301846105e7565b92915050565b600061061c826105c3565b9050919050565b61062c81610611565b82525050565b60006020820190506106476000830184610623565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261068657610685610661565b5b8235905067ffffffffffffffff8111156106a3576106a2610666565b5b6020830191508360208202830111156106bf576106be61066b565b5b9250929050565b600080602083850312156106dd576106dc610657565b5b600083013567ffffffffffffffff8111156106fb576106fa61065c565b5b61070785828601610670565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561077957808201518184015260208101905061075e565b60008484015250505050565b6000601f19601f8301169050919050565b60006107a18261073f565b6107ab818561074a565b93506107bb81856020860161075b565b6107c481610785565b840191505092915050565b60006107db8383610796565b905092915050565b6000602082019050919050565b60006107fb82610713565b610805818561071e565b9350836020820285016108178561072f565b8060005b85811015610853578484038952815161083485826107cf565b945061083f836107e3565b925060208a0199505060018101905061081b565b50829750879550505050505092915050565b6000602082019050818103600083015261087f81846107f0565b905092915050565b600061089282610577565b9050919050565b6108a281610887565b81146108ad57600080fd5b50565b6000813590506108bf81610899565b92915050565b6000819050919050565b6108d8816108c5565b81146108e357600080fd5b50565b6000813590506108f5816108cf565b92915050565b60008060006060848603121561091457610913610657565b5b6000610922868287016108b0565b9350506020610933868287016108b0565b9250506040610944868287016108e6565b9150509250925092565b6000610959826105c3565b9050919050565b6109698161094e565b82525050565b60006020820190506109846000830184610960565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112610a1457610a136109e8565b5b80840192508235915067ffffffffffffffff821115610a3657610a356109ed565b5b602083019250600182023603831315610a5257610a516109f2565b5b509250929050565b600081905092915050565b82818337600083830152505050565b6000610a808385610a5a565b9350610a8d838584610a65565b82840190509392505050565b6000610aa6828486610a74565b91508190509392505050565b610abb81610887565b82525050565b610aca816108c5565b82525050565b6000608082019050610ae56000830187610ab2565b610af26020830186610ab2565b610aff6040830185610ab2565b610b0c6060830184610ac1565b95945050505050565b600081519050919050565b600082825260208201905092915050565b6000610b3c82610b15565b610b468185610b20565b9350610b5681856020860161075b565b610b5f81610785565b840191505092915050565b60006020820190508181036000830152610b848184610b31565b905092915050565b600080fd5b610b9a82610785565b810181811067ffffffffffffffff82111715610bb957610bb861098a565b5b80604052505050565b6000610bcc61064d565b9050610bd88282610b91565b919050565b600067ffffffffffffffff821115610bf857610bf761098a565b5b610c0182610785565b9050602081019050919050565b6000610c21610c1c84610bdd565b610bc2565b905082815260208101848484011115610c3d57610c3c610b8c565b5b610c4884828561075b565b509392505050565b600082601f830112610c6557610c64610661565b5b8151610c75848260208601610c0e565b91505092915050565b600060208284031215610c9457610c93610657565b5b600082015167ffffffffffffffff811115610cb257610cb161065c565b5b610cbe84828501610c50565b9150509291505056fea2646970667358221220c799d64c66c04e1c1ecbcf1d3a01ea91e02909e4dd20c0d1fab7291a82ef904764736f6c634300081b0033";

type BaseRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseRouter__factory extends ContractFactory {
  constructor(...args: BaseRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _router: AddressLike,
    _roleStore: AddressLike,
    _dataStore: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _router,
      _roleStore,
      _dataStore,
      overrides || {}
    );
  }
  override deploy(
    _router: AddressLike,
    _roleStore: AddressLike,
    _dataStore: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _router,
      _roleStore,
      _dataStore,
      overrides || {}
    ) as Promise<
      BaseRouter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BaseRouter__factory {
    return super.connect(runner) as BaseRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseRouterInterface {
    return new Interface(_abi) as BaseRouterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BaseRouter {
    return new Contract(address, _abi, runner) as unknown as BaseRouter;
  }
}