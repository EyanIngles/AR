const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("deploying....'", async () => {
  
  


  it('contract has successfully been deployed.', async () => {
    let accounts = await ethers.getSigners();
    const deployer = accounts[0];
    expect(deployer).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
    console.log(deployer.getAddress())
  })





})

