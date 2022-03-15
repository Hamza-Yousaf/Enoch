import React from "react";
import { LaunchpadProps } from "./AdminLaunchPad";

const AdminConsoleHomepage: React.FC<LaunchpadProps> = ({
  setShowConsoleHomePage,
  setShowLaunchpad,
  setShowAddUser,
}) => {
  const backToLaunchPad = () => {
    setShowConsoleHomePage(false);
    setShowLaunchpad(true);
    setShowAddUser(false);
  };

  const addAUser = () => {
    setShowConsoleHomePage(false);
    setShowLaunchpad(false);
    setShowAddUser(true);
  };

  return (
    <div className="row Launchpad-container">
      <div className="ezl-dashboard-container">
        <div onClick={backToLaunchPad} className="Launchpad-back-btn">
          <img src="/images/back-btn.png" alt="icon" className="img-fluid" />
        </div>
        <div className="Launchpad-body">
          <div className="Yay">
            <div className="Yay-logo">
              <img src="/images/yay.png" alt="Yay" className="img-fluid" />
            </div>
            <div className="Yay-text">
              <p>
                Welcome to your new Admin console homepage You'll find easier
                navigation and quick access to common user, billing and domain
                tasks. Stay tuned for more enhancement
              </p>
            </div>
          </div>
          <div className="Launchpad-cards-sect">
            <div className="row">
              <div className="col-md-4">
                <div className="Launchpad-3card user-card">
                  <div className="Launchpad-3card-headings">
                    <div className="Launchpad-3card-headings-img">
                      <img
                        src="/images/launchpad-men.png"
                        alt="avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="Launchpad-3card-headings-text">
                      <h1>User</h1>
                    </div>
                  </div>
                  <div className="Launchpad-3card-headings-body">
                    <h2 onClick={addAUser}>ADD USER</h2>
                    <h3>Delete a USER</h3>
                    <h3>UPDATE A USER's name & EMail</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="Launchpad-3card Billing-card">
                  <div className="Launchpad-3card-headings">
                    <div className="Launchpad-3card-headings-img">
                      <img
                        src="/images/launchpad-men.png"
                        alt="avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="Launchpad-3card-headings-text">
                      <h1>Billing</h1>
                    </div>
                  </div>
                  <div className="Launchpad-3card-headings-body">
                    <h2>ADD USER</h2>
                    <h3>Delete a USER</h3>
                    <h3>UPDATE A USER’s name & EMail</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="Launchpad-3card DOMAIN-card">
                  <div className="Launchpad-3card-headings">
                    <div className="Launchpad-3card-headings-img">
                      <img
                        src="/images/launchpad-men.png"
                        alt="avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="Launchpad-3card-headings-text">
                      <h1>DOMAIN</h1>
                    </div>
                  </div>
                  <div className="Launchpad-3card-headings-body">
                    <h2>ADD USER</h2>
                    <h3>Delete a USER</h3>
                    <h3>UPDATE A USER’s name & EMail</h3>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>GROUPS</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>APPS</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>DEVICES</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>ACCOUnT SETTINGS</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>Organizational units</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>Security</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>Reports</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>buildings and resources</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>rules</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>Admin roles</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>data migration</h1>
                    <p>Create groups for mailing lists and applying policies</p>
                  </div>
                </div>
              </div>

              <div className="col-4 custom-col-4">
                <div className="Launchpad-cards">
                  <div className="Launchpad-cards-img">
                    <img
                      src="/images/team.png"
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Launchpad-cards-text">
                    <h1>support</h1>
                    <p>Create groups for mailing lists and applying policies</p>
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

export default AdminConsoleHomepage;
