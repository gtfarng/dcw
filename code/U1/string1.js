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

var n1 = '2';
var n2 = '3';
console.log(n1 + n2) // 23
console.log(typeof (n1 + n2))
console.log(parseInt(n1 + n2)) // 23
console.log(typeof (parseInt(n1 + n2))) // 23

var n3 = parseInt(n1) + parseInt(n2);
console.log(n3) // 5