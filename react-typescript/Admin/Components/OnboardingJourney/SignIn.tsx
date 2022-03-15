import React, { useState } from "react";
import dynamic from "next/dynamic";
const ChangePasswordForm = dynamic(() => import("./ChangePasswordForm"));
const SignInForm = dynamic(() => import("./Form"));
const SignInBanner = dynamic(() => import("./SignInBanner"));
const Terms = dynamic(() => import("./Terms"));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const signIn = () => {
    setShowTerms(true);
  };
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="sign-in-form team-signIn">
              <div className="team-header-logo">
                <img
                  src="/images/logo-big.png"
                  alt="logo"
                  className="img-fluid"
                />
              </div>
              <div className="signin-head">
                <h2>{!changePassword ? "Sign In" : "Change Password"}</h2>
              </div>

              {changePassword && (
                <ChangePasswordForm setChangePassword={setChangePassword} />
              )}

              {showTerms === false && changePassword === false ? (
                <SignInForm
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  rememberMe={rememberMe}
                  setRememberMe={setRememberMe}
                  signIn={signIn}
                  setChangePassword={setChangePassword}
                />
              ) : showTerms === true && changePassword === false ? (
                <Terms />
              ) : (
                ""
              )}
            </div>
          </div>
          <SignInBanner />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
