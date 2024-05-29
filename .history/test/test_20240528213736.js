const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("deploying....'",  () => {
  let accounts, deployer, AR, ar
  beforeEach( async () => {
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    AR = await ethers.getContractFactory('rewards')
    ar = await AR.deploy("Tamara Bax");
  })

  it('Gather hardhat accounts', async () => {
    expect(await deployer.getAddress()).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  })
  it('AR Contract deployed successfully', async () => {
    expect(ar.getAddress()).to.equal(deployer)
    
  })





})

