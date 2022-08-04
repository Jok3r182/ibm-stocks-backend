const express = require('express')
const router = express.Router()


const logController = require('../controllers/logs')

router.post('/name', logController.logCompanyName)
router.post('/stocks', logController.logCompanyStocksData)

module.exports = router