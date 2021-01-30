const mysql = require('../mysql.js')

exports.extractRecipient = (next) => {
  let sql = 
  ` INSERT INTO financialwh.recipient
    SELECT DISTINCT 
        CAST(LPAD(CONCAT(ASCII(BANK), ASCII(SUBSTR(BANK, 2)), LPAD(account, 8, '0')), 12, '0') AS UNSIGNED) AS recipientid, 
        bank,
        account
    FROM financial.trans
    WHERE bank IS NOT NULL AND account IS NOT NULL
    ORDER BY recipientID;
  `
  mysql.dbSource.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}