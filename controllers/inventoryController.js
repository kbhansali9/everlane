var Db = require('../models/db');
var Cart = require('../models/cart');

function all(req, res) {
	Db.find('inventory', function(docs) {
		var price = Cart.subtotal(docs);
		res.json(price);
	});
}

module.exports = { all };
