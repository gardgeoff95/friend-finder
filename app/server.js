

const express = require("express");

const port = process.env.port || 8080;

const app = express();

require("./routing/htmlRoutes.js")(app);


app.listen(port, function(){
    console.log("server listening on port " + port);
});



