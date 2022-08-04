const Joi = require("joi");

exports.companyNameSchema = Joi.object().keys({
  name: Joi.string().alphanum().max(35).required(),
});

exports.companyStocksSchema = Joi.object().keys({
  name: Joi.string().alphanum().max(35).required(),
  stocks: Joi.array().items(
    Joi.object({
      x: Joi.string().required(),
      y: Joi.array().required(),
    })
  ),
});
