// Import dependancies
const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
var PORT = process.env.PORT || 8080;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Application routing
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


// Start listening on port
app.listen(PORT, function(){
  console.log("App is listening on PORT: " + PORT);
});