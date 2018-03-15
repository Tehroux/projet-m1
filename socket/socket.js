const net = require('net');

const parser = require('../parser/parser.js').parser;

const server = net.createServer((client) => {
	console.log('> client connected');
	client.on('end', () => {
		console.log('> client disconnected');
	});
	client.on('data', (data) => {
		parser(data.toString());
	});
	client.write('hello\r\n');
	client.pipe(client);
});

server.on('error', (err) => {
	throw err;
});

server.listen(8123, () => {
	console.log('> server bound');
});

