// Import dependancies
const path = require('path');

const express = require('express')
const app = express()
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.send('Let\'s find frinds!!');
});