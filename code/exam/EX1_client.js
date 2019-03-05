var net=require('net')

var client = new net.Socket();

client.connect(1337,'localhost',()=>
{
 	console.log('Connected')
 	client.write('+')
})

client.on('data',(data)=>
{
 	var resp=(""+data).trim()
 	if(resp=="OK")
 	{
 		client.write('cat')
 	}
 	else
 	{
 		console.log(' Client to send : ' + resp)
 		client.destroy()
 	}

})

client.on('close',()=>
{
 	console.log('Connected closed')
})