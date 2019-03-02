var dgram = require("dgram");
var server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
    console.log('Server listening on ' + rinfo.address);
    console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
});


server.bind(41234); // server listening 0.0.0.0:41234

