/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");

const privateKeyDev =
  "0x156e5e32e728f2d68639effbb2cd756ac9f87f9c76b44404ac52d9f916a82d8d";

module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},

    dev: {
      url: "http://127.0.0.1:8610",
      accounts: [privateKeyDev],
      network_id: 12101,
      chainId: 12101,
      websocket: true,
      gas: 2001306,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
