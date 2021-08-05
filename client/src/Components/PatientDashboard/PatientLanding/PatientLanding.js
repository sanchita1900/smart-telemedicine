import React, { useState, useEffect } from "react";
import { patientProfileApi } from "../../../api";
import PatientNavbar from "../PatientNavbar/PatientNavbar";

const PatientLanding = () => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    introCard();
  }, []);

  const introCard = async () => {
    const data = (await patientProfileApi()).profile;
    console.log(data);
    setDetails({ data });
  };

  console.log(details);
  return (
    <div>
      <PatientNavbar />
      <h1>Your Personal Healthcare App</h1>
      <div className="Card">
        <h1>A brief Intro about you</h1>
        {/* Hi, You are {details.data.name}. Your age is {details.data.age}.
        Currently, you suffering from {details.data.disease}. */}
      </div>
    </div>
  );
};

export default PatientLanding;
