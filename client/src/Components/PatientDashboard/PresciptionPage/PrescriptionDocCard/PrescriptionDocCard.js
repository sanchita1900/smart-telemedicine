import React from "react";
import { useHistory, Link } from "react-router-dom";

const PrescriptionDocCard = (props) => {
  return (
    <>
      <div className="mainPatientCardContainer">
        <div className="PatientCard">
          <p> Dr.{props.name}</p>
          <p> {props.email}</p>
          <p> {props.speciality}</p>
          <Link to={`/patient/chat/${props.id}`}>
            <div className="acceptButton">
              <button>Send Problem</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrescriptionDocCard;
