const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://admin:Admin1234@cluster0.i6de0.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      db = client.db('logs');
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () =>{
    if(db){
        return db
    }
    throw 'No database found!'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb
