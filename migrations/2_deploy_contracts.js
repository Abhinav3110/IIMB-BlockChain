var IIMBToken = artifacts.require("./IIMBToken.sol");
var IIMBTokenSale = artifacts.require("./IIMBTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(IIMBToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(IIMBTokenSale, IIMBToken.address, tokenPrice);
  });
};


