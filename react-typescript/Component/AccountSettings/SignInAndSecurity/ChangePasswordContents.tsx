import React, { useState } from "react";
import { verificationInputdata } from "../../utilsData/DashBoardDetailsData";
import dynamic from "next/dynamic";
const SixDigitVerificationInput = dynamic(() => import("../Inputs/SixDigitVerificationInput"));

const ChangePasswordContents = () => {
  const [makeLinkActive, setMakeLinkActive] = useState(false);
  const [expandDetails, setExpandDetails] = useState(false);
  const [changeConfirmButtonBg, setChangeConfirmButtonBg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tokenProvided, setTokenProvided] = useState(false);
  const [newPassInput, setNewPassInput] = useState("");
  const [retypePassInput, setRetypePassInput] = useState("");
  const [requireAllDevices, setRequireAllDevices] = useState(true);

  const toggleExpand = (): void => {
    setExpandDetails(!expandDetails);
  };

  const handleRetypePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRetypePassInput(event.target.value);
  };

  const handleNewPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassInput(event?.target.value);
  };
  const handleRequireAllDevicesCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRequireAllDevices(!requireAllDevices);
  };

  const verifyToken = () => {
    setTokenProvided(true);
    setShowModal(false);
  };
  return (
    <div
      className={
        expandDetails
          ? "enoch-acount-detail acc-active-parent"
          : "enoch-acount-detail"
      }
    >
      <div className="enoch-acount-detail-block">
        <div className="enoch-acount-detail-lft">
          <h5>Change Password</h5>
          <p>Choose a unique password to protect your account</p>
        </div>
        <div
          className={
            expandDetails
              ? "enoch-acount-detail-right acc-active"
              : "enoch-acount-detail-right"
          }
        >
          <div className="enoch-acount-detail-bk">
            <span className="enoch-acount-view-btn">
              <span
                style={{ cursor: "pointer" }}
                onClick={toggleExpand}
                className="enoch-acount-view-cls enochaccordion-block"
              >
                Change
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={toggleExpand}
                className="enoch-acount-view-cls accordion-block-close"
              >
                close
              </span>
            </span>
          </div>
          <p>Last changed : 14 Feb, 2021</p>
        </div>
        {!tokenProvided ? (
          <div className="accordion-content-blck">
            <div className="password-input-form">
              <h3>Type your current password</h3>
              <div className="password-input-txtbox">
                <input
                  onInput={() => setMakeLinkActive(true)}
                  type="password"
                  placeholder=""
                  id="pass_input "
                />
              </div>
              <div className="password-bttns">
                <span onClick={() => setShowModal(true)}>
                  <a
                    href="#"
                    className={makeLinkActive ? "btn" : "btn disable-clr"}
                    id="disablekey"
                    data-toggle="modal"
                    data-target="setting-change-pass-modal"
                  >
                    Continue
                  </a>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="accordion-content-blck">
            <h2>Create a new password that is at least 8 characters long</h2>
            <form>
              <div className="password-input-form chnge-pass">
                <h3>Type your new password</h3>
                <div className="password-input-txtbox">
                  <input
                    value={newPassInput}
                    onChange={handleNewPass}
                    type="password"
                    placeholder="New Password"
                    id="changepass_input1"
                  />
                </div>
                <h3>Retype your new password</h3>
                <div className="password-input-txtbox">
                  <input
                    value={retypePassInput}
                    onChange={handleRetypePassword}
                    type="password"
                    placeholder="Password Again"
                    id="changepass_input2"
                  />
                </div>
                <div>
                  <label className="settingcheckbox-container">
                    Require all devices to sign in with new password
                    <input
                      type="checkbox"
                      checked={requireAllDevices}
                      id="changepass_input3"
                      onChange={handleRequireAllDevicesCheckbox}
                    />
                    <span className="settingcheckmark"></span>
                  </label>
                </div>
                <div className="addEmail-bttns mb-4">
                  <button
                    type="submit"
                    // className=
                    className={
                      newPassInput.length > 0 && retypePassInput.length > 0
                        ? "addemail-verify-btn custm-hw"
                        : "addemail-verify-btn addemail-bttn-disable custm-hw"
                    }
                    id="save"
                  >
                    Save
                  </button>
                </div>
                <p>
                  Review <a href="#">Services</a> you’ve authorized or
                  <a href="#">learn more</a> about our commitment to safety
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="enoch-setting-modal-block">
        <div
          id="setting-change-pass-modal"
          className={showModal ? "modal fade open" : "modal fade"}
        >
          <div className="modal-content setting-change-number">
            <span onClick={() => setShowModal(false)} className="close">
              <img
                src="images/sCross.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>
            <div className="setting-no-header">Change password</div>
            <div className="setting-change-number-nxt">
              <p className="mb-4">
                Enter the 6-digit code generated in your Google Authenticator
                App.
              </p>
              <div className="setting-number-blocks mb-2">
                <div className="setting-key setting-num-key num-key-pass m-0">
                  <ul className="fullwith">
                    {verificationInputdata.map((data, key) => {
                      return (
                        <SixDigitVerificationInput
                          key={key}
                          setChangeConfirmButtonBg={setChangeConfirmButtonBg}
                          index={key}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="d-flex setting-confirm-btn">
                  <span
                    className={
                      changeConfirmButtonBg
                        ? "btn bttn-primary"
                        : "btn bttn-primary bttn-disable"
                    }
                    id="confirmpasskey"
                    onClick={verifyToken}
                  >
                    Confirm
                  </span>
                </div>
              </div>
              <p className="seting-md-bttm mb-0 pt-1">
                Don’t have Authenticator App.
                <a href="#">Learn More and Follow the Steps</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordContents;
