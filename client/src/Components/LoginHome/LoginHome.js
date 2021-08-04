import React from "react";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import { Route, Link } from "react-router-dom";
import hospital from "./hospital.jpg";
import "./LoginHome.css";

class LoginHome extends React.Component {
  render() {
    return (
      <div className="pageFile">
        <HomeNavbar />
        <div className="Menu">
          <div className="Home">
            <img src={hospital} alt="logo" className="bgImage"></img>
            <div className="buttons">
              <button>
                <Link to="/doclogin" className="btn-1">
                <p className="pTag">Login as Doctor</p>
                </Link>
              </button>
              <button>
                <Link to="/patientlogin" className="btn-2">
                <p className="pTag">Login as Patient</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginHome;
