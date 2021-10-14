import React, { useState, useEffect } from "react";
import axios from "axios";

const CartModal = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        axios
        .get("http://localhost:9000/api/cart/view", { withCredentials: true })
        .then((res) => {
            setCart(res.data.cartItems)
        })
        .catch((err) => console.log(err))
    }, [])


    return(
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal