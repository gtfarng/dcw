var net = require('net');
var HOST = 'localhost';
var PORT = 6969;

net.createServer( (sock)=> {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data',  (data)=> {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write('You said "' + data + '"');
    });
    
    sock.on('close',  (data)=> {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);