var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/people", function(req, res) {
    return res.json(people);
});

app.post("/api/people", function(req, res) {
    var newperson = req.body;
    console.log(newperson);
    characters.push(newperson);
    res.json(newperson);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});