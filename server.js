// KITTY KNOCK //
// REQUIRE //
var express = require("express");

// port //
var PORT = process.env.PORT || 8080;

// express //
var app = express();

// static content from the public directory //
app.use(express.static("public"));

// request body as JSON //
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// handlebars //
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// routes //
var routes = require("./controllers/banana_controller");

app.use(routes);

app.listen(process.env.PORT || 8080, function() {
    console.log("App listening at localhose:" + PORT);
});