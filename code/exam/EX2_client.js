var net=require('net')
var client = new net.Socket();
var number=10

client.connect(6969,'localhost',()=>
{
 	console.log('Connected')
 	client.write('#GTfarng')
})

client.on('data',(data)=>
{
 	var resp=(""+data).trim()
 	console.log('server to sent: '+resp)
 	
 	if(resp=="OK")
 	{
 		client.write(parseInt(number))
 	}
 	/*else if(resp>=0)
 	{
 		console.log(' server to send : ' + resp)
 		client.destroy()
 	}
 	else
 	{
 		console.log(' Client to send : ' + resp)
 		client.destroy()
 	}*/

})

client.on('close',()=>
{
 	console.log('Connected closed')
})