import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { defaultRpcs } from "./utils/network";

const getRpcUrl = (network) => {
    let rpcUrl = defaultRpcs[network];
    if (rpcUrl == undefined || rpcUrl ==""){
        const { urlSepolia } = process.env;
        if (urlSepolia) { return urlSepolia;}
    }
    return rpcUrl;
};

const getEnvAccount = () => {
    const { ACCOUNT_KEY } = process.env;
    if (ACCOUNT_KEY) {
        return ACCOUNT_KEY.split(",");
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
  }
};

export default config;
