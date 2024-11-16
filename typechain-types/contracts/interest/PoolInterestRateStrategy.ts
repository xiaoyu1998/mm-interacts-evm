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

export declare namespace InterestUtils {
  export type CalculateInterestRatesParamsStruct = {
    totalAvailableReserve: BigNumberish;
    totalDebt: BigNumberish;
  };

  export type CalculateInterestRatesParamsStructOutput = [
    totalAvailableReserve: bigint,
    totalDebt: bigint
  ] & { totalAvailableReserve: bigint; totalDebt: bigint };
}

export interface PoolInterestRateStrategyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_EXCESS_USAGE_RATIO"
      | "OPTIMAL_USAGE_RATIO"
      | "calculateInterestRates"
      | "getOptimalUsageRatio"
      | "getRateSlope1"
      | "getRateSlope2"
      | "getRatebase"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_EXCESS_USAGE_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OPTIMAL_USAGE_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateInterestRates",
    values: [InterestUtils.CalculateInterestRatesParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getOptimalUsageRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRateSlope1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRateSlope2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRatebase",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_EXCESS_USAGE_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OPTIMAL_USAGE_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateInterestRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOptimalUsageRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRateSlope1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRateSlope2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRatebase",
    data: BytesLike
  ): Result;
}

export interface PoolInterestRateStrategy extends BaseContract {
  connect(runner?: ContractRunner | null): PoolInterestRateStrategy;
  waitForDeployment(): Promise<this>;

  interface: PoolInterestRateStrategyInterface;

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

  MAX_EXCESS_USAGE_RATIO: TypedContractMethod<[], [bigint], "view">;

  OPTIMAL_USAGE_RATIO: TypedContractMethod<[], [bigint], "view">;

  calculateInterestRates: TypedContractMethod<
    [params: InterestUtils.CalculateInterestRatesParamsStruct],
    [bigint],
    "view"
  >;

  getOptimalUsageRatio: TypedContractMethod<[], [bigint], "view">;

  getRateSlope1: TypedContractMethod<[], [bigint], "view">;

  getRateSlope2: TypedContractMethod<[], [bigint], "view">;

  getRatebase: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_EXCESS_USAGE_RATIO"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "OPTIMAL_USAGE_RATIO"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calculateInterestRates"
  ): TypedContractMethod<
    [params: InterestUtils.CalculateInterestRatesParamsStruct],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOptimalUsageRatio"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRateSlope1"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRateSlope2"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRatebase"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}