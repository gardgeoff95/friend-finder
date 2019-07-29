const path = require("path");

const express = require("express");

var port = process.env.port || 8080;

var app = express();

app.listen(port, function(){
    console.log("server listening on port " + port);
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/public/home.html"));
    
});


app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname + "/public/survey.html"));
});



//loading css files

app.get("/css/main.css", function(req, res){
    res.sendFile(path.join(__dirname, "css/main.css"));
});

app.get("/css/bootstrap.css", function(req, res){
    res.sendFile(path.join(__dirname, "css/bootstrap.css"));
});







