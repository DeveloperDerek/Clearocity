import React from "react";
import Shipping from "../components/Shipping";
import Cart from "../components/Cart";

const InformationPage = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm">
                    <Shipping />
                </div>
                <div className="col-sm">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default InformationPage