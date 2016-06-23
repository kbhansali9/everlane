var Charge = require('../models/charge');
var Db = require('../models/db');

function charge(req, res) {
  var data = JSON.parse(req.query.data);

  var amount = data.amount;
  var cart = data.cart;
  var email = data.token.email;
  var token_id = data.token.id;
  var zipCode = data.token.zipCode;
  var billingAddress = data.token.billingAddress;
  var shippingAddress = data.token.shippingAddress;

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
        'zipCode': zipCode,
        'billingAddress': billingAddress,
        'shippingAddress': shippingAddress
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
