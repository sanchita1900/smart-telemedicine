import React from "react";
import PrescriptionPatCard from "../PrescriptionPatCard/PrescriptionPatCard";
import "./PrescriptionPatCardList.css";

const PrescriptionPatCardList = ({ appointments, button }) => {
  return (
    <>
      <div className="cardList-container">
        {appointments.map((patient) => (
          <PrescriptionPatCard
            id={patient._id}
            name={patient.name}
            email={patient.email}
            gender={patient.gender}
            disease={patient.disease}
            button={button}
          />
        ))}
      </div>
    </>
  );
};

export default PrescriptionPatCardList;
