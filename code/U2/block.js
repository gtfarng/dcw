fs = require("fs");
data = fs.readFileSync('text.txt');
console.log(data.toString());
console.log("Finished");
