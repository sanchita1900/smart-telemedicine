import React, { useState, useEffect } from "react";
import DoctorNavbar from "../DoctorNavbar/DoctorNavbar";
import PrescriptionPatCardList from "../Prescription/PrescriptionPatCardList/PrescriptionPatCardList";
import { getPatientsApi } from "../../../api";
import "./DoctorLanding.css";

const DoctorLanding = () => {
  const [landing, setLanding] = useState(true);
  const [appointments, setAppointmentDetails] = useState([]);

  useEffect(() => {
    allAppointments();
  }, []);

  const allAppointments = async () => {
    const data = await getPatientsApi();
    setAppointmentDetails(data.arr);
    console.log(data.arr);
  };
  return (
    <div>
      <DoctorNavbar />
      <div className="Doctor-landing-container">
        <h1>Upcoming Appointments</h1>
        <PrescriptionPatCardList appointments={appointments} button={false} />
      </div>
    </div>
  );
};

export default DoctorLanding;
