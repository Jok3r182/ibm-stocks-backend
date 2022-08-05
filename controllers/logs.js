const {
  companyNameSchema,
  companyStocksSchema,
} = require("../validation/schemas");
const CompanyNameLog = require("../models/logs").CompanyNameLog;
const CompanyStocksLog = require("../models/logs").CompanyStocksLog;

exports.logCompanyName = (req, res, next) => {
  const { body } = req;
  if (Object.keys(body).length === 0) {
    res.status(400).json({
      message: "Body is empty!",
    });
  }

  const result = companyNameSchema.validate(req.body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(422).json({
      message: error.details[0].message,
    });
  } else {
    console.log(body.date + " Searched Company: " + body.name);
    const companyNameLog = new CompanyNameLog(body.name, body.date);
    companyNameLog.save();
    res.status(200).json({ message: `Company: ${body.name}` });
  }
};

exports.logCompanyStocksData = (req, res, next) => {
  const { body } = req;
  if (Object.keys(body).length === 0) {
    res.status(422).json({
      message: "Invalid request",
    });
  }
  const result = companyStocksSchema.validate(req.body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(422).json({
      message: error.details[0].message,
    });
  } else {
    console.log(`${body.date} ${body.name} Stocks:`);
    for (const stocks of body.stocks) {
      console.log(stocks);
    }
    const companyStocksLog = new CompanyStocksLog(
      body.name,
      body.date,
      body.stocks
    );
    companyStocksLog.save();
    res.status(200).json({ message: `Company stocks: ${body}` });
  }
};
