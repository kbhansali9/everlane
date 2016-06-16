var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

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
