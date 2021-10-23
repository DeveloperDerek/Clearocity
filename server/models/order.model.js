const Mongoose = require("mongoose");

const orderSchema = new Mongoose.Schema(
    {
        user: {
            type: Mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        cartItems: [{
            product: {
                type: Mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                required: true,
                min: [1, 'Quantity can not be less than 1'],
                default: 1
            },
            price: {
                type: Number,
                required: true
            }
        }],
        bill: {
            type: Number,
            required: true,
            default: 0
        }
    }, {timestamps: true}
)

const Order = Mongoose.model("Order", orderSchema);

module.exports = Order;