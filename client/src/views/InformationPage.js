import React from "react";
import Shipping from "../components/Shipping";
import Cart from "../components/Cart";

const InformationPage = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md col">
                    <Shipping />
                </div>
                <div className="col-md">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default InformationPage