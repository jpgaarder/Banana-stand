var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bootcamp2019',
    database: 'banana_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId)
});
module.exports = connection;