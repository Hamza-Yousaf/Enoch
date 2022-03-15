import React from "react";

interface Props {
  showBackupMethodModal: boolean;
  setShowBackupMethodModal: React.Dispatch<React.SetStateAction<boolean>>;
  backupMethod: string;
  setBackupMethod: React.Dispatch<React.SetStateAction<string>>;
  setUpBackupMethod: () => void;
}

const BackupMethodModal: React.FC<Props> = ({
  showBackupMethodModal,
  setShowBackupMethodModal,
  backupMethod,
  setBackupMethod,
  setUpBackupMethod,
}) => {
  const handleMethodChange = (method: string) => {
    setBackupMethod(method);
  };
  return (
    <div className="enoch-setting-modal-block">
      <div
        id="setting-Authenticator-modal3"
        className={showBackupMethodModal ? "modal fade open" : "modal fade"}
      >
        <div className="authenticator-modal-block">
          <div className="authenticator-enable-form">
            <div className="authenticator-cross">
              <img
                src="images/sttCross.png"
                alt="logo"
                className="img-fluid"
                data-dismiss="modal"
              />
            </div>
            <div className="authenticator-enable-head">
              <div className="authenticator2-header-logo">
                <img src="images/slogo.png" alt="logo" className="img-fluid" />
              </div>
              <h2>
                You’ve enabled two-factor <br />
                authentication
              </h2>
              <h3>Now, add a backup methrod</h3>
              <p>
                If you lose access to your default methrod, you can use backup
                to gain access to your account
              </p>
            </div>
            <div className="authenticator-enable-options">
              <div
                className={
                  backupMethod === "code"
                    ? "authenticator-enable-options-block shighlight"
                    : "authenticator-enable-options-block"
                }
              >
                <input
                  id="Personal-acount"
                  name="b-plan"
                  type="radio"
                  checked={backupMethod === "code"}
                  onChange={() => handleMethodChange("code")}
                />
                <label htmlFor="Personal-acount">
                  Backup codes (recommended)
                </label>
                <p>Generate a set of 20 unique codes to keep on hand.</p>
              </div>
              <div
                className={
                  backupMethod === "sms"
                    ? "authenticator-enable-options-block shighlight mb-0"
                    : "authenticator-enable-options-block mb-0"
                }
              >
                <input
                  id="Personal-acount1"
                  name="b-plan"
                  type="radio"
                  checked={backupMethod === "sms"}
                  onChange={() => handleMethodChange("sms")}
                />
                <label htmlFor="Personal-acount1">SMS</label>
                <p>
                  You will receive a unique code via SMS if you need to use your
                  backup methrod.
                </p>
              </div>
            </div>

            <div className="d-flex authenticator-request-btn">
              <a
                onClick={setUpBackupMethod}
                href="#"
                className="btn bttn-primary authenticator-next"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackupMethodModal;
