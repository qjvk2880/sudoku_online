var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alsdnr12",
  database: "sudoku_online",
});

db.connect();

module.exports = db;