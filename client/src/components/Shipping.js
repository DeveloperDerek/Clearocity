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
    const [errors, setErrors] = useState({});

    const orderAddress = (e) => {
        e.preventDefault();
        const data = { email, firstName, lastName, address, suite, city, state, zip }
        axios
        .post("http://localhost:9000/api/order/create-address",
            data)
        .then((res) => navigate(`/checkout/${res.data._id}`))
        .catch((err) => setErrors(err.response.data.errors))
    }

    return(
        <div className="shipping">
            <img src={logo} onClick={() => navigate("/")}/>
            <h2>Contact Information</h2>
            <form onSubmit={orderAddress}>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                    {errors.email ?
                    <label className="text-danger">Email</label>
                    :
                    <label>Email</label>
                    }
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" placeholder="name@example.com" onChange={(e) => setFirstName(e.target.value)}/>
                            {errors.firstName ?
                            <label className="text-danger">First Name</label>
                            :
                            <label>First Name</label>
                            }
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" placeholder="name@example.com" onChange={(e) => setLastName(e.target.value)}/>
                            {errors.lastName ?
                            <label className="text-danger">Last Name</label>
                            :
                            <label>Last Name</label>
                            }
                        </div>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="name@example.com" onChange={(e) => setAddress(e.target.value)}/>
                    {errors.address ?
                    <label className="text-danger">Address</label>
                    :
                    <label>Address</label>
                    }
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="name@example.com" onChange={(e) => setSuite(e.target.value)}/>
                    <label>Apartment, suite, etc. (optional)</label>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" placeholder="name@example.com" onChange={(e) => setCity(e.target.value)}/>
                            {errors.city ?
                            <label className="text-danger">City</label>
                            :
                            <label>City</label>
                            }
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" placeholder="name@example.com"onChange={(e) => setState(e.target.value)}/>
                            {errors.state ?
                            <label className="text-danger">State (abbr)</label>
                            :
                            <label>State (abbr)</label>
                            }
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" placeholder="name@example.com"onChange={(e) => setZip(e.target.value)}/>
                            {errors.zip ?
                            <label className="text-danger">ZIP code</label>
                            :
                            <label>ZIP code</label>
                        }
                        </div>
                    </div>
                </div>

                <Link className="toHome" to="/"><i class="fas fa-long-arrow-alt-left"></i> Return to home </Link>
                <button className="toPay">Continue to checkout</button>
                {/* <Link className="toPay" to="/checkout/payment">Contine to payment <i class="fas fa-long-arrow-alt-right"></i></Link> */}
            </form>
        </div>
    )
}

export default Shipping