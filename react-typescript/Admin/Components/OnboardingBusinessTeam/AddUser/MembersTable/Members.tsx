import React from "react";
import { TabProps } from ".";

const Members: React.FC<TabProps> = ({ currentTab, changeTab }) => {
  return (
    <div
      id="members"
      className={
        currentTab === "members"
          ? "supporttabcontent grid-d-block"
          : "supporttabcontent"
      }
    >
      <div className="team-role-table-block">
        <div className="team-role-table-hd-txt">
          <span>
            <img src="/images/filter.png" alt="filter" className="img-fluid" />
          </span>
          FILTER TABLE
        </div>
        <div className="team-deatails-tbl table-responsive">
          <div className="team-table">
            <div className="TeamtableHeading">
              <div className="TeamtableCell pl-0">Team</div>
              <div className="TeamtableCell">Member</div>
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
                      <a href="#">
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
                  <div className="TeamtableCell">
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
                      reginacooper01@gmail.com
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-name">
                      <a href="#">Regina Cooper</a>
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt admin-gray-clr">
                      KYC Support Desk
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt admin-gray-clr"></div>
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
                    <div className="TeamtableCell-status st-enable">
                      enabled
                    </div>
                  </div>
                  <div className="TeamtableCell">
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
                      annita.feggins@outlook.com
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-name">
                      <a href="#">Annita Feggins</a>
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt admin-gray-clr">
                      KYC Support Desk
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt admin-gray-clr">
                      KYC, Technical Support
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-inherit">
                      <a href="#">
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
                  <div className="TeamtableCell">
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
                    <div className="TeamtableCell-txt">Luciana01@gmail.com</div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-name">
                      <a href="#">Luciana Kerney</a>
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt admin-gray-clr">
                      Technical Lead
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-txt admin-gray-clr">
                      KYC, Technical Support
                    </div>
                  </div>
                  <div className="TeamtableCell">
                    <div className="TeamtableCell-inherit">
                      <a href="#">
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
                  <div className="TeamtableCell">
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

export default Members;
