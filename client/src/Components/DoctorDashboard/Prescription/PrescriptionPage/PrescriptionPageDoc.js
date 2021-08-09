import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorNavbar from "../../DoctorNavbar/DoctorNavbar";
import { listMessageApi, sendPrescriptionApi } from "../../../../api";
import ChatBox from "../../../ChatBox/ChatBox";

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
    window.location.reload();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <DoctorNavbar />
      <div className="chatboxmain-container">
        <div className="chatbox-container">
          <div className="chat">
            <ChatBox />
          </div>
          {/* {message.length
        ? message.map((msg, i) => {
            return (
              <div key={i}>
                <div className={msg.sender === 0 ? "doctor" : "patient"}></div>
              </div>
            );
          })
        : null} */}
          <div className="chatinput">
            <input
              type="text"
              placeholder="Give Prescription"
              onChange={handleChange}
              value={input}
            />
            <button onClick={handleSend}>Send Prescription</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescriptionPageDoc;
