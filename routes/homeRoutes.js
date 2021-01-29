const router = require('express').Router()
const homeController = require('../controllers/homeController.js')
const factsController = require('../controllers/factsController.js')
const accountController = require('../controllers/accountController.js')

router.get('/', homeController.renderHome)

router.post('/facts', factsController.transformFacts)
router.post('/account', accountController.transformAccount)

module.exports = router