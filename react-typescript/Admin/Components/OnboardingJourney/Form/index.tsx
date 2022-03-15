import React from "react";
import dynamic from "next/dynamic";
const EmailInput = dynamic(() => import("./EmailInput"));
const PasswordInput = dynamic(() => import("./PasswordInput"));
const RememberMe = dynamic(() => import("./RememberMe"));

interface Props {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: () => void;
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInForm: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  signIn,
  setChangePassword,
}) => {
  return (
    <form>
      <div className="row">
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput
          label={"Password*"}
          password={password}
          setPassword={setPassword}
        />
        <RememberMe
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          setChangePassword={setChangePassword}
          showChangePassword={true}
        />
        <div className="col-md-12">
          <button
            onClick={signIn}
            type="button"
            className="bttn-primary team-signin-bttn"
          >
            Sign In
          </button>
        </div>
        <div className="col-md-12">
          <p className="signin-bttm-xt">
            Not Registered yet?
            <a href="#" className="signin-btn">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
