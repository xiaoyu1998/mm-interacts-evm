/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
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

export interface RepayUtilsInterface extends Interface {
  getFunction(
    nameOrSignature: "REPAYMENT_CLEAN" | "REPAYMENT_PARTIAL"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "REPAYMENT_CLEAN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REPAYMENT_PARTIAL",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "REPAYMENT_CLEAN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REPAYMENT_PARTIAL",
    data: BytesLike
  ): Result;
}

export interface RepayUtils extends BaseContract {
  connect(runner?: ContractRunner | null): RepayUtils;
  waitForDeployment(): Promise<this>;

  interface: RepayUtilsInterface;

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

  REPAYMENT_CLEAN: TypedContractMethod<[], [bigint], "view">;

  REPAYMENT_PARTIAL: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "REPAYMENT_CLEAN"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "REPAYMENT_PARTIAL"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
