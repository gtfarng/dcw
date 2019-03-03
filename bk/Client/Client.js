var net = require('net');
var client = new net.Socket();

client.connect(5000, '127.0.0.1', function() {
        console.log('Connected');
        client.write('HI, i am Jane');
});
 
client.on('data', function(data) {
        var resp = ("" + data).trim();
        if(resp == "READY"){
        }
});

client.on('close', function() {
        console.log('Connection closed');
});
