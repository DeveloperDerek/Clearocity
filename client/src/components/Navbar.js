import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import axios from "axios";
import { navigate } from "@reach/router";

const Navbar = () => {
    const {loggedUser} = useContext(UserContext);
    const [cart, setCart] = useState(null);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        axios
        .get("http://localhost:9000/api/cart/view", { withCredentials: true })
        .then((res) => {
            console.log(res.data)
            setCart(res.data);
        })
        .catch((err) => console.log(err))
    }, [update])

    const removeFromCart = (id) => {
        const data = {product_id: id};
        axios
        .post("http://localhost:9000/api/cart/removeFromCart", data, { withCredentials: true })
        .then((res) => {
            setCart(res.data)
            setUpdate(update+1);
        })
        .catch((err) => console.log(err))
    }

    const addZeroes = (num) => {
        const value = toString(num);
        const dec = value.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        const final = Number(num).toFixed(len)
        return final;
    }

    const updateQty = (quantity, productId) => {
        const data = {quantity, productId}
        axios
        .post("http://localhost:9000/api/cart/update", data, { withCredentials: true })
        .then((res) => {
            setCart(res.data);
            setUpdate(update+1);
        })
        .catch((err) => console.log(err))
    }

    return (
        <nav>
            <ul className="navicon">
                <li>
                    <a href="https://www.facebook.com/clearocityofficial"><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/clearocity/"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="right">
                    {!cart ?
                        ""
                        :
                        <a data-bs-toggle="modal" data-bs-target="#cartModal">{cart.cartItems.length} <i className="fas fa-shopping-cart"
                        ></i></a>
                    }
                </li>
                    {loggedUser.check ?
                    <>
                        <li className="right">
                            <a href="/search-order"><i className="far fa-user"></i> My Account</a>
                        </li>
                    </>
                :
                    <li className="right">
                        <a href="/login"><i className="far fa-user"></i> Login</a>
                    </li>
                }
            </ul>

        {cart ?
            <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content cartModal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                            {cart.cartItems.map((item, idx) => {
                                return(
                                    <li key={idx} className="row">
                                        <div className="col-4 text-center">
                                            <h6>{item.product.title}</h6>
                                            <img src={`${item.product.imageKey}`} />
                                        </div>
                                        <div className="col-7 text-center">
                                            <h6>Qty: {item.quantity} &nbsp; 
                                                <i className="fas fa-chevron-up" onClick={() => updateQty(item.quantity+1, item.product._id)}></i>
                                                {item.quantity > 1 ?
                                                    <i className="fas fa-chevron-down" onClick={() => updateQty(item.quantity-1, item.product._id)}></i>
                                                    :
                                                    ""
                                                }
                                            </h6>
                                            <p>{item.product.description}</p>
                                            <h6>
                                                ${addZeroes(item.product.price * item.quantity)}
                                            </h6>
                                        </div>
                                        <div className="col-1">
                                            <i className="fas fa-times" onClick={() => removeFromCart(item.product._id)}></i>
                                        </div>
                                    </li>
                                    )
                                })}
                                <h6 className="text-center">Cart Total: ${addZeroes(cart.bill)}</h6>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {cart.cartItems.length > 0 ? 
                                <button data-bs-dismiss="modal" onClick={() => navigate("/checkout/info")} className="btn btn-primary">Check Out</button>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        :
        ""
        }    
        </nav>
    )
}

export default Navbar
