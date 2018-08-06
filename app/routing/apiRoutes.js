module.exports = function(app){

    var peopleData = require('../data/friends')
    
    app.get("/api/people", function(req, res) {
        res.json(peopleData);
    });
    
    app.post("/api/people", function(req, res) {
 
       peopleData.push(req.body)
    });
}


