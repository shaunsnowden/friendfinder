// Import dependancies
const path = require('path');

const express = require('express')
const app = express()
var PORT = process.env.PORT || 8080;

// Import friends
var friends = require('../data/friends.js');


// Export API Routes
module.exports = function(app){

  app.get('/', function(req, res){
    // res.send('Let\'s find frinds!!');
  });


    console.log('api routes imports');

    app.get('/api/friends', function(req, res){
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

        var indvMatchDiff = 0;
        for (var n = 0; n<userResponses.length; n++){
          indvMatchDiff += Math.abs(friends[i].scores[n]-userResponses[n]);
          console.log(indvMatchDiff);
        }
        if(indvMatchDiff<friendMatch){
          friendMatch=indvMatchDiff;
          matchName=friends[i].name;
          matchImg=friends[i].photo;
        }
      };

      // Debug Statements
      console.log(`Friend Match Difference: ${friendMatch}`);
      console.log(`Friend Match Name: ${matchName}`);

      //Add user to fiends.js array
      friends.push(userInput);

      //Send response back to clientside UI
      res.json({status: 'OK', matchName: matchName, matchImage: matchImg});
    });
};