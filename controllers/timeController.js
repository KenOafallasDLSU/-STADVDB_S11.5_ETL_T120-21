const timeModel = require('../models/timeModel.js')

exports.transformTime = (req, res) => {
    timeModel.extractTime((result) => {
    console.log(result)
    res.send(result)
  })
}