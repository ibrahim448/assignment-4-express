const express = require("express");

const app = express();

app.post("/",(req,res)=>{
    const userName = req.header("userName");
    const password = req.header("password");

    res.send(`username: ${userName} password: ${password}`)
});

app.listen(8000,()=>{
    console.log("server run success")
});