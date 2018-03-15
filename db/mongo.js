const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const mainLoop = require('../mainLoop/mainLoop.js').mainLoop;

const url = 'mongodb://localhost:27017';

const dbName = 'cloud';

MongoClient.connect(url, (err, client) => {
	assert.equal(null, err);
	console.log('> connected successfully to server');

	const db = client.db(dbName);
	mainLoop(db);
	client.close();
});

