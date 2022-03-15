import React, { useState } from "react";
import Link from "next/link";

const UserMenu = () => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false)


  const handleDropdown = () => {
    setIsDropdown(!isDropdown)
  }
  return (
    <div className="ezl-user-ac">
      <div className="account-d dropdown">
        <div className="dropdown-buttn" onClick={handleDropdown}>
          <span className="popup">
            <div className="user-img">
              <img
                src="/images/user-ReginaCooper.png"
                alt="user image"
                className="img-fluid"
              />
            </div>
          </span>
          {isDropdown && <div className="popupbox dropdown-menu show" id="myPopup">
            <ul className="">
              <li>
                <div className="enoch-usr-prof">
                  <span>
                    <img
                      src="/images/user-pro-pic.png"
                      className="img-fluid mr-1"
                      alt="profile- pic"
                    />
                    @Hulk66
                  </span>
                  <span>
                    <a href="#">Change</a>
                  </span>
                </div>
              </li>
              <li>
                <div className="enoch-usr-status-block">
                  <div className="usr-status-left">Online Status</div>
                  <div className="usr-status-right">
                    <div className="post-switch">
                      <label className="postswitch">
                        <input type="checkbox" checked />
                        <span className="post-slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="enoch-usr-status-block">
                  <a href="#">Become Creator </a>
                </div>
                <div className="enoch-usr-status-block mb-0">
                  <a href="#" className="enoch-blue-clr">
                    Your Public Profile
                  </a>
                </div>
              </li>
              <li>
                <div className="enoch-usr-status-block">
                  <a href="#">Setting </a>
                </div>
                <div className="enoch-usr-status-block">
                  <a href="#">Help Center</a>
                </div>
                <div className="enoch-usr-status-block mb-0">
                  <a href="#" className="orange-clr">
                    Upgrade to Premium
                  </a>
                </div>
              </li>
              <li className="mt-4">
                <div className="enoch-usr-status-block mb-0">
                  Wallet
                  <span>
                    <a href="#" className="btn freebonus-btn">
                      $400
                    </a>
                  </span>
                </div>
              </li>
              <li className="mt-4 pb-0">
                <div className="enoch-usr-status-block mb-0 manage-ac">
                  <h3>Manage</h3>
                  <ul>
                    <li>
                      <div className="manage-ac-block">
                        <span>Comapny: </span>
                        <span className="ml-1">
                          <img
                            src="images/man-icon1.png"
                            className="img-fluid mr-1"
                            alt="user"
                          />
                          88mph
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="manage-ac-block">
                        <span>Comapny: </span>
                        <span className="ml-1">
                          <img
                            src="images/man-icon2.png"
                            className="img-fluid mr-1"
                            alt="user"
                          />
                          CryptoBlue
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-0 pb-0">
                <div className="enoch-usr-status-block mb-0">
                  <a href="#" className="post-red-clr">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
