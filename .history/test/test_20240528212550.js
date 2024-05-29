const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("deploying....'", async () => {
  let accounts = await ethers.getSigners();
const deployer = accounts[0];
  beforeEach('', async () => {
  })
  it('contract has successfully been deployed.', async () => {
    console.log(deployer)
  })





})

