import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PrescriptionPatCard = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <div className="Card">
        Name: {props.name}, Email id: {props.email}. Sufferring from:{" "}
        {props.disease}. Age: {props.age}
        {props.button ? (
          <Link to={`/doctor/chat/${props.id}`}>
            <button>Prescribe</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default PrescriptionPatCard;
