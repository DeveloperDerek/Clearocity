import React, { useState } from "react";

const Footer = () => {
    const [legal, setLegal] = useState(false);
    const [clearocity, setClearocity] = useState(false);

    const showLegal = () => {
        setLegal(!legal)
    }

    const showClear = () => {
        setClearocity(!clearocity)
    }

    return(
        <div className="footer">
            <div className="foot-container">
                <div className="column">
                    <h6>Legal<span>
                        {legal ?
                        <i className="fas fa-chevron-up" onClick={showLegal}></i>
                        :
                        <i className="fas fa-chevron-down" onClick={showLegal}></i>
                        }
                    </span></h6>
                    {legal ?
                    <ul>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Refund Policy</a>
                        </li>
                        <li>
                            <a>Shipping Policy</a>
                        </li>
                        <li>
                            <a>Terms of Service</a>
                        </li>
                    </ul>
                    :
                    ""
                    }
                </div>
                <div className="column">
                    <h6>Clearocity<span>
                        {clearocity ?
                        <i className="fas fa-chevron-up" onClick={showClear}></i>
                        :
                        <i className="fas fa-chevron-down" onClick={showClear}></i>
                        }
                    </span></h6>
                    {clearocity ?
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Track Order</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li>
                            <a>Disclaimer</a>
                        </li>
                    </ul>
                    :
                    ""
                    }
                </div>
                <div className="column">
                    <ul className="social-icons">
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
            <hr />
            <p className="rights">© 2021 Clearocity. All Rights Reserved</p>
        </div>
    )
}

export default Footer