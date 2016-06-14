var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

function find(name, callback) {
	var docs = [];
	MongoClient.connect(url, function(err, db) {
	  var cursor = db.collection(name).find();
	  cursor.each(function(err, doc) {
  		if (doc) {
  			docs.push(doc);
  		} else {
  			callback(docs);
  		}
	  });
	});	
};

module.exports = { find };

//callback = function(docs) {...}