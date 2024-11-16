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
import type { Keys, KeysInterface } from "../../../contracts/data/Keys";

const _abi = [
  {
    inputs: [],
    name: "ACCOUNT_POSITION_LIST",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEBT_SAFETY_FACTOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_INTEREST_RATE_STRATEGY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_POOL_CONFIGURATION",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MARGIN_LEVELL_THRESHOLD",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL_LIST",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POSITION",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POSITION_LIST",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REENTRANCY_GUARD_STATUS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOKEN_BASE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TREASURY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WNT",
    outputs: [
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
  "0x610a63610052600b82828239805160001a6073146045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100d95760003560e01c80637535d24611610096578063993f545011610070578063993f5450146101ec5780639bfe0ccf1461020a578063b8b4a54314610228578063cea63f5d14610246576100d9565b80637535d24614610192578063769af85d146101b05780637bf43e47146101ce576100d9565b8063041429b8146100de5780632d2c5565146100fc578063355ac5961461011a57806335bf74571461013857806336fef13d146101565780636714ddd514610174575b600080fd5b6100e6610264565b6040516100f39190610485565b60405180910390f35b61010461028c565b6040516101119190610485565b60405180910390f35b6101226102b4565b60405161012f9190610485565b60405180910390f35b6101406102dc565b60405161014d9190610485565b60405180910390f35b61015e610304565b60405161016b9190610485565b60405180910390f35b61017c61032c565b6040516101899190610485565b60405180910390f35b61019a610354565b6040516101a79190610485565b60405180910390f35b6101b861037c565b6040516101c59190610485565b60405180910390f35b6101d66103a4565b6040516101e39190610485565b60405180910390f35b6101f46103cc565b6040516102019190610485565b60405180910390f35b6102126103f4565b60405161021f9190610485565b60405180910390f35b61023061041c565b60405161023d9190610485565b60405180910390f35b61024e610444565b60405161025b9190610485565b60405180910390f35b604051602001610273906104fd565b6040516020818303038152906040528051906020012081565b60405160200161029b90610569565b6040516020818303038152906040528051906020012081565b6040516020016102c3906105d5565b6040516020818303038152906040528051906020012081565b6040516020016102eb90610641565b6040516020818303038152906040528051906020012081565b604051602001610313906106ad565b6040516020818303038152906040528051906020012081565b60405160200161033b90610719565b6040516020818303038152906040528051906020012081565b60405160200161036390610785565b6040516020818303038152906040528051906020012081565b60405160200161038b906107f1565b6040516020818303038152906040528051906020012081565b6040516020016103b39061085d565b6040516020818303038152906040528051906020012081565b6040516020016103db906108c9565b6040516020818303038152906040528051906020012081565b60405160200161040390610935565b6040516020818303038152906040528051906020012081565b60405160200161042b906109a1565b6040516020818303038152906040528051906020012081565b60405160200161045390610a0d565b6040516020818303038152906040528051906020012081565b6000819050919050565b61047f8161046c565b82525050565b600060208201905061049a6000830184610476565b92915050565b600082825260208201905092915050565b7f4143434f554e545f504f534954494f4e5f4c4953540000000000000000000000600082015250565b60006104e76015836104a0565b91506104f2826104b1565b602082019050919050565b60006020820190508181036000830152610516816104da565b9050919050565b7f5452454153555259000000000000000000000000000000000000000000000000600082015250565b60006105536008836104a0565b915061055e8261051d565b602082019050919050565b6000602082019050818103600083015261058281610546565b9050919050565b7f504f534954494f4e000000000000000000000000000000000000000000000000600082015250565b60006105bf6008836104a0565b91506105ca82610589565b602082019050919050565b600060208201905081810360008301526105ee816105b2565b9050919050565b7f504f4f4c5f4c4953540000000000000000000000000000000000000000000000600082015250565b600061062b6009836104a0565b9150610636826105f5565b602082019050919050565b6000602082019050818103600083015261065a8161061e565b9050919050565b7f444542545f5341464554595f464143544f520000000000000000000000000000600082015250565b60006106976012836104a0565b91506106a282610661565b602082019050919050565b600060208201905081810360008301526106c68161068a565b9050919050565b7f44454641554c545f494e5445524553545f524154455f53545241544547590000600082015250565b6000610703601e836104a0565b915061070e826106cd565b602082019050919050565b60006020820190508181036000830152610732816106f6565b9050919050565b7f504f4f4c00000000000000000000000000000000000000000000000000000000600082015250565b600061076f6004836104a0565b915061077a82610739565b602082019050919050565b6000602082019050818103600083015261079e81610762565b9050919050565b7f544f4b454e5f4241534500000000000000000000000000000000000000000000600082015250565b60006107db600a836104a0565b91506107e6826107a5565b602082019050919050565b6000602082019050818103600083015261080a816107ce565b9050919050565b7f574e540000000000000000000000000000000000000000000000000000000000600082015250565b60006108476003836104a0565b915061085282610811565b602082019050919050565b600060208201905081810360008301526108768161083a565b9050919050565b7f44454641554c545f504f4f4c5f434f4e46494755524154494f4e000000000000600082015250565b60006108b3601a836104a0565b91506108be8261087d565b602082019050919050565b600060208201905081810360008301526108e2816108a6565b9050919050565b7f5245454e5452414e43595f47554152445f535441545553000000000000000000600082015250565b600061091f6017836104a0565b915061092a826108e9565b602082019050919050565b6000602082019050818103600083015261094e81610912565b9050919050565b7f504f534954494f4e5f4c49535400000000000000000000000000000000000000600082015250565b600061098b600d836104a0565b915061099682610955565b602082019050919050565b600060208201905081810360008301526109ba8161097e565b9050919050565b7f4d415247494e5f4c4556454c4c5f5448524553484f4c44000000000000000000600082015250565b60006109f76017836104a0565b9150610a02826109c1565b602082019050919050565b60006020820190508181036000830152610a26816109ea565b905091905056fea26469706673582212206e0356ff4b85a4a0b3aebb8587f79b249db18b1608da4ab5bd1c56344f07dd2564736f6c634300081b0033";

type KeysConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KeysConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Keys__factory extends ContractFactory {
  constructor(...args: KeysConstructorParams) {
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
      Keys & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Keys__factory {
    return super.connect(runner) as Keys__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeysInterface {
    return new Interface(_abi) as KeysInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Keys {
    return new Contract(address, _abi, runner) as unknown as Keys;
  }
}