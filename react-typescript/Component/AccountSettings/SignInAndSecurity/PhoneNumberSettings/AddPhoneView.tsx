import React from "react";
interface Props {
  showPhoneAddText: boolean;
  setShowPhoneAddText: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPhoneAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  showPhoneAddForm: boolean;
}

const AddPhoneView: React.FC<Props> = ({
  showPhoneAddText,
  setShowPhoneAddText,
  setShowPhoneAddForm,
  showPhoneAddForm,
}) => {
  const handleLinkClick = () => {
    setShowPhoneAddText(false);
    setShowPhoneAddForm(true);
  };
  return (
    <div
      className="phn-no-add-sect"
      style={showPhoneAddText ? { display: "block" } : { display: "none" }}
    >
      <div className="Use-Password-ReSet-check">
        <input type="checkbox" />
        <label>Use for Password Re-set </label>
      </div>
      <div className="phn-no-add-sect-text">
        <p>
          Your phone number helps us keep your account secure by adding an
          additional layer of verification. It also helps others, who already
          have your phone number, discover and connect with you. You can always
          decide how you want your phone number used. Learn more
        </p>
        <strong onClick={handleLinkClick} className="AddNumber">
          + Add a Phone Number
        </strong>
      </div>
    </div>
  );
};

export default AddPhoneView;
