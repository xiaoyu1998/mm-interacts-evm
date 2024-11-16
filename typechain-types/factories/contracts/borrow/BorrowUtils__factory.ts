/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  BorrowUtils,
  BorrowUtilsInterface,
} from "../../../contracts/borrow/BorrowUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "accountInPosition",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AccountNotMatch",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyBorrowAmounts",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyCollateral",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amountToBorrow",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableReserve",
        type: "uint256",
      },
    ],
    name: "InsufficientReverveForBorrow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marginLevel",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "marginLevelThreshold",
        type: "uint256",
      },
    ],
    name: "MarginBelowThreshold",
    type: "error",
  },
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
] as const;

const _bytecode =
  "0x6129c9610052600b82828239805160001a6073146045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806352e5691a1461003a575b600080fd5b81801561004657600080fd5b50610061600480360381019061005c9190611a3b565b610063565b005b61006b611741565b73__$91a1a7f12f728c8759f4be979bae55555f$__63f5c7898c848460000160208101906100999190611a7b565b85604001356040518463ffffffff1660e01b81526004016100bc93929190611ad0565b61026060405180830381865af41580156100da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fe9190611dfd565b826040018360600182815250829052505061017a8260000160208101906101259190611a7b565b826040015160000151600060ff166002811061014457610143611e3f565b5b602002015160000151836040015160000151600160ff166002811061016c5761016b611e3f565b5b602002015160000151610329565b82600001836020018281525082905250506101c9838360000160208101906101a29190611a7b565b836000015184604001518660600160208101906101bf9190611ea7565b87608001356103e2565b6101fa816000015182604001518460600160208101906101e99190611ea7565b85608001358660800135600061056b565b73__$3d31b232fb363902662fbc281b11ab3357$__6370b5270e8360000160208101906102279190611a7b565b836060015184604001516040518463ffffffff1660e01b815260040161024f93929190612085565b60006040518083038186803b15801561026757600080fd5b505af415801561027b573d6000803e3d6000fd5b5050505061029f8260200160208101906102959190611a7b565b8260000151610840565b73__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__63be6afc398360000160208101906102cc9190611a7b565b836020015184600001516040518463ffffffff1660e01b81526004016102f493929190612254565b60006040518083038186803b15801561030c57600080fd5b505af4158015610320573d6000803e3d6000fd5b50505050505050565b61033161177b565b60008061033e858561085a565b9050600073__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__637b82d74e88846040518363ffffffff1660e01b815260040161037b92919061228c565b61024060405180830381865af4158015610399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bd91906124ab565b90506103c981836108f8565b6103d281610971565b8082935093505050935093915050565b826040015173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461045c578260400151866040517f25c7157e0000000000000000000000000000000000000000000000000000000081526004016104539291906124e8565b60405180910390fd5b60008103610496576040517f79646aaf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73__$e0022d6f389ac14ff1ce1dc57a4018d0a3$__6384457e85836040518263ffffffff1660e01b81526004016104cd9190612520565b60006040518083038186803b1580156104e557600080fd5b505af41580156104f9573d6000803e3d6000fd5b50505050600061050985846109b3565b92505050808211156105545781816040517f4795950200000000000000000000000000000000000000000000000000000000815260040161054b92919061254a565b60405180910390fd5b610562868686868687610a3e565b50505050505050565b600061057684610d86565b9050600084126105f3578086600001518660ff166002811061059b5761059a611e3f565b5b60200201516020018181516105b091906125a2565b915081815250508087600001518660ff16600281106105d2576105d1611e3f565b5b60200201516060018181516105e791906125a2565b91508181525050610662565b8086600001518660ff166002811061060e5761060d611e3f565b5b602002015160200181815161062391906125d6565b915081815250508087600001518660ff166002811061064557610644611e3f565b5b602002015160600181815161065a91906125d6565b915081815250505b81156106f657600086600001518660ff166002811061068457610683611e3f565b5b60200201516040015190508088600001518760ff16600281106106aa576106a9611e3f565b5b602002015160a0018181516106bf91906125d6565b91508181525050600087600001518760ff16600281106106e2576106e1611e3f565b5b602002015160400181815250505050610838565b600083036107045750610838565b600061070f84610d86565b9050600061074889600001518860ff16600281106107305761072f611e3f565b5b60200201516020015183610da290919063ffffffff16565b9050600085126107c5578088600001518860ff166002811061076d5761076c611e3f565b5b602002015160400181815161078291906125a2565b915081815250508089600001518860ff16600281106107a4576107a3611e3f565b5b602002015160a0018181516107b991906125a2565b91508181525050610834565b8088600001518860ff16600281106107e0576107df611e3f565b5b60200201516040018181516107f591906125d6565b915081815250508089600001518860ff166002811061081757610816611e3f565b5b602002015160a00181815161082c91906125d6565b915081815250505b5050505b505050505050565b61084b816000610de9565b610856816001610de9565b5050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1610610896578183610899565b82825b80935081945050506040516020016108b090612667565b6040516020818303038152906040528051906020012083836040516020016108da93929190612696565b60405160208183030381529060405280519060200120905092915050565b600073ffffffffffffffffffffffffffffffffffffffff16826020015173ffffffffffffffffffffffffffffffffffffffff160361096d57806040517f7357d91f00000000000000000000000000000000000000000000000000000000815260040161096491906126cd565b60405180910390fd5b5050565b600061097b610ed3565b90508082608001510361098e57506109b0565b610999826000610edb565b6109a4826000610edb565b80826080018181525050505b50565b60008060008085600001518560ff16600281106109d3576109d2611e3f565b5b6020020151905060006109e68787610f9b565b905060008103610a025760008060009450945094505050610a37565b6000610a12838960800151611088565b90508082610a2091906125a2565b828284610a2d91906125d6565b9550955095505050505b9250925092565b610a466117dc565b610a4f866110cd565b816000018181525050610a69868683600001516000611198565b8260200183604001828152508281525050506000816020015103610ab9576040517f6c53056d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ad08487606001516113c990919063ffffffff16565b816060018181525050610ae283610d86565b816080018181525050610b1681608001516b033b2e3c9fd0803ce80000008360600151600a610b11919061281b565b61143c565b8160a0018181525050600160ff168460ff1614610b37578060a00151610b53565b610b5281600001518260a0015161154390919063ffffffff16565b5b8160c0018181525050610b6582610d86565b8160e0018181525050610b998160e001516b033b2e3c9fd0803ce80000008360600151600a610b94919061281b565b61143c565b81610100018181525050600160ff168460ff1614610bbc57806101000151610bd9565b610bd8816000015182610100015161154390919063ffffffff16565b5b8161012001818152505060008313610c04578060c001518160200151610bff91906125d6565b610c19565b8060c001518160200151610c1891906125a2565b5b8161014001818152505060008213610c45578061012001518160400151610c4091906125d6565b610c5b565b8061012001518160400151610c5a91906125a2565b5b81610160018181525050600081610160015103610c785750610d7e565b610c95816101600151826101400151610da290919063ffffffff16565b8161018001818152505073__$3d31b232fb363902662fbc281b11ab3357$__6357b91ca6886040518263ffffffff1660e01b8152600401610cd69190612866565b602060405180830381865af4158015610cf3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d179190612881565b816101a0018181525050806101a001518161018001511015610d7c57806101800151816101a001516040517f82d6353f000000000000000000000000000000000000000000000000000000008152600401610d7392919061254a565b60405180910390fd5b505b505050505050565b600080821215610d995781600003610d9b565b815b9050919050565b60006b033b2e3c9fd0803ce80000006002830460001903048311151582151715610dcb57600080fd5b81600283046b033b2e3c9fd0803ce800000085020104905092915050565b610df161184b565b610dfb838361158e565b826000018360200182815250828152505050826040015173ffffffffffffffffffffffffffffffffffffffff16634329759a60405180604001604052808460200151815260200184600001518152506040518263ffffffff1660e01b8152600401610e6691906128ec565b602060405180830381865afa158015610e83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea79190612881565b83600001518360ff1660028110610ec157610ec0611e3f565b5b60200201516040018181525050505050565b600042905090565b600082600001518260ff1660028110610ef757610ef6611e3f565b5b602002015160a0015114610f97576000610f3783600001518360ff1660028110610f2457610f23611e3f565b5b60200201516040015184608001516115e9565b9050610f6e8184600001518460ff1660028110610f5757610f56611e3f565b5b60200201516020015161154390919063ffffffff16565b83600001518360ff1660028110610f8857610f87611e3f565b5b60200201516020018181525050505b5050565b60008083600001518360ff1660028110610fb857610fb7611e3f565b5b602002015190506000846020015173ffffffffffffffffffffffffffffffffffffffff1663e42c08f283600001516040518263ffffffff1660e01b81526004016110029190612907565b602060405180830381865afa15801561101f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110439190612881565b90506000810361105857600092505050611082565b6000826060015190508260c00151818361107291906125d6565b61107c91906125d6565b93505050505b92915050565b6000808360a001510361109e57600090506110c7565b60006110aa8484611644565b90506110c3818560a0015161154390919063ffffffff16565b9150505b92915050565b6000806110db8360006109b3565b5050905060006110ec8460016109b3565b505090506000810361110357600092505050611193565b6000611114856060015160006113c9565b90506000611127866060015160016113c9565b9050600061114e856b033b2e3c9fd0803ce800000085600a611149919061281b565b61143c565b90506000611175856b033b2e3c9fd0803ce800000085600a611170919061281b565b61143c565b905061118a8183610da290919063ffffffff16565b96505050505050505b919050565b6000806000808660000151600060ff16600281106111b9576111b8611e3f565b5b60200201516000015173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611293576000806112038a8a6000611693565b91509150600061122160008c606001516113c990919063ffffffff16565b90506000611248846b033b2e3c9fd0803ce800000084600a611243919061281b565b61143c565b9050600061126f846b033b2e3c9fd0803ce800000085600a61126a919061281b565b61143c565b9050818761127d91906125a2565b9650808661128b91906125a2565b955050505050505b8660000151600160ff16600281106112ae576112ad611e3f565b5b60200201516000015173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146113b8576000806112f88a8a6001611693565b91509150600061131660018c606001516113c990919063ffffffff16565b9050600061133d846b033b2e3c9fd0803ce800000084600a611338919061281b565b61143c565b90506000611364846b033b2e3c9fd0803ce800000085600a61135f919061281b565b61143c565b9050600061137b8c8461154390919063ffffffff16565b905060006113928d8461154390919063ffffffff16565b905081896113a091906125a2565b985080886113ae91906125a2565b9750505050505050505b819350809250505094509492505050565b6000807fffffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffff9050600060589050600160ff168460ff160361142b577fffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffffff9150606090505b8082198616901c9250505092915050565b60008083850290506000801985870982811083820303915050600081036114775783828161146d5761146c612922565b5b049250505061153c565b8084116114b0576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b6000816b019d971e4fe8401e74000000600019030483111582151761156757600080fd5b6b033b2e3c9fd0803ce80000006b019d971e4fe8401e740000008385020104905092915050565b60008060006115bf85600001518560ff16600281106115b0576115af611e3f565b5b60200201518660800151611088565b905060006115cd8686610f9b565b90508182826115dc91906125d6565b9350935050509250929050565b600080826115f5610ed3565b6115ff91906125d6565b8461160a9190612951565b90506301e1338081816116205761161f612922565b5b049050806b033b2e3c9fd0803ce800000061163b91906125a2565b91505092915050565b600061164e610ed3565b8203611660578260200151905061168d565b60006116708460400151846115e9565b905061168984602001518261154390919063ffffffff16565b9150505b92915050565b600080600084600001518460ff16600281106116b2576116b1611e3f565b5b602002015160400151905060006116eb87600001518660ff16600281106116dc576116db611e3f565b5b60200201518860800151611644565b90506000821461170d57611708818361154390919063ffffffff16565b611710565b60005b925085600001518560ff166002811061172c5761172b611e3f565b5b60200201516020015193505050935093915050565b604051806080016040528061175461177b565b81526020016000801916815260200161176b611865565b8152602001600080191681525090565b6040518060a0016040528061178e6118a2565b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806118786118cf565b815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60405180604001604052806002905b6118b96118fc565b8152602001906001900390816118b15790505090565b60405180604001604052806002905b6118e661194f565b8152602001906001900390816118de5790505090565b6040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000604051905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119e4826119b9565b9050919050565b6119f4816119d9565b81146119ff57600080fd5b50565b600081359050611a11816119eb565b92915050565b600080fd5b600060a08284031215611a3257611a31611a17565b5b81905092915050565b60008060c08385031215611a5257611a516119b4565b5b6000611a6085828601611a02565b9250506020611a7185828601611a1c565b9150509250929050565b600060208284031215611a9157611a906119b4565b5b6000611a9f84828501611a02565b91505092915050565b611ab1816119d9565b82525050565b6000819050919050565b611aca81611ab7565b82525050565b6000606082019050611ae56000830186611aa8565b611af26020830185611aa8565b611aff6040830184611ac1565b949350505050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611b5582611b0c565b810181811067ffffffffffffffff82111715611b7457611b73611b1d565b5b80604052505050565b6000611b876119aa565b9050611b938282611b4c565b919050565b600080fd5b600067ffffffffffffffff821115611bb857611bb7611b1d565b5b602082029050919050565b600080fd5b600081519050611bd7816119eb565b92915050565b611be681611ab7565b8114611bf157600080fd5b50565b600081519050611c0381611bdd565b92915050565b60006101008284031215611c2057611c1f611b07565b5b611c2b610100611b7d565b90506000611c3b84828501611bc8565b6000830152506020611c4f84828501611bf4565b6020830152506040611c6384828501611bf4565b6040830152506060611c7784828501611bf4565b6060830152506080611c8b84828501611bf4565b60808301525060a0611c9f84828501611bf4565b60a08301525060c0611cb384828501611bf4565b60c08301525060e0611cc784828501611bf4565b60e08301525092915050565b6000611ce6611ce184611b9d565b611b7d565b9050806101008402830185811115611d0157611d00611bc3565b5b835b81811015611d2b5780611d168882611c09565b84526020840193505061010081019050611d03565b5050509392505050565b600082601f830112611d4a57611d49611b98565b5b6002611d57848285611cd3565b91505092915050565b60006102408284031215611d7757611d76611b07565b5b611d816060611b7d565b90506000611d9184828501611d35565b600083015250610200611da684828501611bf4565b602083015250610220611dbb84828501611bc8565b60408301525092915050565b6000819050919050565b611dda81611dc7565b8114611de557600080fd5b50565b600081519050611df781611dd1565b92915050565b6000806102608385031215611e1557611e146119b4565b5b6000611e2385828601611d60565b925050610240611e3585828601611de8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060ff82169050919050565b611e8481611e6e565b8114611e8f57600080fd5b50565b600081359050611ea181611e7b565b92915050565b600060208284031215611ebd57611ebc6119b4565b5b6000611ecb84828501611e92565b91505092915050565b611edd81611dc7565b82525050565b600060029050919050565b600081905092915050565b6000819050919050565b611f0c816119d9565b82525050565b611f1b81611ab7565b82525050565b61010082016000820151611f386000850182611f03565b506020820151611f4b6020850182611f12565b506040820151611f5e6040850182611f12565b506060820151611f716060850182611f12565b506080820151611f846080850182611f12565b5060a0820151611f9760a0850182611f12565b5060c0820151611faa60c0850182611f12565b5060e0820151611fbd60e0850182611f12565b50505050565b6000611fcf8383611f21565b6101008301905092915050565b6000602082019050919050565b611ff281611ee3565b611ffc8184611eee565b925061200782611ef9565b8060005b8381101561203857815161201f8782611fc3565b965061202a83611fdc565b92505060018101905061200b565b505050505050565b610240820160008201516120576000850182611fe9565b50602082015161206b610200850182611f12565b50604082015161207f610220850182611f03565b50505050565b60006102808201905061209b6000830186611aa8565b6120a86020830185611ed4565b6120b56040830184612040565b949350505050565b600060029050919050565b600081905092915050565b6000819050919050565b60e0820160008201516120f36000850182611f03565b5060208201516121066020850182611f12565b5060408201516121196040850182611f12565b50606082015161212c6060850182611f12565b50608082015161213f6080850182611f12565b5060a082015161215260a0850182611f12565b5060c082015161216560c0850182611f12565b50505050565b600061217783836120dd565b60e08301905092915050565b6000602082019050919050565b612199816120bd565b6121a381846120c8565b92506121ae826120d3565b8060005b838110156121df5781516121c6878261216b565b96506121d183612183565b9250506001810190506121b2565b505050505050565b610240820160008201516121fe6000850182612190565b5060208201516122126101c0850182611f03565b5060408201516122266101e0850182611f03565b50606082015161223a610200850182611f12565b50608082015161224e610220850182611f12565b50505050565b60006102808201905061226a6000830186611aa8565b6122776020830185611ed4565b61228460408301846121e7565b949350505050565b60006040820190506122a16000830185611aa8565b6122ae6020830184611ed4565b9392505050565b600067ffffffffffffffff8211156122d0576122cf611b1d565b5b602082029050919050565b600060e082840312156122f1576122f0611b07565b5b6122fb60e0611b7d565b9050600061230b84828501611bc8565b600083015250602061231f84828501611bf4565b602083015250604061233384828501611bf4565b604083015250606061234784828501611bf4565b606083015250608061235b84828501611bf4565b60808301525060a061236f84828501611bf4565b60a08301525060c061238384828501611bf4565b60c08301525092915050565b60006123a261239d846122b5565b611b7d565b90508060e084028301858111156123bc576123bb611bc3565b5b835b818110156123e557806123d188826122db565b84526020840193505060e0810190506123be565b5050509392505050565b600082601f83011261240457612403611b98565b5b600261241184828561238f565b91505092915050565b6000610240828403121561243157612430611b07565b5b61243b60a0611b7d565b9050600061244b848285016123ef565b6000830152506101c061246084828501611bc8565b6020830152506101e061247584828501611bc8565b60408301525061020061248a84828501611bf4565b60608301525061022061249f84828501611bf4565b60808301525092915050565b600061024082840312156124c2576124c16119b4565b5b60006124d08482850161241a565b91505092915050565b6124e2816119d9565b82525050565b60006040820190506124fd60008301856124d9565b61250a60208301846124d9565b9392505050565b61251a81611e6e565b82525050565b60006020820190506125356000830184612511565b92915050565b61254481611ab7565b82525050565b600060408201905061255f600083018561253b565b61256c602083018461253b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006125ad82611ab7565b91506125b883611ab7565b92508282019050808211156125d0576125cf612573565b5b92915050565b60006125e182611ab7565b91506125ec83611ab7565b925082820390508181111561260457612603612573565b5b92915050565b600082825260208201905092915050565b7f504f4f4c00000000000000000000000000000000000000000000000000000000600082015250565b600061265160048361260a565b915061265c8261261b565b602082019050919050565b6000602082019050818103600083015261268081612644565b9050919050565b61269081611dc7565b82525050565b60006060820190506126ab6000830186612687565b6126b860208301856124d9565b6126c560408301846124d9565b949350505050565b60006020820190506126e26000830184612687565b92915050565b60008160011c9050919050565b6000808291508390505b600185111561273f5780860481111561271b5761271a612573565b5b600185161561272a5780820291505b8081029050612738856126e8565b94506126ff565b94509492505050565b6000826127585760019050612814565b816127665760009050612814565b816001811461277c5760028114612786576127b5565b6001915050612814565b60ff84111561279857612797612573565b5b8360020a9150848211156127af576127ae612573565b5b50612814565b5060208310610133831016604e8410600b84101617156127ea5782820a9050838111156127e5576127e4612573565b5b612814565b6127f784848460016126f5565b9250905081840481111561280e5761280d612573565b5b81810290505b9392505050565b600061282682611ab7565b915061283183611ab7565b925061285e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612748565b905092915050565b600060208201905061287b6000830184611aa8565b92915050565b600060208284031215612897576128966119b4565b5b60006128a584828501611bf4565b91505092915050565b6128b781611ab7565b82525050565b6040820160008201516128d360008501826128ae565b5060208201516128e660208501826128ae565b50505050565b600060408201905061290160008301846128bd565b92915050565b600060208201905061291c60008301846124d9565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061295c82611ab7565b915061296783611ab7565b925082820261297581611ab7565b9150828204841483151761298c5761298b612573565b5b509291505056fea264697066735822122089be811517f0ae7530809e5073231c488fe2b573f0f81c07dd7f3d31b622967f64736f6c634300081b0033";

