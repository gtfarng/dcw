foo = function () { return "Foo" }
console.log(foo())
console.log(typeof(foo()))

foo = () => "Foo"
console.log(foo())
console.log(typeof(foo()))

foo = () => x = 4
console.log(foo())
console.log(typeof(foo()))

foo = () => { x = 4 } 
console.log(foo())
console.log(typeof(foo()))
