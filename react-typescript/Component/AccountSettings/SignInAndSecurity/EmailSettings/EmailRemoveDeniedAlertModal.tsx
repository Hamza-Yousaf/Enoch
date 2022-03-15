import React, { useState } from "react";

interface Props {
  showNotAllowedModal: boolean;
  setShowNotAllowedModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: any;
  message: any;
}

const EmailRemoveDeniedAlertModal: React.FC<Props> = ({
  showNotAllowedModal,
  setShowNotAllowedModal,
  message,
  title,
}) => {
  return (
    <div className="enoch-setting-modal-block">
      <div
        id="primary-mail-modal"
        className={showNotAllowedModal ? "modal fade open" : "modal fade "}
      >
        <div className="modal-content setting-change-number w-440 text-center">
          <span onClick={() => setShowNotAllowedModal(false)} className="close">
            <img
              src="images/sCross.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="setting-no-header">{title}</div>
          <div className="setting-remove-email-nxt">
            <p className="mb-4">{message}</p>
            <div className="setting-ok-blocks ">
              <a href="#" className="btn bttn-primary-modified setting-ok-btn">
                Ok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailRemoveDeniedAlertModal;
