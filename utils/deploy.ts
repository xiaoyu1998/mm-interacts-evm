import fs from 'fs';
import path from 'path';
import parse from 'csv-parse';
import { DeployFunction, DeployResult, DeploymentsExtension } from "hardhat-deploy/dist/types";
import {deployedAddresses, webSocketUrl} from "./network"

export async function logGasUsage(tx, label) {
    const result = await tx;
    const txReceipt = await ethers.provider.getTransactionReceipt(result.hash);
    if (label) {
        console.info(label, txReceipt.gasUsed.toString());
    }
    return txReceipt;
}

export async function sendTxn(txnPromise, label) {
    const txn = await txnPromise
    await txn.wait(1)
    //console.info(`Sent! ${label} ${txn.hash}`)
    return txn
}

export async function deployContract(name, args, contractOptions = {}) {
    let contractFactory = await ethers.getContractFactory(name, contractOptions);
    let contract = await contractFactory.deploy(...args);
    await contract.waitForDeployment();
    return contract;
}

export async function contractAt(name, address, provider) {
    let contractFactory = await ethers.getContractFactory(name);
    if (provider) {
        contractFactory = contractFactory.connect(provider);
    }
    return await contractFactory.attach(address);
}

export async function contractAtOptions(name, address, options, provider) {
    let contractFactory;
    if (options){
        contractFactory = await ethers.getContractFactory(name, options);
    } else {
        contractFactory = await ethers.getContractFactory(name);
    }
    
    if (provider) {
        contractFactory = contractFactory.connect(provider);
    }
    return await contractFactory.attach(address);
}

export function getContractAddress(name){
    if (!process.env.HARDHAT_NETWORK){
        process.env.HARDHAT_NETWORK = 'localhost';
    }
    const jsonFile = path.join(__dirname, '..', deployedAddresses[`${process.env.HARDHAT_NETWORK}`]);
    const addresses = JSON.parse(fs.readFileSync(jsonFile))
    return addresses[`${name}#${name}`];    
}

//const contractCache  

export async function getContract(name) {

    if (name == "RoleStore" ||
        name == "DataStore" ||
        name == "Router" ||
        name == "PoolStoreUtils" ||
        name == "PoolInterestRateStrategy" ||
        name == "PositionStoreUtils" ||
        name == "EventEmitter"
    ) {
        const address = getContractAddress(name);
        return await contractAtOptions(name, address);
    }

    if (name == "PoolFactory") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils
            },         
        });
    }

    if (name == "Config") {
        const address = getContractAddress(name);
        return await contractAtOptions(name, address);
    }

    if (name == "Reader") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },         
        });
    }

    if (name == "LiquidityHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
            },        
        });       
    }

    if (name == "SwapHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },        
        });       
    }

    if (name == "DepositHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },        
        });       
    }

    if (name == "BorrowHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },        
        });       
    }

    if (name == "WithdrawHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },        
        });       
    }

    if (name == "RepayHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },        
        });       
    }

    if (name == "CloseHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },        
        });       
    }

    if (name == "LiquidationHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },        
        });       
    }

    if (name == "ExchangeRouter") {
        const roleStore = await getContract("RoleStore");
        const dataStore = await getContract("DataStore");
        const router = await getContract("Router");
        const liquidityHandler = await getContract("LiquidityHandler");
        const swapHandler = await getContract("SwapHandler");
        const depositHandler = await getContract("DepositHandler");
        const borrowHandler = await getContract("BorrowHandler");
        const withdrawHandler = await getContract("WithdrawHandler");
        const repayHandler = await getContract("RepayHandler");
        const liquidationHandler = await getContract("LiquidationHandler");
        const closeHandler = await getContract("CloseHandler");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, [
            router,
            roleStore, 
            dataStore,
            liquidityHandler,
            swapHandler,
            borrowHandler,
            withdrawHandler,
            repayHandler,
            liquidationHandler,
            closeHandler
        ]);       
    }

}

