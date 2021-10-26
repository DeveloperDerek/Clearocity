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
        address: {
            email: {
                type: String,
                required: [true, "Email required"],
                validate: {
                    validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                    message: "Please enter a valid email"
                }
            },
            firstName: {
                type: String,
                required: [true, "First name is required"],
                minlength: [2, "First name must be at least 2 characters"]
            },
            lastName: {
                type: String,
                required: [true, "Last name is required"],
                minlength: [2, "Last name must be at least 2 characters"]
            },
            address: {
                type: String,
                required: [true, "Address required"]
            },
            suite: {
                type: String,
            },
            city: {
                type: String,
                required: [true, "City required"]
            },
            state: {
                type: String,
                required: [true, "State required"]
            },
            zip: {
                type: Number,
                required: [true, "Zip required"]
            }
        }
    }, {timestamps: true}
)

const Order = Mongoose.model("Order", orderSchema);

module.exports = Order;