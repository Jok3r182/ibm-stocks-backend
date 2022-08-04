const Joi = require('joi')
const { companyNameSchema, companyStocksSchema } = require("../validation/schemas")

exports.logCompanyName = (req, res, next) => {
    const {body } = req
    if(Object.keys(body).length === 0){
        res.status(422).json({ 
            message: 'Invalid request', 
          })   
    }

    const result = companyNameSchema.validate(req.body)
    const { value, error } = result; 
    const valid = error == null; 
    if (!valid) { 
        res.status(422).json({ 
          message: error.details[0].message, 
        }) 
      } else { 
        console.log('Searched Company: ' + body.name)
        res.json({ message: `Company: ${body.name}`}) 
      } 
}

exports.logCompanyStocksData = (req, res, next) => {

    const {body } = req
    if(Object.keys(body).length === 0){
        res.status(422).json({ 
            message: 'Invalid request', 
          })   
    }
    const result = companyStocksSchema.validate(req.body)
    const { value, error } = result; 
    const valid = error == null; 
    if (!valid) { 
        res.status(422).json({ 
          message: error.details[0].message, 
        }) 
      } else { 
        console.log(`${body.name} Stocks:`)
        for(const stocks of body.stocks){
            console.log(stocks)
        }
        res.json({ message: `Company stocks: ${body}`}) 
      } 

}