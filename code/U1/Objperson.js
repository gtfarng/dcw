Objperson = 
{
    name:"Bob",
    age:45,
    birthday: { day:5, month:11, year:1900},
    max: (x,y) => (x>y)?x:y
}
console.log("\n")
console.log("create Objperson")
console.log(Objperson)
console.log("\n")

console.log("add description")
Objperson.max.description = "Find max" 
console.log(Objperson)


