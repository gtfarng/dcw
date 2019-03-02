console.log("arrow function")
let add = x => y => x + y
add(2)(3) //5
console.log(add(2)(3))

console.log("non-arrow curry function")
function add1(x) {
    return function (y) {
        return x + y
    }
}
console.log("traditional function")

function add2(x, y) { return x + y }
console.log(add2(2,3))