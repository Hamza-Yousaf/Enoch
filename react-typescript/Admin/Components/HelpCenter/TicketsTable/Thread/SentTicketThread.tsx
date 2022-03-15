import React, { useState } from "react";
import dynamic from "next/dynamic";
const SentMessagesSection = dynamic(() => import("./SentMessagesSection"));
const UsersSection = dynamic(() => import("./UsersSection"));


interface Props {
  messages: any;
  subject: string;
  userThread: any;
}

const SentTicketThread: React.FC<Props> = ({
  messages,
  subject,
  userThread,
}) => {
  const [usersInvolved, setUsersInvolved] = useState(userThread);

  return (
    <div id="collapse-block2" className="tableRow-collapse-block">
      <SentMessagesSection
        messages={messages}
        subject={subject}
        usersInvolved={usersInvolved}
        setUsersInvolved={setUsersInvolved}
        userThread={null}
      />
      <UsersSection userThread={usersInvolved} />
    </div>
  );
};

export default SentTicketThread;
