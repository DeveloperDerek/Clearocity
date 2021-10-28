const Mongoose = require("mongoose");

const addressSchema = new Mongoose.Schema(
    {
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
)

const Address = Mongoose.model("Address", addressSchema);

module.exports = Address;