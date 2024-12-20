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

export declare namespace SwapUtils {
  export type SwapParamsStruct = {
    token0: AddressLike;
    token1: AddressLike;
    amount0In: BigNumberish;
    amount1In: BigNumberish;
    amount0Out: BigNumberish;
    amount1Out: BigNumberish;
    to: AddressLike;
  };

  export type SwapParamsStructOutput = [
    token0: string,
    token1: string,
    amount0In: bigint,
    amount1In: bigint,
    amount0Out: bigint,
    amount1Out: bigint,
    to: string
  ] & {
    token0: string;
    token1: string;
    amount0In: bigint;
    amount1In: bigint;
    amount0Out: bigint;
    amount1Out: bigint;
    to: string;
  };

  export type SwapInPositionParamsStruct = {
    positionId: BigNumberish;
    amount0In: BigNumberish;
    amount1In: BigNumberish;
    amount0Out: BigNumberish;
    amount1Out: BigNumberish;
  };

  export type SwapInPositionParamsStructOutput = [
    positionId: bigint,
    amount0In: bigint,
    amount1In: bigint,
    amount0Out: bigint,
    amount1Out: bigint
  ] & {
    positionId: bigint;
    amount0In: bigint;
    amount1In: bigint;
    amount0Out: bigint;
    amount1Out: bigint;
  };
}

export interface ISwapHandlerInterface extends Interface {
  getFunction(
    nameOrSignature: "executeSwap" | "executeSwapInPosition"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeSwap",
    values: [AddressLike, SwapUtils.SwapParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSwapInPosition",
    values: [AddressLike, SwapUtils.SwapInPositionParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSwapInPosition",
    data: BytesLike
  ): Result;
}

export interface ISwapHandler extends BaseContract {
  connect(runner?: ContractRunner | null): ISwapHandler;
  waitForDeployment(): Promise<this>;

  interface: ISwapHandlerInterface;

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

  executeSwap: TypedContractMethod<
    [account: AddressLike, params: SwapUtils.SwapParamsStruct],
    [void],
    "nonpayable"
  >;

  executeSwapInPosition: TypedContractMethod<
    [account: AddressLike, params: SwapUtils.SwapInPositionParamsStruct],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "executeSwap"
  ): TypedContractMethod<
    [account: AddressLike, params: SwapUtils.SwapParamsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "executeSwapInPosition"
  ): TypedContractMethod<
    [account: AddressLike, params: SwapUtils.SwapInPositionParamsStruct],
    [void],
    "nonpayable"
  >;

  filters: {};
}
