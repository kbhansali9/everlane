function subtotal(items) {
	var sum = 0;
	for (item of items) { 
		sum += item.price;
	}
	return sum;
}

function discounts(price, discount_percentage) {
	return price * (discount_percentage);
}

function taxes(price, tax_percentage) {
	return price * (tax_percentage);
}

function total(subtotal, discounts, taxes) {
	return subtotal - discounts + taxes;
}

function removeItemNamed(name, items) {
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		if (item.name == name) {
			items.splice(i, 1);
		}
	}
}

function findItem(name, items) {
	for (item of items) {
		if (item.name == name) {
			return item;
		}
	}
}

function addItemToCart(name, items, cart) {
	cart.push(findItem(name, items));
}

module.exports = { total, subtotal, taxes, discounts };
