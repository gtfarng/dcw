var express = require('express')
var app=express()
var count=0

app.use((req,res,next)=>
{
 	count++
 	console.log(count)
  	next()
})

app.get('/',(req,res,next)=>
{
  	res.send('Hello world!: '+ count)
  	next()
})

app.listen(8000)
console.log("Server is running:8000")

