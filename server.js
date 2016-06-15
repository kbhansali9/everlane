var express = require('express')
var app = express()
var CartController = require('./controllers/cartController');
var InventoryController = require('./controllers/inventoryController');
var IndexController = require('./controllers/indexController');

app.get('/', IndexController.welcome);
app.get('/cart', CartController.process);
app.get('/inventory', InventoryController.all);

app.listen(3000);
