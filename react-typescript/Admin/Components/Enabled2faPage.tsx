import React from "react";

interface Props {
  setShowBackupCodes: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEnabledPage: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMainPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Enabled2faPage: React.FC<Props> = ({
  setShowBackupCodes,
  setShowEnabledPage,
  setShowMainPage,
}) => {
  return (
    <div className="ezl-dashboard-container">
      <div className="onboarding-enable-form">
        <div className="onboarding-enable-head">
          <h2>
            You’ve enabled two-factor <br />
            authentication
          </h2>
          <h3>Now, add a backup methrod</h3>
          <p>
            If you lose access to your default methrod, you can use backup to
            gain access to your account
          </p>
        </div>
        <div className="onboarding-enable-options">
          <div className="authenticator-enable-options-block shighlight">
            <input
              id="Personal-acount"
              name="b-plan"
              type="radio"
              checked={true}
            />
            <label htmlFor="Personal-acount">Backup codes (recommended)</label>
            <p>Generate a set of 20 unique codes to keep on hand.</p>
          </div>
          <div className="authenticator-enable-options-block mb-0">
            <input id="Personal-acount1" name="b-plan" type="radio" />
            <label htmlFor="Personal-acount1">SMS</label>
            <p>
              You will receive a unique code via SMS if you need to use your
              backup methrod.
            </p>
          </div>
        </div>

        <div className="d-flex authenticator-request-btn">
          <a
            onClick={() => {
              setShowBackupCodes(true);
              setShowEnabledPage(false);
              setShowMainPage(false);
            }}
            href="#"
            className="btn bttn-primary onboarding-continue-btn"
          >
            Continue
          </a>
        </div>
      </div>
    </div>
  );
};

export default Enabled2faPage;
