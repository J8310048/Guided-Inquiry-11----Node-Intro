const fs = require("fs");


const filePath = process.argv[2];

//Here I'm using a for loop to iterate over every array element to be printed on their own as seperate strings
fs.readdir(filePath, function(err, list) {
    if (err) {
        console.error(err);
        return;
    }

    
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]); 
    }
});

//I ran learnyounode run filtered-ls.js  and it listed all the files one by one in their own seperate strings, but when I ran learnyounode verify filtered-ls.js to get the complete notification on learnyounode, it said it didn't match their answer. Which makes no sense. And the proof is in this folder: EASY/filtered-ls picture-proof