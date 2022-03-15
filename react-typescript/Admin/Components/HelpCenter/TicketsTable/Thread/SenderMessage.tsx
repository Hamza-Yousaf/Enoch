import React, { useState } from "react";
import dynamic from "next/dynamic";
const MessageOptions = dynamic(() => import("./MessageOptions"));

const SenderMessage = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="chat-block-sendr-parent">
      <div className="chat-block-sendr-block">
        <div className="chat-block-sendr">
          <div className="chat-block-dot">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowOptions(!showOptions)}
            >
              <img src="/images/dots-w.png" />
            </span>
            <MessageOptions
              message={
                <>
                  <p>@Robertrose </p>
                  <p>Thank you, I will include KYC desk</p>
                  <p>Thanks ,</p>
                </>
              }
              showOptions={showOptions}
              setShowOptions={setShowOptions}
            />
          </div>
          <div className="chat-block-h">
            <p>@Robertrose </p>
            <p>Thank you, I will include KYC desk</p>
            <p>Thanks ,</p>
          </div>
          <h4>Regina Copper , Support Desk</h4>
        </div>
        <div className="chat-block-date">Yesterday</div>
      </div>
      <div className="chat-block-user-img">
        <img src="/images/chat-user.png" className="img-fluid" alt="user" />
      </div>
    </div>
  );
};

export default SenderMessage;
