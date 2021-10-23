const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

module.exports = {
    async addToCart(req, res) {
        const { productId, quantity } = req.body;
        try {
            const product = await Product.findOne({ _id: productId })
            const cart = await Cart.findOne({ user: req.user._id})
            const price = product.price;
            
            if(cart) {
                // if cart exists for the user
                let itemIndex = await cart.cartItems.findIndex(p => p.product._id == productId);
                console.log(itemIndex)
                // // Check if product exists or not
                if(itemIndex > -1) {
                    let productItem = cart.cartItems[itemIndex];
                    productItem.quantity += quantity;
                    cart.cartItems[itemIndex] = productItem;
                }
                else {
                    cart.cartItems.push({ product, quantity, price });
                }
                cart.bill += quantity*price;
                await cart.save();
                return res.json(cart);
            }
            else{
                // no cart exists, create one
                const newCart = await Cart.create({
                    user: req.user._id,
                    cartItems: [{ product, quantity, price }],
                    bill: quantity*price
                });
                return res.status(201).send(newCart);
            }       
        }
        catch {
            console.log(err);
            res.status(500).send("Something went wrong");
        }
    },
    async removeFromCart(req, res) {
        const productId = req.body.productId;
        try {
            const cart = await Cart.findOne({ user: req.user._id})
            let itemIndex = await cart.cartItems.findIndex(p => p.product._id == productId);
            if(itemIndex > -1)
            {
                let productItem = cart.cartItems[itemIndex];
                console.log(productItem);
                cart.bill -= productItem.quantity*productItem.price;
                cart.cartItems.splice(itemIndex,1);
            }
            await cart.save();
            return res.status(201).send(cart);
        }
        catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong");
        }
    },
    async updateCart(req, res) {
        const { productId, quantity } = req.body;
        try {
            let cart = await Cart.findOne({ user: req.user._id });
            let item = await Product.findOne({ _id: productId });

            if(!item)
                return res.status(404).send('Item not found!'); // not returning will continue further execution of code.
            
            if(!cart)
                return res.status(400).send("Cart not found");
            else{
                // if cart exists for the user
                let itemIndex = await cart.cartItems.findIndex(p => p.product._id == productId);
    
                // Check if product exists or not
                if(itemIndex == -1)
                    return res.status(404).send('Item not found in cart!');
                else {
                    let productItem = cart.cartItems[itemIndex];
                    productItem.quantity = quantity;
                    cart.cartItems[itemIndex] = productItem;
                }
                cart.bill = cart.cartItems.reduce((sum, item) => sum + item.price * item.quantity,0);
                cart = await cart.save();
                return res.status(201).send(cart);
            }     
        }
        catch (err) {
            // just printing the error wont help us find where is the error. Add some understandable string to it.
            console.log("Error in update cart", err);
            res.status(500).send("Something went wrong");
        }
    },
    async viewCart(req, res) {
        const cart = await Cart.findOne({ user: req.user._id })
            .populate('cartItems.product')
            // // .populate lets you reference documents in other collections
        if (cart === null) {
            const newCart = new Cart({
                user: req.user._id
            })
            const sendCart = await newCart.save();
            res.status(201).json(sendCart);
        } else {
            res.json(cart)
        }
    },
    async viewCartID(req, res) {
        const c = await Cart.findOne({ _id: req.params.id})
            .populate('cartItems.product')
        return res.json(c)
    }
}