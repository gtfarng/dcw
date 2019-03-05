var net = require('net');
var HOST = 'localhost';
var PORT = 1337;
var str
var DATA={cat:0,dog:0,bird:0}
var state

net.createServer((sock)=>
{
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   
   sock.on('data', (data)=> 
   {
   	   	str=data.toString().trim()
 	 	console.log('IP : ' + sock.remoteAddress + ' Client to send : ' + str);
 	 	if(str=='+')
 	 	{
 	 		sock.write("OK");
 	 		state=1
 	 	}
 	 	else if(str=='-')
 	 	{
 	 		sock.write("OK");
 	 		state=0
 	 	}	
 	 		
 	 	else if(str=='cat'&&state==1)
 	  	{
 	 		sock.write("sent cat complete!");
 	 		DATA.cat++
 	  	}
 	 	else if(str=='dog'&&state==1)
 	 	{
 	 		sock.write("sent dog complete!");
 	 		DATA.dog++
 	 	}
  	 	else if(str=='bird'&&state==1)
  	 	{
 	 		sock.write("sent bird complete!");
 	 		DATA.bird++
  	 	}
  	 	
  	 	else if(str=='cat'&&state==0)
 	  	{
 	 		sock.write("sent cat complete!");
 	 		DATA.cat--
 	  	}
 	 	else if(str=='dog'&&state==0)
 	 	{
 	 		sock.write("sent dog complete!");
 	 		DATA.dog--
 	 	}
  	 	else if(str=='bird'&&state==0)
  	 	{
 	 		sock.write("sent bird complete!");
 	 		DATA.bird--
  	 	}

  	 	 console.log('cat:' + DATA.cat +', dog:' + DATA.dog+', bird:' + DATA.bird);
 	
   });

   sock.on('close', (data)=> 
   {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);