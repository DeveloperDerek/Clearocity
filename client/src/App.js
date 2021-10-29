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
import OrderPage from './views/OrderPage';
import PrivacyPage from './views/PrivacyPage';
import RefundPage from './views/RefundPage';
import ShippingPage from './views/ShippingPage';
import TermsServicePage from './views/TermsServicePage';
import DisclaimerPage from './views/DisclaimerPage';
import FaqPage from "./views/FaqPage";

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
      <CheckoutPage path="/checkout/:address" />
      <AccountPage path="/search-order" />
      <OrderPage path="/order/:id" />
      <PrivacyPage path="/policies/privacy" />
      <RefundPage path="/policies/refund" />
      <ShippingPage path="/policies/shipping" />
      <TermsServicePage path="/policies/terms-and-service" />
      <DisclaimerPage path="/policies/disclaimer" />
      <FaqPage path="/policies/faq" />
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
