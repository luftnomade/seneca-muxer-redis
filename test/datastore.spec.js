const Lab = require("lab");
const lab = (exports.lab = Lab.script());
const { beforeEach, it, describe } = lab;
const { expect } = require("code");
const pquire = require("proxyquire").noPreserveCache();
const sinon = require("sinon");

describe("datastore", () => {
  let clientStub;
  let redisStub;
  let datastoreStub;

  beforeEach(() => {
    clientStub = {
      setAsync: sinon.stub().resolves(),
      getAsync: sinon.stub().resolves(),
      saddAsync: sinon.stub().resolves(),
      smembersAsync: sinon.stub().resolves(),
      incrAsync: sinon.stub().resolves(),
      delAsync: sinon.stub().resolves()
    };

    redisStub = {
      redis: {
        createClient: sinon.stub().returns(clientStub)
      }
    };

    datastoreStub = pquire("../lib/datastore.js", redisStub);
  });

  it("should initialize redis client with options", () => {
    const options = {
      host: "127.0.0.1",
      port: 6379
    };

    datastoreStub(options);
    expect(redisStub.redis.createClient.calledOnce).to.be.true();
  });

  it("should call redis setAsync on set method", async () => {
    const result = await datastoreStub().set("key", "value");
    expect(clientStub.setAsync.calledWith("key", "value")).to.be.true();
  });

  it("should call redis getAsync on get method", async () => {
    const result = await datastoreStub().get("key");
    expect(clientStub.getAsync.calledWith("key")).to.be.true();
  });

  it("should call redis saddAsync on addToSet method", async () => {
    const result = await datastoreStub().addToSet("key", "value");
    expect(clientStub.saddAsync.calledWith("key", "value")).to.be.true();
  });

  it("should call redis smembersAsync on getSet method", async () => {
    const result = await datastoreStub().getSet("key");
    expect(clientStub.smembersAsync.calledWith("key")).to.be.true();
  });

  it("should call redis incrAsync on incr method", async () => {
    const result = await datastoreStub().incr("key");
    expect(clientStub.incrAsync.calledWith("key")).to.be.true();
  });

  it("should call redis delAsync on del method", async () => {
    const result = await datastoreStub().delete("key");
    expect(clientStub.delAsync.calledWith("key")).to.be.true();
  });
});
