const net = require('net');

const server = net.createServer((client) => {
	console.log('> client connected');
	client.on('end', () => {
		console.log('> client disconnected');
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

