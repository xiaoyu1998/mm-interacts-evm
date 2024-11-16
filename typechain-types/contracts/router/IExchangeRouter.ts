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

export declare namespace LiquidityUtils {
  export type AddParamsStruct = {
    token0: AddressLike;
    token1: AddressLike;
    to: AddressLike;
  };

  export type AddParamsStructOutput = [
    token0: string,
    token1: string,
    to: string
  ] & { token0: string; token1: string; to: string };

  export type RemoveParamsStruct = {
    token0: AddressLike;
    token1: AddressLike;
    liquidity: BigNumberish;
    to: AddressLike;
  };

  export type RemoveParamsStructOutput = [
    token0: string,
    token1: string,
    liquidity: bigint,
    to: string
  ] & { token0: string; token1: string; liquidity: bigint; to: string };
}

export declare namespace BorrowUtils {
  export type BorrowParamsStruct = {
    positionId: BigNumberish;
    tokenIndex: BigNumberish;
    borrowAmount: BigNumberish;
  };

  export type BorrowParamsStructOutput = [
    positionId: bigint,
    tokenIndex: bigint,
    borrowAmount: bigint
  ] & { positionId: bigint; tokenIndex: bigint; borrowAmount: bigint };
}

export declare namespace CloseUtils {
  export type CloseParamsStruct = { positionId: BigNumberish };

  export type CloseParamsStructOutput = [positionId: bigint] & {
    positionId: bigint;
  };
}

export declare namespace DepositUtils {
  export type DepositParamsStruct = {
    positionId: BigNumberish;
    token0: AddressLike;
    token1: AddressLike;
    tokenIndex: BigNumberish;
  };

  export type DepositParamsStructOutput = [
    positionId: bigint,
    token0: string,
    token1: string,
    tokenIndex: bigint
  ] & {
    positionId: bigint;
    token0: string;
    token1: string;
    tokenIndex: bigint;
  };
}

export declare namespace LiquidationUtils {
  export type LiquidationParamsStruct = {
    account: AddressLike;
    positionId: BigNumberish;
  };

  export type LiquidationParamsStructOutput = [
    account: string,
    positionId: bigint
  ] & { account: string; positionId: bigint };
}

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

export declare namespace WithdrawUtils {
  export type WithdrawParamsStruct = {
    positionId: BigNumberish;
    tokenIndex: BigNumberish;
    withdrawAmount: BigNumberish;
    to: AddressLike;
  };

  export type WithdrawParamsStructOutput = [
    positionId: bigint,
    tokenIndex: bigint,
    withdrawAmount: bigint,
    to: string
  ] & {
    positionId: bigint;
    tokenIndex: bigint;
    withdrawAmount: bigint;
    to: string;
  };
}

export interface IExchangeRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "executeAdd"
      | "executeBorrow"
      | "executeClose"
      | "executeDeposit"
      | "executeLiquidation"
      | "executeRemove"
      | "executeRepay"
      | "executeSwap"
      | "executeSwapInPosition"
      | "executeWithdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeAdd",
    values: [LiquidityUtils.AddParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBorrow",
    values: [BorrowUtils.BorrowParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeClose",
    values: [CloseUtils.CloseParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDeposit",
    values: [DepositUtils.DepositParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeLiquidation",
    values: [LiquidationUtils.LiquidationParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeRemove",
    values: [LiquidityUtils.RemoveParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeRepay",
    values: [RepayUtils.RepayParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSwap",
    values: [SwapUtils.SwapParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSwapInPosition",
    values: [SwapUtils.SwapInPositionParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithdraw",
    values: [WithdrawUtils.WithdrawParamsStruct]
  ): string;

  decodeFunctionResult(functionFragment: "executeAdd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeClose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeRemove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeRepay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSwapInPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeWithdraw",
    data: BytesLike
  ): Result;
}

export interface IExchangeRouter extends BaseContract {
  connect(runner?: ContractRunner | null): IExchangeRouter;
  waitForDeployment(): Promise<this>;

  interface: IExchangeRouterInterface;

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

  executeAdd: TypedContractMethod<
    [params: LiquidityUtils.AddParamsStruct],
    [void],
    "payable"
  >;

  executeBorrow: TypedContractMethod<
    [params: BorrowUtils.BorrowParamsStruct],
    [void],
    "payable"
  >;

  executeClose: TypedContractMethod<
    [params: CloseUtils.CloseParamsStruct],
    [void],
    "payable"
  >;

  executeDeposit: TypedContractMethod<
    [params: DepositUtils.DepositParamsStruct],
    [void],
    "payable"
  >;

  executeLiquidation: TypedContractMethod<
    [params: LiquidationUtils.LiquidationParamsStruct],
    [void],
    "payable"
  >;

  executeRemove: TypedContractMethod<
    [params: LiquidityUtils.RemoveParamsStruct],
    [void],
    "payable"
  >;

  executeRepay: TypedContractMethod<
    [params: RepayUtils.RepayParamsStruct],
    [void],
    "payable"
  >;

  executeSwap: TypedContractMethod<
    [params: SwapUtils.SwapParamsStruct],
    [void],
    "payable"
  >;

  executeSwapInPosition: TypedContractMethod<
    [params: SwapUtils.SwapInPositionParamsStruct],
    [void],
    "payable"
  >;

  executeWithdraw: TypedContractMethod<
    [params: WithdrawUtils.WithdrawParamsStruct],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "executeAdd"
  ): TypedContractMethod<
    [params: LiquidityUtils.AddParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeBorrow"
  ): TypedContractMethod<
    [params: BorrowUtils.BorrowParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeClose"
  ): TypedContractMethod<
    [params: CloseUtils.CloseParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeDeposit"
  ): TypedContractMethod<
    [params: DepositUtils.DepositParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeLiquidation"
  ): TypedContractMethod<
    [params: LiquidationUtils.LiquidationParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeRemove"
  ): TypedContractMethod<
    [params: LiquidityUtils.RemoveParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeRepay"
  ): TypedContractMethod<
    [params: RepayUtils.RepayParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeSwap"
  ): TypedContractMethod<
    [params: SwapUtils.SwapParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeSwapInPosition"
  ): TypedContractMethod<
    [params: SwapUtils.SwapInPositionParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeWithdraw"
  ): TypedContractMethod<
    [params: WithdrawUtils.WithdrawParamsStruct],
    [void],
    "payable"
  >;

  filters: {};
}