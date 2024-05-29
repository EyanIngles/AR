const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("deploying....'", async () => {
  let accounts = await ethers.getSigners();
const deployer = accounts[0];
  beforeEach('', async () => {
    console.log(deployer)
  })
  it('contract has successfully been deployed.', async () => {
    expect(deployer).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  })





})

