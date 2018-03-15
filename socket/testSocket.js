const net = require('net');

const client = net.createConnection({ port: 8123 }, () => {
	console.log('> connected to server');
	client.write('USER_ADD\r\n');
});

client.on('error', (err) => {
	throw err;
});

client.on('data', (data) => {
	console.log(data.toString());
	client.end();
});

client.on('end', () => {
	console.log('> disconnected from server');
});
