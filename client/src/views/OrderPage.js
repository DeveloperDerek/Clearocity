import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderHistory from "../components/OrderHistory";
import HomeButton from "../components/HomeButton";

const OrderPage = (props) => {
    const { id } = props


    return(
        <div>
            <Navbar />
            <HomeButton />
            <OrderHistory id={id} />
            <Footer />
        </div>
    )
}

export default OrderPage