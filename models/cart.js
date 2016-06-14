function subtotal(items) {
	var sum = 0;
	for (item of items) { 
		sum += item.price;
	}
	return sum;
}

function price_after_promocode(subtotal_number, discount) {
	return subtotal_number * (1 - discount);
}

function total_after_taxes(price_after_promocode, tax_percentage) {
	return price_after_promocode * (1 + tax_percentage);
}

function total(items) {
	var subtotal_price = subtotal(items);
	var discount = 0.1;
	var promocode_price = price_after_promocode(subtotal_price, discount);
	var tax = 0.07;
	var final_total = total_after_taxes(promocode_price, tax);
	return final_total;
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

module.exports = { total, remove: removeItemNamed, add: addItemToCart, subtotal };




