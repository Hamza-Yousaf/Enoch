import React, { useState, useEffect } from "react";
import FollowList from "./FollowList";

const FollowContainer: React.FC<{}> = ({ }) => {
  return (
    <div className="follow-Suggestions-people-list-sect">
      <h3>Follow the people around the world you may know</h3>
      <FollowList />
    </div>
  );
};

export default FollowContainer;
