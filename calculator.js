const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/calculator",function(req,res){
    res.send(__dirname+"/calculator.html");
});

app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;
    var result1 = n1-n2;
    var result2 = n1*n2;
    var result3 = n1/n2;
    res.send("your addition is"+ result + result1 + result2 + result3 );
});