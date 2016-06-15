var Db = require('../models/db');

function all(req, res) {
	Db.find('inventory', function(docs) {
		res.render('../views/allInventory.ejs', { items: docs });
	});
}

module.exports = { all };
