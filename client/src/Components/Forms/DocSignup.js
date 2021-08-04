import React, { useEffect, useState } from "react";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Forms.css";
import { doctorSignupApi } from "../../api/index";

const DocSignup = () => {
  const [regName, setName] = useState(null);
  const [regEmail, setRegEmail] = useState(null);
  const [regPassword, setRegPassword] = useState(null);
  const [regSpeciality, setRegSpeciality] = useState(null);
  const [regExperience, setRegExperience] = useState(null);
  const [regGender, setRegGender] = useState(null);
  const history = useHistory();

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setRegEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setRegPassword(e.target.value);
  };

  const updateSpeciality = (e) => {
    setRegSpeciality(e.target.value);
  };

  const updateExperience = (e) => {
    setRegExperience(e.target.value);
  };

  const updateGender = (e) => {
    setRegGender(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      toast.dark("Input Fields cannot be empty");
      history.push("/docsignup");
    } else {
      history.push("/doclogin");
      await doctorSignupApi(regName, regEmail, regPassword);
    }
  };
  return (
    <div className="page">
      <HomeNavbar />
      <div className="main-container">
        <div className="Home">
          <div className="main">
            {/* <h2 className="welcome">Welcome</h2> */}
          </div>
          <div className="form">
            <h2 className="create">Create Account</h2>
            <div className="container">
              <form onSubmit={handleRegister} className="inputFields">
                {/* <label>Name</label> */}
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={regName}
                  placeholder="Name"
                  onChange={updateName}
                />
                {/* <label>Email</label> */}
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={regEmail}
                  placeholder="Email"
                  onChange={updateEmail}
                />
                {/* <label>Password</label> */}
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={regPassword}
                  placeholder="Password"
                  onChange={updatePassword}
                />
                {/* <label>Speciality</label> */}
                <input
                  className="input"
                  type="text"
                  name="speciality"
                  value={regSpeciality}
                  placeholder="Speciality"
                  onChange={updateSpeciality}
                />
                {/* <label>Experience</label> */}
                <input
                  className="input"
                  type="text"
                  name="experience"
                  value={regExperience}
                  placeholder="Years of experience"
                  onChange={updateExperience}
                />
                {/* <label>Gender</label> */}
                <input
                  className="input"
                  type="text"
                  name="gender"
                  value={regGender}
                  placeholder="Gender"
                  onChange={updateGender}
                />
                <div className="wrap">
                  <button className="button" type="submit">
                    Submit
                  </button>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DocSignup;
