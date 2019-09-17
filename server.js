//Dependencies
//==========================================================================
var express = require("express");
var path = require("path");

//Sets up the Express App
//===========================================================================
var app = express();
var PORT = 3000;

//Sets up the Express App to handle data parsing
//===========================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);  
});