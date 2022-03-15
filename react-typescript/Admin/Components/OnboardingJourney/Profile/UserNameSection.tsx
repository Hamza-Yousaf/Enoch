import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";
import dynamic from "next/dynamic";
const PhoneAuthModal = dynamic(() => import("../PhoneAuthModal"));

interface Props {
  setShowPhoneAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserNameSection: React.FC<Props> = ({ setShowPhoneAuthModal }) => {
  const dispatch = useDispatch();
  const { current_admin_2fa_method } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const current_admin_2fa_method_value = useSelector(
    (state: State) => state.current_admin_2fa_method
  );

  const togglePhoneAuthModal = () => {
    setShowPhoneAuthModal(!PhoneAuthModal);
  };
  return (
    <div className="col-lg-4 custom-col-lg-4 pl-lg-0 mb-4">
      <div className="Admin-Profile-body-left-cell">
        <div className="admin-profile-sect">
          <div className="KYC-profile-picture admin-profile-picture">
            <div
              className="
                          KYC-profile-picture-img
                          admin-profile-picture-img
                        "
            >
              <img
                src="/images/admin-profile-pic.png"
                alt="profile-picture"
                className="img-fluid"
              />
            </div>
            <input type="file" className="my_file update-profile" />
          </div>

          <div className="admin-name-And-Email-and-btn">
            <h1>Regina Cooper</h1>
            <h2>reginacooper01@gmail.com</h2>
            <button>
              <a href="#">Active</a>
            </button>
            <h3>Last sign in: 40 minutes agoCreated: June,12 2021</h3>
          </div>
        </div>
        <div className="Organizational-Unit-sect">
          <h1>Organizational Unit</h1>
          <h2>Encoh.app</h2>
        </div>
        <div className="RESEND-SIGN-INFO-list">
          <ul className="pt-3">
            <li>RESET PASSWORD</li>
            <li
              className="pb-0 c-pointer"
              data-toggle="modal"
              data-target="#2Fa_Modal"
              onClick={() => setShowPhoneAuthModal(true)}
            >
              CHANGE 2FA METHOD
            </li>
            <li className="disable Authenticator-enabled">
              {current_admin_2fa_method_value}
              <button>
                <a href="#">enabled</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserNameSection;
