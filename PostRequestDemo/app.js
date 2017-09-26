var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Peter", "John", "Miranda"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    // console.log(req.body);
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    // res.send("You've reached the post request!");
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends, friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!!!");
});