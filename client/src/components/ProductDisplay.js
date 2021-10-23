import React from "react";
import axios from "axios";

const ProductDisplay = () => {
    const checkOut = () => {
        axios
        .post("http://localhost:9000/create-checkout-session")
        .then((res) => console.log(res))
    }

    return (
        <section>
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>Sunglasses</h3>
                    <h5>$9.99</h5>
                </div>
            </div>
            <form action="/create-checkout-session" method="POST">
                <button onClick={() => checkOut()}>Checkout</button>
            </form>
        </section>
    )
};

export default ProductDisplay;