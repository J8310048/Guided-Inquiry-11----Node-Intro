//return a 200 response to a request create a server and if there's a request we response with hello world
//try importing express

const express = require('express')
const fs = require("fs");
let agents
try {
    // Note that jsonString will be a <Buffer> since we did not specify an
    // encoding type for the file. But it'll still work because JSON.parse() will
    // use <Buffer>.toString().
    const jsonString = fs.readFileSync("./00-Agents.json", "utf-8");
    agents = JSON.parse(jsonString);
} catch (err) {
    console.log(err);
    return;
}

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/employees', (req, res) => {
    res.json(agents);
});

app.get('/employees/:employeeID', (req, res) => {
    console.log(`Requested ID: ${req.params.employeeID}`);
    let foundUser = agents.find(agents => agents.employeeID === req.params.employeeID);
    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).send('Error 404: Employee not found');
    }
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

