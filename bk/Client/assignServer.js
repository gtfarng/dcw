var net = require('net');

var HOST = '127.0.0.1';
var PORT = 5000;

var server = net.createServer(function (socket){

	var appState = 0 ;
	var clientName ;

	socket.on('data',function(data){

		var str = ("" + data).trim();
		
		switch(appState){

			case 0: 
				if(str.indexOf('Hi, i am ')==0){

					clientName = str.substring('Hi, i am '.length);
					console.log("client name is " + clientName);
					socket.write("READY");
					console.log("READY");
					appState = 1 ;
				}
				else{
					socket.write("SORRY");
					console.log("SORRY"); 
					socket.destroy();
				}
			break;

			case 1:
				//process data
				//format input from client
				//cleint.write('55+35+512+117');
				var temp = parseInt(str.substring(0,2)) + 
						   parseInt(str.substring(3,5)) +
						   parseInt(str.substring(6,9)) +
						   parseInt(str.substring(10,13)) ;
						   
				temp = temp.toString();
				console.log('data: ' + temp);
				socket.write(temp);

			break;
		}
	});
});

server.listen(PORT, HOST);
console.log('Server listening on ' + HOST + ':' + PORT);