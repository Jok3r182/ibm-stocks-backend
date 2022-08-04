const getDb = require("../util/database").getDb;
class CompanyNameLog {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  save() {
    const db = getDb();
    return db
      .collection("company-name-logs")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

class CompanyStocksLog {
  constructor(name, date, stocks) {
    this.name = name;
    this.date = date;
    this.stocks = stocks;
  }

  save() {
    const db = getDb();
    return db
      .collection("company-stocks-logs")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

exports.CompanyNameLog = CompanyNameLog;
exports.CompanyStocksLog = CompanyStocksLog;
