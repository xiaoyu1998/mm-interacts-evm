import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { defaultRpcs } from "./utils/network";

const getEnvAccount = () => {
    const { ACCOUNT_KEY } = process.env;
    if (ACCOUNT_KEY) {
        //return [ACCOUNT_KEY];
        return ACCOUNT_KEY.split(",");
    }
    return [];
};

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks:{
      localnet: {
          url: defaultRpcs["localnet"],
          chainId: 1998,
          accounts: getEnvAccount(),
          blockGasLimit: 20_000_000,
          gas: 20_000_000,
      },
      arbitrumGoerli: {
          url: defaultRpcs["arbitrumGoerli"],
          chainId: 11155111,
          accounts: getEnvAccount(),
          blockGasLimit: 20_000_000,
          gas: 20_000_000,
      },
  }
};

export default config;
