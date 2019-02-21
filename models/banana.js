var orm = require("../config/orm");

var banana = {
    all: function (cb) {
        orm.all("bananers", function (res) {
            cb(res);
        })
    }
}

module.exports = banana;