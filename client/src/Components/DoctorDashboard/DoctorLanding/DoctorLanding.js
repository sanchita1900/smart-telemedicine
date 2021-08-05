import React, { useState, useEffect } from "react";
import DoctorNavbar from "../DoctorNavbar/DoctorNavbar";
import PrescriptionPatCardList from "../Prescription/PrescriptionPatCardList/PrescriptionPatCardList";
import { getPatientsApi } from "../../../api";

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
      <h1>Patients under Monitor</h1>
      <PrescriptionPatCardList appointments={appointments} button={false} />
    </div>
  );
};

export default DoctorLanding;
