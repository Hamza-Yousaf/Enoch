import React, { useState } from "react";

const SuperAdminRole = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptionsShow = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="roles_collaps-row roles_collaps-row-1">
      <button
        className={
          showOptions
            ? "roles_collapsible roles_collapsible-4 active"
            : "roles_collapsible roles_collapsible-4"
        }
      >
        <div className="roles_collapsible-btn">
          <div className="filterfancycheckbox">
            <label className="teamfiltercheck_container">
              <input type="checkbox" name="foo" className="cbox" />
              <span className="teamfiltercheckmark"></span>
            </label>
          </div>
          <label>Super Admin (1)</label>
        </div>
        <div
          onClick={toggleOptionsShow}
          className="Transfer_Ticket_collapsible-icon"
        >
          <img
            src="/images/Arrow-down.png"
            alt="down"
            className="img-fluid Sup-Admin-down"
          />
        </div>
      </button>
      <div
        className="roles_collaps"
        style={!showOptions ? {} : { display: "block" }}
      >
        <div
          className="
                    team-deatails-tbl
                    table-responsive
                    roles-collaps-Table-sect
                    pt-0
                  "
        >
          <div className="team-table roles-collaps-Table">
            <div className="TeamtableHeading border-bottom-gray">
              <div className="TeamtableCell pl-0">&nbsp;</div>
              <div className="TeamtableCell no-border">Member</div>
              <div className="TeamtableCell">Name</div>
              <div className="TeamtableCell">Job title</div>
              <div className="TeamtableCell">Role</div>
              <div className="TeamtableCell">Inheritance</div>
              <div className="TeamtableCell">Status</div>
              <div className="TeamtableCell">Action</div>
            </div>
            <div className="tableBody">
              <div className="TeamtableRow">
                <div className="TeamtableRowHeader">
                  <div className="TeamtableCell">
                    <div className="filterfancycheckbox">
                      <label className="teamfiltercheck_container">
                        <input type="checkbox" name="foo" className="cbox" />
                        <span className="teamfiltercheckmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt">
                      mikaelkayanian@enoch.dapp
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-name">
                      <a href="#">Mikael Kayanian</a>
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt admin-gray-clr">
                      Founder
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt admin-gray-clr">
                      Super Admin
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-inherit">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#ModalASSIGNrOLE"
                      >
                        <img
                          src="/images/pen-edit.png"
                          alt="edit"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-status st-active">active</div>
                  </div>
                  <div className="TeamtableCell pl-4">
                    <div className="TeamtableCell-action dropdown">
                      <a
                        href="#"
                        className=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="/images/Elipses.png"
                          alt="Elipses"
                          className="img-fluid"
                        />
                      </a>
                      <div className="dropdown-menu userStatus-drop-box">
                        <ul>
                          <li>
                            <a
                              className=""
                              href="#"
                              data-toggle="modal"
                              data-target="action-del-modal"
                            >
                              <span>
                                <img
                                  src="/images/Del.png"
                                  alt="delete"
                                  className="img-fluid"
                                />
                              </span>
                              Delete
                            </a>
                          </li>
                          <li>
                            <a className="" href="#">
                              <span>
                                <img
                                  src="/images/checkmark.png"
                                  alt="checkmark"
                                  className="img-fluid"
                                />
                              </span>
                              Enable
                            </a>
                          </li>
                          <li>
                            <a className="" href="#">
                              <span>
                                <img
                                  src="/images/permission.png"
                                  alt="permission"
                                  className="img-fluid"
                                />
                              </span>
                              Permission
                            </a>
                          </li>
                          <li>
                            <a className="" href="#">
                              <span>
                                <img
                                  src="/images/user.png"
                                  alt="profile"
                                  className="img-fluid"
                                />
                              </span>
                              Profile
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminRole;
