//Sets up the Express App to handle data parsing
//===========================================================================


//Basic route
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"))
});