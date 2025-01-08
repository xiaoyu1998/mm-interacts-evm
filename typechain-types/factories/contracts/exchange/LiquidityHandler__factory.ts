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
  LiquidityHandler,
  LiquidityHandlerInterface,
} from "../../../contracts/exchange/LiquidityHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "_dataStore",
        type: "address",
      },
      {
        internalType: "contract EventEmitter",
        name: "_eventEmitter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyAddAmounts",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "EmptyPool",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyRemoveAmounts",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    name: "InsufficientUserBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableReserve0",
        type: "uint256",
      },
    ],
    name: "Reserve0Insufficient",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableReserve1",
        type: "uint256",
      },
    ],
    name: "Reserve1Insufficient",
    type: "error",
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
    inputs: [],
    name: "dataStore",
    outputs: [
      {
        internalType: "contract DataStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventEmitter",
    outputs: [
      {
        internalType: "contract EventEmitter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        components: [
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        internalType: "struct LiquidityUtils.AddParams",
        name: "AddParams",
        type: "tuple",
      },
    ],
    name: "executeAdd",
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
        components: [
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
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
        ],
        internalType: "struct LiquidityUtils.RemoveParams",
        name: "removeParams",
        type: "tuple",
      },
    ],
    name: "executeRemove",
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
  "0x60e060405234801561001057600080fd5b50604051613bc6380380613bc6833981810160405281019061003291906101cb565b82828073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505050505061021e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061010a826100df565b9050919050565b600061011c826100ff565b9050919050565b61012c81610111565b811461013757600080fd5b50565b60008151905061014981610123565b92915050565b600061015a826100ff565b9050919050565b61016a8161014f565b811461017557600080fd5b50565b60008151905061018781610161565b92915050565b6000610198826100ff565b9050919050565b6101a88161018d565b81146101b357600080fd5b50565b6000815190506101c58161019f565b92915050565b6000806000606084860312156101e4576101e36100da565b5b60006101f28682870161013a565b935050602061020386828701610178565b9250506040610214868287016101b6565b9150509250925092565b60805160a05160c051613942610284600039600081816101c80152818161037d015261046401526000818160f0015261065401526000818161018c015281816102a5015281816103410152818161048a0152818161058d015261093401526139426000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634a4a7b041461005c5780635ecd44e81461007a578063660d0d67146100965780637d237c99146100b45780639ff78c30146100d0575b600080fd5b6100646100ee565b60405161007191906127b4565b60405180910390f35b610094600480360381019061008f9190612840565b610112565b005b61009e6102a3565b6040516100ab91906128a1565b60405180910390f35b6100ce60048036038101906100c991906128db565b6102c7565b005b6100d8610462565b6040516100e5919061293c565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b61011a610486565b61017d60405160200161012c906129b4565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610652565b60006040518060a001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16815260200183600001602081019061021591906129d4565b73ffffffffffffffffffffffffffffffffffffffff16815260200183602001602081019061024391906129d4565b73ffffffffffffffffffffffffffffffffffffffff16815260200183604001602081019061027191906129d4565b73ffffffffffffffffffffffffffffffffffffffff1681525090506102968382610735565b5061029f610932565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6102cf610486565b6103326040516020016102e1906129b4565b604051602081830303815290604052805190602001206040518060400160405280600a81526020017f434f4e54524f4c4c455200000000000000000000000000000000000000000000815250610652565b60006040518060c001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018360000160208101906103ca91906129d4565b73ffffffffffffffffffffffffffffffffffffffff1681526020018360200160208101906103f891906129d4565b73ffffffffffffffffffffffffffffffffffffffff1681526020018360400135815260200183606001602081019061043091906129d4565b73ffffffffffffffffffffffffffffffffffffffff16815250905061045583826109f8565b5061045e610932565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bd02d0f56040516020016104d390612a4d565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016105059190612a86565b602060405180830381865afa158015610522573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105469190612ad7565b90506000811461058b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058290612b50565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e2a4853a6040516020016105d690612a4d565b6040516020818303038152906040528051906020012060016040518363ffffffff1660e01b815260040161060b929190612b7f565b6020604051808303816000875af115801561062a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064e9190612ad7565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ac4ab3fb33846040518363ffffffff1660e01b81526004016106ad929190612bb7565b602060405180830381865afa1580156106ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ee9190612c18565b6107315733816040517fa35b150b000000000000000000000000000000000000000000000000000000008152600401610728929190612cc4565b60405180910390fd5b5050565b60008061074f836000015184604001518560600151610d02565b9150915060008260200151905060008173ffffffffffffffffffffffffffffffffffffffff1663352f9aed86604001516040518263ffffffff1660e01b815260040161079b9190612cf4565b6020604051808303816000875af11580156107ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de9190612ad7565b905060008273ffffffffffffffffffffffffffffffffffffffff1663352f9aed87606001516040518263ffffffff1660e01b815260040161081f9190612cf4565b6020604051808303816000875af115801561083e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108629190612ad7565b905061086e8282610dbb565b61087f858484848a60800151610e05565b61088d866000015186610f78565b61089b866020015186610fca565b73__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__63be6afc39876000015186886040518463ffffffff1660e01b81526004016108da93929190612ee2565b60006040518083038186803b1580156108f257600080fd5b505af4158015610906573d6000803e3d6000fd5b50505050610929866020015188886040015189606001518a6080015187876111b7565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e2a4853a60405160200161097d90612a4d565b6040516020818303038152906040528051906020012060006040518363ffffffff1660e01b81526004016109b2929190612b7f565b6020604051808303816000875af11580156109d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f59190612ad7565b50565b610a00612564565b610a17826000015183604001518460600151610d02565b8260000183602001828152508290525050610a3b8382600001518460800151611235565b610a4d81600001518360800151611344565b846101000185610120018660a0018760c0018481525084815250848152508481525050505050610a918161010001518261012001518360a001518460c001516115c6565b806000015160200151816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050806040015173ffffffffffffffffffffffffffffffffffffffff16639dc29fac8484608001516040518363ffffffff1660e01b8152600401610b14929190612f1a565b600060405180830381600087803b158015610b2e57600080fd5b505af1158015610b42573d6000803e3d6000fd5b50505050806040015173ffffffffffffffffffffffffffffffffffffffff1663078d3b7983604001518460a001518461010001516040518463ffffffff1660e01b8152600401610b9493929190612f43565b600060405180830381600087803b158015610bae57600080fd5b505af1158015610bc2573d6000803e3d6000fd5b50505050806040015173ffffffffffffffffffffffffffffffffffffffff1663078d3b7983606001518460a001518461012001516040518463ffffffff1660e01b8152600401610c1493929190612f43565b600060405180830381600087803b158015610c2e57600080fd5b505af1158015610c42573d6000803e3d6000fd5b50505050610c5882602001518260000151610fca565b73__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__63be6afc398360000151836020015184600001516040518463ffffffff1660e01b8152600401610c9f93929190612ee2565b60006040518083038186803b158015610cb757600080fd5b505af4158015610ccb573d6000803e3d6000fd5b50505050610cfd8260200151848460400151856060015186608001518760a0015187610100015188610120015161165a565b505050565b610d0a6125d6565b600080610d1785856116db565b9050600073__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__637b82d74e88846040518363ffffffff1660e01b8152600401610d54929190612f7a565b61024060405180830381865af4158015610d72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d969190613238565b9050610da28183611779565b610dab816117f2565b8082935093505050935093915050565b6000821480610dca5750600081145b15610e01576040517f6977ca0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6000610e14868585600161199e565b905060008573ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e879190612ad7565b905060008103610f02578573ffffffffffffffffffffffffffffffffffffffff166340c10f1960006103e86040518363ffffffff1660e01b8152600401610ecf929190612f1a565b600060405180830381600087803b158015610ee957600080fd5b505af1158015610efd573d6000803e3d6000fd5b505050505b8573ffffffffffffffffffffffffffffffffffffffff166340c10f1984846040518363ffffffff1660e01b8152600401610f3d929190612f1a565b600060405180830381600087803b158015610f5757600080fd5b505af1158015610f6b573d6000803e3d6000fd5b5050505050505050505050565b610f858160600151611b25565b610fc657600080610f968484611b55565b91509150818110610fc357610fb960018460600151611bc390919063ffffffff16565b8360600181815250505b50505b5050565b610fd2612637565b610fdd826000611c07565b8260000183602001828152508281525050508060000151816040018181525050816040015173ffffffffffffffffffffffffffffffffffffffff1663fdd63ecf6040518060600160405280846000015181526020018460200151815260200184604001518152506040518263ffffffff1660e01b815260040161106091906132b7565b602060405180830381865afa15801561107d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a19190612ad7565b8260000151600060ff16600281106110bc576110bb6132d2565b5b602002015160400181815250506110d4826001611c07565b826000018360200182815250828152505050816040015173ffffffffffffffffffffffffffffffffffffffff1663fdd63ecf6040518060600160405280846000015181526020018460200151815260200184604001518152506040518263ffffffff1660e01b815260040161114991906132b7565b602060405180830381865afa158015611166573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118a9190612ad7565b8260000151600160ff16600281106111a5576111a46132d2565b5b60200201516040018181525050505050565b8673ffffffffffffffffffffffffffffffffffffffff16639ed486eb8787878787876040518763ffffffff1660e01b81526004016111fa96959493929190613301565b600060405180830381600087803b15801561121457600080fd5b505af1158015611228573d6000803e3d6000fd5b5050505050505050505050565b6000810361126f576040517f5186591100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008260200151905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b81526004016112b39190612cf4565b602060405180830381865afa1580156112d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f49190612ad7565b90508083111561133d5780836040517f5f504d20000000000000000000000000000000000000000000000000000000008152600401611334929190613362565b60405180910390fd5b5050505050565b600080600080611352612658565b866020015173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c59190612ad7565b8160200181815250506113da87600080611c57565b909150508260400183608001828152508281525050506113fd8760016000611c57565b90915050826060018360a001828152508281525050506114268682604001518360200151611d2b565b816101000181815250506114438682606001518360200151611d2b565b816101200181815250506114906040518060400160405280601081526020017f766172732e746f74616c537570706c79000000000000000000000000000000008152508260200151611e32565b6114d36040518060400160405280601281526020017f766172732e7072696365526573657276653000000000000000000000000000008152508260400151611e32565b6115166040518060400160405280601281526020017f766172732e7072696365526573657276653100000000000000000000000000008152508260600151611e32565b61155a6040518060400160405280600c81526020017f766172732e616d6f756e74300000000000000000000000000000000000000000815250826101000151611e32565b61159e6040518060400160405280600c81526020017f766172732e616d6f756e74310000000000000000000000000000000000000000815250826101200151611e32565b80610100015181610120015182608001518360a0015194509450945094505092959194509250565b8184111561160d5783826040517f1fc107c1000000000000000000000000000000000000000000000000000000008152600401611604929190613362565b60405180910390fd5b808311156116545782816040517f0e793baf00000000000000000000000000000000000000000000000000000000815260040161164b929190613362565b60405180910390fd5b50505050565b8773ffffffffffffffffffffffffffffffffffffffff1663292ae722888888888888886040518863ffffffff1660e01b815260040161169f979695949392919061338b565b600060405180830381600087803b1580156116b957600080fd5b505af11580156116cd573d6000803e3d6000fd5b505050505050505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161061171757818361171a565b82825b809350819450505060405160200161173190613446565b60405160208183030381529060405280519060200120838360405160200161175b93929190613466565b60405160208183030381529060405280519060200120905092915050565b600073ffffffffffffffffffffffffffffffffffffffff16826020015173ffffffffffffffffffffffffffffffffffffffff16036117ee57806040517f7357d91f0000000000000000000000000000000000000000000000000000000081526004016117e59190612a86565b60405180910390fd5b5050565b60006117fc611e7d565b90508082608001510361180f575061199b565b60008260000151600060ff166002811061182c5761182b6132d2565b5b602002015160a00151146118cf57600061186d8360000151600060ff166002811061185a576118596132d2565b5b6020020151604001518460800151611e85565b90506118a5818460000151600060ff166002811061188e5761188d6132d2565b5b602002015160200151611ee090919063ffffffff16565b8360000151600060ff16600281106118c0576118bf6132d2565b5b60200201516020018181525050505b60008260000151600160ff16600281106118ec576118eb6132d2565b5b602002015160a001511461198f57600061192d8360000151600160ff166002811061191a576119196132d2565b5b6020020151604001518460800151611e85565b9050611965818460000151600160ff166002811061194e5761194d6132d2565b5b602002015160200151611ee090919063ffffffff16565b8360000151600160ff16600281106119805761197f6132d2565b5b60200201516020018181525050505b80826080018181525050505b50565b60006119a8612658565b856020015173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1b9190612ad7565b816020018181525050611a3086600080611c57565b9091509050508160c0018181525050611a4c8660016000611c57565b9091509050508160e00181815250508215611a9457848160c001818151611a7391906134cc565b91508181525050838160e001818151611a8c91906134cc565b915081815250505b6000816020015103611add57611acf6103e8611ac1611abc8789611f2b90919063ffffffff16565b611f98565b61209190919063ffffffff16565b816000018181525050611b15565b611b0b611af38683602001518460c00151611d2b565b611b068684602001518560e00151611d2b565b6120ea565b8160000181815250505b8060000151915050949350505050565b6000807ffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffff19831614159050919050565b6000806000611b6984606001516000612103565b90506000611b7686612176565b90506000611b9d8284600a611b8b9190613633565b6b033b2e3c9fd0803ce8000000611d2b565b90506000611bad87600080611c57565b5050509050818195509550505050509250929050565b6000603382611bd3576000611bd6565b60015b60ff16901b7ffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffff841617905092915050565b6000806000611c3885600001518560ff1660028110611c2957611c286132d2565b5b6020020151866080015161221d565b90506000611c468686612262565b905080829350935050509250929050565b600080600080600087600001518760ff1660028110611c7957611c786132d2565b5b602002015190506000611c8c8989612262565b905060008103611cab5760008060008095509550955095505050611d22565b6000611cbb838b6080015161221d565b90506000611cd28984611ee090919063ffffffff16565b90506000808a14611cf557611cf0838361209190919063ffffffff16565b611cf8565b60005b90508284611d06919061367e565b848486611d1391906134cc565b83985098509850985050505050505b93509350935093565b6000808385029050600080198587098281108382030391505060008103611d6657838281611d5c57611d5b6136b2565b5b0492505050611e2b565b808411611d9f576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b6000611e7957611e786040518060400160405280600681526020017f2573202d25730000000000000000000000000000000000000000000000000000815250838361234f565b5b5050565b600042905090565b60008082611e91611e7d565b611e9b91906134cc565b84611ea691906136e1565b90506301e133808181611ebc57611ebb6136b2565b5b049050806b033b2e3c9fd0803ce8000000611ed7919061367e565b91505092915050565b6000816b019d971e4fe8401e740000006000190304831115821517611f0457600080fd5b6b033b2e3c9fd0803ce80000006b019d971e4fe8401e740000008385020104905092915050565b600080821480611f53575082828385611f4491906136e1565b925082611f519190613723565b145b611f92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f89906137a0565b60405180910390fd5b92915050565b6000808203611faa576000905061208c565b60006001611fb7846123ee565b901c6001901b90506001818481611fd157611fd06136b2565b5b048201901c90506001818481611fea57611fe96136b2565b5b048201901c90506001818481612003576120026136b2565b5b048201901c9050600181848161201c5761201b6136b2565b5b048201901c90506001818481612035576120346136b2565b5b048201901c9050600181848161204e5761204d6136b2565b5b048201901c90506001818481612067576120666136b2565b5b048201901c905061208881828581612082576120816136b2565b5b046120ea565b9150505b919050565b60008282846120a091906134cc565b91508111156120e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120db9061380c565b60405180910390fd5b92915050565b60008183106120f957816120fb565b825b905092915050565b6000807fffffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffff9050600060589050600160ff168460ff1603612165577fffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffffff9150606090505b8082198616901c9250505092915050565b60008173ffffffffffffffffffffffffffffffffffffffff1663bd02d0f56040516020016121a390613878565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016121d59190612a86565b602060405180830381865afa1580156121f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122169190612ad7565b9050919050565b6000808360a0015103612233576000905061225c565b600061223f84846124cf565b9050612258818560a00151611ee090919063ffffffff16565b9150505b92915050565b60008083600001518360ff166002811061227f5761227e6132d2565b5b602002015190506000846020015173ffffffffffffffffffffffffffffffffffffffff1663e42c08f283600001516040518263ffffffff1660e01b81526004016122c99190612cf4565b602060405180830381865afa1580156122e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061230a9190612ad7565b90506000810361231f57600092505050612349565b6000826060015190508260c00151818361233991906134cc565b61234391906134cc565b93505050505b92915050565b6123e983838360405160240161236793929190613898565b6040516020818303038152906040527f5821efa1000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061251e565b505050565b600080600090506000608084901c111561241057608083901c92506080810190505b6000604084901c111561242b57604083901c92506040810190505b6000602084901c111561244657602083901c92506020810190505b6000601084901c111561246157601083901c92506010810190505b6000600884901c111561247c57600883901c92506008810190505b6000600484901c111561249757600483901c92506004810190505b6000600284901c11156124b257600283901c92506002810190505b6000600184901c11156124c6576001810190505b80915050919050565b60006124d9611e7d565b82036124eb5782602001519050612518565b60006124fb846040015184611e85565b9050612514846020015182611ee090919063ffffffff16565b9150505b92915050565b6125358161252d612538612559565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6126ab819050919050565b6040518061014001604052806125786125d6565b815260200160008019168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060a001604052806125e96126b5565b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b604051806101400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6126b36138dd565b565b60405180604001604052806002905b6126cc6126e2565b8152602001906001900390816126c45790505090565b6040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061277a61277561277084612735565b612755565b612735565b9050919050565b600061278c8261275f565b9050919050565b600061279e82612781565b9050919050565b6127ae81612793565b82525050565b60006020820190506127c960008301846127a5565b92915050565b6000604051905090565b600080fd5b60006127e982612735565b9050919050565b6127f9816127de565b811461280457600080fd5b50565b600081359050612816816127f0565b92915050565b600080fd5b6000606082840312156128375761283661281c565b5b81905092915050565b60008060808385031215612857576128566127d9565b5b600061286585828601612807565b925050602061287685828601612821565b9150509250929050565b600061288b82612781565b9050919050565b61289b81612880565b82525050565b60006020820190506128b66000830184612892565b92915050565b6000608082840312156128d2576128d161281c565b5b81905092915050565b60008060a083850312156128f2576128f16127d9565b5b600061290085828601612807565b9250506020612911858286016128bc565b9150509250929050565b600061292682612781565b9050919050565b6129368161291b565b82525050565b6000602082019050612951600083018461292d565b92915050565b600082825260208201905092915050565b7f434f4e54524f4c4c455200000000000000000000000000000000000000000000600082015250565b600061299e600a83612957565b91506129a982612968565b602082019050919050565b600060208201905081810360008301526129cd81612991565b9050919050565b6000602082840312156129ea576129e96127d9565b5b60006129f884828501612807565b91505092915050565b7f5245454e5452414e43595f47554152445f535441545553000000000000000000600082015250565b6000612a37601783612957565b9150612a4282612a01565b602082019050919050565b60006020820190508181036000830152612a6681612a2a565b9050919050565b6000819050919050565b612a8081612a6d565b82525050565b6000602082019050612a9b6000830184612a77565b92915050565b6000819050919050565b612ab481612aa1565b8114612abf57600080fd5b50565b600081519050612ad181612aab565b92915050565b600060208284031215612aed57612aec6127d9565b5b6000612afb84828501612ac2565b91505092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000612b3a601f83612957565b9150612b4582612b04565b602082019050919050565b60006020820190508181036000830152612b6981612b2d565b9050919050565b612b7981612aa1565b82525050565b6000604082019050612b946000830185612a77565b612ba16020830184612b70565b9392505050565b612bb1816127de565b82525050565b6000604082019050612bcc6000830185612ba8565b612bd96020830184612a77565b9392505050565b60008115159050919050565b612bf581612be0565b8114612c0057600080fd5b50565b600081519050612c1281612bec565b92915050565b600060208284031215612c2e57612c2d6127d9565b5b6000612c3c84828501612c03565b91505092915050565b600081519050919050565b60005b83811015612c6e578082015181840152602081019050612c53565b60008484015250505050565b6000601f19601f8301169050919050565b6000612c9682612c45565b612ca08185612957565b9350612cb0818560208601612c50565b612cb981612c7a565b840191505092915050565b6000604082019050612cd96000830185612ba8565b8181036020830152612ceb8184612c8b565b90509392505050565b6000602082019050612d096000830184612ba8565b92915050565b612d18816127de565b82525050565b612d2781612a6d565b82525050565b600060029050919050565b600081905092915050565b6000819050919050565b612d56816127de565b82525050565b612d6581612aa1565b82525050565b60e082016000820151612d816000850182612d4d565b506020820151612d946020850182612d5c565b506040820151612da76040850182612d5c565b506060820151612dba6060850182612d5c565b506080820151612dcd6080850182612d5c565b5060a0820151612de060a0850182612d5c565b5060c0820151612df360c0850182612d5c565b50505050565b6000612e058383612d6b565b60e08301905092915050565b6000602082019050919050565b612e2781612d2d565b612e318184612d38565b9250612e3c82612d43565b8060005b83811015612e6d578151612e548782612df9565b9650612e5f83612e11565b925050600181019050612e40565b505050505050565b61024082016000820151612e8c6000850182612e1e565b506020820151612ea06101c0850182612d4d565b506040820151612eb46101e0850182612d4d565b506060820151612ec8610200850182612d5c565b506080820151612edc610220850182612d5c565b50505050565b600061028082019050612ef86000830186612d0f565b612f056020830185612d1e565b612f126040830184612e75565b949350505050565b6000604082019050612f2f6000830185612ba8565b612f3c6020830184612b70565b9392505050565b6000606082019050612f586000830186612ba8565b612f656020830185612ba8565b612f726040830184612b70565b949350505050565b6000604082019050612f8f6000830185612d0f565b612f9c6020830184612d1e565b9392505050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612fe082612c7a565b810181811067ffffffffffffffff82111715612fff57612ffe612fa8565b5b80604052505050565b60006130126127cf565b905061301e8282612fd7565b919050565b600080fd5b600067ffffffffffffffff82111561304357613042612fa8565b5b602082029050919050565b600080fd5b600081519050613062816127f0565b92915050565b600060e0828403121561307e5761307d612fa3565b5b61308860e0613008565b9050600061309884828501613053565b60008301525060206130ac84828501612ac2565b60208301525060406130c084828501612ac2565b60408301525060606130d484828501612ac2565b60608301525060806130e884828501612ac2565b60808301525060a06130fc84828501612ac2565b60a08301525060c061311084828501612ac2565b60c08301525092915050565b600061312f61312a84613028565b613008565b90508060e084028301858111156131495761314861304e565b5b835b81811015613172578061315e8882613068565b84526020840193505060e08101905061314b565b5050509392505050565b600082601f83011261319157613190613023565b5b600261319e84828561311c565b91505092915050565b600061024082840312156131be576131bd612fa3565b5b6131c860a0613008565b905060006131d88482850161317c565b6000830152506101c06131ed84828501613053565b6020830152506101e061320284828501613053565b60408301525061020061321784828501612ac2565b60608301525061022061322c84828501612ac2565b60808301525092915050565b6000610240828403121561324f5761324e6127d9565b5b600061325d848285016131a7565b91505092915050565b61326f81612aa1565b82525050565b60608201600082015161328b6000850182613266565b50602082015161329e6020850182613266565b5060408201516132b16040850182613266565b50505050565b60006060820190506132cc6000830184613275565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060c0820190506133166000830189612ba8565b6133236020830188612ba8565b6133306040830187612ba8565b61333d6060830186612ba8565b61334a6080830185612b70565b61335760a0830184612b70565b979650505050505050565b60006040820190506133776000830185612b70565b6133846020830184612b70565b9392505050565b600060e0820190506133a0600083018a612ba8565b6133ad6020830189612ba8565b6133ba6040830188612ba8565b6133c76060830187612b70565b6133d46080830186612ba8565b6133e160a0830185612b70565b6133ee60c0830184612b70565b98975050505050505050565b7f504f4f4c00000000000000000000000000000000000000000000000000000000600082015250565b6000613430600483612957565b915061343b826133fa565b602082019050919050565b6000602082019050818103600083015261345f81613423565b9050919050565b600060608201905061347b6000830186612a77565b6134886020830185612ba8565b6134956040830184612ba8565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006134d782612aa1565b91506134e283612aa1565b92508282039050818111156134fa576134f961349d565b5b92915050565b60008160011c9050919050565b6000808291508390505b6001851115613557578086048111156135335761353261349d565b5b60018516156135425780820291505b808102905061355085613500565b9450613517565b94509492505050565b600082613570576001905061362c565b8161357e576000905061362c565b8160018114613594576002811461359e576135cd565b600191505061362c565b60ff8411156135b0576135af61349d565b5b8360020a9150848211156135c7576135c661349d565b5b5061362c565b5060208310610133831016604e8410600b84101617156136025782820a9050838111156135fd576135fc61349d565b5b61362c565b61360f848484600161350d565b925090508184048111156136265761362561349d565b5b81810290505b9392505050565b600061363e82612aa1565b915061364983612aa1565b92506136767fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484613560565b905092915050565b600061368982612aa1565b915061369483612aa1565b92508282019050808211156136ac576136ab61349d565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006136ec82612aa1565b91506136f783612aa1565b925082820261370581612aa1565b9150828204841483151761371c5761371b61349d565b5b5092915050565b600061372e82612aa1565b915061373983612aa1565b925082613749576137486136b2565b5b828204905092915050565b7f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000600082015250565b600061378a601483612957565b915061379582613754565b602082019050919050565b600060208201905081810360008301526137b98161377d565b9050919050565b7f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000600082015250565b60006137f6601583612957565b9150613801826137c0565b602082019050919050565b60006020820190508181036000830152613825816137e9565b9050919050565b7f53484f52545f4c49515549444954595f5448524553484f4c4400000000000000600082015250565b6000613862601983612957565b915061386d8261382c565b602082019050919050565b6000602082019050818103600083015261389181613855565b9050919050565b600060608201905081810360008301526138b28186612c8b565b905081810360208301526138c68185612c8b565b90506138d56040830184612b70565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea2646970667358221220447a4e1149b955f9a781f975a9c90c14622db6c27066e4c693439a0eab83488464736f6c634300081c0033";

type LiquidityHandlerConstructorParams =
  | [linkLibraryAddresses: LiquidityHandlerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class LiquidityHandler__factory extends ContractFactory {
  constructor(...args: LiquidityHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        LiquidityHandler__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: LiquidityHandlerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e0022d6f389ac14ff1ce1dc57a4018d0a3\\$__", "g"),
      linkLibraryAddresses["contracts/pool/PoolStoreUtils.sol:PoolStoreUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    _roleStore: AddressLike,
    _dataStore: AddressLike,
    _eventEmitter: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _eventEmitter,
      overrides || {}
    );
  }
  override deploy(
    _roleStore: AddressLike,
    _dataStore: AddressLike,
    _eventEmitter: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _roleStore,
      _dataStore,
      _eventEmitter,
      overrides || {}
    ) as Promise<
      LiquidityHandler & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LiquidityHandler__factory {
    return super.connect(runner) as LiquidityHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityHandlerInterface {
    return new Interface(_abi) as LiquidityHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LiquidityHandler {
    return new Contract(address, _abi, runner) as unknown as LiquidityHandler;
  }
}

export interface LiquidityHandlerLibraryAddresses {
  ["contracts/pool/PoolStoreUtils.sol:PoolStoreUtils"]: string;
}
