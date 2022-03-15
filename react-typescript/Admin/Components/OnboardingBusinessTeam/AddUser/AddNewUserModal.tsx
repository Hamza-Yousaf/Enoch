import React from "react";

const AddNewUserModal = () => {
  return (
    <div className="add-new-user-popup">
      <div id="add-new-user-modal" className="modal fade ">
        <div className="modal-content new-user-body">
          <span className="close">
            <img
              src="/images/tCross.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <h2>ADD A NEW USER</h2>
          <div className="add-new-user-form">
            <form>
              <div className="add-user-form-body">
                <div className="add-user-upload">
                  <div className="add-user-upload-lft">
                    <img
                      src="/images/camera2.png"
                      alt="camera"
                      className="img-fluid"
                    />
                  </div>
                  <div className="add-user-upload-right">
                    <h3>Upload a Photo</h3>
                    <p>From your computer</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 cust-6">
                    <div className="add-user-form-input">
                      <input type="text" placeholder="Name" value="" />
                    </div>
                  </div>
                  <div className="col-md-6 cust-6">
                    <div className="add-user-form-input">
                      <input type="text" placeholder="Surname" value="" />
                    </div>
                  </div>
                  <div className="col-md-12 cust-6">
                    <div className="add-user-form-input">
                      <input type="text" placeholder="Email" value="" />
                    </div>
                  </div>
                  <div className="col-md-6 cust-6">
                    <div className="add-user-form-input">
                      <input
                        type="text"
                        placeholder="Organizational unit"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 cust-6">
                    <div className="add-org-block">
                      <div className="orgUnit-drop-box">
                        <a
                          href="javascript:void(0)"
                          id="orgUnitfunc"
                          className="orgUnit-droplist"
                        >
                          Choose one
                        </a>
                      </div>
                      <div
                        id="orgUnitfunc-DropdownList"
                        className="orgUnit-content custm-zindex-1"
                      >
                        <ul className="orgUnitfunc-drop-scrollable">
                          <li>Support desk</li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="add-user-form-input">
                      <input
                        type="text"
                        placeholder="Secondary Email"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12 cust-6">
                    <div className="add-user-form-input">
                      <input type="text" placeholder="Mobile number" value="" />
                    </div>
                  </div>
                  <div className="col-md-12 cust-6 mb-4">
                    <div className="add-org-block">
                      <div className="orgUnit-drop-box">
                        <a
                          href="javascript:void(0)"
                          id="countryfunc"
                          className="orgUnit-droplist"
                        >
                          Country
                        </a>
                      </div>
                      <div
                        id="countryfunc-DropdownList"
                        className="orgUnit-content custm-zindex-1"
                      >
                        <ul className="setting-form-drop-scrollable">
                          <li>Dutch</li>
                          <li>English (India)</li>
                          <li>English (UK)</li>
                          <li>English (USA)</li>
                          <li>Esperanto</li>
                          <li>Estonian</li>
                        </ul>
                      </div>
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
                    <a
                      href="#"
                      className="bttn-primary add-bttn-usr"
                      id="register"
                      data-toggle="modal"
                      data-target="new-user-added-modal"
                    >
                      Add new user
                    </a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUserModal;
