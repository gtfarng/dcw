var net = require('net')

var client = new net.Socket();
client.connect(5000, function(){
	var num = Math.floor(Math.random() * 100) + 1;
	console.log(`num = ${num}`)
	client.write("" + num);
})

client.on('data', function(data){
	console.log(`receiving ${data}`)
	client.destroy()
})
