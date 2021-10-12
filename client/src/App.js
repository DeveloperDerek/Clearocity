import './App.css';
import { Router } from "@reach/router";

import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

function App() {
  return (
    <>
    <Router>
      <LandingPage path="/" />
      <LoginPage path="/login" />
      <RegisterPage path="/register" />
    </Router>
    </>
  );
}

export default App;
