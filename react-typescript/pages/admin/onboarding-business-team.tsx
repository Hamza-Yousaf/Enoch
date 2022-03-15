import React from "react";
import dynamic from "next/dynamic";
const OnboardingBusinessTeam = dynamic(() => import("../../Admin/Components/OnboardingBusinessTeam"));

const OnBoardingBusinessTeam = () => {
  return <OnboardingBusinessTeam />;
};

export default OnBoardingBusinessTeam;
