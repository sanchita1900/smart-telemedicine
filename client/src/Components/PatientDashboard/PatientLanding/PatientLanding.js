import React, { useState, useEffect } from "react";
import { patientProfileApi } from "../../../api";
import PatientNavbar from "../PatientNavbar/PatientNavbar";
import { Link } from "react-router-dom";
import "./PatientLanding.css";
import landing from "./landing.png";

const PatientLanding = () => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    introCard();
  }, []);

  const introCard = async () => {
    const data = (await patientProfileApi()).profile;
    console.log(data);
    setDetails({ ...data });
  };

  console.log(details);
  return (
    <div>
      <PatientNavbar />
      <div className="mainlanding-container">
        <img
          src={landing}
          className="landing-img"
          height="400vh"
          width="500vh"
        ></img>
        <div className="landing-container">
          <div className="hello">
            <h1>Hello👋, {details.name}!</h1>

            <h3>{details.email}</h3>
            <h3>
              {details.city}, {details.state}
            </h3>
          </div>
          <div className="content">
            <p>
              You seem to have{" "}
              {details.appointedDocs ? details.appointedDocs.length : 0}{" "}
              appointments
            </p>

            <Link to="/prescription" className="link">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLanding;
