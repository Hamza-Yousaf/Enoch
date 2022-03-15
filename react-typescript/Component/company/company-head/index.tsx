import React, { useState } from "react";


const CompanyHead: React.FC = () => {
  return (
    <>
      <div className="company-creating-head">
        <div className="company-hd-img">
          <img src="/images/company-head.png" className="img-fluid" alt="company" />
          <div className="company-user-pic"><img src="/images/company-user.png" className="img-fluid" alt="user" /></div>
          <div className="company-user-edit"><img src="/images/company-edit.png" className="img-fluid" alt="user" /></div>
        </div>
        <div className="company-folloer-sect">
          <div className="company-folloer-sect-lft">
            <h3>88 mph <span>25 followers </span></h3>
            <p>Complete actions to unlock new features along the way. On average, completed pages get 30% more traffic. Learn more</p>
          </div>
          <div className="company-folloer-sect-right">
            <p>Created in Aug 16, 2021</p>
            <div><button className="company-add-bttn">Add a button</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyHead;
