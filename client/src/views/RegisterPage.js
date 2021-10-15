import React, { useState } from "react";
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Footer from "../components/Footer";

const RegisterPage = () => {
    return(
        <div className="register">
            <Navbar />
            <HomeButton />
            <h1>Create Account</h1>
            <Register />
            <Footer />
        </div>
    )
}

export default RegisterPage