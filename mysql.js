const mysql = require('mysql')

exports.dbSource = mysql.createConnection({
  host: "localhost",
  //port: 3306,
  //user: "root",
  port: "3307",
  user: "admin",
  password: "p@ssword",
  database: "financial"
})

exports.dbDest = mysql.createConnection({
  host: "localhost",
  //port: 3306,
  //user: "root",
  port: "3307",
  user: "admin",
  password: "p@ssword",
  database: "financialwh"
})
