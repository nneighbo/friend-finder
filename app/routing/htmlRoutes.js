var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.resolve("../public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.resolve("../public/survey.html"));
});

app.get("/matches", function(req, res){
    res.sendFile(path.resolve("../public/matches.html"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
