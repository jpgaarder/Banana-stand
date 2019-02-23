// KITTY KNOCK //
// REQUIRE //
var express = require("express");

// express //
var app = express();

// static content from the public directory //
app.use(express.static(__dirname + "/public"));

// request body as JSON //
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// handlebars //
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// routes //
var routes = require("./controllers/banana_controller");

app.use("/", routes);

// port //
var PORT = process.env.PORT || 8080;

app.listen(process.env.PORT || 8080, function() {
    console.log("App listening at localhost:" + PORT);
});