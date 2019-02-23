var orm = require("../config/orm");

var banana = {
    selectAll: function(cb) {
        orm.selectAll("bananers", function(res) {
            cb(res);
        });
    },
    // Change the Devoured State to True //
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("bananers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // Add a New Banana to the DB //
    insertOne: function(cols, vals, cb) {
        orm.insertOne("bananers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Delete a Banana from the DB //
    deleteOne: function(condition, cb) {
        orm.deleteOne("bananers", condition, function(res) {
            cb(res);
        });
    },
};

module.exports = banana;