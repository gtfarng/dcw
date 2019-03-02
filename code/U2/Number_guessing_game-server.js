var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var server = net.createServer();
var answer = (Math.random() * 21).toFixed(0);
var i = 0, ans, sub = 0;
server.listen(PORT, HOST);

server.on('connection', function (sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function (data) {
        console.log('IP : ' + sock.remoteAddress + ' Client to send : ' + data);
        ans = data.toString().trim()
        console.log("Submit: " + sub);
        sub++;
        console.log("Client to send = " + ans);

        if (ans >= 0 && ans <= 21) {
            if (ans == answer) {
                sock.write("BINGO!");
                console.log('\n\nServer listening on ' + HOST + ':' + PORT);
            }
            else {
                if (i < 5) {
                    sock.write("WRONG!");
                }
                else {
                    sock.write("END!");
                    i = 0, sub = 0;
                    //console.log('Server listening on ' + HOST +':'+ PORT);
                    sock.on('close', function (data) {
                        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
                    });
                }
            }
            i++;
        }
        else {
            console.log("\n\nAnswer on server = " + answer);
            sock.write("OK!");
            i = 1, sub = 1;
        }
    });
});
console.log('Server listening on ' + HOST + ':' + PORT);