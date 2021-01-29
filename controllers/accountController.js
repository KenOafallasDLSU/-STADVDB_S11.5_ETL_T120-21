const accountModel = require('../models/accountModel.js')

exports.transformAccount = (req, res) => {
  accountModel.extractAccount((result) => {
    console.log(result)
    res.send(result)
  })
}