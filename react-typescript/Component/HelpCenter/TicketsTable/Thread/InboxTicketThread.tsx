import React, { useState } from "react";
import dynamic from "next/dynamic";
const MessagesSection = dynamic(() => import("./MessagesSection"));
const UsersSection = dynamic(() => import("./UsersSection"));

interface Props {
  messages: any;
  subject: string;
  userThread: any;
}

const InboxTicketThread: React.FC<Props> = ({
  messages,
  subject,
  userThread,
}) => {
  const [usersInvolved, setUsersInvolved] = useState(userThread);

  return (
    <div id="collapse-block2" className="tableRow-collapse-block">
      <MessagesSection
        userThread={null}
        messages={messages}
        subject={subject}
        usersInvolved={usersInvolved}
        setUsersInvolved={setUsersInvolved}
      />
      <UsersSection userThread={usersInvolved} />
    </div>
  );
};

export default InboxTicketThread;
