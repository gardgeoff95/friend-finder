
const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

require("./routing/htmlRoutes.js")(app);
currentSurveys = []
app.post("/api/friends", function (req, res) {
    var newSurvey = req.body;

    console.log(newSurvey);

    currentSurveys.push(newSurvey);

    res.json(currentSurveys);
});
app.get("/api/friends",function (req,res){
    return res.json(currentSurveys);
});

app.listen(PORT, function(){
    console.log("server listening on port " + PORT);
});



