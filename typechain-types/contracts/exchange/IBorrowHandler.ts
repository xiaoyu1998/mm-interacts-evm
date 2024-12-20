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

export interface IBorrowHandlerInterface extends Interface {
  getFunction(nameOrSignature: "executeBorrow"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeBorrow",
    values: [AddressLike, BorrowUtils.BorrowParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeBorrow",
    data: BytesLike
  ): Result;
}

export interface IBorrowHandler extends BaseContract {
  connect(runner?: ContractRunner | null): IBorrowHandler;
  waitForDeployment(): Promise<this>;

  interface: IBorrowHandlerInterface;

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

  executeBorrow: TypedContractMethod<
    [account: AddressLike, params: BorrowUtils.BorrowParamsStruct],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "executeBorrow"
  ): TypedContractMethod<
    [account: AddressLike, params: BorrowUtils.BorrowParamsStruct],
    [void],
    "nonpayable"
  >;

  filters: {};
}
