import React, { useState } from "react";
import Link from "next/link";
const LeftSideBar: React.FC = () => {
  return (
    <>
      <div className="home-post-lft company-manage-lft">
        <div className="company-manage-page">
          <h3>Manage Page</h3>
          <ul>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon1.png" className="img-fluid mr-2" alt="Home" /></span>Home</a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon2.png" className="img-fluid mr-2" alt="News feed" /></span>News feed</a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon3.png" className="img-fluid mr-2" alt="Invite followers" /></span>Invite followers</a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon4.png" className="img-fluid mr-2" alt="Manage groups" /></span>Manage groups</a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon5.png" className="img-fluid mr-2" alt="Manage shop" /></span>Manage shop  </a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon6.png" className="img-fluid mr-2" alt="Manage Jobs" /></span>Manage Jobs</a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon7.png" className="img-fluid mr-2" alt="Insights" /></span>Insights</a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon8.png" className="img-fluid mr-2" alt="Publishing Tools" /></span>Publishing Tools</a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon9.png" className="img-fluid mr-2" alt="Ad center" /></span>Ad center</a></li>
            <li className="manage-item-disabled"><a href="#"><span><img src="/images/company-icon10.png" className="img-fluid mr-2" alt="Page Quality" /></span>Page Quality</a></li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon11.png" className="img-fluid mr-2" alt="Ad center" /></span>
              <p>Edit page Info <span>5 new</span></p>
            </a>
            </li>
            <li><a href="#"><span className="mr-2"><img src="/images/company-icon12.png" className="img-fluid mr-2" alt="Ad center" /></span>
              <p>Setting<span>5 new</span></p>
            </a>
            </li>
          </ul>
        </div>
        <div className="manage-pomote">
          <div className="manage-pomote-hd"><img src="/images/w-flag.png" className="img-fluid mr-2" alt="flag" />Promote</div>
          <p>You can subscribe to one of the Premium+ licenses (3 month or 1 year variants) to promote company page. </p>
          <div className="manage-billing-ing">
            <ul>
              <li className="billing-info-txt"><a href="#">Billing information <img src="/images/mInfo.png" className="img-fluid ml-1" alt="info" /></a></li>
              <li><a href="#" className="manage-purple-clr">Payment method</a></li>
              <li><a href="#" className="manage-purple-clr">Purchase history</a></li>
            </ul>
          </div>
          <div className="manage-ques">
            <span>Questions?</span> <span className="ml-1"><a href="#"> Contact Support</a> | <a href="#">Help Center</a></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
