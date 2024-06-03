//I'm creating a variable named fs for the node filesystem
const fs = require('node:fs');

//below is the fs.readFile function that takes three arguments, the filename, the enoding type, and a callback function. I assume the callback function is for errors. err parameter reads errors while data parameter read the text file.
fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
