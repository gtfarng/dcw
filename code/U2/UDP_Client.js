var dgram = require('dgram');
var message = new Buffer.from("I am #GTfarng", 'utf8');
var client = dgram.createSocket("udp4");

client.send(message, 0, message.length, 41234, "localhost",
     (err, bytes)=> {
        client.close();
    }
);
