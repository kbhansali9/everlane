var express = require('express');
var app = express()

app.set('port', (process.env.PORT || 3000));

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
app.use("/style",express.static(__dirname + "/style"));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});