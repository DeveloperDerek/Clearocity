import React, { useState } from "react";
import { Link, navigate } from "@reach/router"
import axios from "axios";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const register = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, password, confirmPassword, email}
        axios
            .post("http://localhost:9000/api/user/register", newUser, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate("/")
                window.location.reload(false); //to refresh the page
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }

    return(
        <form className="formcontrol" onSubmit={register}>
            <div className="input-label-group">
                {errors.firstName ?
                    <label className="error">{errors.firstName?.message}</label> 
                :
                    <label className="form-label">First Name</label>
                }
                <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
            </div>
            <div className="input-label-group">
                {errors.lastName ?
                    <label className="error">{errors.lastName?.message}</label> 
                :
                    <label className="form-label">Last Name</label>
                }
                <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
            </div>
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
            <div className="input-label-group">
                {errors.confirmPassword ?
                    <label className="error">{errors.confirmPassword?.message}</label> 
                :
                    <label className="form-label">Confirm Password</label>
                }
                <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
            </div>
            <button className="registerButton">Sign up</button>
            <Link className="toLogin" to="/login">Returning Customer? Login <i class="fas fa-long-arrow-alt-right"></i></Link>
        </form>
    )
}

export default Register