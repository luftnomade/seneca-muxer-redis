const redis = require("redis");
const bluebird = require("bluebird");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = options => {
  const client = redis.createClient(options);

  return {
    set: (key, value) => {
      return client.setAsync(key, value);
    },
    get: key => {
      return client.getAsync(key);
    },
    addToSet: (key, value) => {
      return client.saddAsync(key, value);
    },
    getSet: key => {
      return client.smembersAsync(key);
    },
    incr: key => {
      return client.incrAsync(key);
    },
    del: key => {
      return client.delAsync(key);
    }
  };
};
