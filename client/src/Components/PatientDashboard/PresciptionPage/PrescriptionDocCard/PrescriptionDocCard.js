import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./PrescriptionDocCard.css";

const PrescriptionDocCard = (props) => {
  const history = useHistory();
  useEffect(() => {
    console.log(props);
  }, []);
  const handleSend = () => {
    history.push(`/patient/chat/${props.id}`);
  };
  return (
    <>
      <div className="mainPrescriptionCardContainer">
        <div className="PrescriptionCard">
          <p> {props.name}</p>
          <p> {props.email}</p>
          <p>Speciality: {props.speciality}</p>
          <div className="sendButton">
            <button onClick={handleSend}>Send Problem</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescriptionDocCard;
