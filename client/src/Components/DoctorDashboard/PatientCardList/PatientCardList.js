import React from "react";
import { doctorProfileApi } from "../../../api";
import PatientCard from "../PatientCard/PatientCard";

const PatientCardList = ({ patients }) => {
  return (
    <>
      <div className="cardList-container">
        {patients.map((patient) => (
          <PatientCard
            key={patient._id}
            id={patient._id}
            name={patient.name}
            email={patient.email}
            gender={patient.gender}
            disease={patient.disease}
            age={patient.age}
          />
        ))}
      </div>
    </>
  );
};

export default PatientCardList;
