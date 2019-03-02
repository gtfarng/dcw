console.log("original function")

setTimeout(function () { console.log("done"); }, 10000)

function CurriedAdd(x) {
    return function (y) { return x + y }
};
console.log(CurriedAdd(1)(2)) // 3

function sum3(x) {
    return (y) => {
        return (z) => {
            return x + y + z;
        };
    };
}
console.log(sum3(1)(2)(3)) // 6


console.log("arrow function")

setTimeout(() => { console.log("done"); }, 10000)

CurriedAdd = (x) => {
    return (y) => { return x + y }
};
console.log(CurriedAdd(1)(2)) // 3

sum3 = (x) => {
    return (y) => {
        return (z) => {
            return x + y + z;
        };
    };
}
console.log(sum3(1)(2)(3)) // 6
