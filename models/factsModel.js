const mysql = require('../mysql.js')

exports.extractFacts = async () => {
  let sql = "SELECT * FROM account"

  let result = await mysql.dbSource.promise().query(sql)
  return result
}

exports.loadFacts = async () => {
  let sql = ""

  let result = await mysql.dbDest.promise().query(sql)
  return result
}