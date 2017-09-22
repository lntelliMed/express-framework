var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Welcome to Animal Sounds Page");
});

app.get("/sound/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        dog: "Woof Woof",
        cat: "Meow"
    }
    res.send("The animal " + animal + " says '" + sounds[animal] +"'!");
});


app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    
    for (var i = 0; i < times; i++) {
        result += message + " ";
    }

    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Oops, wrong page..");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Started server at: " + process.env.IP +":" + process.env.PORT);
});