import React, { useState } from "react";

const UserInfoSection = () => {
  const [edit, setEdit] = useState(false);

  const editFields = () => {
    setEdit(true);
  };
  return (
    <div className="col-lg-5 custom-col-lg-5 mb-4">
      <div className="Admin-Profile-body-center-cell">
        <div className="Admin-Profile-col-heading">
          <h1>User Information</h1>
          <a
            onClick={editFields}
            href="#"
            className="edit-form user-info-edit"
            id="Edit-act">
            EDIT
          </a>
        </div>
        <div className="User-Info-form">
          <form>
            <div className="row">
              <div className="col-md-6">
                <label>name</label>
                <input
                  type="text"
                  className={edit ? "" : "disable"}
                  id="remove-disable"
                  value="Regina"
                />
              </div>
              <div className="col-md-6">
                <label>surname</label>
                <input
                  type="text"
                  className={edit ? "" : "disable"}
                  id="remove-disable2"
                  value="Cooper"
                />
              </div>
              <div className="col-md-12">
                <label>email id</label>
                <input
                  type="text"
                  className={edit ? "" : "disable"}
                  id="remove-disable3"
                  value="reginacooper01@gmail.com"
                />
              </div>
              <div className="col-md-6">
                <label>organizational unit</label>
                <input
                  type="text"
                  className={edit ? "" : "disable"}
                  id="remove-disable4"
                  value="Enoch.app"
                />
              </div>
              <div className="col-md-6">
                <label>&nbsp;</label>
                <input
                  type="text"
                  className={edit ? "" : "disable"}
                  id="remove-disable5"
                  value="Support Desk"
                />
              </div>
              <div className="col-md-12">
                <label>secondary email</label>
                <input
                  type="text"
                  className={edit ? "" : "disable"}
                  id="remove-disable6"
                  value="reginacooper01@gmail.com"
                />
              </div>
              <div className="col-md-12">
                <label>mobile no.</label>
                <input
                  type="text"
                  className={edit ? "" : "disable"}
                  id="remove-disable7"
                  value="+44  67890 89878"
                />
              </div>
              <div className="col-md-12">
                <label>country</label>
                <div
                  className="
                      Create-Support-dropdown-left
                      admin-profile-country-dropdown
                    ">
                  <div className="position-relative">
                    <div
                      className="
                          timeSetting-drop-box
                          helpcenter-admin-country-drop-box
                          disable
                        "
                      id="remove-disable8">
                      <a
                        href="javascript:void(0)"
                        id="adminProfileDropdown"
                        className="
                            timeSetting-droplist
                            adminProfile-Droplist
                            select-active
                          ">
                        United Kingdom
                      </a>
                    </div>
                    <div
                      id="adminPprofile-DropdownList"
                      className="
                          timeSetting-content
                          adminProfile-dropdown-content
                          custm-zindex-1
                        ">
                      <ul className="setting-form-drop-scrollable">
                        <li>Gambia</li>
                        <li>Georgia</li>
                        <li>Germany</li>
                        <li>Ghana</li>
                        <li>Grand Duchy of Tuscany</li>
                        <li>Greece</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="admin-profile-save-btns User-Info-btns">
            <button
              className="Cancel Cancel-disable"
              id="remove-Cancel-disable">
              <a href="#">Cancel</a>
            </button>
            <button
              className="Save-Chnages Save-Chnages-disable"
              id="remove-Save-Chnages-disable">
              <a href="#">Save Chnages</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoSection;
