const accountModel = require('../models/accountModel.js')

exports.transformAccount = async (req, res) => {
  let result = await accountModel.extractAccount()
  res.send("Success!")
}