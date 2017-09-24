var express = require("express");
var app = express();

app.get("/", function(req, res){
   // res.send("<h1>Welcome to home page!</h1><h2>Bla bla bla..</h2>")
   res.render("home.ejs");
});

app.get("/ilove/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {theThing: thing});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});