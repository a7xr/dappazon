const { expect } = require("chai");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappazon", () => {
  let dappazon;
  let deployer, buyer;
  beforeEach(async () => {
    [deployer, buyer] = await ethers.getSigners();

    const Dappazon = await ethers.getContractFactory("Dappazon");
    dappazon = await Dappazon.deploy();
  });

  describe("Deployment", () => {
    it("Sets the owner", async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    });
  });

  describe("Listing", () => {
    let transaction;
    beforeEach(async () => {
      transaction = await dappazon
        .connect(deployer)
        .list(1, "NAME001", "CATEGORY001", "IMAGE001", 1, 4, 5);
      await transaction.wait();
    });
    it("Returns item attributes", async () => {
      const item = await dappazon.items(1);
      expect(item.id).to.equal(1);
    });
  });
});
