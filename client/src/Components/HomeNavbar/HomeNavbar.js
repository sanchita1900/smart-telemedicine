import React from "react";
import "./HomeNavbar.css";
import { Route, Link } from "react-router-dom";
import mainlogo from "./mainlogo.png";

const HomeNavbar = () => {
  return (
    <div className="Navbar">
      <div>
        <img src={mainlogo} className="logo" />
      </div>
      <div className="items">
        <Link to="/" className="navItems">
          Home
        </Link>
        <Link to="/signup" className="navItems">
          SignUp
        </Link>
        <Link to="/login" className="navItems">
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
