import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrescriptionPatCard.css";

const PrescriptionPatCard = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <div className="mainPatientCardContainer">
        <div className="PatientCard">
          <p>
            {" "}
            Name: <span className="Patientname">{props.name}</span>
          </p>
          <p>
            {" "}
            Email id: <span>{props.email}</span>
          </p>
          <p>
            {" "}
            Disease:
            <span>{props.disease}</span>
          </p>
          <p>
            {" "}
            Age: <span>{props.age}</span>
          </p>
          {props.button ? (
            <Link to={`/doctor/chat/${props.id}`}>
              <div className="acceptButton">
                <button>Prescribe</button>
              </div>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PrescriptionPatCard;
