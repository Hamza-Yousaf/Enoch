import React, { useState } from "react";
import dynamic from "next/dynamic";
const SecurityCodeInput = dynamic(() => import("./SecurityCodeInput"));

interface Props {
  googleAuthInputValues: {
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    field6: string;
  };
  setGoogleAuthInputValues: React.Dispatch<
    React.SetStateAction<{
      field1: string;
      field2: string;
      field3: string;
      field4: string;
      field5: string;
      field6: string;
    }>
  >;
  showAuthAppModal: boolean;
  setShowAuthAppModal: React.Dispatch<React.SetStateAction<boolean>>;
  combinedAuthValue: string;
  setCombinedAuthValue: React.Dispatch<React.SetStateAction<string>>;
  verifyAuthCode: () => void;
}

const AuthAppModal: React.FC<Props> = ({
  googleAuthInputValues,
  setGoogleAuthInputValues,
  verifyAuthCode,
  setShowAuthAppModal,
  showAuthAppModal,
  setCombinedAuthValue,
  combinedAuthValue,
}) => {
  const [changeConfirmButtonBg, setChangeConfirmButtonBg] = useState(false);

  const handleNextButtonClick = () => {
    setCombinedAuthValue(
      `${googleAuthInputValues.field1}${googleAuthInputValues.field2}${googleAuthInputValues.field3}${googleAuthInputValues.field4}${googleAuthInputValues.field5}${googleAuthInputValues.field6}`
    );
    setShowAuthAppModal(false);
    verifyAuthCode();
  };

  return (
    <div className="enoch-setting-modal-block">
      <div
        id="setting-Authenticator-modal2"
        className={showAuthAppModal ? "modal fade open" : "modal fade"}
      >
        <div className="authenticator-modal-block">
          <div className="authenticator-form">
            <div className="authenticator-head">
              <div className="authenticator-cross">
                <img
                  src="images/sttCross.png"
                  alt="logo"
                  className="img-fluid"
                  data-dismiss="modal"
                />
              </div>
              <h2>Activate 2-Step verification - Authenticator app</h2>
            </div>
            <div className="authenticator-recovery-block">
              <h3>
                Install an <span>Google Authenticar app</span> on your
                <span>smart</span> device.
              </h3>
              <div className="authenticator-app-block">
                <span className="mr-16">
                  <img
                    src="images/setting-gplay.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="images/setting-gapp.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </span>
              </div>
            </div>
            <div className="authenticator-recovery-block mt-0">
              <h3>
                <span>Open</span> your <span>Google Authenticator</span> app and
                scan the <span>QR code</span> below.
              </h3>
              <div className="authenticator-app-block">
                <img
                  src="images/setting-gcode.png"
                  alt="logo"
                  className="img-fluid"
                />
              </div>
              <p className="authenticator-bttm-txt">Or enter Key Manually</p>
            </div>
            <div className="authenticator-recovery-block mt-0 mb-4">
              <h3 className="mb-4">
                Enter the <span>6-digit code</span> generated in your
                <span>Google Authenticator</span> app.
              </h3>
              <div className="authenticator-verfication-key authenticator-num-key">
                <SecurityCodeInput
                  inputsValue={googleAuthInputValues}
                  setInputsValue={setGoogleAuthInputValues}
                  setChangeConfirmButtonBg={setChangeConfirmButtonBg}
                />
              </div>
            </div>
            <div className="authenticator-alert">
              <span>
                <img src="images/sAlert.png" alt="logo" className="img-fluid" />
              </span>
              Make sure the phone’s date and time is synchronized with the its
              cellular network.
            </div>
            <div className="d-flex authenticator-request-btn">
              <a
                href="#"
                className="btn bttn-primary authenticator-next"
                id="autheticatorpasskey2"
                data-toggle="modal"
                data-target="setting-Authenticator-modal3"
                onClick={handleNextButtonClick}
              >
                NEXT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthAppModal;
