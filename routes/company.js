const express = require('express')
const router = express.Router()


const companyController = require('../controllers/company')

router.post('/name', companyController.logCompanyName)
router.post('/stocks', companyController.logCompanyStocksData)

module.exports = router