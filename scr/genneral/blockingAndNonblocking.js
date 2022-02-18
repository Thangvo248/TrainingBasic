// Blocking
const fs = require('fs');
const data = fs.readFileSync("./genneral"); // blocks here until file is read
console.log(data);

// Non-blocking
const fs = require('fs');
fs.readFile('./genneral.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("data"); // run before readFile