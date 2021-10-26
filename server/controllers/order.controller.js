const Cart = require("../models/cart.model");
const Order = require("../models/order.model");
const User = require("../models/user.model");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const addZeroes = (num) => {
    const value = toString(num);
    const dec = value.split('.')[1]
    const len = dec && dec.length > 2 ? dec.length : 2
    return Number(num).toFixed(len)
}

module.exports = {
    async checkOut(req, res) {
        try {
            const { source } = req.body;
            let cart = await Cart.findOne({ user: req.user._id });
            // let user = await User.findOne({ id: req.user._id });
            const email = req.user.email;
            if (cart) {
                console.log("stripee")
                const charge = await stripe.changes.create({
                    amount: cart.bill,
                    currency: 'usd',
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
        } catch(err) {
            console.log(err);
            res.status(500).send("Something went wrong");
        }
    },
    async startOrder (req, res) {
        await Order.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(400).json(err))
    },
    async createPaymentIntent (req, res) {
        let cart = await Cart.findOne({ user: req.user._id });
        let order = await Order.findOne({}, { sort: { 'created_at' : -1 }})
        // Create a PaymentIntent with the order amount and currency
        let { id } = req.body
        try {
            const payment = await stripe.paymentIntents.create({
                amount: addZeroes(cart.bill)*100,
                currency: "USD",
                description: "ClearocitySkincare",
                payment_method: id,
                confirm: true
            })
            if (!payment) {
                throw Error('Payment failed')
            } else {
                order.cartItems = cart.cartItems,
                order.bill = cart.bill
                await order.save();
                await Cart.findByIdAndDelete({ _id: cart._id })
                // return res.status(201).send(order);
                res.json({
                    message: "Payment successful",
                    success: true
                })
            }
        } catch (error) {
            console.log("Error", error)
            res.json({
                message: "Payment failed",
                success: false
            })
        }
    },
    async viewOrders (req, res) {
        const orders = await Order.find({ user: req.user._id })
        return res.json(orders)
    }
}