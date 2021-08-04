import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorNavbar from "../../DoctorNavbar/DoctorNavbar";
import { listMessageApi, sendPrescriptionApi } from "../../../../api";

const PrescriptionPageDoc = () => {
  const [message, setMessages] = useState([]);
  const [input, setInput] = useState(" ");
  const { id } = useParams();

  useEffect(() => {
    const populateMessages = async () => {
      const data = await listMessageApi(id);
      console.log(data);
      //    setMessages(data.relation);
    };
    populateMessages();
  }, []);

  const handleSend = async () => {
    await sendPrescriptionApi(id, input);
    setInput(" ");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <DoctorNavbar />
      {message.length
        ? message.map((msg, i) => {
            return (
              <div key={i}>
                <div className={msg.sender === 0 ? "doctor" : "patient"}></div>
              </div>
            );
          })
        : null}
      <input
        type="text"
        placeholder="Give Prescription"
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleSend}>Send</button>
    </>
  );
};

export default PrescriptionPageDoc;
