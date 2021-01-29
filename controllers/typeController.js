const typeModel = require('../models/typeModel.js')

exports.transformType = (req, res) => {
    typeModel.extractType((result) => {
    console.log(result)
    res.send(result)
  })
}