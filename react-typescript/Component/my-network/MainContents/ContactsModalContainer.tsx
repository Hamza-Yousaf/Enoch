import React, { useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";
import ContactsModal1 from "./ContactsModal1";
import ContactsModal2 from "./ContactsModal2";
import ContactsModal3 from "./ContactsModal3";

const ContactsModalContainer = () => {
  return (
    <>
      <ContactsModal1 />
      <ContactsModal2 />
      <ContactsModal3 />
    </>
  );
};

export default withApollo(ContactsModalContainer, { getDataFromTree });
