import React, { useState, useEffect } from "react";
import PatientNavbar from "../PatientNavbar/PatientNavbar";
import PrescriptionDocCardList from "./PrescriptionDocCardList/PrescriptionDocCardList";
import { getAppointedDocsApi } from "../../../api";

const PrescriptionPage = () => {
  const [appointedDocs, setAppointedDocsDetails] = useState([]);

  useEffect(() => {
    allAppointments();
  }, []);

  const allAppointments = async () => {
    const data = await getAppointedDocsApi();
    setAppointedDocsDetails(data.arr);
    console.log(data.arr);
  };
  return (
    <>
      <PatientNavbar />
      <h1>Appointments</h1>
      <PrescriptionDocCardList doctors={appointedDocs} />
    </>
  );
};

export default PrescriptionPage;
