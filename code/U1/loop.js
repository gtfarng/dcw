console.log("Loop original:")
let array = [0, 1, 2, 3]
for (let i = 0; i < array.length; i++)
    console.log(array[i])

console.log("Loop for in array:")
for (let key in array)
    console.log(array[key])

console.log("Loop for in object:")
let obj = { 'a': 1, 'b': 2, 'c': 3 }
for (key in obj)
    console.log(key + ': ' + obj[key])