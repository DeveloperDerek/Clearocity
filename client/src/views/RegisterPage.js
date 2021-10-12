import React, { useState } from "react";
import { Link } from "@reach/router"
import HomeButton from "../components/HomeButton";
import Navbar from "../components/Navbar";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [errors, setErrors] = useState({});

    return(
        <div className="register">
            <Navbar />
            <HomeButton />
            <h1>Create Account</h1>
            <form className="form-control">
                <div className="input-label-group">
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                </div>
                <div className="input-label-group">
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                </div>
                <div className="input-label-group">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="input-label-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div className="input-label-group">
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                </div>
                    <button>Sign up</button>
                    <Link className="toLogin" to="/login">Returning Customer? Login</Link>
            </form>
        </div>
    )
}

export default Register