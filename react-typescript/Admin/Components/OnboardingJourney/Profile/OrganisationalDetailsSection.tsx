import React, { useState } from "react";

const OrganisationalDetailsSection = () => {
  const [edit, setEdit] = useState(false);

  const editFields = () => {
    setEdit(true);
  };
  return (
    <div className="col-lg-3 custom-col-lg-3 pr-lg-0 mb-4">
      <div className="Admin-Profile-body-right-cell">
        <div className="Organizational-Details-headings">
          <h1>Organizational Details</h1>
          <a
            onClick={editFields}
            href="#"
            className="edit-form Organizational-Details-edit"
            id="Edit-act-2"
          >
            EDIT
          </a>
        </div>
        <div className="Organizational-Details-body">
          <form>
            <div className="row">
              <div className="col-md-12">
                <label>Job Title</label>
                <div
                  className="
                              Create-Support-dropdown-left
                              admin-profile-country-dropdown
                            "
                >
                  <div className="position-relative">
                    <div
                      className={
                        edit
                          ? "timeSetting-drop-box helpcenter-admin-country-drop-box"
                          : "timeSetting-drop-box helpcenter-admin-country-drop-box  disable "
                      }
                      id="remove-disable9"
                    >
                      <a
                        href="javascript:void(0)"
                        id="adminProfileDropdown2"
                        className="
                                    timeSetting-droplist
                                    adminProfile-Droplist
                                    adminProfile-Droplist-act
                                    select-active
                                  "
                      >
                        KYC-Support Desk
                      </a>
                    </div>
                    <div
                      id="adminPprofile-DropdownList-2"
                      className="
                                  timeSetting-content
                                  adminProfile-dropdown-content
                                  custm-zindex-1
                                "
                    >
                      <ul className="setting-form-drop-scrollable">
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <label>Role</label>
                <div className=" Create-Support-dropdown-left admin-profile-country-dropdown  ">
                  <div className="position-relative">
                    <div
                      className={
                        edit
                          ? "timeSetting-drop-box helpcenter-admin-country-drop-box"
                          : "timeSetting-drop-box helpcenter-admin-country-drop-box disable "
                      }
                      id="remove-disable10"
                    >
                      <a
                        href="javascript:void(0)"
                        id="adminProfileDropdown3"
                        className="
                                    timeSetting-droplist
                                    adminProfile-Droplist
                                    adminProfile-Droplist-act
                                    select-active
                                  "
                      >
                        KYC, Editor
                      </a>
                    </div>
                    <div
                      id="adminPprofile-DropdownList-3"
                      className="
                                  timeSetting-content
                                  adminProfile-dropdown-content
                                  custm-zindex-1
                                "
                    >
                      <ul className="setting-form-drop-scrollable">
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <label>Permission</label>
                <div
                  className="
                              Create-Support-dropdown-left
                              admin-profile-country-dropdown
                            "
                >
                  <div className="position-relative">
                    <div
                      className={
                        edit
                          ? " timeSetting-drop-box  helpcenter-admin-country-drop-box  disable  Permission-btns"
                          : "  timeSetting-drop-box  helpcenter-admin-country-drop-box  disable  Permission-btns  disable    "
                      }
                      id="remove-disable11"
                    >
                      <div
                        id="adminProfileDropdown4"
                        className="
                                    timeSetting-droplist
                                    adminProfile-Droplist
                                    adminProfile-Droplist-btns
                                    adminProfile-Droplist-act
                                    select-active
                                  "
                      >
                        <div className="two-btns">
                          <a href="#" id="addPermission-Act">
                            Permission 1
                          </a>
                          <a href="#" id="addPermission-Act-2">
                            Permission 2
                          </a>
                        </div>
                        <div className="last-one-btn">
                          <a href="#" id="addPermission-Act-3">
                            Permission 3
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="adminPprofile-DropdownList-4"
                      className="
                                  timeSetting-content
                                  adminProfile-dropdown-content
                                  custm-zindex-1
                                "
                    >
                      <ul className="setting-form-drop-scrollable">
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div
            className="
                        admin-profile-save-btns
                        Organizational-Details-btns
                      "
          >
            <button
              className="Cancel Cancel-disable"
              id="remove-Cancel-disable2"
            >
              <a href="#">Cancel</a>
            </button>
            <button
              className="Save-Chnages Save-Chnages-disable"
              id="remove-Save-Chnages-disable2"
            >
              <a href="#">Save Chnages</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationalDetailsSection;
