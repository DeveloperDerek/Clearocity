import React from "react";
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Navbar";

const Login = () => {
    return(
        <div>
            <Navbar />
            <HomeButton />
            <h1>Customer Login</h1>
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
        </div>
    )
}

export default Login