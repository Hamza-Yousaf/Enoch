import Head from "next/head";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const AdminHelpCenter = dynamic(() => import("../../../Admin/Components/HelpCenter/index"));

const HelpCenterAdminPage = () => {
  return (
    <Fragment>
      <Head>
        <title>admin help center</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <AdminHelpCenter currentMessageTab="INBOX" />
    </Fragment>
  );
};

export default HelpCenterAdminPage;
