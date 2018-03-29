const net = require('net');
const mongoose = require('mongoose');

const User = require('./model/user.js'); 

const URL = 'mongodb://locahost:27017/cloud';

// server creation
const server = net.createServer((client) => {
	console.log('> client connected');
	client.on('end', () => {
		console.log('> client disconnected');
	});
	client.on('data', (data) => {
		console.log('> data: ' + data.toString())
	});
	client.write('MOTD: your are connected');
	client.pipe(client);
});

server.on('error', (err) => {
	throw err;
});

server.listen(8123, () => {
	console.log('> server bound');
});


