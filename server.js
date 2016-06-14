var express = require('express')
var app = express()
var CartController = require('./controllers/cartController');
var InventoryController = require('./controllers/inventoryController');

app.get('/cart', CartController.process);
app.get('/inventory', InventoryController.all);

app.listen(3000);
