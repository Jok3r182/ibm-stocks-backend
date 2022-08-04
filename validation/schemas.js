const Joi = require("joi");

const nameConstraint = Joi.string().max(35).required()

exports.companyNameSchema = Joi.object().keys({
  name: nameConstraint,
  date: Joi.string().required(),
});

exports.companyStocksSchema = Joi.object().keys({
  name: nameConstraint,
  date: Joi.string().required(),
  stocks: Joi.array().items(
    Joi.object({
      x: Joi.string().required(),
      y: Joi.array().required(),
    }).required()
  ).required(),
});
