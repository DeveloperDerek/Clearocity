import React, { useEffect, useState } from "react";
import left from "../images/1.png";
import mid from "../images/2.png";
import right from "../images/3.png";
import axios from "axios";

const PriceTier = () => {

    const addProduct = (id) => {
        const data = "send"
        axios
        .post(`http://localhost:9000/api/cart/addToCart/${id}`,
        data,
        { withCredentials: true })
        .then(() => window.location.reload(false))
        .catch((err) => console.log(err))
    }

    return (
        <div className="tri-tier">
                <h1 className="heading">Choose Your Discounted Package Below</h1>
                <div className="price-tier">
                    <div className="tier">
                        <h6>&nbsp;Single - 1 Bottle</h6>
                        <div className="body">
                            <img src={left} />
                            <h5 className="price-tag">$28 / Bottle</h5>
                            <button onClick={() => addProduct("6167575a0a5b93e68963f72b")}>Buy Now</button>
                            <p className="shipping">+ Shipping</p>
                            <p className="total-price"><span>$60</span> $27.95</p>
                        </div>
                    </div>
                    <div className="tier">
                        <h6 className="best-value">&nbsp;Best Value - 6 Bottles</h6>
                        <div className="body">
                            <img src={mid} />
                            <h5 className="price-tag">$19 / Bottle</h5>
                            <button onClick={() => addProduct("616764c70a5b93e68963f984")}>Buy Now</button>
                            <p className="shipping best">Free Shipping</p>
                            <p className="total-price"><span>$367</span> $109.95</p>
                            <h3>You Save $600!</h3>
                        </div>
                    </div>
                    <div className="tier">
                        <h6>&nbsp;Popular - 3 Bottles</h6>
                        <div className="body">
                            <img src={right} />
                            <h5 className="price-tag">$24 / Bottle</h5>
                            <button onClick={() => addProduct("616765000a5b93e68963f987")}>Buy Now</button>
                            <p className="shipping">Free Shipping</p>
                            <p className="total-price"><span>$187</span> $69.95</p>
                            <h3>You Save $270!</h3>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PriceTier