import React, { useState } from "react";


const RightSideBar: React.FC = () => {
  return (
    <>
      <div className="home-post-right">
        <div className="company-supercharge">
          <h3>Supercharge <br />Company page </h3>
          <p>Enoch helps your company page make a bunch of new followers in one go. Hand- picked thing to do with others who share your interests  it’s fun and easy.</p>
          <p><button className="company-invite-btn">INVITE</button></p>
          <div className="supercharge-unlock"><button className="company-unlock-btn">Unlock Premium+</button></div>
          <p className="supercharge-btm-txt">Subscribe to Premium+ Membership and receive extra in-game benefits to compliment your company page.</p>
        </div>
        <div className="company-userd-block">
          <h3>88 mph Groups </h3>
        </div>
        <div className="company-create-free">
          <h3>Create a free </h3>
          <ul>
            <li><span><img src="/images/company-icon13.png" className="img-fluid" alt="Live" /></span>Live</li>
            <li><span><img src="/images/company-icon14.png" className="img-fluid" alt="Events" /></span>Events</li>
            <li><span><img src="/images/company-icon15.png" className="img-fluid" alt="Job" /></span>Job</li>
            <li><span><img src="/images/company-icon16.png" className="img-fluid" alt="Offer" /></span>Offer</li>
            <li><span><img src="/images/company-icon17.png" className="img-fluid" alt="Ad" /></span>Ad</li>
          </ul>
          <div className="supercharge-unlock2"><button className="company-unlock-btn2">Unlock Premium+</button></div>
          <p>Save up to 35% by purchasing premium + in advance  </p>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
