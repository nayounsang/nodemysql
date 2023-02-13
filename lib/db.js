mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'nodejs',
    password : 'laasd00722',
    database : 'opentutorials'
  });
  db.connect();
  module.exports = db;