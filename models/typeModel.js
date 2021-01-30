const mysql = require('../mysql.js')

exports.extractType = (next) => {
  let sql = 
  ` INSERT INTO financialwh.type
    SELECT DISTINCT 
        CONCAT(
            CASE
                WHEN type = 'Credit' THEN 1
                WHEN type = 'Debit' THEN 2
                ELSE 0
            END,
            CASE
                WHEN operation = 'Credit Card Withdrawal' THEN 1
                WHEN operation = 'Credit in Cash' THEN 2
                WHEN operation = 'Collection from Another Bank' THEN 3
                WHEN operation = 'Cash Withdrawal' THEN 4
                WHEN operation = 'Remittance to Another Bank' THEN 5
                ELSE 0
            END,
            CASE
                WHEN k_symbol = 'Insurance Payment' THEN 1
                WHEN k_symbol = 'Payment on Statement' THEN 2
                WHEN k_symbol = 'Interest Credited' THEN 3
                WHEN k_symbol = 'Sanction Interest' THEN 4
                WHEN k_symbol = 'Household' THEN 5
                WHEN k_symbol = 'Retirement Pension' THEN 6
                WHEN k_symbol = 'Loan Payment' THEN 7
                WHEN k_symbol = 'Misc. Credit' THEN 8
                WHEN k_symbol = 'Misc. Payment' THEN 9
                ELSE 0
            END
        ) AS typeid,
        type AS flow, 
        operation AS mode, 
        k_symbol AS characterization
    FROM financial.trans
    WHERE type IS NOT NULL AND operation IS NOT NULL AND k_symbol IS NOT NULL
    ORDER BY typeid;
  `
  mysql.dbSource.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}