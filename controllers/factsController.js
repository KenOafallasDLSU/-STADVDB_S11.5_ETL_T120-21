const factsModel = require('../models/factsModel.js')

exports.transformFacts = async (req, res) => {
  let result = await factsModel.extractFacts()
  res.send(result)
}