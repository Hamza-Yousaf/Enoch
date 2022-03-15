import React from "react";

const NewUserAddedModal = () => {
  return (
    <div className="userAdded-modal-block">
      <div id="new-user-added-modal" className="modal fade ">
        <div className="modal-content">
          <span className="close">
            <img
              src="/images/threadCross.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="userAdded-body">
            <h2>NEW USER ADDED</h2>
            <div className="userAdded-body-inner">
              <div className="add-user-upload-lft">
                <img
                  src="/images/camera2.png"
                  alt="camera"
                  className="img-fluid"
                />
              </div>
              <h3>Regina Cooper</h3>
              <p>reginacooper01@gmail.com</p>
              <div className="userAdded-password-block">
                <p className="userAdded-password-hd">Password</p>
                <p className="userAdded-password-val">
                  <input type="password" value="12345678" />
                  <span>
                    <img
                      src="/images/pass-eye.png"
                      alt="eye"
                      className="img-fluid"
                    />
                  </span>
                </p>
                <p className="userAdded-password-bottom">
                  <a href="#">COPY PASSWORD</a>
                </p>
                <p className="userAdded-password-bottom-txt">
                  This password will need to be changed once
                  <br />
                  Regins signs into the account
                </p>
              </div>
              <ul>
                <li>
                  <a href="#">DONE</a>
                </li>
                <li>
                  <a
                    href="#"
                    id="register2"
                    data-toggle="modal"
                    data-target="email-signin-modal"
                  >
                    EMAIL USER SIGN-IN INFO
                  </a>
                </li>
                <li>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      MORE ACTIONS
                    </a>
                    <div
                      className="dropdown-menu userAdded-drop-box"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <ul>
                        <li>
                          <a className="" href="#">
                            Add to Groups
                          </a>
                        </li>
                        <li>
                          <a className="" href="#">
                            Edit User
                          </a>
                        </li>
                        <li>
                          <a className="" href="#">
                            Print Login Info
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserAddedModal;
