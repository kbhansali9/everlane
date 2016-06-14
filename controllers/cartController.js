var Cart = require('../models/cart');

function process(req, res) {
  var inventory = [
    {
      name: 'crew neck',
      price: 5
    },
    {
      name: 'shorts',
      price: 7.5
    },
    {
      name: 'chino',
      price: 10
    },
    {
      name: 'backpack',
      price: 25
    },
    {
      name: 'tissot',
      price: 50
    }
  ];
  var cart = [];
  Cart.add('tissot', inventory, cart);
  Cart.add('chino', inventory, cart);
  console.log('This is your subtotal: $' + Cart.total(cart).toFixed(2));
  res.json('This is your subtotal: $' + Cart.total(cart).toFixed(2));
}

module.exports = { process };