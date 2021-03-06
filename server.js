
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

// application/ xxx-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/**json"}));
// parse some custom thing into a buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type"}));
// parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html"}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
