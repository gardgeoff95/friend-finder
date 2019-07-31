


module.exports = function(app) {
    const path = require("path");

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
        
    });
    
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.get("/css/main.css", function(req, res){
        res.sendFile(path.join(__dirname, "/../css/main.css"));
    });
    
    app.get("/css/bootstrap.css", function(req, res){
        res.sendFile(path.join(__dirname, "/../css/bootstrap.css"));
    });
}