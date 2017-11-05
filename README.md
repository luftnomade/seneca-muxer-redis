# seneca-muxer-redis

This project is a datastore plugin for the [seneca-muxer](https://github.com/wzrdtales/seneca-muxer).


## Usage

    const datastore = require('seneca-muxer-redis')(options);

for a list of options see [node_redis documentation](https://github.com/NodeRedis/node_redis#options-object-properties)

All methods return a promise: 

    await datastore.set(key, value) // set key and value
    await datastore.get(key) // get key
    await datastore.addToSet(key, value) // add value to key
    await datastore.getSet(key) // gets all values for a key as array
    await datastore.incr(key) // increments a value for a key
    await datastore.delete(key) // deletes a value for a key


## Developing

### Installation

    npm install

### Start a local redis instance

    docker-compose up

### Tests

    npm test

### Run example  

    npm start
