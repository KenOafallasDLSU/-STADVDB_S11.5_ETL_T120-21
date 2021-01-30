const factsModel = require('../models/factsModel.js')

exports.transformFacts = async (req, res) => {
  let data = await factsModel.extractFacts()
  let result = await factsModel.loadFacts(data)
  res.send(result)
}