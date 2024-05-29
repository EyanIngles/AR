const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("deploying....'",  () => {
  let accounts, deployer, client1, AR, ar
  let transaction, result
  beforeEach( async () => {
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    client1 = accounts[5];
    AR = await ethers.getContractFactory('AR')
    ar = await AR.deploy("Tamara Bax",'10000000000');
  })
  it('Gather hardhat accounts', async () => {
    expect(await deployer.getAddress()).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  })
  it('AR Contract deployed successfully', async () => {
    expect(await ar.getAddress()).to.equal('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512')
    expect(await ar.consultantName()).to.equal("Tamara Bax")
  })
  it('Consultant sends points to client 1 account', async () => {
    await ar.sendPoints('1000',client1)
  })
  it('Stops clients from add more points to their account', async () => {
    expect(await ar.connect(client1).sendPoints(100, client1)).to.be.rejected('rejected')

  })





})

