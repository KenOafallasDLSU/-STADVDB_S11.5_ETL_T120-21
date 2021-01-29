const router = require('express').Router()
const homeController = require('../controllers/homeController.js')
const factsController = require('../controllers/factsController.js')
const accountController = require('../controllers/accountController.js')
const typeController = require('../controllers/typeController.js')
const timeController = require('../controllers/timeController.js')
const recipientController = require('../controllers/recipientController.js')


router.get('/', homeController.renderHome)

router.post('/facts', factsController.transformFacts)
router.post('/account', accountController.transformAccount)
router.post('/type', typeController.transformType)
router.post('/time', timeController.transformTime)
router.post('/recipient', recipientController.transformRecipient)

module.exports = router