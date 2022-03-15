import React from "react";
import dynamic from "next/dynamic";
const AddNewUserModal = dynamic(() => import("./AddNewUserModal"));
const EmailSignInModal = dynamic(() => import("./EmailSignInModal"));
const MembersTable = dynamic(() => import("./MembersTable"));
const NewUserAddedModal = dynamic(() => import("./NewUserAddedModal"));

const UsersList = () => {
  return (
    <>
      <AddNewUserModal />
      <NewUserAddedModal />
      <EmailSignInModal />
      <MembersTable />
    </>
  );
};

export default UsersList;
