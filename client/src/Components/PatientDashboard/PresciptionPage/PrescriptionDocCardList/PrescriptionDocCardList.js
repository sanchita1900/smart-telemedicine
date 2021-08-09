import React, { useEffect } from "react";
import PrescriptionDocCard from "../PrescriptionDocCard/PrescriptionDocCard";

const PrescriptionDocCardList = ({ doctors }) => {
  useEffect(() => {
    console.log(doctors);
  }, []);
  return (
    <>
      <div className="cardList-container">
        {doctors.map((doctor) => (
          <PrescriptionDocCard
            key={doctor._id}
            id={doctor._id}
            name={doctor.name}
            email={doctor.email}
            gender={doctor.gender}
            speciality={doctor.specialization}
          />
        ))}
      </div>
    </>
  );
};

export default PrescriptionDocCardList;
