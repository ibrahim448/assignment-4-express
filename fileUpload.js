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

const upload = multer({
     storage:storage,
     limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
    fileFilter:(req, file, callBack) => {
         // upload only png and jpg format
        if(file.mimetype === 'image/jpg'||
          file.mimetype === 'image/png'
        ){
            callBack(null, true);
        }else{
            callBack(new Error('Only png, jpg supported!'));
            
        }
    }

}).single("file");

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