const mysql = require('../mysql.js')

exports.extractTime = (next) => {
  let sql = 
  ` INSERT INTO financialwh.time
    SELECT DISTINCT 
        CONCAT(YEAR(date), LPAD(MONTH(date), 2, '0'), LPAD(DAYOFMONTH(date), 2, '0')) AS timeid, 
        DAYOFYEAR(date) AS dayOfYear, 
        YEAR(date) AS year, 
        QUARTER(date) AS quarter, 
        MONTH(date) AS month, 
        DAYOFMONTH(date) AS dayOfMonth
    FROM financial.trans
    ORDER BY timeID;
  `
  mysql.dbSource.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}