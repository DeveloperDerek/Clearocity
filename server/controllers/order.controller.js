const Cart = require("../models/cart.model");
const Order = require("../models/order.model");
const User = require("../models/user.model");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async checkOut(req, res) {
        try {
            const { source } = req.body;
            let cart = await Cart.findOne({ user: req.user._id });
            let user = await User.findOne({ _id: req.user._id });
            const email = user.email;
            if (cart) {
                const charge = await stripe.changes.create({
                    amount: cart.bill,
                    currency: 'inr',
                    source: source,
                    receipt_email: email
                })
                if (!charge) {
                    throw Error('Payment failed')
                } else {
                    const order = await Order.create({
                        user: req.user._id,
                        cartItems: cart.cartItems,
                        bill: cart.bill
                    });
                    await Cart.findByIdAndDelete({ _id: cart._id })
                    return res.status(201).send(order);
                }
            } else{
                res.status(500).send("You do not have items in cart");
            }
            
        } catch {
            console.log(err);
            res.status(500).send("Something went wrong");
        }
    }
}