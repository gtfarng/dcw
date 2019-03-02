CurriedAdd = (x) => {
    return (y) => {
        return x + y
    }
};
g = CurriedAdd(2);
g(3)
console.log(g = CurriedAdd(2))
console.log(g(3))
