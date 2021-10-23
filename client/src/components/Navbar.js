import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import axios from "axios";

const Navbar = () => {
    const {loggedUser} = useContext(UserContext);
    const [cart, setCart] = useState(null)

    useEffect(() => {
        axios
        .get("http://localhost:9000/api/cart/view", { withCredentials: true })
        .then((res) => {
            setCart(res.data);
            console.log(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const removeFromCart = (id) => {
        const data = {product_id: id};
        axios
        .post("http://localhost:9000/api/cart/removeFromCart", data, { withCredentials: true })
        .then((res) => {
            setCart(res.data)
        })
        .catch((err) => console.log(err))
    }

    if (cart === null) {
        return(
            <div>Loading...</div>
        )
    }

    return (
        <nav>
            <ul className="navicon">
                <li>
                    <a><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a><i className="far fa-envelope"></i></a>
                </li>
                <li className="right">
                    <a data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-shopping-cart"
                    ></i></a>
                </li>
                <li className="right">
                    {loggedUser.check ?
                    <a href="/login"><i className="far fa-user"></i> My Account</a>
                    :
                    <a href="/login"><i className="far fa-user"></i> Login</a>
                    }
                </li>
            </ul>

            {/* CART MODAL */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content cartModal">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul>
                            {cart.cartItems.map((item, idx) => {
                                return(
                                    <li key={idx} className="row">
                                        <div className="col text-center">
                                            <h6>{item.product.title}</h6>
                                            <img src={`${item.product.imageKey}`} />
                                        </div>
                                        <div className="col-6">
                                            <h6>${item.product.price}</h6>
                                            <p>{item.product.description}</p>
                                        </div>
                                        <div className="col-2 text-center">
                                            <h6>Qty:{item.quantity}</h6>
                                            <button onClick={() => removeFromCart(item.product._id)}>Remove</button>
                                        </div>
                                    </li>
                                    )
                                })}
                                <h6 className="text-center">Total: ${cart.bill}</h6>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
