const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("deploying....'", async () => {
  
  


  it('Gather hardhat accounts', async () => {
    let accounts = await ethers.getSigners();
    const deployer = accounts[0];
    expect(await deployer.getAddress()).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  })





})

