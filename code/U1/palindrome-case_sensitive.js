let stdin = process.openStdin()

console.log('Palindrome case sensitive')
stdin.addListener("data", (d) => {
    let str = d.toString().trim()
    console.log('Palindrome: ' + palindrome(str))
    stdin.destroy()
});

let palindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++)
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    return true
}