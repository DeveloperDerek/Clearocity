import './App.css';
import { Router } from "@reach/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./utils/UserContext";

import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

function App() {

  const [loggedUser, setLoggedUser] = useState({
    check:false,
    userInfo:{}
  });

  useEffect(() => {
    axios
    .get("http://localhost:9000/api/user/getLoggedInUser", { withCredentials: true })
    .then((res) => {
      console.log(res)
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
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
