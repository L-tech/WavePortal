require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/RXLgp3czbgJ6UMg_jIHcDi-zAU9vQa8e',
      accounts: ['58340640d2c5f6d61b8e4f5ec430aaa10703e221ab1965bd545696a01bc8d804'],
    },
  },
};