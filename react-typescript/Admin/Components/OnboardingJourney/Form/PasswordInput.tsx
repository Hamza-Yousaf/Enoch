import React, { useState } from "react";

interface Props {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

const PasswordInput: React.FC<Props> = ({ password, setPassword, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [activePasswordInput, setActivePasswordInput] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent) => {
    setPassword((e.target as HTMLTextAreaElement).value);
  };

  const togglePasswordShow = () => {
    setShowPassword(!showPassword);
  };
  const makeInputActive = () => {
    setActivePasswordInput(true);
  };
  const makeInputInActive = () => {
    setActivePasswordInput(false);
  };
  return (
    <div className="col-md-12">
      <div className="input-label">{label}</div>
      <div
        className={
          activePasswordInput
            ? "sign-form-input green-boeder"
            : "sign-form-input"
        }
      >
        <input
          onFocus={makeInputActive}
          onBlur={makeInputInActive}
          onChange={handlePasswordChange}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
        />
        <span
          onClick={togglePasswordShow}
          className={
            showPassword
              ? "field-icon toggle-password eye-slash"
              : "field-icon toggle-password"
          }
        >
          <img src="/images/eye.png" alt="eye" className="img-fluid eye1" />
          <img src="/images/eye2.png" alt="eye" className="img-fluid eye2" />
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
