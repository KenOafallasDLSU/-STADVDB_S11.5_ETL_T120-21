const mysql = require('../mysql.js')

exports.extractFacts = (next) => {
  let sql = "SELECT * FROM account"

  mysql.dbSource.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}

exports.loadFacts = (next) => {
  let sql = ""

  mysql.dbDest.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}