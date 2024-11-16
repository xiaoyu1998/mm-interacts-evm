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
  PoolUtils,
  PoolUtilsInterface,
} from "../../../contracts/pool/PoolUtils";

const _abi = [
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
] as const;

const _bytecode =
  "0x61104f610052600b82828239805160001a6073146045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80634f8090f01461005057806375a8b0871461008f578063b93207a2146100ce575b600080fd5b81801561005c57600080fd5b5061007760048036038101906100729190610c96565b61010b565b60405161008693929190610cfa565b60405180910390f35b81801561009b57600080fd5b506100b660048036038101906100b19190610c96565b610237565b6040516100c593929190610cfa565b60405180910390f35b8180156100da57600080fd5b506100f560048036038101906100f09190610d31565b610352565b6040516101029190610d72565b60405180910390f35b60008060006101186108d0565b61012386600061042c565b905082600001836040018281525082815250505061014286600161042c565b9050826020018360600182815250828152505050841561017657868160000181815161016e9190610dbc565b915081815250505b61018386606001516104b7565b816101200181815250506101b3876127106101ae8461012001516127106104e890919063ffffffff16565b610541565b816101400181815250506101eb816000015182602001516101e6846101400151856000015161064890919063ffffffff16565b610541565b81608001818152505061020f816080015182602001516104e890919063ffffffff16565b8160c00181815250508060c00151816040015182606001519350935093505093509350939050565b60008060006102446108d0565b61024f86600061042c565b905082600001836040018281525082815250505061026e86600161042c565b9050826020018360600182815250828152505050846102a15786816020018181516102999190610dbc565b915081815250505b6102ca816000015182602001516102c58a856020015161064890919063ffffffff16565b610541565b8160800181815250506102ee816080015182600001516104e890919063ffffffff16565b8160a001818152505061030486606001516104b7565b816101200181815250506103388160a001516127106103338461012001516127106104e890919063ffffffff16565b610541565b816040015182606001519350935093505093509350939050565b600061035c6108d0565b61036783600061042c565b90505081600001818152505061037e83600161042c565b9050508160200181815250506103b3816000015182602001516103ae8785602001516104e890919063ffffffff16565b610541565b8160e00181815250506103d781600001518260e001516104e890919063ffffffff16565b816101000181815250506103ee83606001516104b7565b8161012001818152505061042381610100015161271061041e8461012001516127106104e890919063ffffffff16565b610541565b91505092915050565b60008060008085600001518560ff166002811061044c5761044b610df0565b5b60200201519050600061045f87876106a1565b90506000810361047b57600080600094509450945050506104b0565b600061048b83896080015161078e565b905080826104999190610e1f565b8282846104a69190610dbc565b9550955095505050505b9250925092565b600060387fffffffffffffffffffffffffffffffffffffffffffffff0000ffffffffffffff198316901c9050919050565b60008282846104f79190610dbc565b915081111561053b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053290610eb0565b60405180910390fd5b92915050565b600080838502905060008019858709828110838203039150506000810361057c5783828161057257610571610ed0565b5b0492505050610641565b8084116105b5576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b60008282846106579190610e1f565b915081101561069b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069290610f4b565b60405180910390fd5b92915050565b60008083600001518360ff16600281106106be576106bd610df0565b5b602002015190506000846020015173ffffffffffffffffffffffffffffffffffffffff1663e42c08f283600001516040518263ffffffff1660e01b81526004016107089190610f7a565b602060405180830381865afa158015610725573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107499190610faa565b90506000810361075e57600092505050610788565b6000826060015190508260c0015181836107789190610dbc565b6107829190610dbc565b93505050505b92915050565b6000808360a00151036107a457600090506107cd565b60006107b084846107d3565b90506107c9818560a0015161082290919063ffffffff16565b9150505b92915050565b60006107dd61086d565b82036107ef578260200151905061081c565b60006107ff846040015184610875565b905061081884602001518261082290919063ffffffff16565b9150505b92915050565b6000816b019d971e4fe8401e74000000600019030483111582151761084657600080fd5b6b033b2e3c9fd0803ce80000006b019d971e4fe8401e740000008385020104905092915050565b600042905090565b6000808261088161086d565b61088b9190610dbc565b846108969190610fd7565b90506301e1338081816108ac576108ab610ed0565b5b049050806b033b2e3c9fd0803ce80000006108c79190610e1f565b91505092915050565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000604051905090565b600080fd5b6000819050919050565b61094c81610939565b811461095757600080fd5b50565b60008135905061096981610943565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109bd82610974565b810181811067ffffffffffffffff821117156109dc576109db610985565b5b80604052505050565b60006109ef61092a565b90506109fb82826109b4565b919050565b600080fd5b600067ffffffffffffffff821115610a2057610a1f610985565b5b602082029050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a5b82610a30565b9050919050565b610a6b81610a50565b8114610a7657600080fd5b50565b600081359050610a8881610a62565b92915050565b600060e08284031215610aa457610aa361096f565b5b610aae60e06109e5565b90506000610abe84828501610a79565b6000830152506020610ad28482850161095a565b6020830152506040610ae68482850161095a565b6040830152506060610afa8482850161095a565b6060830152506080610b0e8482850161095a565b60808301525060a0610b228482850161095a565b60a08301525060c0610b368482850161095a565b60c08301525092915050565b6000610b55610b5084610a05565b6109e5565b90508060e08402830185811115610b6f57610b6e610a2b565b5b835b81811015610b985780610b848882610a8e565b84526020840193505060e081019050610b71565b5050509392505050565b600082601f830112610bb757610bb6610a00565b5b6002610bc4848285610b42565b91505092915050565b60006102408284031215610be457610be361096f565b5b610bee60a06109e5565b90506000610bfe84828501610ba2565b6000830152506101c0610c1384828501610a79565b6020830152506101e0610c2884828501610a79565b604083015250610200610c3d8482850161095a565b606083015250610220610c528482850161095a565b60808301525092915050565b60008115159050919050565b610c7381610c5e565b8114610c7e57600080fd5b50565b600081359050610c9081610c6a565b92915050565b60008060006102808486031215610cb057610caf610934565b5b6000610cbe8682870161095a565b9350506020610ccf86828701610bcd565b925050610260610ce186828701610c81565b9150509250925092565b610cf481610939565b82525050565b6000606082019050610d0f6000830186610ceb565b610d1c6020830185610ceb565b610d296040830184610ceb565b949350505050565b6000806102608385031215610d4957610d48610934565b5b6000610d578582860161095a565b9250506020610d6885828601610bcd565b9150509250929050565b6000602082019050610d876000830184610ceb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610dc782610939565b9150610dd283610939565b9250828203905081811115610dea57610de9610d8d565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610e2a82610939565b9150610e3583610939565b9250828201905080821115610e4d57610e4c610d8d565b5b92915050565b600082825260208201905092915050565b7f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000600082015250565b6000610e9a601583610e53565b9150610ea582610e64565b602082019050919050565b60006020820190508181036000830152610ec981610e8d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000600082015250565b6000610f35601483610e53565b9150610f4082610eff565b602082019050919050565b60006020820190508181036000830152610f6481610f28565b9050919050565b610f7481610a50565b82525050565b6000602082019050610f8f6000830184610f6b565b92915050565b600081519050610fa481610943565b92915050565b600060208284031215610fc057610fbf610934565b5b6000610fce84828501610f95565b91505092915050565b6000610fe282610939565b9150610fed83610939565b9250828202610ffb81610939565b9150828204841483151761101257611011610d8d565b5b509291505056fea26469706673582212206f3a9987cc87433e94d25933aa9458bad68fc387d8dcaa79e522b8ca83b0746a64736f6c634300081b0033";

type PoolUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoolUtils__factory extends ContractFactory {
  constructor(...args: PoolUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PoolUtils & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PoolUtils__factory {
    return super.connect(runner) as PoolUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolUtilsInterface {
    return new Interface(_abi) as PoolUtilsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PoolUtils {
    return new Contract(address, _abi, runner) as unknown as PoolUtils;
  }
}