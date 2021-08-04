import React from "react";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import { Route, Link } from "react-router-dom";
import hospital from "./hospital.jpg";
import "./SignupHome.css";

class SignupHome extends React.Component {
  render() {
    return (
      <div className="pageFile">
        <HomeNavbar />
        <div className="Menu">
          <div className="Home">
            <img src={hospital} alt="logo" className="bgImage"></img>
            <div className="buttons">
              <button>
                <Link to="/docsignup" className="btn-1">
                <p className="pTag">Signup as Doctor</p>
                </Link>
              </button>
              <button>
                <Link to="/patientsignup" className="btn-2">
                  <p className="pTag">Signup as Patient</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupHome;
