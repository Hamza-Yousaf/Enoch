import React from "react";

const IncompleteProfile = () => {
  return (
    <div className="Complete-profile-progress-sect">
      <div className="Complete-profile-DP">
        <img
          src="/images/Complete-profile-DP.png"
          alt="User-DP"
          className="img-fluid"
        />
      </div>
      <div className="Complete-profile-progress-userName">
        <h1>Robert Rose</h1>
        <h2>Chief Technology Officer</h2>
        <div className="Complete-profile-progress-Bar">
          <div className="Complete-profile-progress-line"></div>
        </div>
        <h3>14% Complete</h3>
      </div>
      <button>
        <a href="#">Edit Profile</a>
      </button>
      <h4>Complete your profile</h4>
      <p>A Completed profile is 71% more likely to be views by a recruiter.</p>
    </div>
  );
};

export default IncompleteProfile;
