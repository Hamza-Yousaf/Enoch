import React, { useState } from "react";
import dynamic from "next/dynamic";
const PasswordRequestModal = dynamic(() => import("./PasswordRequestModal"));
const EmailRemoveDeniedAlertModal = dynamic(() => import("./EmailRemoveDeniedAlertModal"));

interface EmailsViewProps {
  userEmails: {
    primaryEmail: string;
    secondaryEmail: string;
  };
  setUserEmails: any;
  emailRemovalSuccess: boolean;
  setEmailRemovalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailsView: React.FC<EmailsViewProps> = ({
  userEmails,
  setUserEmails,
  emailRemovalSuccess,
  setEmailRemovalSuccess,
}) => {
  const [showPasswordRequest, setShowPasswordRequest] = useState(false);
  const [password, setPassword] = useState("");
  const [removalDenied, setRemovalDenied] = useState(false);
  const [showNotAllowedModal, setShowNotAllowedModal] = useState(false);

  const checkRemovalEligibility = (email: string) => {
    if (email === userEmails.secondaryEmail && email !== undefined) {
      setShowPasswordRequest(true);
    } else if (email === userEmails.primaryEmail || email === undefined) {
      setShowNotAllowedModal(true);
      setRemovalDenied(true);
    }
  };

  const verifyPasswordAndRemove = () => {
    setShowPasswordRequest(false);
    setUserEmails({
      primaryEmail: userEmails.primaryEmail,
    });
    setEmailRemovalSuccess(true);
  };
  const makeEmailPrimary = () => {
    setUserEmails({
      primaryEmail: userEmails.secondaryEmail,
      secondaryEmail: userEmails.primaryEmail,
    });
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
              <span style={{ color: "#2bbd54" }}>Primary </span>
            </span>
            <span className="enoch-setting-remove">
              <span
                onClick={() => {
                  checkRemovalEligibility(userEmails.secondaryEmail);
                }}
                style={{ cursor: "pointer" }}
              >
                rEMOVE
              </span>
            </span>
          </div>
        </div>
        {userEmails.secondaryEmail ? (
          <div className="accordion-content-emailadd-hd mt-2 pt-1 border-bottom-0 pb-0">
            <div className="accordion-content-emailadd-hd-lft">
              {userEmails.secondaryEmail}
            </div>
            <div className="accordion-content-emailadd-hd-lft-right">
              <span className="enoch-setting-primary enoch-setting-remove">
                <a onClick={makeEmailPrimary} href="#">
                  mAKE IT PRIMARY
                </a>
              </span>
              <span
                onClick={() =>
                  checkRemovalEligibility(userEmails.secondaryEmail)
                }
                className="enoch-setting-remove"
              >
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="setting-verify-modal"
                >
                  rEMOVE
                </a>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
        {showPasswordRequest ? (
          <PasswordRequestModal
            showPasswordRequest={showPasswordRequest}
            setShowPasswordRequest={setShowPasswordRequest}
            password={password}
            setPassword={setPassword}
            verifyPasswordAndRemove={verifyPasswordAndRemove}
          />
        ) : (
          ""
        )}
        {removalDenied ? (
          <EmailRemoveDeniedAlertModal
            showNotAllowedModal={showNotAllowedModal}
            setShowNotAllowedModal={setShowNotAllowedModal}
            message={null}
            title={null}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EmailsView;
