const net = require('net');
const mongoose = require('mongoose');

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


// mongo
mongoose.connect('mongodb://localhost:27017/cloud');

const  db = mongoose.connection;

db.on('error', console.error.bind(console, '> connection error: '));

db.on('connected', () => {
	console.log('> mongodb connected');
});

db.on('disconnected', () => {
	console.log('> mongodb disconnected');
});

const user = require('./model/user.js')

user.userModel.findOne({username: 'test1'}, (err, data) => {
	console.log(data);
});

// parsing logic
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
			comamnd[2]  // password
		);
};

const sign_in = (username, password) => {
	user.userModel.find({ username: 'username' }, (err, data)  => {
		console.log(data);
	});
};

const log_in = (usernam, password) => {
};

sign_in('test1', 'test1');
