const fs = require("fs");
const filePath = process.argv[2];
fs.readFile(filePath, "utf8", (function readContents (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    const newLines = data.split("\n").length - 1
    console.log(newLines);
}));

//What I did was I copy and pasted my code from my-first-io.js onto this file and re worded a little bit. I took inspiration from my MEDIUM challenge to get the fs.readFile written correctly.