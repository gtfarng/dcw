let str1 = 'OK';
let str2 = new String('OK');

console.log('Compare (==)');
if (str1 == str2)
    console.log('equal');
else
    console.log('Not equal');

console.log('Compare (!==)');
if (str1 !== str2)
    console.log('equal');
else
    console.log('Not equal');


console.log('Compare (===)');
if (str1 === str2)
    console.log('equal');
else
    console.log('Not equal');