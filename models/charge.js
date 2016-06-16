var stripe = require("stripe")(
  "sk_test_QaqlMtr9V03hLNinYH8lJFnq"
);

function chargeToken(amount, token_id, callback) {
  stripe.charges.create({
	  amount: (amount * 100).toFixed(),
	  currency: "usd",
	  source: token_id
	}, function(err, charge) {
    if (err) {
      console.log(err);
    } else {
      callback(charge.id);
    }
	});
}

module.exports = { chargeToken };