import React from "react";

interface Props {
  showUserSubMenu: boolean;
  setShowUserSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserSubMenu: React.FC<Props> = ({
  showUserSubMenu,
  setShowUserSubMenu,
}) => {
  return (
    <div
      className={
        showUserSubMenu
          ? "popupbox dropdown-menu show"
          : "popupbox dropdown-menu"
      }
      id="myPopup"
    >
      <ul className="">
        <li>
          <div className="enoch-usr-prof">
            <span>
              <img
                src="/images/user-pro-pic.png"
                className="img-fluid"
                alt="profile- pic"
              />
              EncchUser007
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
            <a href="#">Public Profile</a>
          </div>
          <div className="enoch-usr-status-block mb-0">
            <a href="#">User Settings</a>
          </div>
        </li>
        <li>
          <div className="enoch-usr-status-block">
            <a href="#">Billing</a>
          </div>
          <div className="enoch-usr-status-block">
            <a href="#">Help Center</a>
          </div>
          <div className="enoch-usr-status-block">
            <a href="#">Verify Account (KYC)</a>
          </div>
          <div className="enoch-usr-status-block mb-0">
            <a href="#" className="orange-clr">
              Upgrade to Premium
            </a>
          </div>
        </li>
        <li className="mt-4">
          <div className="enoch-usr-status-block mb-0">
            Free Bonus
            <span>
              <a href="#" className="btn freebonus-btn">
                $50/500 $Enoch
              </a>
            </span>
          </div>
        </li>
        <li className="mt-4">
          <div className="enoch-usr-status-block mb-0">
            <a href="#" data-toggle="modal" data-target="switch-user-modal">
              Switch Account
            </a>
          </div>
        </li>
        <li className="mt-4 mb-0 pb-0">
          <div className="enoch-usr-status-block mb-0">
            <a href="#" className="post-red-clr">
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserSubMenu;
