fs = require("fs");
fs.readFile('text.txt', (err, data) => {
    if (err)
        return console.error(err);
    console.log(data.toString());
});
console.log("Finished");