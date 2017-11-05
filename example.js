const datastore = require("./index.js")({
  host: "127.0.0.1",
  port: 6379
});

const run = async () => {
  const set = await datastore.set("some key", 1);
  console.log(`set returned with ${set}`);
  const get = await datastore.get("some key");
  console.log(`get returned with ${get}`);
  const addToSet = await datastore.addToSet("some event", "some value");
  console.log(`addToSet returned with ${addToSet}`);
  const secondAddToSet = await datastore.addToSet(
    "some event",
    "some other value"
  );
  console.log(`second addToSet returned with ${secondAddToSet}`);
  const getSet = await datastore.getSet("some event");
  console.log(`getSet returned with ${getSet}`);
  const incr = await datastore.incr("some key");
  console.log(`incr returned with ${incr}`);
  const del = await datastore.delete("some key");
  console.log(`del returned with ${del}`);
  const getAfterDelete = await datastore.get("some key");
  console.log(`get after delete returned with ${getAfterDelete}`);
};

run();
