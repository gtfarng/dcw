var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var str
var name
var number

net.createServer((sock)=>
{
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   
   sock.on('data', (data)=> 
   {
   	   	str=data.toString().trim()
 	 	console.log('IP : ' + sock.remoteAddress + ' Client to send : ' + str);

 	 	if(str<0)
 	 	{
 	 		sock.write("OK");
 	 		console.log(' server to send : OK')
 	 		name=str
 	 		console.log(' Name : '+ name)
  	 	}
  	 	else if(str>=0)
  	 	{
  	 		
  	 		sock.write(str);
  	 		console.log(' server to send :' + str)
  	 	}
  	 	else
  	 	{
  	 		sock.write("OK");
 	 		console.log(' server to send : OK')
 	 		name=str
 	 		console.log(' Name : '+ name)
  	 	}
 	 	
 	
   });

   sock.on('close', (data)=> 
   {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);