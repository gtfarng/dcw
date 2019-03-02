let stdin = process.openStdin()
let a = 1;
const main = () => {
    console.log('a: ')
    stdin.addListener("data", getA)
}
const getA = (num) => {
    a = num.toString().trim()
    console.log('a = ' + a)
    console.log('b: ')
    stdin.addListener("data", getB)
}
const getB = (b) => {
    console.log('a = ' + a.toString().trim())
    console.log('b = ' + b.toString().trim())
    console.log('a*b = ' + a * b)
    stdin.destroy()
}
main()
