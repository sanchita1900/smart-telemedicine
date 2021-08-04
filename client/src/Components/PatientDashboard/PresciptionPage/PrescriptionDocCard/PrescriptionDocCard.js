import React from "react";
import { useHistory, Link } from "react-router-dom";

const PrescriptionDocCard = (props) => {
  return (
    <>
      <div className="Card">
        Dr.{props.name}, email id is {props.email}.
        <Link to={`/patient/chat/${props.id}`}>
          <button>Send Problem</button>
        </Link>
      </div>
    </>
  );
};

export default PrescriptionDocCard;
