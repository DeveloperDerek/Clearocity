import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";

const Navbar = () => {
    const {loggedUser} = useContext(UserContext);

    console.log(loggedUser)
    return (
        <nav>
            <ul>
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
                    <a><i className="fas fa-shopping-cart"></i></a>
                </li>
                <li className="right">
                    {loggedUser.check ?
                    <a href="/login"><i className="far fa-user"></i> My Account</a>
                    :
                    <a href="/login"><i className="far fa-user"></i> Login</a>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar