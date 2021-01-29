const factsModel = require('../models/factsModel.js')

exports.transformFacts = (req, res) => {
  factsModel.extractFacts((result) => {
    console.log(result)
    res.send(result)
  })
}