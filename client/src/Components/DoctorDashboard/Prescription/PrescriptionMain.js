import React, { useState, useEffect } from "react";
import { getPatientsApi } from "../../../api";
import DoctorNavbar from "../DoctorNavbar/DoctorNavbar";
import PrescriptionPatCardList from "./PrescriptionPatCardList/PrescriptionPatCardList";

const PrescriptionMain = () => {
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
    <>
      <DoctorNavbar />
      <h1>All Appointments</h1>
      <PrescriptionPatCardList appointments={appointments} button={true} />
    </>
  );
};

export default PrescriptionMain;
