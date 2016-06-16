var express = require('express');
var app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var InventoryController = require('./controllers/inventoryController');
var IndexController = require('./controllers/indexController');
var CheckoutController = require('./controllers/checkoutController');
var ChargeController = require('./controllers/chargeController');

app.get('/', IndexController.welcome);
app.get('/inventory', InventoryController.all);
app.get('/checkout', CheckoutController.showCart);
app.get('/confirm', ChargeController.charge);
app.listen(3000);
