var Charge = require('../models/charge');
var Db = require('../models/db');

function charge(req, res) {
  var data = JSON.parse(req.query.data);

  var amount = data.amount;
  var cart = data.cart;
  var email = data.token.email;
  var token_id = data.token.id;

  Charge.chargeToken(amount, token_id, function(err, charge_id) {
    if (err) {
      var message = err.message;
      res.render('../views/confirmation.ejs', {
        'message': message,
        'email': ''
      });
    } else {
      var transaction = {
        'amount': amount,
        'cart': cart,
        'charge_id': charge_id,
        'email': email,
        'zip-code': zip-code,
        'billing-address': billing-address,
        'shipping-address': shipping-address
      };

      Db.insertOne('transactions', transaction, function() {
        res.render('../views/confirmation.ejs', {
          'message': false,
          'email': email
        });
      });
    }
  });
}

module.exports = { charge };
