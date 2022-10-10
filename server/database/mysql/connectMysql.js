const mysql = require("mysql");

const mysqlDb = mysql.createConnection({
      host: "", 
      user: "", 
      password: "", 
      database: ""
});

module.exports = mysqlDb;