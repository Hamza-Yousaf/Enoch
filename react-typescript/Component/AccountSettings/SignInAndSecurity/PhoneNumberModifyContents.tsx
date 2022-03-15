import React, { useState } from "react";
import { verificationInputdata } from "../../utilsData/DashBoardDetailsData";
import SixDigitVerificationInput from "../Inputs/SixDigitVerificationInput";
import dynamic from "next/dynamic";
const AddPhoneView = dynamic(() => import("./PhoneNumberSettings/AddPhoneView"));
const AddPhoneFormView = dynamic(() => import("./PhoneNumberSettings/AddPhoneFormView"));
const AllPhonesView = dynamic(() => import("./PhoneNumberSettings/AllPhonesView"));
const EmailRemoveDeniedAlertModal = dynamic(() => import("./EmailSettings/EmailRemoveDeniedAlertModal"));

const PhoneNumberModifyContents = () => {
  const [expandDetails, setExpandDetails] = useState(false);
  const [showPhoneAddForm, setShowPhoneAddForm] = useState(false);
  const [showPhoneAddText, setShowPhoneAddText] = useState(true);
  const [showAllPhones, setShowAllPhones] = useState(false);
  const [changeButtonBg, setChangeButtonBg] = useState(false);
  const [changeConfirmButtonBg, setChangeConfirmButtonBg] = useState(false);
  const [changeDoneButtonBg, setChangeDoneButtonBg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showPasswordModal, setShowPassWordModal] = useState(false);
  const [userPhoneNumbers, setUserPhoneNumbers] = useState({
    primaryNumber: "DE +49 7550*****76",
    secondaryNumber: "",
  });
  const [emailInput, setEmailInput] = useState("");
  const [removalDenied, setRemovalDenied] = useState(false);
  const [showNotAllowedModal, setShowNotAllowedModal] = useState(false);
  const [showPasswordRequest, setShowPasswordRequest] = useState(false);
  const [password, setPassword] = useState("");

  const checkRemovalEligibility = (phoneNumber: string) => {
    if (phoneNumber === userPhoneNumbers.primaryNumber) {
      setRemovalDenied(true);
      setShowNotAllowedModal(true);
    } else if (phoneNumber === userPhoneNumbers.secondaryNumber) {
      setShowPasswordRequest(true);
    }
  };

  const toggleExpand = (): void => {
    setExpandDetails(!expandDetails);
  };
  const handleOTPModalShow = (e: any) => {
    e.preventDefault();
    setShowPassWordModal(false);
    setShowOTPModal(true);
  };
  const handlePasswordModalShow = () => {
    setShowOTPModal(false);
    setShowModal(true);
    setShowPassWordModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setShowPassWordModal(false);
    setShowOTPModal(false);
  };

  const addPhone = () => {
    setUserPhoneNumbers({
      ...userPhoneNumbers,
      secondaryNumber: emailInput,
    });
    setShowAllPhones(true);
    setShowPhoneAddForm(false);
    setShowPhoneAddText(false);
    setShowModal(false);
  };

  const makePrimary = () => {
    setUserPhoneNumbers({
      primaryNumber: userPhoneNumbers.secondaryNumber,
      secondaryNumber: userPhoneNumbers.primaryNumber,
    });
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
          <h5>Phone numbers</h5>
          <p>Add a phone number in case you have trouble signing in </p>
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
          <p>1 phone number</p>
        </div>
        <div className="accordion-content-blck">
          <div className="pho-no-form-sect">
            <div className="phn-no-remove-sect">
              <div className="phn-no-remove-left">
                <h1>{userPhoneNumbers.primaryNumber} </h1>
              </div>
              <div className="phn-no-remove-right">
                <a href="#">Primary</a>
                <span
                  onClick={() =>
                    checkRemovalEligibility(userPhoneNumbers.primaryNumber)
                  }
                  className="remove"
                >
                  remove
                </span>
              </div>
            </div>

            <AddPhoneFormView
              showPhoneAddForm={showPhoneAddForm}
              changeButtonBg={changeButtonBg}
              setChangeButtonBg={setChangeButtonBg}
              handlePasswordModalShow={handlePasswordModalShow}
              userPhoneNumbers={userPhoneNumbers}
              setUsePhoneNumbers={setUserPhoneNumbers}
              emailInput={emailInput}
              setEmailInput={setEmailInput}
            />

            {userPhoneNumbers.secondaryNumber.length > 0 ? (
              <AllPhonesView
                userPhoneNumbers={userPhoneNumbers}
                setUserPhoneNumbers={setUserPhoneNumbers}
                makePrimary={makePrimary}
                showPasswordRequest={showPasswordRequest}
                setShowPasswordRequest={setShowPasswordRequest}
                showNotAllowedModal={showNotAllowedModal}
                setShowNotAllowedModal={setShowNotAllowedModal}
                setRemovalDenied={setRemovalDenied}
                password={password}
                setPassword={setPassword}
                showPhoneAddText={showPhoneAddText}
                setShowPhoneAddText={setShowPhoneAddText}
              />
            ) : (
              <AddPhoneView
                showPhoneAddText={showPhoneAddText}
                setShowPhoneAddText={setShowPhoneAddText}
                setShowPhoneAddForm={setShowPhoneAddForm}
                showPhoneAddForm={showPhoneAddForm}
              />
            )}

            <div className="enoch-setting-modal-block PhnNo-Add-Modal">
              <div className="container">
                <div className={showModal ? "modal fade open" : "modal fade"}>
                  <div className="modal-dialog">
                    <div
                      style={
                        showPasswordModal
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      className="modal-content phnNo-Add-pass-modal"
                    >
                      <div className="modal-header">
                        <h4 className="modal-title">Provide your Password</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          <img
                            src="images/sCross.png"
                            alt="close"
                            className="img-fluid"
                          />
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <label>
                            For your security, Enter your Password to make this
                            change.
                          </label>
                          <div className="form-input-and-btn">
                            <input
                              type="password"
                              placeholder="Password"
                              id="Num_remove_pass-input"
                              onInput={() => setChangeDoneButtonBg(true)}
                            />
                            <div className="pass-trigger-hide">
                              <img
                                src="images/eye.png"
                                alt="Eye"
                                className="img-fluid"
                              />
                            </div>
                            <div className="pass-trigger-show">
                              <img
                                src="images/eye2.png"
                                alt="Eye"
                                className="img-fluid"
                              />
                            </div>
                            <button
                              className={
                                changeDoneButtonBg
                                  ? "btn  btn-active phn-no-otp-show"
                                  : "btn btn-disable  btn-active phn-no-otp-show"
                              }
                              onClick={handleOTPModalShow}
                            >
                              <span style={{ cursor: "pointer" }}>Done</span>
                            </button>
                          </div>
                        </form>
                        <div className="forget-pass-sect">
                          <a href="#">Forgot Password?</a>
                        </div>
                      </div>
                    </div>

                    <div
                      style={
                        showOTPModal
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      className="modal-content modal-content-OTP"
                    >
                      <span className="close">
                        <img
                          src="images/sCross.png"
                          alt="close"
                          className="img-fluid"
                          data-dismiss="modal"
                        />
                      </span>
                      <div className="setting-no-header">Verification Code</div>
                      <div className="setting-change-number-nxt ">
                        <p>
                          Enter the Verification Code we just sent to the Number
                          ending in 24.
                        </p>
                        <div className="setting-number-blocks">
                          <div className="setting-key setting-num-key addPhnNum-key m-0">
                            <ul className="fullwith">
                              {verificationInputdata.map((data, key) => {
                                return (
                                  <SixDigitVerificationInput
                                    key={key}
                                    setChangeConfirmButtonBg={
                                      setChangeConfirmButtonBg
                                    }
                                    index={key}
                                  />
                                );
                              })}
                            </ul>
                          </div>

                          <div className="d-flex setting-confirm-btn">
                            <a
                              href="#"
                              className={
                                changeConfirmButtonBg
                                  ? "btn bttn-primary "
                                  : "btn bttn-primary bttn-disable"
                              }
                              id="phn_veri_Confirm"
                              onClick={addPhone}
                            >
                              Confirm
                            </a>
                          </div>
                        </div>
                        <div className="modal-content-OTP-resend-text">
                          <h1>
                            Didn’t receive code yet? <a href="#">Resend Code</a>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {removalDenied ? (
              <EmailRemoveDeniedAlertModal
                showNotAllowedModal={showNotAllowedModal}
                setShowNotAllowedModal={setShowNotAllowedModal}
                message={` You need to make the second phone Number primary , before
            removing this number `}
                title={"Primary Number cannot be removed"}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberModifyContents;