type BorrowUtilsConstructorParams =
  | [linkLibraryAddresses: BorrowUtilsLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BorrowUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class BorrowUtils__factory extends ContractFactory {
  constructor(...args: BorrowUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        BorrowUtils__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: BorrowUtilsLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$91a1a7f12f728c8759f4be979bae55555f\\$__", "g"),
      linkLibraryAddresses["contracts/position/PositionUtils.sol:PositionUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$3d31b232fb363902662fbc281b11ab3357\\$__", "g"),
      linkLibraryAddresses[
        "contracts/position/PositionStoreUtils.sol:PositionStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e0022d6f389ac14ff1ce1dc57a4018d0a3\\$__", "g"),
      linkLibraryAddresses["contracts/pool/PoolStoreUtils.sol:PoolStoreUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BorrowUtils & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BorrowUtils__factory {
    return super.connect(runner) as BorrowUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BorrowUtilsInterface {
    return new Interface(_abi) as BorrowUtilsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BorrowUtils {
    return new Contract(address, _abi, runner) as unknown as BorrowUtils;
  }
}

export interface BorrowUtilsLibraryAddresses {
  ["contracts/position/PositionUtils.sol:PositionUtils"]: string;
  ["contracts/position/PositionStoreUtils.sol:PositionStoreUtils"]: string;
  ["contracts/pool/PoolStoreUtils.sol:PoolStoreUtils"]: string;
}