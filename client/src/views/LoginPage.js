import React, { useState } from 'react';
import axios from 'axios';
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const LoginPage = () => {
    const logout = () => {
        axios
            .post("http://localhost:9000/api/user/logout", {}, { withCredentials: true })
            .then((res) => {
                console.log(res);
                window.location.reload(false); //to refresh the page
            })
            .catch(console.log);
    }

    return(
        <div className="login">
            <Navbar />
            <HomeButton />
            <h1>Customer Login</h1>
            <Login />
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default LoginPage