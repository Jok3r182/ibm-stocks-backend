const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet')
const companyRoutes = require("./routes/company");
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/company", companyRoutes);
mongoConnect(() => {
  app.listen(8080);
});

module.exports = app