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

export interface PoolInterface extends Interface {
  getFunction(
    nameOrSignature: "BASE" | "MEME" | "PRICE_DECIMALS"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BASE", values?: undefined): string;
  encodeFunctionData(functionFragment: "MEME", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PRICE_DECIMALS",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "BASE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MEME", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_DECIMALS",
    data: BytesLike
  ): Result;
}

export interface Pool extends BaseContract {
  connect(runner?: ContractRunner | null): Pool;
  waitForDeployment(): Promise<this>;

  interface: PoolInterface;

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

  BASE: TypedContractMethod<[], [bigint], "view">;

  MEME: TypedContractMethod<[], [bigint], "view">;

  PRICE_DECIMALS: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BASE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MEME"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRICE_DECIMALS"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
