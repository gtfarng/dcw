var net = require('net');

var HOST = '127.0.0.1';
var PORT = 5000 ;

var client = new net.Socket();

client.connect(PORT,HOST,function(){

	console.log('Connected');
	client.write('Hi, i am Jane');
	//client.write('s5535512117');
});

client.on('data', function(data){

	var resp = ("" + data).trim();

	if(resp == "READY"){
		
		console.log('55+35+512+117 = ?');
		client.write('55+35+512+117');
		
	}
	else {
		
		console.log('My Result = ' + data);
		client.destroy();
	}
});

client.on('close', function(){

	console.log('BYE');
});