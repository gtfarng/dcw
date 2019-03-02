console.log("original") 
function sum3(x, y, z) {
    return x + y + z;
}
console.log(sum3(1, 2, 3)) // 6
console.log("arrow function") 
sum3 = (x, y, z) => {
    return x + y + z;
}
console.log(sum3(1, 2, 3)) // 6

console.log("Curry function") 
sum3 = (x) => {
    return (y) => {
        return (z) => {
            return x + y + z;
        };
    };
}
console.log(sum3(1)(2)(3))

