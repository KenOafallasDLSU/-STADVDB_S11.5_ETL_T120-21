const mysql = require('../mysql.js')

exports.extractFacts = async () => {
  let sql = 
  ` SELECT 
      CONCAT(YEAR(t.date), LPAD(MONTH(t.date), 2, '0'), LPAD(DAYOFMONTH(t.date), 2, '0')) AS timeid, 
      CAST(LPAD(CONCAT(ASCII(t.bank), ASCII(SUBSTR(t.bank, 2)), LPAD(t.account, 8, '0')), 12, '0') AS UNSIGNED) AS recipientid,
      a.account_id AS accountid,
      CONCAT(
              CASE
                  WHEN t.type = 'Credit' THEN 1
                  WHEN t.type = 'Debit' THEN 2
                  ELSE 0
              END,
              CASE
                  WHEN t.operation = 'Credit Card Withdrawal' THEN 1
                  WHEN t.operation = 'Credit in Cash' THEN 2
                  WHEN t.operation = 'Collection from Another Bank' THEN 3
                  WHEN t.operation = 'Cash Withdrawal' THEN 4
                  WHEN t.operation = 'Remittance to Another Bank' THEN 5
                  ELSE 0
              END,
              CASE
                  WHEN t.k_symbol = 'Insurance Payment' THEN 1
                  WHEN t.k_symbol = 'Payment on Statement' THEN 2
                  WHEN t.k_symbol = 'Interest Credited' THEN 3
                  WHEN t.k_symbol = 'Sanction Interest' THEN 4
                  WHEN t.k_symbol = 'Household' THEN 5
                  WHEN t.k_symbol = 'Retirement Pension' THEN 6
                  WHEN t.k_symbol = 'Loan Payment' THEN 7
                  WHEN t.k_symbol = 'Misc. Credit' THEN 8
                  WHEN t.k_symbol = 'Misc. Payment' THEN 9
                  ELSE 0
              END
      ) AS typeid,
      SUM(t.amount) AS amount, COUNT(t.trans_id) AS count
    FROM financial.trans t JOIN financial.account a ON t.account_id = a.account_id
    WHERE t.type IS NOT NULL AND t.operation IS NOT NULL AND t.k_symbol IS NOT NULL
    AND t.bank IS NOT NULL AND t.account IS NOT NULL
    AND t.date IS NOT NULL
    GROUP BY t.trans_id;
  `
  let result = await mysql.dbSource.promise().query(sql)
  return result
}

exports.loadFacts = async (data) => {
  let sql = 
  ` INSERT INTO transactions (timeid, recipientid, accountid, typeid, amount, count) 
    VALUES ?
  `
  //console.log(data)

  try{
    let result = await mysql.dbDest.promise().query(sql, [data])
    return result
  } catch(err){
    console.log(err)
    return err
  }
}