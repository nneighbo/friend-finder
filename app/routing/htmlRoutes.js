var path = require("path");

module.exports = function(app){
app.get("/", function(req, res) {
    res.sendFile(path.resolve("./public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.resolve("./public/survey.html"));
});

app.get("/matches", function(req, res){
    res.sendFile(path.resolve("./public/matches.html"));
});
}


