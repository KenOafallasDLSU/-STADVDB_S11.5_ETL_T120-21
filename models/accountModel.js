const mysql = require('../mysql.js')

exports.extractAccount = (next) => {
  let sql = 
  ` INSERT INTO financialwh.account
    SELECT DISTINCT a.account_id AS accountid, a.frequency, d1.A2 AS accountDistrict, YEAR(a.date) AS createdYear,
                    c.type AS ownerType, n.gender AS ownerGender, d2.A2 AS ownerDistrict
    FROM financial.account a 
          JOIN financial.disp s 
          ON a.account_id = s.account_id
          JOIN financial.district d1 
          ON a.district_id = d1.district_id
          JOIN financial.card c 
          ON c.disp_id = s.disp_id
          JOIN financial.client n 
          ON n.client_id = s.client_id
          JOIN financial.district d2 
          ON n.district_id = d2.district_id
    WHERE NOT EXISTS (
      SELECT a2.account_id
      FROM financialwh.account wha 
            JOIN financial.account a2 
            ON wha.accountid = a2.account_id
    );
  `

  mysql.dbSource.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}

exports.loadAccount = (next) => {
  let sql = ""

  mysql.dbDest.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}