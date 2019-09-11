var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars")
var methodOverride = require("method-override");
var path = require("express"); 
var app = express();
app.use(bodyParser.urlencoded({
extended: false 
}))

app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
})); 


//view engine 
app.set("view engine", "handlebars");
//set port to 8080 for Heroku
var PORT = process.env.PORT || 8080;

//setup routes
var routes = require("./controllers/router");
app.use('/', routes); 

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });