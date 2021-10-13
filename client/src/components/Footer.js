import React from "react";
import { Link } from "@reach/router"

const Footer = () => {
    return(
        <div className="footer">
            <div className="column">
                <h6>Legal</h6>
                <ul>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Refund Policy</Link>
                    <Link to="/">Shipping Policy</Link>
                    <Link to="/">Terms of Service</Link>
                </ul>
            </div>
            <div className="column">
                <h6>Clearocity</h6>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/">Track Order</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">FAQ</Link>
                    <Link to="/">Disclaimer</Link>
                </ul>
            </div>
            <div className="column">
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
                </ul>
            </div>
        </div>
    )
}

export default Footer