const exprss = require("express");
const bodyParser = require("body-parser");

const app = exprss();
app.use(bodyParser.json());


app.post("/",(req,res)=>{
    const jsondata = req.body;
    const jsonString = JSON.stringify(jsondata);
    res.send(jsonString);

    // const name = jsondata.name;
    // const age = jsondata.age;

    // res.send(name + " " + age);
});

app.listen(8000,()=>{
    console.log("server run success")
});


