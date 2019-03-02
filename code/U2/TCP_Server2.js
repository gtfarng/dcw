var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var server = net.createServer();

server.listen(PORT, HOST);
server.on('connection',  (sock)=> {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data',  (data)=> {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write('You said "' + data + '"');
    });

    sock.on('close',  (data)=> {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
});

console.log('Server listening on ' + HOST + ':' + PORT);