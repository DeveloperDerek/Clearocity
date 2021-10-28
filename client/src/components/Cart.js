import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Cart = (props) => {
    const {address} = props;
    const [cart, setCart] = useState(null);
    console.log(address)

    useEffect(() => {
        axios
        .get("http://localhost:9000/api/cart/view", { withCredentials: true })
        .then((res) => {
            setCart(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const addZeroes = (num) => {
        const value = toString(num);
        const dec = value.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        const final = Number(num).toFixed(len)
        return final
    }

    const removeFromCart = (id) => {
        const data = {product_id: id};
        axios
        .post("http://localhost:9000/api/cart/removeFromCart", data, { withCredentials: true })
        .then(() => window.location.reload(false))
        .catch((err) => console.log(err))
    }

    const updateQty = (quantity, productId) => {
        const data = {quantity, productId}
        axios
        .post("http://localhost:9000/api/cart/update", data, { withCredentials: true })
        .then(() => window.location.reload(false))
        .catch((err) => console.log(err))
    }

    if (cart === null) {
        return(
            <div>loading...</div>
        )
    }

    const stripeTestPromise = loadStripe("pk_test_51JmmCnK6zlXkvz1MmX1SHnoBuIDIuBnTn9WqS1p0HyrVDQY7JGpgUeeUav1OiKFdfbPUTOcAoGNOI3M8AnGOreg900Db2lFaDn")

    return(
        <div className="cart">
            {cart.cartItems.map((item, idx) => {
                return(
                    <div className="row my-2" key={idx}>
                        <div className="col">
                            <img className="img-fluid mx-auto d-block" src={item.product.imageKey} />
                        </div>
                        <div className="col text-center">
                            <h6>{item.product.title}</h6>
                            <h6>
                                Quantity: {item.quantity}&nbsp; 
                                <i className="fas fa-chevron-up" onClick={() => updateQty(item.quantity+1, item.product._id)}></i>
                                {item.quantity > 1 ?
                                <i className="fas fa-chevron-down" onClick={() => updateQty(item.quantity-1, item.product._id)}></i>
                                :
                                ""
                                }
                            </h6>
                            <h6>${addZeroes(item.product.price * item.quantity)}</h6>
                            <button className="btn-sm btn-outline-danger removeBtn" onClick={() => removeFromCart(item.product._id)}>Remove</button>
                        </div>
                    </div>
                )
            })}
            <hr />
            <div class="form-floating input-group">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Discount Code</label>
                <button class="btn btn-outline-secondary">Apply</button>
            </div>
            <hr />
            <div className="text-center">
                <h5>Total ${addZeroes(cart.bill)}</h5>
            </div>
            <Elements stripe={stripeTestPromise}>
                <CheckoutForm address={address} />
            </Elements>
        </div>
    )
}

export default Cart;