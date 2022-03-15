import React from "react";

const EmailSignInModal = () => {
  return (
    <div className="userAdded-modal-block">
      <div id="email-signin-modal" className="modal fade">
        <div className="modal-content">
          <span className="close">
            <img
              src="/images/threadCross.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="email-signin-body">
            <div className="email-signin-body-hd">
              <h2>EMAIL SIGN-IN INFO</h2>
              <p>Regina Cooper</p>
            </div>
            <div className="email-signin-body-inner">
              <form>
                <div className="emailSignin-input">
                  <input type="text" placeholder="Type something" />
                </div>
                <p className="emailSignin-sendCopy">
                  <input
                    id="business-acount"
                    name="b-plan"
                    type="checkbox"
                    className="signuptablinks"
                  />
                  <label htmlFor="business-acount">Send copy to myself</label>
                </p>
                <div className="emailSignin-subjct">
                  <h3>
                    Subject: <span>Welcome to Enoch.app</span>
                  </h3>
                  <div className="emailSignin-subjct-body">
                    <p className="emailSignin-subjct-body-edit">
                      <a href="#">EDIT</a>
                    </p>
                    <div className="emailSignin-subjct-body-content">
                      <p className="mb-4">Hello Regina,</p>

                      <p className="mb-4">
                        You have a new Enoch account with the Enoch.dapp
                        organization.
                      </p>
                      <p className="mb-4">
                        Sign in to your Enoch account to acces services your
                        orgaization provides.
                      </p>
                      <p></p>
                      <h4>Your username</h4>
                      <p className="mb-4">reginacooper01@gmail.com</p>

                      <h4>Your password</h4>
                      <p className="mb-4">
                        Click Sign in below to set your password and sign in. To
                        keep your account secure , follow these
                        <a href="#">password guidelenes</a>
                      </p>
                      <p> Sign in button appeasr here</p>
                      <p>
                        For your security , the reset password link expires
                        after 48 hours. After that , please contanct your
                        <a href="#">administrator</a> for your password
                      </p>
                    </div>
                  </div>
                </div>
                <div className="new-user-btn-grp">
                  <span>
                    <a
                      href="#"
                      className="bttn-secondary add-bttn-cancel"
                      data-dismiss="modal"
                    >
                      Cancel
                    </a>
                  </span>
                  <span>
                    <a href="#" className="bttn-primary add-bttn-usr">
                      Send
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignInModal;
