var express = require("express");
var router = express.Router();
var banana = require("../models/banana")

router.get("/", function (req, res) {
    banana.all(function (banana_data) {
        console.log(banana_data);
        res.render("index", { banana_data });
    })
})

module.exports = router;