import React, { useState } from "react";
import dynamic from "next/dynamic";
const SecurityCodeInput = dynamic(() => import("./SecurityCodeInput"));


interface Props {
  securityCodeValue: {
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    field6: string;
  };
  setSecurityCodeValue: React.Dispatch<
    React.SetStateAction<{
      field1: string;
      field2: string;
      field3: string;
      field4: string;
      field5: string;
      field6: string;
    }>
  >;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  combinedValue: string;
  setCombinedValue: React.Dispatch<React.SetStateAction<string>>;
  verifySecurityCode: () => void;
}

const SecurityCodeModal: React.FC<Props> = ({
  securityCodeValue,
  setSecurityCodeValue,
  showModal,
  setShowModal,
  combinedValue,
  setCombinedValue,
  verifySecurityCode,
}) => {
  const [changeConfirmButtonBg, setChangeConfirmButtonBg] = useState(false);

  const handleConfirmButtonClick = () => {
    setCombinedValue(
      `${securityCodeValue.field1}${securityCodeValue.field2}${securityCodeValue.field3}${securityCodeValue.field4}${securityCodeValue.field5}${securityCodeValue.field6}`
    );
    setShowModal(false);
    verifySecurityCode();
  };

  return (
    <div className="enoch-setting-modal-block">
      <div
        id="setting-Authenticator-modal"
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
          <div className="setting-no-header">Change verfication mothod </div>
          <div className="setting-change-number-nxt">
            <p className="mb-4">
              In order to change your 2FA method , we have sent security code to
              your phone number.
            </p>
            <div className="setting-number-blocks mb-2">
              <div className="setting-key setting-num-key auth-key-pass m-0">
                <SecurityCodeInput
                  inputsValue={securityCodeValue}
                  setInputsValue={setSecurityCodeValue}
                  setChangeConfirmButtonBg={setChangeConfirmButtonBg}
                />
              </div>
              <div className="d-flex setting-confirm-btn">
                <a
                  href="#"
                  className={
                    changeConfirmButtonBg
                      ? "btn bttn-primary"
                      : "btn bttn-primary bttn-disable"
                  }
                  id="autheticatorpasskey"
                  onClick={handleConfirmButtonClick}
                >
                  Confirm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCodeModal;
