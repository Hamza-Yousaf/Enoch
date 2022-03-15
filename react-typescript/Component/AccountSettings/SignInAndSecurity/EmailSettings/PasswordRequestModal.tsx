import React, { useState } from "react";

interface Props {
  showPasswordRequest: boolean;
  setShowPasswordRequest: React.Dispatch<React.SetStateAction<boolean>>;
  password: any;
  setPassword: any;
  verifyPasswordAndRemove: any;
}

const PasswordRequestModal: React.FC<Props> = ({
  showPasswordRequest,
  setShowPasswordRequest,
  password,
  setPassword,
  verifyPasswordAndRemove,
}) => {
  const [seePassword, setSeePassword] = useState(false);

  const toggleSeePassword = () => {
    setSeePassword(!seePassword);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="enoch-setting-modal-block">
      <div
        id="setting-verify-modal"
        className={showPasswordRequest ? "modal fade open" : "modal fade"}
      >
        <div className="modal-content setting-change-number">
          <span onClick={() => setShowPasswordRequest(false)} className="close">
            <img
              src="images/sCross.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="setting-no-header">Provide your Password</div>
          <div className="setting-change-number-nxt">
            <p className="mb-4">
              For your security, Enter your Password to make this change.
            </p>
            <div className="setting-number-blocks mb-2">
              <div className="setting-form-input">
                <input
                  onChange={handlePassword}
                  value={password}
                  type={seePassword ? "text" : "password"}
                  id="key_input1"
                  placeholder="Password"
                />
                <span
                  className={
                    seePassword
                      ? "settingeye-slash"
                      : "settingfield-icon settingtoggle-password"
                  }
                >
                  <img
                    onClick={toggleSeePassword}
                    src="images/eye.png"
                    alt="eye"
                    className="img-fluid settingeye1"
                  />
                  <img
                    onClick={toggleSeePassword}
                    src="images/eye2.png"
                    alt="eye"
                    className="img-fluid settingeye2"
                  />
                </span>
              </div>
              <div className="d-flex setting-confirm-btn">
                <span
                  style={{ cursor: "pointer" }}
                  className={
                    password.length > 0
                      ? "btn bttn-primary"
                      : "btn bttn-primary bttn-disable"
                  }
                  id="keyregister"
                  onClick={verifyPasswordAndRemove}
                >
                  Done
                </span>
              </div>
            </div>
            <p className="seting-md-bttm mb-0 pt-1">
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRequestModal;
