import React, { FormEvent, useState } from "react";
import dynamic from "next/dynamic";
const SixDigitVerificationInput = dynamic(() => import("../../Inputs/SixDigitVerificationInput"));
const EmailRemoveDeniedAlertModal = dynamic(() => import("./EmailRemoveDeniedAlertModal"));
const PasswordRequestModal = dynamic(() => import("./PasswordRequestModal"));

interface AddEmailProps {
  showEmailForm: boolean;
  changeButtonBg: boolean;
  showModal: boolean;
  verificationInputData: string[];
  setChangeConfirmButtonBg: React.Dispatch<React.SetStateAction<boolean>>;
  changeConfirmButtonBg: boolean;
  setShowEmailForm: React.Dispatch<React.SetStateAction<boolean>>;
  setChangeButtonBg: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  tokenVerified: boolean;
  setTokenVerified: React.Dispatch<React.SetStateAction<boolean>>;
  userEmails: {
    primaryEmail: string;
    secondaryEmail: string;
  };
  setUserEmails: React.Dispatch<
    React.SetStateAction<{
      primaryEmail: string;
      secondaryEmail: string;
    }>
  >;
}

const AddEmail: React.FC<AddEmailProps> = ({
  showEmailForm,
  changeButtonBg,
  showModal,
  verificationInputData,
  setChangeConfirmButtonBg,
  changeConfirmButtonBg,
  setShowEmailForm,
  setChangeButtonBg,
  setShowModal,
  setTokenVerified,
  userEmails,
  setUserEmails,
}) => {
  const [removalDenied, setRemovalDenied] = useState(false);
  const [showNotAllowedModal, setShowNotAllowedModal] = useState(false);
  const [showPasswordRequest, setShowPasswordRequest] = useState(false);
  const [password, setPassword] = useState("");

  const verifyToken = () => {
    setTokenVerified(true);
    setShowModal(false);
  };
  const handleNewEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmails({
      ...userEmails,
      secondaryEmail: e.target.value,
    });
  };

  const checkRemovalEligibility = (email: string) => {
    if (email === userEmails.primaryEmail) {
      setRemovalDenied(true);
      setShowNotAllowedModal(true);
    } else if (email === userEmails.secondaryEmail) {
      setShowPasswordRequest(true);
    }
  };

  return (
    <div className="accordion-content-blck">
      <div className="accordion-content-emailadd">
        <div className="accordion-content-emailadd-hd">
          <div className="accordion-content-emailadd-hd-lft">
            {userEmails.primaryEmail}
          </div>
          <div className="accordion-content-emailadd-hd-lft-right">
            <span className="enoch-setting-primary">
              <a href="#">Primary </a>
            </span>
            <span className="enoch-setting-remove">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => checkRemovalEligibility(userEmails.primaryEmail)}
              >
                rEMOVE
              </span>
            </span>
          </div>
        </div>
        <div
          className={
            showEmailForm
              ? "accordion-content-emailadd-more input-show"
              : "accordion-content-emailadd-more"
          }
          id="emailadd-more-id"
        >
          <div>
            <a
              href="#"
              className="emailadd-more-cls"
              onClick={() => setShowEmailForm(true)}
            >
              + Add Email Address
            </a>
          </div>
          <div className="addemail-input-form">
            <h3>Email Address</h3>
            <div className="addemail-input-txtbox">
              <input
                onInput={() => setChangeButtonBg(true)}
                type="text"
                placeholder="Add New"
                id="user_input1"
                value={userEmails.secondaryEmail}
                onChange={handleNewEmail}
              />
            </div>
            <div className="addEmail-bttns">
              <span className="mr-4">
                <a href="#" className="btn addemail-cancel-btn">
                  Cancel
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className={
                    changeButtonBg
                      ? "btn addemail-verify-btn"
                      : "btn addemail-verify-btn addemail-bttn-disable"
                  }
                  id="register"
                  data-toggle="modal"
                  data-target="setting-verify-modal"
                  onClick={() => setShowModal(true)}
                >
                  Send Verification
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="enoch-setting-modal-block">
          <div
            id="setting-verify-modal"
            className={showModal ? "modal fade open" : "modal fade"}
          >
            <div className="modal-content setting-change-number">
              <span className="close">
                <img
                  onClick={() => setShowModal(false)}
                  src="images/sCross.png"
                  alt="close"
                  className="img-fluid"
                  data-dismiss="modal"
                />
              </span>
              <div className="setting-no-header">Add new email </div>
              <div className="setting-change-number-nxt">
                <p>Enter the 6-digit code sent to your new email . </p>
                <div className="setting-number-blocks">
                  <div className="setting-key setting-num-key addnum-key m-0">
                    <ul className="fullwith">
                      {verificationInputData.map((item, key) => {
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
                      id="confirmkey"
                      onClick={verifyToken}
                    >
                      Confirm
                    </span>
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
            message={` You need to make the second email address primary , before
            removing this email `}
            title={"Primary Mail cannot be removed"}
          />
        ) : (
          ""
        )}
        {showPasswordRequest ? (
          <PasswordRequestModal
            showPasswordRequest={showPasswordRequest}
            setShowPasswordRequest={setShowPasswordRequest}
            password={null}
            setPassword={null}
            verifyPasswordAndRemove={null}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AddEmail;
