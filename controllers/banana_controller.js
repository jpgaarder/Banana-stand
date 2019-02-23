var express = require("express");
var router = express.Router();
var banana = require("../models/banana.js")

router.get("/", function (req, res) {
    banana.selectAll(function (data) {
        var bananaObject = {
            banana: data
        };
        console.log(bananaObject);
        res.render("index", bananaObject);
    });
});

router.post("/banana", function (req, res) {
    banana.insertOne(["banana_name", "devoured"], [req.body.banana_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/banana/update", function (req, res) {
    banana.update(req.body.banana_id, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/banana/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    banana.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows === 0) {
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/banana/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    banana.deleteOne(condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;