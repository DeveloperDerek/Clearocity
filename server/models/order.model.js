const Mongoose = require("mongoose");

const orderSchema = new Mongoose.Schema(
    {
        user: {
            type: Mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        address: {
            type: Mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Address'
        },
        cartItems: [{
            product: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                min: [1, 'Quantity can not be less than 1'],
                default: 1
            },
            price: {
                type: Number,
            }
        }],
        bill: {
            type: Number,
            default: 0  
        },
    }, {timestamps: true}
)

const Order = Mongoose.model("Order", orderSchema);

module.exports = Order;