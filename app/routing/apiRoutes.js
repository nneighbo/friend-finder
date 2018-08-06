var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var peopleData = require('../data/friends')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/people", function(req, res) {
    res.json(peopleData);
});

app.get("/survey", function(req, res){
    return res.json(peopleData)
 });
 

app.post("/api/people", function(req, res) {
   peopleData.push(req.body)
   console.log(people)
});

