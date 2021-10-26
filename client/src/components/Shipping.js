import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Shipping = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [suite, setSuite] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const orderAddress = (e) => {
        const data = { email, firstName, lastName, address, suite, city, state, zip }
        e.preventDefault()
        axios
        .post("http:localhost:9000/api/order/startorder",
            { data },
            { withCredentials: true })
        .then(() => navigate("/checkout/payment"))
        .catch((err) => console.log(err))
    }

    return(
        <div className="shipping">
            <img src={logo} onClick={() => navigate("/")}/>
            <h2>Contact Information</h2>
            <form onSubmit={() => orderAddress()}>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                    <label for="floatingInput">Email</label>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setFirstName(e.target.value)}/>
                            <label for="floatingInput">First Name</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setLastName(e.target.value)}/>
                            <label for="floatingInput">Last Name</label>
                        </div>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setAddress(e.target.value)}/>
                    <label for="floatingInput">Address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setSuite(e.target.value)}/>
                    <label for="floatingInput">Apartment, suite, etc. (optional)</label>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setCity(e.target.value)}/>
                            <label for="floatingInput">City</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"onChange={(e) => setState(e.target.value)}/>
                            <label for="floatingInput">State (abbr)</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com"onChange={(e) => setZip(e.target.value)}/>
                            <label for="floatingInput">ZIP code</label>
                        </div>
                    </div>
                <button>Continue to checkout</button>
                </div>

                <Link className="toHome" to="/"><i class="fas fa-long-arrow-alt-left"></i> Return to home </Link>
                <Link className="toPay" to="/checkout/payment">Contine to payment <i class="fas fa-long-arrow-alt-right"></i></Link>
            </form>
        </div>
    )
}

export default Shipping