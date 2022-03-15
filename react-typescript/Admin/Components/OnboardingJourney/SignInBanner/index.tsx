import React from "react";

const SignInBanner = () => {
  return (
    <div className="col-lg-6 p-0">
      <div className="sign-up-bg-image team-signIn-image">
        <div className="twitwr-img">
          <a href="#">
            <img
              src="/images/twitter.png"
              alt="twitter"
              className="img-fluid"
            />
          </a>
        </div>
        <div>
          <img src="/images/signup.png" alt="signup" className="img-fluid" />
        </div>
        <div className="top-corner">
          <img src="/images/img1.png" alt="signup" className="img-fluid" />
        </div>
        <div className="bottom-corner">
          <img src="/images/img2.png" alt="signup" className="img-fluid" />
        </div>

        <div className="linkedin-img">
          <a href="#">
            <img
              src="/images/linkedin.png"
              alt="linkedin"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInBanner;
