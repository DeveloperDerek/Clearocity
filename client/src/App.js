import './App.css';
import { Router } from "@reach/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./utils/UserContext";

import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import InformationPage from './views/InformationPage';
import CheckoutPage from './views/CheckoutPage';
import AccountPage from './views/AccountPage';

function App() {
  const [loggedUser, setLoggedUser] = useState({
    check:false,
    userInfo:{}
  });

  useEffect(() => {
    axios
    .get("http://localhost:9000/api/user/getLoggedInUser", { withCredentials: true })
    .then((res) => {
      setLoggedUser(prevData => ({
        ...prevData,
        check:true,
        userInfo:res.data
      }));
    })
    .catch(console.log);
  }, [])

  return (
    <>
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
    <Router>
      <LandingPage path="/" />
      <LoginPage path="/login" />
      <RegisterPage path="/register" />
      <InformationPage path="/checkout/info" />
      <CheckoutPage path="/checkout/payment" />
      <AccountPage path="/account" />
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
