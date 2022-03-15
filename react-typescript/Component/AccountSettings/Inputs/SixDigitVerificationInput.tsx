import React from "react";

interface SixDigitVerificationInputProps {
  setChangeConfirmButtonBg: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}

const SixDigitVerificationInput: React.FC<SixDigitVerificationInputProps> = ({
  setChangeConfirmButtonBg,
  index,
}) => {
  const changeBg = () => {
    setChangeConfirmButtonBg(true);
  };
  return (
    <li>
      <input
        onInput={index === 5 ? changeBg : () => {}}
        type="text"
        className="form-control"
        maxLength={1}
      />
    </li>
  );
};

export default SixDigitVerificationInput;
