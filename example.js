const datastore = require("./index.js")({
  host: "127.0.0.1",
  port: 6379
});

datastore
  .set("some key", "some value")
  .then(result => {
    console.log(result);
    return datastore.get("some key");
  })
  .then(result => {
    console.log(result);
    return datastore.addToSet("some event", "some value");
  })
  .then(result => {
    console.log(result);
    return datastore.addToSet("some event", "some other value");
  })
  .then(result => {
    console.log(result);
    return datastore.getSet("some event");
  })
  .then(result => {
    console.log(result);
    return datastore.set("some number", 1);
  })
  .then(result => {
    console.log(result);
    return datastore.incr("some number");
  })
  .then(result => {
    console.log(result);
  });
