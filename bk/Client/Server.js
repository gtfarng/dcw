var net = require('net');
 
var server = net.createServer(function(socket) {
        var appState = 0;
        var clientName;
        
        socket.on('data', function(data){
                var str = ("" + data).trim();
                switch(appState){
                        case 0:
                                if(str.indexOf('HI, i am ') == 0){
                                        clientName = str.substring('HI, i am '.length);
                                        console.log("client name is " + clientName);
										appState = 1;
                                }
                                break;
                        case 1:
                                //process data
                                break;
                }
                
        });
});
 
server.listen(5000, '127.0.0.1');
