//var Shipinfo = require('../models/shipdb.js');

function details(req, res) {
  res.render('../views/shippingInfo.ejs');
}

module.exports = { details };