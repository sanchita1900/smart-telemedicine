import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { listMessageApi } from "../../api";
import "./ChatBox.css";

const ChatBox = () => {
  const [message, setMessages] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const populateMessages = async () => {
      const data = await listMessageApi(id);
      console.log(data);
      setMessages(data.relation);
    };
    populateMessages();
  }, []);

  useEffect(() => {
    console.log(message);
  }, [message]);
  return (
    <>
      <div className="chat_box">
        {message
          ? message.map((m) => (
              <div className={`message ${m.sender}`}>
                <span>{m.message}</span>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default ChatBox;
