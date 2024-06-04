//Here I'm referencing the filesystem library
const fs = require("fs");
//this variable is storing the array learnyounode provides
const filePath = process.argv[2];
const buffer = fs.readFileSync(filePath);
const content = buffer.toString();
const newLines = content.split("\n").length - 1
console.log(newLines);

//I'll be honest, I'm having a hard time putting this into my own words, but I will do further research to improve my understanding.
