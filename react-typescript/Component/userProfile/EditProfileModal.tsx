import React from "react";

const EditProfileModal = () => {
  return (
    <div className="dApp-home-profile-modal-sect">
      <div className="modal fade" id="dApp-home-profile-modal" role="dialog">
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="dApp-home-profile-modal-header">
              <h4 className="modal-title">Edit Profile</h4>
              <div
                className="close dApp-home-profile-modal-close"
                data-dismiss="modal"
              >
                <img
                  src="/images/hCross.png"
                  alt="icon"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="modal-body">
              <div>
                <div className="dApp-home-cover-photo">
                  <img
                    src="/images/dApp-edit-cover-photo.png"
                    alt="cover-photo"
                    className="img-fluid h-100"
                  />
                  <div className="coverPhoto-change-btn">
                    <span>
                      <img
                        src="/images/dApp-Camera.png"
                        alt="camera"
                        className="img-fluid"
                      />
                    </span>
                    <a href="#">Cover image</a>
                  </div>
                </div>
                <div className="dApp-home-profile-pic">
                  <div className="dApp-profile-picture">
                    <div className="dApp-profile-picture-img">
                      <img
                        src="/images/dApp-progile-pic.png"
                        alt="profile-picture"
                        className="img-fluid"
                      />
                    </div>
                    <input type="file" className="my_file update-profile" />
                  </div>
                </div>
                <div className="dApp-home-profile-modal-form">
                  <form>
                    <div className="input-name input-fild">
                      <label>Name</label>
                      <input type="text" placeholder="Robert Rose" />
                    </div>

                    <div className="Edit-username input-fild">
                      <label>Edit username</label>
                      <input
                        type="text"
                        placeholder="@userenoch007"
                        value="@Robertrose06"
                        id="Edit-username-input"
                      />
                      <div className="username-dropdown">
                        <p className="success">
                          Great this username is availabel So It is yours
                        </p>
                        <p className="error">Username not availabel </p>
                        <h6>Can't think of one? Use one of these:</h6>
                        <ul id="username_list">
                          <li>Robert-Fun</li>
                          <li>Robert-Fun6882</li>
                          <li>Robert-Fun6882</li>
                        </ul>
                        <button id="edit-userName-btn" className="disable">
                          <a href="#">Continue</a>
                        </button>
                      </div>
                    </div>

                    <div className="Bio input-fild">
                      <label>Bio</label>
                      <textarea placeholder="Write your Bio"></textarea>
                    </div>

                    <div className="City-dropdown input-fild">
                      <label>City</label>
                      <div className="City-dropdown-box" id="City-drop-box">
                        Select City
                      </div>
                      <div className="City-dropdown-list">
                        <ul>
                          <li>&nbsp;</li>
                          <li>&nbsp;</li>
                          <li>&nbsp;</li>
                          <li>&nbsp;</li>
                        </ul>
                      </div>
                    </div>

                    <div className="Country-dropdown input-fild">
                      <label>Select Country</label>
                      <div
                        className="Country-dropdown-box"
                        id="Country-drop-box"
                      >
                        Select Country
                      </div>
                      <div className="Country-dropdown-list">
                        <ul>
                          <li>&nbsp;</li>
                          <li>&nbsp;</li>
                          <li>&nbsp;</li>
                          <li>&nbsp;</li>
                        </ul>
                      </div>
                    </div>

                    <div className="Website input-fild">
                      <label>Website</label>
                      <input type="text" placeholder="your website" />
                    </div>

                    <div className="Date-of-birth input-fild">
                      <label>Date of birth</label>
                      <input type="text" placeholder="Date of birth" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="disable" id="profile-edit-save-btn">
                <a href="#">Save</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
