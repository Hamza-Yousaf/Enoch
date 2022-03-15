import React, { useState } from "react";
import { LaunchpadProps } from "../AdminLaunchPad";
import dynamic from "next/dynamic";
const NoUsersDispaly = dynamic(() => import("./NoUsersDispalay"));
const PlatformSelectInput = dynamic(() => import("./PlatformSelectInput"));
const UsersList = dynamic(() => import("./UsersList"));

interface AddUserProps extends LaunchpadProps {
  users: { name: string; email: string; role: string }[];
  setUsers: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; role: string }[]>
  >;
}

const AddUser: React.FC<AddUserProps> = ({
  setShowAddUser,
  setShowConsoleHomePage,
  setShowLaunchpad,
  users,
  setUsers,
}) => {
  return (
    <div className="ezl-dashboard-container">
      <div className="no-team-block-hd">
        <PlatformSelectInput />
      </div>
      {users.length > 0 ? <UsersList /> : <NoUsersDispaly />}
    </div>
  );
};

export default AddUser;
