import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OrderTab from "../components/OrderTab"
import HomeButton from "../components/HomeButton"
import axios from "axios";
import { navigate } from "@reach/router";

const AccountPage = () => {
    return(
        <div className="account-page">
            <Navbar />
            <HomeButton />
            <OrderTab />
            <Footer />
        </div>
    )
}

export default AccountPage