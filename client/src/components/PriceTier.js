import React from "react";
import left from "../images/1.png";
import mid from "../images/2.png";
import right from "../images/3.png";

const PriceTier = () => {
    return (
        <div className="tri-tier">
                <h1 className="heading">Choose Your Discounted Package Below</h1>
                <div className="price-tier">
                    <div className="tier">
                        <h6>&nbsp;Single - 1 Bottle</h6>
                        <div className="body">
                            <img src={left} />
                            <h5 className="price-tag">$69.00/Bottle</h5>
                            <button>Buy Now</button>
                            <p className="shipping">+ Shipping</p>
                            <p className="total-price"><span>$149</span> $69</p>
                        </div>
                    </div>
                    <div className="tier">
                        <h6 className="best-value">&nbsp;Best Value - 6 Bottles</h6>
                        <div className="body">
                            <img src={mid} />
                            <h5 className="price-tag">$49.00/Bottle</h5>
                            <button>Buy Now</button>
                            <p className="shipping best">Free Shipping</p>
                            <p className="total-price"><span>$894</span> $294</p>
                            <h3>You Save $600!</h3>
                        </div>
                    </div>
                    <div className="tier">
                        <h6>&nbsp;Popular - 3 Bottles</h6>
                        <div className="body">
                            <img src={right} />
                            <h5 className="price-tag">$59.00/Bottle</h5>
                            <button>Buy Now</button>
                            <p className="shipping">Free Shipping</p>
                            <p className="total-price"><span>$447</span> $177</p>
                            <h3>You Save $270!</h3>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PriceTier