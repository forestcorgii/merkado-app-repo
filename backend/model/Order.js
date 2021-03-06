const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
	// sellerid: String,
	// buyerid: String,
	paidAt: Date,
	cancelledAt: Date,
	price: Number,
	quantity: Number,
	
	product: {
		type: Schema.Types.ObjectId,
		ref: "Seller",
	},
	seller: {
		type: Schema.Types.ObjectId,
		ref: "Seller",
	},
	buyer: {
		type: Schema.Types.ObjectId,
		ref: "Buyer",
	},
});

module.exports = model("Order", OrderSchema);
