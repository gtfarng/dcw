let stdin = process.openStdin()
let string

console.log("Enter string: ")
stdin.addListener("data", (str) => {
    string = str.toString().trim()
    console.log("String : " + string)
    stdin.destroy()
});
