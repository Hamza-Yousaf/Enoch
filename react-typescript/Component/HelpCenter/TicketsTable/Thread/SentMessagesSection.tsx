import React, { useState } from "react";
import dynamic from "next/dynamic";
const MessageTextArea = dynamic(() => import("./MessageTextArea"));
const RecieverMessage = dynamic(() => import("./RecieverMessage"));
const SenderMessage = dynamic(() => import("./SenderMessage"));


interface Props {
  messages: any;
  subject: string;
  userThread: any;
  usersInvolved: any;
  setUsersInvolved: any;
}

const SentMessagesSection: React.FC<Props> = ({
  messages,
  subject,
  usersInvolved,
  setUsersInvolved,
}) => {
  const [threadMessages, setThreadMessages] = useState(messages);
  return (
    <div className="tableRow-collapse-block-lft">
      <h3>{subject}</h3>
      <div className="tableRow-collapse-chat-block">
        {threadMessages?.map((message: any, key: any) => {
          if (message.type === "receiver") {
            return (
              <RecieverMessage
                key={key}
                message={message.message}
                date={message.date}
              />
            );
          } else if (message.type === "sender") {
            return <SenderMessage key={key} />;
          }
        })}
      </div>
      <MessageTextArea
        threadMessages={threadMessages}
        setThreadMessages={setThreadMessages}
        usersInvolved={usersInvolved}
        setUsersInvolved={setUsersInvolved}
      />
    </div>
  );
};

export default SentMessagesSection;
