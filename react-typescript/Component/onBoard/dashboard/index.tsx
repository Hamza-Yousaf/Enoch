import React, { useState } from "react";

const BoardingDashboard: React.FC = () => {
  return (
    <>
      <div className="dApp-Your-Dashbaord-sect">
        <div className="dApp-Your-Dashbaord-heading">
          <h1>Your Dashbaord</h1>
          <h2>Private to you</h2>
        </div>

        <div className="dApp-Your-Dashbaord-content">
          <div className="dApp-Your-Dashbaord-content-col">
            <h3>771</h3>
            <p>Who viewed your profile</p>
          </div>

          <div className="dApp-Your-Dashbaord-content-col">
            <h3>1,004</h3>
            <p>Post views</p>
          </div>

          <div className="dApp-Your-Dashbaord-content-col mb-0">
            <h3>379</h3>
            <p>Search appearances</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardingDashboard;
