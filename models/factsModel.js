const mysql = require('../mysql.js')

exports.extractFacts = () => {
  let sql = ""

  mysql.dbSource.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}

exports.loadFacts = () => {
  let sql = ""

  mysql.dbDest.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}