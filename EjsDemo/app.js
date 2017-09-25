var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   // res.send("<h1>Welcome to home page!</h1><h2>Bla bla bla..</h2>")
   // res.render("home.ejs");
   res.render("home");
});

app.get("/ilove/:thing", function(req, res){
    var thing = req.params.thing;
    // res.render("love.ejs", {theThing: thing});
    res.render("love", {theThing: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Title 1", author: "Author 1"},
        {title: "Title 2", author: "Author 2"},
        {title: "Title 3", author: "Author 3"}
    ];
    
    // res.render("posts.ejs", {posts: posts});
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});