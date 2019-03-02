var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('I am #GTfarng');
});

client.on('data', (data) => {
    console.log('DATA: ' + data);
    client.destroy();
});

// Add a 'close' event handler for the client socket
client.on('close', () => {
    console.log('Connection closed');
});
