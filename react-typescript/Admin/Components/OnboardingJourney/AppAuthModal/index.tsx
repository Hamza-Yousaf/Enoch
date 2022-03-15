import React from "react";
import dynamic from "next/dynamic";
const SixDigitsInput = dynamic(() => import("../../SixDigitInput"));

interface Props {
  setShowPhoneAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  showPhoneAuthModal: boolean;
  setShowBarcodeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppAuthModal: React.FC<Props> = ({
  setShowPhoneAuthModal,
  showPhoneAuthModal,
  setShowBarcodeModal,
}) => {
  return (
    <div className="phone-authenticator-Modal">
      <div
        className={showPhoneAuthModal ? "modal fade show" : "modal fade"}
        role="dialog"
        style={
          showPhoneAuthModal
            ? { display: "block", background: "rgba(0,0,0,0.6)" }
            : { display: "none" }
        }
      >
        <div className="modal-dialog">
          <div
            className="modal-content modal-content-OTP phone-authenticator-otp"
            style={{ display: "block" }}
          >
            <span className="close">
              <img
                src="/images/sCross.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>
            <div className="phone-authenticator-OTP-header">
              Change verfication mothod
            </div>
            <div className="phone-authenticator-OTP-text">
              <p>
                In order to change your 2FA method , we have sent security code
                to your phone number.
              </p>
              <SixDigitsInput
                setShowBarcodeModal={setShowBarcodeModal}
                setShowPhoneAuthModal={setShowPhoneAuthModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAuthModal;
