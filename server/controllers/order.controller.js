const Address = require("../models/address.model");
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
    async createAddress (req, res) {
        await Address.create(req.body)
            .then((address) => res.json(address))
            .catch((err) => res.status(400).json(err))
    },
    async createPaymentIntent (req, res) {
        let cart = await Cart.findOne({ user: req.user._id });
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
                await Order.create({
                    user: req.user._id,
                    cartItems: cart.cartItems,
                    bill: cart.bill,
                    address: req.params.id
                });
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
            .populate('address')
        return res.json(orders)
    },
    async viewOrder (req, res) {
        const order = await Order.findOne({ _id: req.params.id })
            .populate('address')
            .populate('cartItems.product')
        return res.json(order)
    }
}