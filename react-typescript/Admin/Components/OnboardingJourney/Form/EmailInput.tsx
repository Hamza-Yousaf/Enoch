import React, { useState } from "react";

interface Props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const EmailInput: React.FC<Props> = ({ email, setEmail }) => {
  const [isMailCorrect, setIsMailCorrect] = useState(false);
  const [activeEmailInput, setActiveEmailInput] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent) => {
    setEmail((e.target as HTMLTextAreaElement).value);

    if (/@/.test(email) && /\./.test(email)) {
      setIsMailCorrect(true);
    } else {
      setIsMailCorrect(false);
    }
  };

  const makeInputActive = () => {
    setActiveEmailInput(true);
  };
  const makeInputInActive = () => {
    setActiveEmailInput(false);
  };
  return (
    <div className="col-md-12">
      <div className="input-label">Email*</div>
      <div
        className={
          activeEmailInput ? "sign-form-input green-boeder" : "sign-form-input"
        }
      >
        <input
          onFocus={makeInputActive}
          onBlur={makeInputInActive}
          onChange={handleEmailChange}
          type="email"
          placeholder="Email id"
          value={email}
        />
        {isMailCorrect && (
          <span>
            <img src="/images/Check.png" alt="Check" className="img-fluid" />
          </span>
        )}
      </div>
    </div>
  );
};

export default EmailInput;
