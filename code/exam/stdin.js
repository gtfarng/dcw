var str="NULL"
var stdin = process.openStdin()

stdin.addListener("data",(d)=>
{
 	str=d.toString().trim()
 	console.log("Str: " +str)
 	stdin.destroy()
})

console.log(typeof(str))
console.log(+str)

