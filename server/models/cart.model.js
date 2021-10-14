const Mongoose = require("mongoose");

const cartSchema = Mongoose.Schema(
    {
        user: {
            type: Mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: 'User'
        },
        cartItems: [{
            product: {
                type: Mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }]
    }
)

const Cart = Mongoose.model("Cart", cartSchema);

module.exports = Cart;