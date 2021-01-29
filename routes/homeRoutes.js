const router = require('express').Router()
const homeController = require('../controllers/homeController.js')
const factsController = require('../controllers/factsController.js')

router.get('/', homeController.renderHome)

router.post('/facts', factsController.transformFacts)

module.exports = router