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
        name == "PoolUtils" ||
        name == "PoolInterestRateStrategy" ||
        name == "PositionStoreUtils" ||
        name == "EventEmitter" ||  
        name == "FeeStoreUtils"
    ) {
        const address = getContractAddress(name);
        return await contractAtOptions(name, address);
    }

    if (name == "PositionUtils") {
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PositionStoreUtils: positionStoreUtils
            },         
        });
    }


    if (name == "SwapUtils") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const poolUtils = await getContract("PoolUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const feeStoreUtils = await getContract("FeeStoreUtils");
        const positionUtils = await getContract("PositionUtils");
        const swapUtilsAddress = getContractAddress("SwapUtils");
        return await contractAtOptions("SwapUtils", swapUtilsAddress, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PoolUtils: poolUtils,
                PositionStoreUtils: positionStoreUtils,
                PositionUtils: positionUtils,
                FeeStoreUtils: feeStoreUtils,
            },        
        });
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
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const feeStoreUtils = await getContract("FeeStoreUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
                FeeStoreUtils: feeStoreUtils
            },         
        });
    }

    if (name == "ReaderPoolUtils") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const poolUtils = await getContract("PoolUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PoolUtils: poolUtils,
            },         
        });
    }

    if (name == "Reader") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const feeStoreUtils = await getContract("FeeStoreUtils");
        const readerPoolUtils = await getContract("ReaderPoolUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
                FeeStoreUtils: feeStoreUtils,
                ReaderPoolUtils: readerPoolUtils,
            },         
        });
    }

    if (name == "LiquidityHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const liquidityUtilsAddress = getContractAddress("LiquidityUtils");
        const liquidityUtils = await contractAtOptions("LiquidityUtils", liquidityUtilsAddress, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
            },        
        });

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                LiquidityUtils: liquidityUtils,
            },        
        });       
    }

    if (name == "SwapHandler") {
        const swapUtils = await getContract("SwapUtils");
        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                SwapUtils: swapUtils,
            },        
        });       
    }

    if (name == "DepositHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const depositUtilsAddress = getContractAddress("DepositUtils");
        const depositUtils = await contractAtOptions("DepositUtils", depositUtilsAddress, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
            },        
        });

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                DepositUtils: depositUtils,
            },        
        });       
    }

    if (name == "BorrowHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const positionUtils = await getContract("PositionUtils");
        const borrowUtilsAddress = getContractAddress("BorrowUtils");
        const borrowUtils = await contractAtOptions("BorrowUtils", borrowUtilsAddress, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
                PositionUtils: positionUtils,
            },        
        });

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                BorrowUtils: borrowUtils,
            },        
        });       
    }

    if (name == "WithdrawHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const positionUtils = await getContract("PositionUtils");
        const withdrawUtilsAddress = getContractAddress("WithdrawUtils");
        const withdrawUtils = await contractAtOptions("WithdrawUtils", withdrawUtilsAddress, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
                PositionUtils: positionUtils,
            },        
        });

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                WithdrawUtils: withdrawUtils,
            },        
        });       
    }

    if (name == "RepayHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const positionUtils = await getContract("PositionUtils");
        const repayUtilsAddress = getContractAddress("RepayUtils");
        const repayUtils = await contractAtOptions("RepayUtils", repayUtilsAddress, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
                PositionUtils: positionUtils,
            },        
        });

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                RepayUtils: repayUtils,
            },        
        });       
    }

    if (name == "CloseHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const positionUtils = await getContract("PositionUtils");
        const poolUtils = await getContract("PoolUtils");
        const closeUtilsAddress = getContractAddress("CloseUtils");
        const closeUtils = await contractAtOptions("CloseUtils", closeUtilsAddress, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
                PoolUtils: poolUtils,
                PositionUtils: positionUtils,
            },        
        });

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                CloseUtils: closeUtils,
            },        
        });       
    }

    if (name == "LiquidationHandler") {
        const poolStoreUtils = await getContract("PoolStoreUtils");
        const positionStoreUtils = await getContract("PositionStoreUtils");
        const positionUtils = await getContract("PositionUtils");
        const liquidationUtilsAddress = getContractAddress("LiquidationUtils");
        const liquidationUtils = await contractAtOptions("LiquidationUtils", liquidationUtilsAddress, {
            libraries: {
                PoolStoreUtils: poolStoreUtils,
                PositionStoreUtils: positionStoreUtils,
                PositionUtils: positionUtils,
            },        
        });

        const address = getContractAddress(name);
        return await contractAtOptions(name, address, {
            libraries: {
                LiquidationUtils: liquidationUtils,
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

