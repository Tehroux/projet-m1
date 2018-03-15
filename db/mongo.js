const MongoClient = require('mongodb').MongoClient;

const createUser = require('../user/user.js').createUser;
const removeUser = require('../user/user.js').removeUser;

const url = 'mongodb://localhost:27017';
const dbName = 'cloud';

MongoClient.connect(url, (err, client) => {
	console.log('> connected successfully to server');

	const db = client.db(dbName);
	
	removeUser(db, 'Tehroux');
});

