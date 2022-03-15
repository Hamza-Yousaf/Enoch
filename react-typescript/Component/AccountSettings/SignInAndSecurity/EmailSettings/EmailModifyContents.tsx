import React, { useState } from "react";
import dynamic from "next/dynamic";
const SixDigitVerificationInput = dynamic(() => import("../../Inputs/SixDigitVerificationInput"));
import { verificationInputdata } from "../../../utilsData/DashBoardDetailsData";
const AddEmail = dynamic(() => import("./AddEmail"));
const EmailsView = dynamic(() => import("./EmailsView"));
interface Props {
  emailRemovalSuccess: boolean;
  setEmailRemovalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailModifyContents: React.FC<Props> = ({
  emailRemovalSuccess,
  setEmailRemovalSuccess,
}) => {
  const [expandDetails, setExpandDetails] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [changeButtonBg, setChangeButtonBg] = useState(false);
  const [changeConfirmButtonBg, setChangeConfirmButtonBg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tokenVerified, setTokenVerified] = useState(false);
  const [userEmails, setUserEmails] = useState({
    primaryEmail: "r.rose@gmail.com",
    secondaryEmail: "",
  });

  const toggleExpand = (): void => {
    setExpandDetails(!expandDetails);
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
          <h5>Email addresses</h5>
          <p>Add or remove email addresses on your account </p>
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
          <p>1 Email address</p>
        </div>
        {!tokenVerified ? (
          <AddEmail
            showEmailForm={showEmailForm}
            changeButtonBg={changeButtonBg}
            showModal={showModal}
            verificationInputData={verificationInputdata}
            setChangeConfirmButtonBg={setChangeConfirmButtonBg}
            changeConfirmButtonBg={changeConfirmButtonBg}
            setShowEmailForm={setShowEmailForm}
            setChangeButtonBg={setChangeButtonBg}
            setShowModal={setShowModal}
            tokenVerified={tokenVerified}
            setTokenVerified={setTokenVerified}
            userEmails={userEmails}
            setUserEmails={setUserEmails}
          />
        ) : (
          <EmailsView
            emailRemovalSuccess={emailRemovalSuccess}
            setEmailRemovalSuccess={setEmailRemovalSuccess}
            userEmails={userEmails}
            setUserEmails={setUserEmails}
          />
        )}
      </div>
    </div>
  );
};

export default EmailModifyContents;
