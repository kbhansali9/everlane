var express = require('express');
var app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var CartController = require('./controllers/cartController');
var InventoryController = require('./controllers/inventoryController');
var IndexController = require('./controllers/indexController');
var CheckoutController = require('./controllers/checkoutController');

app.get('/', IndexController.welcome);
app.get('/cart', CartController.process);
app.get('/inventory', InventoryController.all);
app.get('/checkout', CheckoutController.showCart);

app.listen(3000);
