const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,"./upload")
    },
    filename:(req,file,callBack)=>{
        callBack(null,file.originalname)
    }
});

const upload = multer({storage:storage}).single("file");

app.post("/",(req,res)=>{
    upload(req,res,error=>{
        if(error){
            res.send("file upload fail")
        }
        else{
            res.send("file upload success")
        }
    })
});

app.listen(8000,()=>{
    console.log("server run success")
});