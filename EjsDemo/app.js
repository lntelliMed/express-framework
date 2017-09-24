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

app.get("/posts", function(req, res){
    var posts = [
        {title: "Title 1", author: "Author 1"},
        {title: "Title 2", author: "Author 2"},
        {title: "Title 3", author: "Author 3"}
    ];
    res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});