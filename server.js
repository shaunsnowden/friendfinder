// Import dependancies
const path = require('path');

const express = require('express')
const app = express()
var PORT = process.env.PORT || 8080;

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function(){
  console.log("App is listening on PORT: " + PORT);
});