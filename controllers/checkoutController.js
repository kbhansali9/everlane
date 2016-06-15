function showCart(req, res) {
	var cart = JSON.parse(req.query.cart);
	res.json(cart);
}

module.exports = { showCart };
