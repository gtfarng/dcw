console.log('a: ')
let stdin = process.openStdin()
let a, b, i = 1
stdin.addListener("data", (num) => {
    // console.log(High.toString().trim())
    console.log('b: ')
    if (i === 1)
        a = num
    else if (i === 2) {
        b = num
        console.log("a*b: " + a * b)
        stdin.destroy()
    }
    i++
})
