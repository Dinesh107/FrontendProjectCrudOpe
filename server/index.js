const express = require("express");
const users = require("./sample.json");
const cors = require("cors");
const app = express();

const port = 8000;

app.use(cors()); // middleware - to cors issue


// Display All user 
app.get("/users", (req, res) => {
    return res.json(users);
})

//http://localhost:8000/users

app.listen(port, (err)=>{
    console.log(`App is running in port ${port}`);
});