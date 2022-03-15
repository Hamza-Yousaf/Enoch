import React, { useState } from "react";

interface Props {
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
  showChangePassword: boolean;
}

const RememberMe: React.FC<Props> = ({
  rememberMe,
  setRememberMe,
  setChangePassword,
  showChangePassword,
}) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="col-md-12">
      <div className="signin-check">
        <label className="signcheckbox-container">
          Remember me
          <input
            onChange={handleCheckbox}
            type="checkbox"
            checked={isChecked}
          />
          <span className="signcontactcheckmark"></span>
        </label>
        {showChangePassword && (
          <span>
            <a href="#" onClick={() => setChangePassword(true)}>
              Forget Password?
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default RememberMe;
