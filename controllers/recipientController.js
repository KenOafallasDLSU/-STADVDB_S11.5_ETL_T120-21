const recipientModel = require('../models/recipientModel.js')

exports.transformRecipient = (req, res) => {
    recipientModel.extractRecipient((result) => {
    console.log(result)
    res.send(result)
  })
}