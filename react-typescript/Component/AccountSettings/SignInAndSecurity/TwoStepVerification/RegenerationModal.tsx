import React from "react";

interface Props {
  showRegerationModal: boolean;
  setShowRegenerationModal: React.Dispatch<React.SetStateAction<boolean>>;
  regenerateCodes: () => void;
}

const RegenerationModal: React.FC<Props> = ({
  showRegerationModal,
  setShowRegenerationModal,
  regenerateCodes,
}) => {
  return (
    <div className="enoch-setting-modal-block">
      <div
        id="regenerate-modal"
        className={showRegerationModal ? "modal fade open" : "modal fade"}
      >
        <div className="modal-content setting-change-number w-440 text-center">
          <span className="close">
            <img
              src="images/sCross.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="setting-no-header">Confirm regeneration</div>
          <div className="setting-remove-email-nxt">
            <p className="mb-4">
              This will make yout remaining 20 codes invalid. Are you sure you
              want to continue?
            </p>
            <div className="regenerate-bttn-blocks">
              <span className="smr-12">
                <a
                  href="#"
                  className="btn bttn-secondary regenerate-cstm"
                  data-dismiss="modal"
                >
                  Cancel
                </a>
              </span>
              <span>
                <a
                  href="#"
                  id="rngbuttn"
                  className="btn bttn-primary regenerate-cstm"
                  data-toggle="modal"
                  data-target="backupcode-modal"
                  onClick={regenerateCodes}
                >
                  Confirm
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegenerationModal;
