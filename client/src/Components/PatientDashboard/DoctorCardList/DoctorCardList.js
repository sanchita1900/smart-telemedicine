import React, { useEffect } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import "./DoctorCardList.css";

const DoctorCardlist = ({ doctors }) => {
  useEffect(() => {
    console.log(doctors);
  });
  return (
    <>
      <div className="cardList-container">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            id={doctor._id}
            name={doctor.name}
            email={doctor.email}
            specialization={doctor.specialization}
            invitation={doctor.invitation}
            appointment={doctor.appointment}
            yearOfExp={doctor.yearOfExp}
            honors={doctor.honors}
          />
        ))}
      </div>
    </>
  );
};
export default DoctorCardlist;
