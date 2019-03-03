var express = require('express'), 
    app = express();
    
app.use(express.static(__dirname + '/public'))
  
var session = require('express-session')
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
							resave: true, saveUninitialized: true})) 
app.use(function(req, res, next) { 
   var sess = req.session 
   if (sess.views) { 
      sess.views++ 
   } else { 
      sess.views = 1 
   } 
   next()
})

app.get('/session',function(req,res){
	var str = "Session = " + req.session.views + "<br>" +
				"maxAge = " + req.session.cookie.maxAge
	res.send(str)
})
app.listen(8000,function(){
	console.log('server is running...')
});

