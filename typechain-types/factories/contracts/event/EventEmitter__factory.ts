/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  EventEmitter,
  EventEmitterInterface,
} from "../../../contracts/event/EventEmitter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "adder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeAmount",
        type: "uint256",
      },
    ],
    name: "Add",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseDebtScaled",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeDebtScaled",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scaledUnclaimedFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unclaimedFee",
        type: "uint256",
      },
    ],
    name: "ClaimFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "poolUsd",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUsdStartClose",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUsdAfterRepayAndSellCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUsdAfterBuyCollateralAndRepay",
        type: "uint256",
      },
    ],
    name: "Close",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseDebtScaled",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeDebtScaled",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "marginLevel",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "marginLevelLiquidationThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalCollateralUsd",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalDebtUsd",
        type: "uint256",
      },
    ],
    name: "Liquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowIndex",
        type: "uint256",
      },
    ],
    name: "PoolUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "remover",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeAmount",
        type: "uint256",
      },
    ],
    name: "Remove",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "repayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseDebtScaled",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeDebtScaled",
        type: "uint256",
      },
    ],
    name: "Repay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseDebtScaled",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeDebtScaled",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseDebtScaled",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "memeDebtScaled",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memeAmount",
        type: "uint256",
      },
    ],
    name: "emitAdd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "baseCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseDebtScaled",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "memeCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "memeDebtScaled",
            type: "uint256",
          },
        ],
        internalType: "struct Event.Liquidation",
        name: "liquidation",
        type: "tuple",
      },
    ],
    name: "emitBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "scaledUnclaimedFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unclaimedFee",
        type: "uint256",
      },
    ],
    name: "emitClaimFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingAssetUsd",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountUsdStartClose",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountUsdAfterRepayAndSellCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountUsdAfterBuyCollateralAndRepay",
        type: "uint256",
      },
    ],
    name: "emitClose",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseDebtScaled",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memeCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memeDebtScaled",
        type: "uint256",
      },
    ],
    name: "emitDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "marginLevel",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "marginLevelLiquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCollateralUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDebtUsd",
        type: "uint256",
      },
    ],
    name: "emitLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowIndex",
        type: "uint256",
      },
    ],
    name: "emitPoolUpdated",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "remover",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memeAmount",
        type: "uint256",
      },
    ],
    name: "emitRemove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "repayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "baseCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseDebtScaled",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "memeCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "memeDebtScaled",
            type: "uint256",
          },
        ],
        internalType: "struct Event.Liquidation",
        name: "liquidation",
        type: "tuple",
      },
    ],
    name: "emitRepay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "baseCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseDebtScaled",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "memeCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "memeDebtScaled",
            type: "uint256",
          },
        ],
        internalType: "struct Event.Liquidation",
        name: "liquidation",
        type: "tuple",
      },
    ],
    name: "emitSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "memeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseDebtScaled",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memeCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memeDebtScaled",
        type: "uint256",
      },
    ],
    name: "emitWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611bf9380380611bf9833981810160405281019061003291906100e3565b808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050610110565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009e82610073565b9050919050565b60006100b082610093565b9050919050565b6100c0816100a5565b81146100cb57600080fd5b50565b6000815190506100dd816100b7565b92915050565b6000602082840312156100f9576100f861006e565b5b6000610107848285016100ce565b91505092915050565b608051611ac76101326000396000818161046e0152610afa0152611ac76000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806389cad4d91161007157806389cad4d91461016357806394e0dd1d1461017f57806396de247f1461019b5780639c845792146101b75780639ed486eb146101d3578063ea34a577146101ef576100b4565b806315f762d5146100b9578063292ae722146100d5578063324ac765146100f15780634a4a7b041461010d5780637c24dab71461012b5780638262009e14610147575b600080fd5b6100d360048036038101906100ce9190610c7e565b61020b565b005b6100ef60048036038101906100ea9190610d48565b6102d5565b005b61010b60048036038101906101069190610dea565b610399565b005b61011561046c565b6040516101229190610ec4565b60405180910390f35b61014560048036038101906101409190610edf565b610490565b005b610161600480360381019061015c919061109c565b61054e565b005b61017d6004803603810190610178919061113f565b610628565b005b610199600480360381019061019491906111f5565b6106ef565b005b6101b560048036038101906101b09190611282565b6107c5565b005b6101d160048036038101906101cc9190611325565b61089f565b005b6101ed60048036038101906101e8919061138c565b61095a565b005b61020960048036038101906102049190611419565b610a1b565b005b61026e60405160200161021d9061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8873ffffffffffffffffffffffffffffffffffffffff167fb50b96cf5652f7259ba33891436a3874ecce39e522a18fb973cb021949f573df89898989898989896040516102c298979695949392919061156a565b60405180910390a2505050505050505050565b6103386040516020016102e79061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8673ffffffffffffffffffffffffffffffffffffffff167fe10a339dd5329df14a8ec13eb4115b75ab032fd40e2ff2594a4a5bf80e497a41878787878787604051610388969594939291906115e8565b60405180910390a250505050505050565b6103fc6040516020016103ab9061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fb149470201600d81e1698a9d001d20f8d2a036d2c0f425436b65a154e95eb53a85858560405161045d93929190611649565b60405180910390a35050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6104f36040516020016104a29061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8473ffffffffffffffffffffffffffffffffffffffff167fc320a8529b15b851aaa68519919ac344e1caceaf4f47d15df6e58181dfec63198585858560405161053f9493929190611680565b60405180910390a25050505050565b6105b16040516020016105609061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8673ffffffffffffffffffffffffffffffffffffffff167f4fc3cf57f1c587a9f0808812dd72668a2b82f54411b0737d06c4043ff044cf9a87878787878760000151886020015189604001518a60600151604051610617999897969594939291906116d4565b60405180910390a250505050505050565b61068b60405160200161063a9061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8773ffffffffffffffffffffffffffffffffffffffff167f259af91af89c9a6b13d53607d57f43b151235f69d54d2339133e57cfb62bf4c5888888888888886040516106dd9796959493929190611761565b60405180910390a25050505050505050565b6107526040516020016107019061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fc70fd1eb40d7ae44a5425c09dece5a023b47277356e005b6caef1600cfc7334e868686866040516107b59493929190611680565b60405180910390a3505050505050565b6108286040516020016107d79061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8673ffffffffffffffffffffffffffffffffffffffff167f533855cb8a87f0995f6c3390665eb37da822f5550b13a973a77906d018a2a89c87878787878760000151886020015189604001518a6060015160405161088e999897969594939291906117d0565b60405180910390a250505050505050565b6109026040516020016108b19061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8373ffffffffffffffffffffffffffffffffffffffff167fd2e6085315c6e1c1c7406a47c7d006a8c1f931396d868c16046dea71365ff03184848460405161094c93929190611649565b60405180910390a250505050565b6109bd60405160200161096c9061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8573ffffffffffffffffffffffffffffffffffffffff167fcbdb4dd8f84983be7c158013b8d74dacf114333078949f99dfb5b66e6621964a8686868686604051610a0b95949392919061185d565b60405180910390a2505050505050565b610a7e604051602001610a2d9061152c565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610af8565b8773ffffffffffffffffffffffffffffffffffffffff167f2ef1e8737d096826c9abef1201bb205ea380555780a54bd904cf67ca7dba8c5f888888888888886000015189602001518a604001518b60600151604051610ae69a999897969594939291906118b0565b60405180910390a25050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac4ab3fb33846040518363ffffffff1660e01b8152600401610b53929190611965565b602060405180830381865afa158015610b70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9491906119c6565b610bd75733816040517fa35b150b000000000000000000000000000000000000000000000000000000008152600401610bce929190611a61565b60405180910390fd5b5050565b6000604051905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c1582610bea565b9050919050565b610c2581610c0a565b8114610c3057600080fd5b50565b600081359050610c4281610c1c565b92915050565b6000819050919050565b610c5b81610c48565b8114610c6657600080fd5b50565b600081359050610c7881610c52565b92915050565b60008060008060008060008060006101208a8c031215610ca157610ca0610be5565b5b6000610caf8c828d01610c33565b9950506020610cc08c828d01610c33565b9850506040610cd18c828d01610c33565b9750506060610ce28c828d01610c69565b9650506080610cf38c828d01610c33565b95505060a0610d048c828d01610c69565b94505060c0610d158c828d01610c69565b93505060e0610d268c828d01610c69565b925050610100610d388c828d01610c69565b9150509295985092959850929598565b600080600080600080600060e0888a031215610d6757610d66610be5565b5b6000610d758a828b01610c33565b9750506020610d868a828b01610c33565b9650506040610d978a828b01610c33565b9550506060610da88a828b01610c69565b9450506080610db98a828b01610c33565b93505060a0610dca8a828b01610c69565b92505060c0610ddb8a828b01610c69565b91505092959891949750929550565b600080600080600060a08688031215610e0657610e05610be5565b5b6000610e1488828901610c33565b9550506020610e2588828901610c33565b9450506040610e3688828901610c69565b9350506060610e4788828901610c69565b9250506080610e5888828901610c69565b9150509295509295909350565b6000819050919050565b6000610e8a610e85610e8084610bea565b610e65565b610bea565b9050919050565b6000610e9c82610e6f565b9050919050565b6000610eae82610e91565b9050919050565b610ebe81610ea3565b82525050565b6000602082019050610ed96000830184610eb5565b92915050565b600080600080600060a08688031215610efb57610efa610be5565b5b6000610f0988828901610c33565b9550506020610f1a88828901610c69565b9450506040610f2b88828901610c69565b9350506060610f3c88828901610c69565b9250506080610f4d88828901610c69565b9150509295509295909350565b600060ff82169050919050565b610f7081610f5a565b8114610f7b57600080fd5b50565b600081359050610f8d81610f67565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610fe182610f98565b810181811067ffffffffffffffff8211171561100057610fff610fa9565b5b80604052505050565b6000611013610bdb565b905061101f8282610fd8565b919050565b60006080828403121561103a57611039610f93565b5b6110446080611009565b9050600061105484828501610c69565b600083015250602061106884828501610c69565b602083015250604061107c84828501610c69565b604083015250606061109084828501610c69565b60608301525092915050565b6000806000806000806000610140888a0312156110bc576110bb610be5565b5b60006110ca8a828b01610c33565b97505060206110db8a828b01610c33565b96505060406110ec8a828b01610c33565b95505060606110fd8a828b01610c69565b945050608061110e8a828b01610f7e565b93505060a061111f8a828b01610c69565b92505060c06111308a828b01611024565b91505092959891949750929550565b600080600080600080600080610100898b0312156111605761115f610be5565b5b600061116e8b828c01610c33565b985050602061117f8b828c01610c33565b97505060406111908b828c01610c33565b96505060606111a18b828c01610c69565b95505060806111b28b828c01610c69565b94505060a06111c38b828c01610c69565b93505060c06111d48b828c01610c69565b92505060e06111e58b828c01610c69565b9150509295985092959890939650565b60008060008060008060c0878903121561121257611211610be5565b5b600061122089828a01610c33565b965050602061123189828a01610c33565b955050604061124289828a01610c69565b945050606061125389828a01610c69565b935050608061126489828a01610c69565b92505060a061127589828a01610c69565b9150509295509295509295565b6000806000806000806000610140888a0312156112a2576112a1610be5565b5b60006112b08a828b01610c33565b97505060206112c18a828b01610c33565b96505060406112d28a828b01610c33565b95505060606112e38a828b01610c69565b94505060806112f48a828b01610c69565b93505060a06113058a828b01610c69565b92505060c06113168a828b01611024565b91505092959891949750929550565b6000806000806080858703121561133f5761133e610be5565b5b600061134d87828801610c33565b945050602061135e87828801610c69565b935050604061136f87828801610c69565b925050606061138087828801610c69565b91505092959194509250565b60008060008060008060c087890312156113a9576113a8610be5565b5b60006113b789828a01610c33565b96505060206113c889828a01610c33565b95505060406113d989828a01610c33565b94505060606113ea89828a01610c33565b93505060806113fb89828a01610c69565b92505060a061140c89828a01610c69565b9150509295509295509295565b600080600080600080600080610160898b03121561143a57611439610be5565b5b60006114488b828c01610c33565b98505060206114598b828c01610c33565b975050604061146a8b828c01610c33565b965050606061147b8b828c01610c69565b955050608061148c8b828c01610f7e565b94505060a061149d8b828c01610c69565b93505060c06114ae8b828c01610c69565b92505060e06114bf8b828c01611024565b9150509295985092959890939650565b600082825260208201905092915050565b7f434f4e54524f4c4c455200000000000000000000000000000000000000000000600082015250565b6000611516600a836114cf565b9150611521826114e0565b602082019050919050565b6000602082019050818103600083015261154581611509565b9050919050565b61155581610c0a565b82525050565b61156481610c48565b82525050565b600061010082019050611580600083018b61154c565b61158d602083018a61154c565b61159a604083018961155b565b6115a7606083018861154c565b6115b4608083018761155b565b6115c160a083018661155b565b6115ce60c083018561155b565b6115db60e083018461155b565b9998505050505050505050565b600060c0820190506115fd600083018961154c565b61160a602083018861154c565b611617604083018761155b565b611624606083018661154c565b611631608083018561155b565b61163e60a083018461155b565b979650505050505050565b600060608201905061165e600083018661155b565b61166b602083018561155b565b611678604083018461155b565b949350505050565b6000608082019050611695600083018761155b565b6116a2602083018661155b565b6116af604083018561155b565b6116bc606083018461155b565b95945050505050565b6116ce81610f5a565b82525050565b6000610120820190506116ea600083018c61154c565b6116f7602083018b61154c565b611704604083018a61155b565b61171160608301896116c5565b61171e608083018861155b565b61172b60a083018761155b565b61173860c083018661155b565b61174560e083018561155b565b61175361010083018461155b565b9a9950505050505050505050565b600060e082019050611776600083018a61154c565b611783602083018961154c565b611790604083018861155b565b61179d606083018761155b565b6117aa608083018661155b565b6117b760a083018561155b565b6117c460c083018461155b565b98975050505050505050565b6000610120820190506117e6600083018c61154c565b6117f3602083018b61154c565b611800604083018a61155b565b61180d606083018961155b565b61181a608083018861155b565b61182760a083018761155b565b61183460c083018661155b565b61184160e083018561155b565b61184f61010083018461155b565b9a9950505050505050505050565b600060a082019050611872600083018861154c565b61187f602083018761154c565b61188c604083018661154c565b611899606083018561155b565b6118a6608083018461155b565b9695505050505050565b6000610140820190506118c6600083018d61154c565b6118d3602083018c61154c565b6118e0604083018b61155b565b6118ed606083018a6116c5565b6118fa608083018961155b565b61190760a083018861155b565b61191460c083018761155b565b61192160e083018661155b565b61192f61010083018561155b565b61193d61012083018461155b565b9b9a5050505050505050505050565b6000819050919050565b61195f8161194c565b82525050565b600060408201905061197a600083018561154c565b6119876020830184611956565b9392505050565b60008115159050919050565b6119a38161198e565b81146119ae57600080fd5b50565b6000815190506119c08161199a565b92915050565b6000602082840312156119dc576119db610be5565b5b60006119ea848285016119b1565b91505092915050565b600081519050919050565b60005b83811015611a1c578082015181840152602081019050611a01565b60008484015250505050565b6000611a33826119f3565b611a3d81856114cf565b9350611a4d8185602086016119fe565b611a5681610f98565b840191505092915050565b6000604082019050611a76600083018561154c565b8181036020830152611a888184611a28565b9050939250505056fea2646970667358221220830eefb902e05e88b154c9fa4899a67ddf21a50ef80c847e57ddde3a66df97fb64736f6c634300081c0033";

type EventEmitterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EventEmitterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EventEmitter__factory extends ContractFactory {
  constructor(...args: EventEmitterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _roleStore: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_roleStore, overrides || {});
  }
  override deploy(
    _roleStore: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_roleStore, overrides || {}) as Promise<
      EventEmitter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EventEmitter__factory {
    return super.connect(runner) as EventEmitter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventEmitterInterface {
    return new Interface(_abi) as EventEmitterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EventEmitter {
    return new Contract(address, _abi, runner) as unknown as EventEmitter;
  }
}
