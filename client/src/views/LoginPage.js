import React from 'react';
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Footer from "../components/Footer";

const LoginPage = () => {

    return(
        <div className="login">
            <Navbar />
            <HomeButton />
            <h1>Customer Login</h1>
            <Login />
            <Footer />
        </div>
    )
}

export default LoginPage