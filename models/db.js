var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admin:shop@ds017544.mlab.com:17544/main';

function find(collection, callback) {
  var docs = [];
  MongoClient.connect(url, function(err, db) {
    db.collection(collection).find().each(function(err, doc) {
      if (doc) {
        docs.push(doc);
      } else {
        callback(docs);
      }
    });
  }); 
};

function insertOne(collection, doc, callback) {
  MongoClient.connect(url, function(err, db) {
    db.collection(collection).insertOne(doc, function(err, result) {
      callback();
    });
  }); 
};

module.exports = { find, insertOne };
