import React from "react";
import dynamic from "next/dynamic";
const PasswordRequestModal = dynamic(() => import("../EmailSettings/PasswordRequestModal"));


interface Props {
  userPhoneNumbers: {
    primaryNumber?: string;
    secondaryNumber: string;
  };
  setUserPhoneNumbers: any;
  makePrimary: () => void;
  showPasswordRequest: boolean;
  setShowPasswordRequest: React.Dispatch<React.SetStateAction<boolean>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  showNotAllowedModal: boolean;
  setShowNotAllowedModal: React.Dispatch<React.SetStateAction<boolean>>;
  setRemovalDenied: React.Dispatch<React.SetStateAction<boolean>>;
  showPhoneAddText: boolean;
  setShowPhoneAddText: React.Dispatch<React.SetStateAction<boolean>>;
}
const AllPhonesView: React.FC<Props> = ({
  userPhoneNumbers,
  setUserPhoneNumbers,
  makePrimary,
  showPasswordRequest,
  setShowPasswordRequest,
  password,
  setPassword,
  showNotAllowedModal,
  setShowNotAllowedModal,
  setRemovalDenied,
  showPhoneAddText,
  setShowPhoneAddText,
}) => {
  const verifyPasswordAndRemove = () => {
    setShowPasswordRequest(false);
    setUserPhoneNumbers({
      primaryNumber: userPhoneNumbers.primaryNumber,
      secondaryNumber: "",
    });
    setShowPhoneAddText(true);
  };

  const checkRemovalEligibility = (phoneNumber: string) => {
    if (
      phoneNumber === userPhoneNumbers.secondaryNumber &&
      phoneNumber !== undefined
    ) {
      setShowPasswordRequest(true);
    } else if (
      phoneNumber === userPhoneNumbers.primaryNumber ||
      phoneNumber === undefined
    ) {
      setShowNotAllowedModal(true);
      setRemovalDenied(true);
    }
  };

  return (
    <>
      <div className="phn-no-add-sect">
        <div className="Use-Password-ReSet-check Use-Password-ReSet-check-after">
          <input type="checkbox" />
          <label>Use for Password Re-set </label>
        </div>
      </div>
      <div className="phn-no-remove-sect phn-no-make-primary-sect">
        <div className="phn-no-remove-left phn-no-make-primary-left">
          <h1>{userPhoneNumbers.secondaryNumber} </h1>
        </div>
        <div className="phn-no-remove-right phn-no-make-primary-right">
          <span onClick={makePrimary} className="Num-make-primary">
            Make Primary
          </span>
          <span
            onClick={() => {
              checkRemovalEligibility(userPhoneNumbers.secondaryNumber);
            }}
            style={{ cursor: "pointer" }}
          >
            rEMOVE
          </span>
        </div>
      </div>
      <div className="phn-no-add-sect-text">
        <p className="mb-0">
          Your phone number helps us keep your account secure by adding an
          additional layer of verification. It also helps others, who already
          have your phone number, discover and connect with you. You can always
          decide how you want your phone number used. <a href="#">Learn more</a>
        </p>
      </div>
      {showPasswordRequest ? (
        <PasswordRequestModal
          showPasswordRequest={showPasswordRequest}
          setShowPasswordRequest={setShowPasswordRequest}
          password={password}
          setPassword={setPassword}
          verifyPasswordAndRemove={verifyPasswordAndRemove}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AllPhonesView;
