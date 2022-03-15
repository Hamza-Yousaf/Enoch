import React, { useState } from "react";
import dynamic from "next/dynamic";
const EmailModifyContents = dynamic(() => import("./EmailSettings/EmailModifyContents"));
const PhoneNumberModifyContents = dynamic(() => import("./PhoneNumberModifyContents"));
const ChangePasswordContents = dynamic(() => import("./ChangePasswordContents"));
const WhereSignedInContents = dynamic(() => import("./WhereSignedInContents"));
const PasswordRememberContents = dynamic(() => import("./PasswordRememberContents"));
const TwoStepVerification = dynamic(() => import("./TwoStepVerification/TwoStepVerification"));

interface SignInAndSecurityItemsProps {
  title: string;
  description: string;
  id: string;
  // currentTab: string;
  // setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  items?: {
    name: string;
    title: string;
    description: string;
    values?: {
      fullname?: string;
      dateOfBirth?: string;
      nationality?: string;
      address?: string;
    };
  }[];
  showAuthCodes: boolean;
  setShowAuthCodes: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInAndSecurityItems: React.FC<SignInAndSecurityItemsProps> = ({
  title,
  description,
  id,
  items,
  setShowAuthCodes,
  showAuthCodes,
}) => {
  const [emailRemovalSuccess, setEmailRemovalSuccess] = useState(false);

  return (
    <div className="enoch-setting-right-block" id={id}>
      <h3>{title}</h3>
      <h4>{description}</h4>
      {emailRemovalSuccess ? (
        <div className="rremove-txt remove-active" id="remove-success">
          your email id is removed successfully
          <img
            onClick={() => setEmailRemovalSuccess(false)}
            src="images/bcross.png"
            alt="close"
            className="img-fluid"
            id="remove-altert"
          />
        </div>
      ) : (
        ""
      )}

      {items?.map((item, key) => {
        if (item.name === "emailAddresses") {
          return (
            <EmailModifyContents
              emailRemovalSuccess={emailRemovalSuccess}
              setEmailRemovalSuccess={setEmailRemovalSuccess}
              key={key}
            />
          );
        } else if (item.name === "phoneNumbers") {
          return <PhoneNumberModifyContents key={key} />;
        } else if (item.name === "changePassword") {
          return <ChangePasswordContents key={key} />;
        } else if (item.name === "signInPlace") {
          return <WhereSignedInContents key={key} />;
        } else if (item.name === "passwordRemember") {
          return <PasswordRememberContents key={key} />;
        } else if (item.name === "twoStepVerification") {
          return (
            <TwoStepVerification
              showAuthCodes={showAuthCodes}
              setShowAuthCodes={setShowAuthCodes}
              key={key}
            />
          );
        }
      })}
    </div>
  );
};

export default SignInAndSecurityItems;
