import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

import * as dotenv from "dotenv";

dotenv.config();

console.log(process.env.NEXT_APP_ALCHEMI_API_URL);
console.log(process.env.NEXT_APP_RRIVATE_KEY);

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",    
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {

    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: process.env.NEXT_APP_ALCHEMI_API_URL,
      accounts: [ process.env.NEXT_APP_RRIVATE_KEY ]
    },
    mumbai: {
      url: process.env.NEXT_APP_ALCHEMI_MUMBAI_API_URL,
      accounts: [process.env.NEXT_APP_RRIVATE_KEY]
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  verify: {
    etherscan: {
      apiKey: process.env.NEXT_APP_ETHERSCAN_KEY,
    },
  },
};

export default config;
