import React from "react";
import dynamic from "next/dynamic";
const SixDigitsInput = dynamic(() => import("../../SixDigitInput"));


interface Props {
  setShowPhoneAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  showPhoneAuthModal: boolean;
  setShowBarcodeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhoneAuthModal: React.FC<Props> = ({
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
            ? { display: "block", background: "rgba(0,0,0,0.4)" }
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
                Enter the 6-digit code generated in your Google Authenticator
                App.
              </p>
              <SixDigitsInput
                setShowBarcodeModal={setShowBarcodeModal}
                setShowPhoneAuthModal={setShowPhoneAuthModal}
              />
              <div className="modal-content-OTP-resend-text">
                <h1>
                  Don’t have Authenticator App.
                  <a href="#">Learn More and Follow the Steps</a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAuthModal;
