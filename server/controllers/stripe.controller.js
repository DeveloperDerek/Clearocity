const stripe = require('stripe')('sk_test_51JmmCnK6zlXkvz1MuSouzlODMCMI9e31UCtPHRHGECi94WgRDrfGsGtjdHJmZmmhHj0F1d0rz6in2d21k5QKcu7q00i9IyO5wg');
const { v4 : uuidv4 } = require('uuid');

module.exports = {
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