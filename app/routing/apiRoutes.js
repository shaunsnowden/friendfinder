// Import dependancies
const path = require('path');

const express = require('express')
const app = express()
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
  // res.send('Let\'s find frinds!!');
});


// Import friends
var friends = require('../data/friends.js');

// Export API Routes
module.exports = function(app){
  console.log('api routes imports');

  app.get('api/friends', function(req, res){
      res.json(friends);
  });

  // Add a new friend 
  app.post('/api/friends', function(req, res){
    var userInput = req.body;
    console.log('userInput: ' + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    console.log('userResponses: ' + JSON.stringify(userResponses));

    //Computation of math
    var matchName = '';
    var matchImg = '';
    
    // Initial difference
    var friendMatch = 1000;

    for (var i = 0; i < friends.length; i++){

    }


  })
}

app.listen(PORT, function(){
  console.log("App is listening on PORT: " + PORT);
});