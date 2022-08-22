require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.5.11",
  networks: {
    hardhat: {
      forking: {
        url: process.env.POLYGON_ALCHEMY_API_KEY,
        blockNumber: 22156659 // Upgrade to fix ecrecover was executed on block #22156660
      }
    }
  }
};
