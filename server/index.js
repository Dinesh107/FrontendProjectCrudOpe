const express = require("express");
const users = require("./sample.json");
const cors = require("cors");
const fs = require("fs");
const app = express();


const port = 8000;

app.use(cors()); // middleware - to cors issue


// Display All user 
app.get("/users", (req, res) => {
    return res.json(users);
})

// Delete users dataila

app.delete("/users/:id", (req, res) => {
    let id = Number(req.params.id);
    let filteredUsers = users.filter((user) => user.id!==id);
    fs.writeFile("./sample.json", JSON.stringify(filteredUsers), () => {
    let filteredUsers = users.filter((user) => user.id!==id);
        return res.json(filteredUsers);
    })
})

//http://localhost:8000/users

app.listen(port, (err)=>{
    console.log(`App is running in port ${port}`);
});