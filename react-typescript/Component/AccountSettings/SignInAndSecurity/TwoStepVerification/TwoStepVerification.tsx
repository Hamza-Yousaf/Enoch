import React, { useState } from "react";
import dynamic from "next/dynamic";
const SecurityCodeModal = dynamic(() => import("./SecurityCodeModal"));
const AuthAppModal = dynamic(() => import("./AuthAppModal"));
const BackupMethodModal = dynamic(() => import("./BackupMethodModal"));
const CodesModal = dynamic(() => import("./CodesModal"));
const RegenerationModal = dynamic(() => import("./RegenerationModal"));

interface Props {
  showAuthCodes: boolean;
  setShowAuthCodes: React.Dispatch<React.SetStateAction<boolean>>;
}

const TwoStepVerification: React.FC<Props> = ({
  setShowAuthCodes,
  showAuthCodes,
}) => {
  const [expandDetails, setExpandDetails] = useState(false);
  const [changeConfirmButtonBg, setChangeConfirmButtonBg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [securityCodeValue, setSecurityCodeValue] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
  });
  const [showAuthAppModal, setShowAuthAppModal] = useState(false);
  const [combinedValue, setCombinedValue] = useState("");
  const [combinedAuthValue, setCombinedAuthValue] = useState("");
  const [googleAuthInputValues, setGoogleAuthInputValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
  });
  const [showBackupMethodModal, setShowBackupMethodModal] = useState(false);
  const [backupMethod, setBackupMethod] = useState("code");
  const [showCodesModal, setShowCodesModal] = useState(false);
  const [showRegerationModal, setShowRegerationModal] = useState(false);

  const toggleExpand = (): void => {
    setExpandDetails(!expandDetails);
  };

  const verifySecurityCode = () => {
    setShowAuthAppModal(true);
  };

  const verifyAuthCode = () => {
    setShowBackupMethodModal(true);
  };

  const setUpBackupMethod = () => {
    if (backupMethod === "code") {
      setShowBackupMethodModal(false);
      setShowAuthCodes(true);
    } else {
      setShowBackupMethodModal(false);
    }
  };

  const regenerateCodes = () => {
    setShowRegerationModal(false);
    setShowCodesModal(true);
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
          <h5>Two step verification</h5>
          <p>Activate this feature for enhanced account security </p>
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
          <p>on</p>
        </div>
        <div className="accordion-content-blck">
          <div className="setting-twostep-verification">
            <p>
              Verification codes will be sent to authenticator app at sign-in:
            </p>
            <h3>Via Authenticator app</h3>
            <p>Use your Authenticator Code at sign in </p>
            <div className="setting-twostep-content-blck">
              <div className="setting-twostep-content-lft">
                <h3>Backup method: Codes</h3>
                <p>You have 20 backup codes remaining.</p>
                <p>
                  <a onClick={() => setShowRegerationModal(true)} href="#">
                    Regenerate codes
                  </a>
                </p>
              </div>
              <div className="setting-twostep-content-right">
                {backupMethod === "code"
                  ? "Backup Code enabled"
                  : "SMS Code Enabled"}
              </div>
            </div>
            <div className="setting-twostep-content-blck">
              <div>
                <p
                  onClick={() => setShowModal(true)}
                  className="setting-verify-btnlink"
                >
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="setting-Authenticator-modal"
                  >
                    Change verification Method
                  </a>
                </p>
                <p>
                  Can’t access your Authentication code?
                  <a href="#">Generate yours</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecurityCodeModal
        securityCodeValue={securityCodeValue}
        setSecurityCodeValue={setSecurityCodeValue}
        showModal={showModal}
        setShowModal={setShowModal}
        combinedValue={combinedValue}
        setCombinedValue={setCombinedValue}
        verifySecurityCode={verifySecurityCode}
      />

      <AuthAppModal
        googleAuthInputValues={googleAuthInputValues}
        setGoogleAuthInputValues={setGoogleAuthInputValues}
        showAuthAppModal={showAuthAppModal}
        setShowAuthAppModal={setShowAuthAppModal}
        combinedAuthValue={combinedAuthValue}
        setCombinedAuthValue={setCombinedAuthValue}
        verifyAuthCode={verifyAuthCode}
      />
      <BackupMethodModal
        showBackupMethodModal={showBackupMethodModal}
        setShowBackupMethodModal={setShowBackupMethodModal}
        backupMethod={backupMethod}
        setBackupMethod={setBackupMethod}
        setUpBackupMethod={setUpBackupMethod}
      />
      <RegenerationModal
        showRegerationModal={showRegerationModal}
        setShowRegenerationModal={setShowRegerationModal}
        regenerateCodes={regenerateCodes}
      />
      <CodesModal
        showCodesModal={showCodesModal}
        setShowCodesModal={setShowCodesModal}
      />
    </div>
  );
};

export default TwoStepVerification;
