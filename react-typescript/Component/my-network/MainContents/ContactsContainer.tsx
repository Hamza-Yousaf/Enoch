import React from "react";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import FollowTab from "./FollowTab";
import FollowDecsp from "./FollowDecsp";
import ContactsBtn from "./ContactsBtn";
import ContactsContent from "./ContactsContent";

const ContactsContainer = () => {
  return (
    <>
      <FollowTab />
      <FollowDecsp />
      <ContactsBtn />
      <ContactsContent />
    </>
  );
};

export default withApollo(ContactsContainer, { getDataFromTree });
