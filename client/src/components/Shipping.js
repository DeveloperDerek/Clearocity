import React from "react";
import logo from "../images/logo.jpeg";
import { Link, navigate } from "@reach/router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const promise = loadStripe("pk_test_51JmmCnK6zlXkvz1MmX1SHnoBuIDIuBnTn9WqS1p0HyrVDQY7JGpgUeeUav1OiKFdfbPUTOcAoGNOI3M8AnGOreg900Db2lFaDn");

const Shipping = () => {
    
    return(
        <div className="shipping">
            <img src={logo} onClick={() => navigate("/")}/>
            <h2>Contact Information</h2>
            <form>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email or mobile phone number</label>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">First Name</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Last Name</label>
                        </div>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Apartment, suite, etc. (optional)</label>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">City</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">State</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">ZIP code</label>
                        </div>
                    </div>
                </div>
                {/* <button>Continue to checkout</button> */}
                <Elements stripe={promise}>
                    <CheckoutForm />
                </Elements>
                <Link className="toHome" to="/login">Return to home <i class="fas fa-long-arrow-alt-right"></i></Link>
            </form>
        </div>
    )
}

export default Shipping