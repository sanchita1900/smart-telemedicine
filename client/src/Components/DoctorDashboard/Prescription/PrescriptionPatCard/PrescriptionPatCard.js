import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./PrescriptionPatCard.css";

const PrescriptionPatCard = (props) => {
  const history = useHistory();
  useEffect(() => {
    console.log(props);
  }, []);

  const handlePrescribe = () => {
    history.push(`/doctor/chat/${props.id}`);
  };
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
            <div className="acceptButton">
              <button onClick={handlePrescribe}>Prescribe</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PrescriptionPatCard;
