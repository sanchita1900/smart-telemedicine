import React from "react";
import PrescriptionDocCard from "../PrescriptionDocCard/PrescriptionDocCard";

const PrescriptionDocCardList = ({ doctors }) => {
  return (
    <>
      <div className="cardList-container">
        {doctors.map((doctor) => (
          <PrescriptionDocCard
            id={doctor._id}
            name={doctor.name}
            email={doctor.email}
            gender={doctor.gender}
          />
        ))}
      </div>
    </>
  );
};

export default PrescriptionDocCardList;
