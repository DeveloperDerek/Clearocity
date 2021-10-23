import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        axios
        .get("http://localhost:9000/api/cart/view", { withCredentials: true })
        .then((res) => {
            setCart(res.data.cartItems);
            console.log(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    if (cart === null) {
        return(
            <div>loading...</div>
        )
    }

    return(
        <div className="cart">
            {cart.map((item, idx) => {
                return(
                    <div className="row my-2" key={idx}>
                        <div className="col">
                            <img className="img-fluid mx-auto d-block" src={item.product.imageKey} />
                        </div>
                        <h6 className="col">{item.product.title}</h6>
                        <h6 className="col">{item.product.price}</h6>
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
            <div className="prices">
                <div>
                    <h5>Subtotal</h5>
                    <h5>$132.30</h5>
                </div>
                <div>
                    <h5>Shipping</h5>
                    <h5>Free</h5>
                </div>
                <hr />
                <div>
                    <h5>Total</h5>
                    <h5>$132.30</h5>
                </div>
            </div>
        </div>
    )
}

export default Cart;