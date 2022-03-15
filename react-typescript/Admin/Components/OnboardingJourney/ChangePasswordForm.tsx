import React, { useState } from "react";
import dynamic from "next/dynamic";
const PasswordInput = dynamic(() => import("./Form/PasswordInput"));
const RememberMe = dynamic(() => import("./Form/RememberMe"));

interface Props {
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePasswordForm: React.FC<Props> = ({ setChangePassword }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <form action="" method="post">
      <div className="row">
        <PasswordInput
          label={"Current Password*"}
          password={currentPassword}
          setPassword={setCurrentPassword}
        />
        <PasswordInput
          label={"New Password*"}
          password={newPassword}
          setPassword={setNewPassword}
        />
        <PasswordInput
          label={"Re-Type Password"}
          password={retypedPassword}
          setPassword={setRetypedPassword}
        />
        <RememberMe
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          showChangePassword={false}
          setChangePassword={setChangePassword}
        />
        <div className="col-md-12">
          <button
            onClick={() => setChangePassword(false)}
            type="button"
            className="bttn-primary team-signin-bttn"
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
