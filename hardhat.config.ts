import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { defaultRpcs } from "./utils/network";

const getRpcUrl = (network) => {
    let rpcUrl = defaultRpcs[network];
    if (rpcUrl == undefined || rpcUrl ==""){
        const { sepolia_url } = process.env;
        if (sepolia_url) { return sepolia_url;}
    }
    return rpcUrl;
};

const getEnvAccount = () => {
    const { account_keys } = process.env;
    if (account_keys) {
        return account_keys.split(",");
    }
    return [];
};

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks:{
        localnet: {
            url: getRpcUrl("localnet"),
            chainId: 1998,
            accounts: getEnvAccount(),
            blockGasLimit: 20_000_000,
            gas: 20_000_000,
        },
        arbitrumSepolia: {
            url: getRpcUrl("arbitrumSepolia"),
            chainId: 421614,
            accounts: getEnvAccount(),
            blockGasLimit: 20_000_000,
            gas: 20_000_000,
        },
        baseSepolia: {
            url: getRpcUrl("baseSepolia"),
            chainId: 84532,
            accounts: getEnvAccount(),
            blockGasLimit: 20_000_000,
            gas: 20_000_000,
        },
        monadDevnet: {
            url: getRpcUrl("monadDevnet"),
            chainId: 20143,
            accounts: getEnvAccount(),
            blockGasLimit: 20_000_000,
            gas: 20_000_000,
        },
  }
};

export default config;
