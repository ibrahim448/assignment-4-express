const express = require("express");

const app = express();

app.get("/about",(req,res)=>{
    res.download("./upload/abc.jpg")
});

app.listen(8000,()=>{
    console.log("server run success")
});