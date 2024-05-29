const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("deploying....'", () => {
  beforeEach('', async () => {
    let accounts = await ethers.getSigners();
    let deployer = accounts[0];
  })
  it('contract has successfully been deployed.', async () => {
    console.log(deployer)
  })





})

