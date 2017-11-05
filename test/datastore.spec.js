const Lab = require("lab");
const lab = (exports.lab = Lab.script());
const { before, it, describe } = lab;
const { expect } = require("code");
const pquire = require("proxyquire").noPreserveCache();
const sinon = require("sinon");

describe("datastore", () => {
  it("should initialize redis client with options", () => {
    const options = {
      host: "127.0.0.1",
      port: 6379
    };

    const redisStub = {
      redis: {
        createClient: sinon.stub()
      }
    };

    const datastoreStub = pquire("../lib/datastore.js", redisStub);
    datastoreStub(options);
    expect(redisStub.redis.createClient.calledOnce).to.be.true();
  });
});
