const fs = require("fs");
const argv = require("yargs").argv;

// //read write with argv index
// const READ_INDEX_COMMENT_LINE = 2;
// const WRITE_INDEX_COMMENT_LINE = 3;
// let pathRead = process.argv[READ_INDEX_COMMENT_LINE];
// let pathWrite = process.argv[WRITE_INDEX_COMMENT_LINE];
// if (pathRead) {
//   try {
//     let data = fs.readFileSync(pathRead, "utf8");
//     fs.writeFileSync(pathWrite, data, { flag: "a+" });
//     console.log("Data: ", data);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// } else {
//   console.log("comment line is not correct");
// }

//read write with yargs
let pathRead = argv.readPath;
let pathWrite = argv.writePath;
if (pathRead) {
  try {
    let data = fs.readFileSync(pathRead, "utf8");
    fs.writeFileSync(pathWrite, data, { flag: "a+" });
    console.log("Data: ", data);
  } catch (err) {
    console.log("Error: ", err);
  }
} else {
  console.log("comment line is not correct");
}
