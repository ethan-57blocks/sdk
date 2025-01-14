import { expect } from "chai";
import { StoryClient } from "../../src";
import { privateKeyToAccount, generatePrivateKey } from "viem/accounts";
import { Account, http } from "viem";

describe("Test StoryClient", function () {
  describe("Test constructor", function () {
    it("should succeed when passing in default params", function () {
      const client = StoryClient.newClient({
        transport: http(process.env.RPC_PROVIDER_URL),
        account: privateKeyToAccount(generatePrivateKey()),
      });
      expect(client).to.be.instanceOf(StoryClient);
    });

    it("should throw error when wallet account is null", function () {
      expect(() => {
        const client = StoryClient.newClient({
          transport: http(process.env.RPC_PROVIDER_URL),
          account: null as any as Account,
        });
      }).to.throw("account is null");
    });
  });

  describe("Test getters", function () {
    let client: StoryClient;

    beforeEach(function () {
      client = StoryClient.newClient({
        transport: http(process.env.RPC_PROVIDER_URL),
        account: privateKeyToAccount(generatePrivateKey()),
      });
    });
  });
});
