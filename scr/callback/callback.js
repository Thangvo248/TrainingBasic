var fs = require("fs");

function readFile(path, callback) {
    fs.readFile(path, (err, data) => {
        callback(err, data);
    })
}
readFile("./callback,md",(err, data) => {
    console.log(data);
})


// Example callback hell