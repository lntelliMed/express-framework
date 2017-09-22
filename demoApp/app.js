var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hello there!!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});

app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("Mewo!!");
});

app.get("/r/:subredditName", function(req, res){
    // console.log(req);
    // console.log(req.params);
    // res.send("Welcome to a subreddit!");
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    // console.log(req);
    // console.log(req.params);
    res.send("Welcome to the comments page!");
});

app.get("*", function(req, res){
    res.send("Invalid URL!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});