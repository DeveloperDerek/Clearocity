import React from "react";

const Navbar = () => {
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
                    <a href="/login"><i className="far fa-user"></i> Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar