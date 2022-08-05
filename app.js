const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet')
const companyRoutes = require("./routes/company");
const mongoConnect = require("./util/database").mongoConnect;

const port = 80
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
  app.listen(port);
});

module.exports = app