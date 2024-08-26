import { expect } from "chai";
import { ethers } from "hardhat";
import {address, abi} from "../frontend/contracts/Marketplace.json";


describe("NFTMint", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.


  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const contract = new ethers.Contract(address, abi, ethers.provider);
      const tokenbalance = await contract.getAllowance();
      const nftbalance = await contract.balanceOf("0xAEba95a79411d88C7c108BEbCC2A8eaa5143A7f9");
      // await contract.createToken(["https://gateway.pinata.cloud/ipfs/QmNSvhjCxr8oqa9MSamREN3SPUxGf3ZRLPPr4P24zwHzzc"], 100000000000000);
      // const ownerAddress = await contract.ownerOf(1);
      // console.log("ownerAddress:", ownerAddress.toString());
      console.log("tokenBalance:", tokenbalance.toString());
      console.log("nftBalance:", nftbalance.toString());
      // expect(await lock.unlockTime()).to.equal(token);
    });

  });
});
