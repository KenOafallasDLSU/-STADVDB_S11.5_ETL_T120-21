const factsModel = require('../models/factsModel.js')

exports.transformFacts = async (req, res) => {
  let data = await factsModel.extractFacts()
  let arrArray = await arrayify(data[0])
  //console.log(arrArray)
  // arrArray.forEach(async (arr, index) => {
  //   await factsModel.loadFacts(arr)
  //   if(index === arrArray.length-1)
  //     res.send("Success!")
  // })
  let start = 0
  do{
    if(start+1000 < arrArray.length){
      await factsModel.loadFacts(arrArray.slice(start, start+1000))
      //console.log(start+1000)
    }
    else{
      await factsModel.loadFacts(arrArray.slice(start, arrArray.length))
      //console.log(arrArray.length)
      res.send("Success!")
    }
    start = start + 1000
  }while(start < arrArray.length)
}

arrayify = (objArray) => {
  let arrArray = []
  objArray.forEach(obj => arrArray.push(Object.values(obj)))
  return arrArray
}