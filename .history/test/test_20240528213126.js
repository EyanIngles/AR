const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("deploying....'",  () => {
  let accounts, deployer
  beforeEach( async () => {
    accounts = await ethers.getSigners();
    deployer = accounts[0];
  })

  it('Gather hardhat accounts', async () => {
    expect(await deployer.getAddress()).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  })





})

