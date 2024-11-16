/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace RepayUtils {
  export type RepayParamsStruct = {
    positionId: BigNumberish;
    tokenIndex: BigNumberish;
    repayAmount: BigNumberish;
    repayOption: BigNumberish;
  };

  export type RepayParamsStructOutput = [
    positionId: bigint,
    tokenIndex: bigint,
    repayAmount: bigint,
    repayOption: bigint
  ] & {
    positionId: bigint;
    tokenIndex: bigint;
    repayAmount: bigint;
    repayOption: bigint;
  };
}

export interface RepayHandlerInterface extends Interface {
  getFunction(
    nameOrSignature: "dataStore" | "eventEmitter" | "executeRepay" | "roleStore"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eventEmitter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeRepay",
    values: [AddressLike, RepayUtils.RepayParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;

  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eventEmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeRepay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
}

export interface RepayHandler extends BaseContract {
  connect(runner?: ContractRunner | null): RepayHandler;
  waitForDeployment(): Promise<this>;

  interface: RepayHandlerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  dataStore: TypedContractMethod<[], [string], "view">;

  eventEmitter: TypedContractMethod<[], [string], "view">;

  executeRepay: TypedContractMethod<
    [account: AddressLike, repayParams: RepayUtils.RepayParamsStruct],
    [void],
    "nonpayable"
  >;

  roleStore: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "dataStore"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "eventEmitter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "executeRepay"
  ): TypedContractMethod<
    [account: AddressLike, repayParams: RepayUtils.RepayParamsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "roleStore"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}