var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hello there!!")
});

app.get("/bye", function(req, res){
    res.send("Goodbye!!")
});

app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("Mewo!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});