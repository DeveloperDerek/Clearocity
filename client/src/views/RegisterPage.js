import React, { useState } from "react";
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

const RegisterPage = () => {
    return(
        <div className="register">
            <Navbar />
            <HomeButton />
            <h1>Create Account</h1>
            <Register />
        </div>
    )
}

export default RegisterPage