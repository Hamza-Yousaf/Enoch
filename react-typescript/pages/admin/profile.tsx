import React from "react";
import dynamic from "next/dynamic";
const AdminProfile = dynamic(() => import("../../Admin/Components/OnboardingJourney/Profile"));

const profile = () => {
  return <AdminProfile />;
};

export default profile;
