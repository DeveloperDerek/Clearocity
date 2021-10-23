const stripe = require('stripe')('sk_test_51JmmCnK6zlXkvz1MuSouzlODMCMI9e31UCtPHRHGECi94WgRDrfGsGtjdHJmZmmhHj0F1d0rz6in2d21k5QKcu7q00i9IyO5wg');
const { v4 : uuidv4 } = require('uuid');

module.exports = {
    pay(req, res, next) {
        console.log(req.body.token);
        const {token, amount} = req.body;
        const idempotencyKey = uuidv4();

        return stripe.customers.create({
            email: token.email,
            source: token
        }).then((customer => {
            stripe.charges.create({
                amount: amount * 100,
                currency: 'usd',
                customer: customer.id,
                receipt_email: token.email
            }, {idempotencyKey})
        }).then(result => {
            res.status(200).json(result)
        }).catch(err => {
            console.log(err);
        }))
    },
    async checkOut (req, res) {
        try{
            const userId = req.params.id;
            const {source} = req.body;
            let cart = await Cart.findOne({userId});
            let user = await User.findOne({_id: userId});
            const email = user.email;
            if(cart){
                const charge = await stripe.charges.create({
                    amount: cart.bill,
                    currency: 'inr',
                    source: source,
                    receipt_email: email
                })
                if(!charge) throw Error('Payment failed');
                if(charge){
                    const order = await Order.create({
                        userId,
                        items: cart.items,
                        bill: cart.bill
                    });
                    const data = await Cart.findByIdAndDelete({_id:cart.id});
                    return res.status(201).send(order);
                }
            }
            else{
                res.status(500).send("You do not have items in cart");
            }
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something went wrong");
        }
    }
}