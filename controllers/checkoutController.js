var PricingEngine = require('../models/pricingEngine');

function showCart(req, res) {
	var cart = JSON.parse(req.query.cart);
	var subtotal = PricingEngine.subtotal(cart);
	var discounts = PricingEngine.discounts(subtotal, 0.1);
	var taxes = PricingEngine.taxes(subtotal, 0.07);
	var total = PricingEngine.total(subtotal, discounts, taxes);
	res.render('../views/checkout.ejs', { 
		'items': cart, 
		'subtotal': subtotal, 
		'discounts': discounts, 
		'taxes': taxes, 
		'total': total
	});
}

module.exports = { showCart };
