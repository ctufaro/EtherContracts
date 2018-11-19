var ApprovalContract = artifacts.require("./ApprovalContract");
var DumbContract = artifacts.require("./DumbContract");

module.exports = function(deployer) {
  //deployer.deploy(ApprovalContract);
  deployer.deploy(DumbContract);
}
