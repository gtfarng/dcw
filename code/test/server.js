var net = require('net')

var total = 0;
net.createServer(function(sock){
	console.log("incoming connection");
	sock.on('data', function(data){
		console.log(`receiving ${data}`)
		total += parseInt(data);
		sock.write("" + total);
	})
}).listen(5000);

console.log("Server is listening at port 5000");