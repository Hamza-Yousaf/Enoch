import React from "react";
import dynamic from "next/dynamic";
const SignIn = dynamic(() => import("../../Admin/Components/OnboardingJourney/SignIn"));

const OnboardingJourneyPage = () => {
  return <SignIn />;
};

export default OnboardingJourneyPage;
