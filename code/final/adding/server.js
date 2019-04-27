let rpc = require('json-rpc2'); 
let server = rpc.Server.$create();
 
 add=(args, opt, callback)=> { 
    callback(null, args[0] + args[1]); 
} 

server.expose('add', add); 
server.listen(8000, 'localhost');
