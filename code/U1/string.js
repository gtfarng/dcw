let stdin = process.openStdin()
let string
console.log("Basic Sting of Javascript")
stdin.addListener("data", (str) => {
    string = str.toString().trim()
    console.log("String: " + string)

    console.log("String length: " + string.length)
    console.log("String[1] to String[5]: " + string.substring(1, 5))
    console.log("Sting: " + string + " Change to: " + string.replace(string, "Grape"))
    console.log("String Upper: " + string.toUpperCase())
    console.log("String Lower: " + string.toLowerCase())
    console.log(string.concat(" ,and ", "Grape"))
    console.log(string.charAt(0))
    console.log(string[1])
    console.log(string.indexOf("Kiwi"))
    console.log(string.indexOf("gtfarng"))
    console.log(string.indexOf("jatupat"))

    stdin.destroy()
});




/*
console.log(str.length)
console.log(str.substring(7, 13))
console.log(str.replace("Banana", "Grape"))
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.concat(", ", "Grape"))
console.log(str.charAt(0))
console.log(str[0])
console.log(str.indexOf("Kiwi"))
*/

/*
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos + '\n') // print 21
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos + '\n') // print 7
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res + '\n') // print Banana
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res + '\n') // print Banana
var res = str.slice(7);
console.log(res + '\n') // print Banana, Kiwi
เคร่ืองหมาย + ใชใ้นการตอ่ ขอ้ ความ
var n1 = '2';
var n2 = '3';
console.log(n1 + n2) // 23
ถา้ตอ้ งการให้ตัวเลขบวกกันตอ้ งแปลงเป็น Integer
var n3 = parseInt(n1) + parseInt(n2);
console.log(n3) // 5
*/
