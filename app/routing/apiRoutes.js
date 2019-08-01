module.exports = function(app) {
    const path = require("path");

    var currentSurveys = []

    app.post("api/friends", function(req, res){

        console.log(req.body);
        var newSurvey = req.body;

        currentSurveys.push(newSurvey);
        res.json();
        

    });

    app.get("/api/friends", function(req, res){
        return res.json(currentSurveys);
    });
};

