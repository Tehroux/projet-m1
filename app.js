const net = require('net');
const mongoose = require('mongoose');

const parser = require('./parser/parser.js');

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

// parsing
const SEP = /:/;

const SIGN_IN = /SIGN_IN/; // SIGN_IN:username:password
const LOG_IN  = /LOG_IN/;  // LOG_IN:username:password

const parse = (string) => {
	command = string.split(SEP);
	if 	(SIGN_IN.test(command[0])) 
		sign_in(
			command[1], // username 
			command[2]  // password
		);
	else if (LOG_IN,test(command[0]))  
		log_in(
			command[1], // username
			comamnd[2}  // password
		);
});

const sign_in = (username, password) => {
};

const log_in = (username, password) => {
};
