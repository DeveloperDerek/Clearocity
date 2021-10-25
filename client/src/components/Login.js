import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const login = (e) => {
        e.preventDefault();
        const logUser = { email, password }
        axios
            .post("http://localhost:9000/api/user/login", logUser, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                navigate("/")
                window.location.reload(false); //to refresh the page
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data.msg)
            })
    }

    return(
        <form className="formcontrol" onSubmit={login}>
            <div className="input-label-group">
                {errors.email ?
                    <label className="error">{errors.email?.message}</label> 
                :
                    <label className="form-label">Email</label>
                }
                <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className="input-label-group">
                {errors.password ?
                    <label className="error">{errors.password?.message}</label> 
                :
                    <label className="form-label">Password</label>
                }
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button className="loginButton">Login</button>
            <Link className="toRegister" to="/register">New Customer? Signup <i class="fas fa-long-arrow-alt-right"></i></Link>
        </form>
    )
}

export default Login