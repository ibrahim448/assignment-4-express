const express = require("express");

const app = express();

app.post("/",(req,res)=>{
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    res.send(firstName + " " + lastName)
});

app.listen(8000,()=>{
    console.log("server run success")
});