let rpc = require('json-rpc2'); 
let client = rpc.Client.$create(8000,
   'localhost'); 

// Call add function on the server 
client.call('add', [1, 2], 
   (err, result)=> { 
      console.log('1 + 2 = ' + result); 
   }
);
