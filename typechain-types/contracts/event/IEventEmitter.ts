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

export interface IEventEmitterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "emitBorrow"
      | "emitClaimFees"
      | "emitClose"
      | "emitClosePosition"
      | "emitDeposit"
      | "emitLiquidation"
      | "emitPoolUpdated"
      | "emitPositionLiquidation"
      | "emitRepay"
      | "emitSupply"
      | "emitSwap"
      | "emitWithdraw(address,address,address,uint256,uint256,uint256)"
      | "emitWithdraw(address,address,address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "emitBorrow",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emitClaimFees",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitClose",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitClosePosition",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emitDeposit",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitLiquidation",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emitPoolUpdated",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emitPositionLiquidation",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emitRepay",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      boolean,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emitSupply",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitSwap",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emitWithdraw(address,address,address,uint256,uint256,uint256)",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emitWithdraw(address,address,address,uint256)",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "emitBorrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emitClaimFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "emitClose", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emitClosePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitPoolUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitPositionLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "emitRepay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "emitSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "emitSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emitWithdraw(address,address,address,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitWithdraw(address,address,address,uint256)",
    data: BytesLike
  ): Result;
}

export interface IEventEmitter extends BaseContract {
  connect(runner?: ContractRunner | null): IEventEmitter;
  waitForDeployment(): Promise<this>;

  interface: IEventEmitterInterface;

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

  emitBorrow: TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      borrowAmount: BigNumberish,
      borrowRate: BigNumberish,
      collateral: BigNumberish,
      debtScaled: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitClaimFees: TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      scaledUnclaimedFee: BigNumberish,
      liquidityIndex: BigNumberish,
      unclaimedFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitClose: TypedContractMethod<
    [
      underlyingAssetUsd: AddressLike,
      account: AddressLike,
      amountUsdStartClose: BigNumberish,
      amountUsdAfterRepayAndSellCollateral: BigNumberish,
      amountUsdAfterBuyCollateralAndRepay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitClosePosition: TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      underlyingAssetUsd: AddressLike,
      account: AddressLike,
      collateralAmountToSell: BigNumberish,
      debtAmountClosed: BigNumberish,
      remainAmount: BigNumberish,
      remainAmountUsd: BigNumberish,
      collateralUsd: BigNumberish,
      debtScaledUsd: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitDeposit: TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      depositAmount: BigNumberish,
      collateral: BigNumberish,
      debtScaled: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitLiquidation: TypedContractMethod<
    [
      liquidator: AddressLike,
      account: AddressLike,
      marginLevel: BigNumberish,
      marginLevelLiquidationThreshold: BigNumberish,
      totalCollateralUsd: BigNumberish,
      totalDebtUsd: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitPoolUpdated: TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      liquidityRate: BigNumberish,
      borrowRate: BigNumberish,
      liquidityIndex: BigNumberish,
      borrowIndex: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitPositionLiquidation: TypedContractMethod<
    [
      liquidator: AddressLike,
      underlyingAsset: AddressLike,
      account: AddressLike,
      collateral: BigNumberish,
      debt: BigNumberish,
      price: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitRepay: TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      repayer: AddressLike,
      repayAmount: BigNumberish,
      useCollateral: boolean,
      collateral: BigNumberish,
      debtScaled: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitSupply: TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      to: AddressLike,
      SupplyAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  emitSwap: TypedContractMethod<
    [
      underlyingAssetIn: AddressLike,
      underlyingAssetOut: AddressLike,
      account: AddressLike,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      fee: BigNumberish,
      collateralIn: BigNumberish,
      debtScaledIn: BigNumberish,
      collateralOut: BigNumberish,
      debtScaledOut: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  "emitWithdraw(address,address,address,uint256,uint256,uint256)": TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      to: AddressLike,
      withdrawAmount: BigNumberish,
      collateral: BigNumberish,
      debtScaled: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  "emitWithdraw(address,address,address,uint256)": TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      to: AddressLike,
      withdrawAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "emitBorrow"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      borrowAmount: BigNumberish,
      borrowRate: BigNumberish,
      collateral: BigNumberish,
      debtScaled: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitClaimFees"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      scaledUnclaimedFee: BigNumberish,
      liquidityIndex: BigNumberish,
      unclaimedFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitClose"
  ): TypedContractMethod<
    [
      underlyingAssetUsd: AddressLike,
      account: AddressLike,
      amountUsdStartClose: BigNumberish,
      amountUsdAfterRepayAndSellCollateral: BigNumberish,
      amountUsdAfterBuyCollateralAndRepay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitClosePosition"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      underlyingAssetUsd: AddressLike,
      account: AddressLike,
      collateralAmountToSell: BigNumberish,
      debtAmountClosed: BigNumberish,
      remainAmount: BigNumberish,
      remainAmountUsd: BigNumberish,
      collateralUsd: BigNumberish,
      debtScaledUsd: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitDeposit"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      depositAmount: BigNumberish,
      collateral: BigNumberish,
      debtScaled: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitLiquidation"
  ): TypedContractMethod<
    [
      liquidator: AddressLike,
      account: AddressLike,
      marginLevel: BigNumberish,
      marginLevelLiquidationThreshold: BigNumberish,
      totalCollateralUsd: BigNumberish,
      totalDebtUsd: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitPoolUpdated"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      liquidityRate: BigNumberish,
      borrowRate: BigNumberish,
      liquidityIndex: BigNumberish,
      borrowIndex: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitPositionLiquidation"
  ): TypedContractMethod<
    [
      liquidator: AddressLike,
      underlyingAsset: AddressLike,
      account: AddressLike,
      collateral: BigNumberish,
      debt: BigNumberish,
      price: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitRepay"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      repayer: AddressLike,
      repayAmount: BigNumberish,
      useCollateral: boolean,
      collateral: BigNumberish,
      debtScaled: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitSupply"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      to: AddressLike,
      SupplyAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitSwap"
  ): TypedContractMethod<
    [
      underlyingAssetIn: AddressLike,
      underlyingAssetOut: AddressLike,
      account: AddressLike,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      fee: BigNumberish,
      collateralIn: BigNumberish,
      debtScaledIn: BigNumberish,
      collateralOut: BigNumberish,
      debtScaledOut: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitWithdraw(address,address,address,uint256,uint256,uint256)"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      to: AddressLike,
      withdrawAmount: BigNumberish,
      collateral: BigNumberish,
      debtScaled: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emitWithdraw(address,address,address,uint256)"
  ): TypedContractMethod<
    [
      underlyingAsset: AddressLike,
      account: AddressLike,
      to: AddressLike,
      withdrawAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
