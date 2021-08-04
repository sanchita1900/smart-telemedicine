import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PatientNavbar from "../../../PatientDashboard/PatientNavbar/PatientNavbar";
import { listMessageApi, sendProblemApi } from "../../../../api";

const Prescribe = () => {
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
    await sendProblemApi(id, input);
    setInput(" ");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <PatientNavbar />
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
        placeholder="Send Problem"
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleSend}>Send</button>
    </>
  );
};

export default Prescribe;
