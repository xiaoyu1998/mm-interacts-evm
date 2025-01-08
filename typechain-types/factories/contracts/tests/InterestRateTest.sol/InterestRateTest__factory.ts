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
import type { NonPayableOverrides } from "../../../../common";
import type {
  InterestRateTest,
  InterestRateTestInterface,
} from "../../../../contracts/tests/InterestRateTest.sol/InterestRateTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "interestRateStrategy",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "totalPoolBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPoolBalanceBase",
            type: "uint256",
          },
        ],
        internalType: "struct InterestUtils.CalculateInterestRatesParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "calculateInterestRates",
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
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506106c08061001f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638387121714610030575b600080fd5b61004a6004803603810190610045919061047f565b610060565b60405161005791906104ce565b60405180910390f35b60006100a56040518060400160405280601081526020017f746f74616c506f6f6c42616c616e63650000000000000000000000000000000081525083600001516101ad565b6100e86040518060400160405280600981526020017f746f74616c44656274000000000000000000000000000000000000000000000081525083602001516101ad565b61012b6040518060400160405280601481526020017f746f74616c506f6f6c42616c616e63654261736500000000000000000000000081525083604001516101ad565b8273ffffffffffffffffffffffffffffffffffffffff1663fdd63ecf836040518263ffffffff1660e01b8152600401610164919061053a565b602060405180830381865afa158015610181573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a5919061056a565b905092915050565b60006101f4576101f36040518060400160405280600681526020017f2573202d2573000000000000000000000000000000000000000000000000000081525083836101f8565b5b5050565b61029283838360405160240161021093929190610616565b6040516020818303038152906040527f5821efa1000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610297565b505050565b6102ae816102a66102b16102d2565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6102dd819050919050565b6102e561065b565b565b6000604051905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610321826102f6565b9050919050565b61033181610316565b811461033c57600080fd5b50565b60008135905061034e81610328565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103a282610359565b810181811067ffffffffffffffff821117156103c1576103c061036a565b5b80604052505050565b60006103d46102e7565b90506103e08282610399565b919050565b6000819050919050565b6103f8816103e5565b811461040357600080fd5b50565b600081359050610415816103ef565b92915050565b60006060828403121561043157610430610354565b5b61043b60606103ca565b9050600061044b84828501610406565b600083015250602061045f84828501610406565b602083015250604061047384828501610406565b60408301525092915050565b60008060808385031215610496576104956102f1565b5b60006104a48582860161033f565b92505060206104b58582860161041b565b9150509250929050565b6104c8816103e5565b82525050565b60006020820190506104e360008301846104bf565b92915050565b6104f2816103e5565b82525050565b60608201600082015161050e60008501826104e9565b50602082015161052160208501826104e9565b50604082015161053460408501826104e9565b50505050565b600060608201905061054f60008301846104f8565b92915050565b600081519050610564816103ef565b92915050565b6000602082840312156105805761057f6102f1565b5b600061058e84828501610555565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156105d15780820151818401526020810190506105b6565b60008484015250505050565b60006105e882610597565b6105f281856105a2565b93506106028185602086016105b3565b61060b81610359565b840191505092915050565b6000606082019050818103600083015261063081866105dd565b9050818103602083015261064481856105dd565b905061065360408301846104bf565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea2646970667358221220335cf11141582415d6259b89f660fd5b23eaf5167f60568787dff108c481f0a064736f6c634300081c0033";

type InterestRateTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InterestRateTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InterestRateTest__factory extends ContractFactory {
  constructor(...args: InterestRateTestConstructorParams) {
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
      InterestRateTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): InterestRateTest__factory {
    return super.connect(runner) as InterestRateTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InterestRateTestInterface {
    return new Interface(_abi) as InterestRateTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): InterestRateTest {
    return new Contract(address, _abi, runner) as unknown as InterestRateTest;
  }
}
