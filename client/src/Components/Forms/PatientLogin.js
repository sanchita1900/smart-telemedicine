import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { patientLoginApi } from "../../api";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeNavbar from "../HomeNavbar/HomeNavbar";

const PatientLogin = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const history = useHistory();

  const updateEmail = (e) => {
    setloginEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setloginPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    if (!loginPassword || !loginEmail) {
      toast.dark("Enter Email and Password", {
        position: "top-right",
        autoClose: 100000,
      });
    } else {
      e.preventDefault();
      const data = await patientLoginApi(loginEmail, loginPassword);
      if (data.success === true) {
        Cookies.set("token", data.token);
        history.push("/patdashboard");
      }
      if (data.success === false) {
        toast.dark("Wrong Credentials");
        setloginEmail("");
        setloginPassword("");
      }
    }
  };

  if (Cookies.get("token")) return <Redirect to="/patdashboard"></Redirect>;

  return (
    <div className="page">
      <HomeNavbar />
      <div className="main-container">
        <div className="Home">
          <div className="form">
            <h1 className="signin">Login as Patient</h1>
            <div className="container">
              <form className="inputFields">
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={loginEmail}
                  placeholder="Email"
                  onChange={updateEmail}
                />

                <input
                  className="input"
                  type="password"
                  name="password"
                  value={loginPassword}
                  placeholder="Password"
                  onChange={updatePassword}
                />

                <button onClick={handleLogin} className="button" type="submit">
                  Submit
                </button>
                <ToastContainer position="top-right" autoClose={1000} />
              </form>
            </div>
            <div className="redirect">
              <p className="text">Don't have an account ? Signup Here!</p>
              {/* <Link to="/patientsignup"> */}
              {/* <button className="signup" type="submit">
                  SIGN UP
                </button> */}
              <a href="/patientsignup" className="redir">
                Signup
              </a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
