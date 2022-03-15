import React from "react";

export interface LaunchpadProps {
  setShowConsoleHomePage: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLaunchpad: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminLaunchPad: React.FC<LaunchpadProps> = ({
  setShowConsoleHomePage,
  setShowLaunchpad,
  setShowAddUser,
}) => {
  const goToAdminConsole = () => {
    setShowConsoleHomePage(true);
    setShowLaunchpad(false);
    setShowAddUser(false);
  };
  return (
    <div>
      <div className="admin-launchpad-block">
        <div className="admin-launchpad-block-head">I am an admin</div>
        <div className="admin-user-blocks">
          <ul>
            <li onClick={goToAdminConsole}>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                I AM
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img3.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img4.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                Identity & Organization
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img
                    src="/images/admin-user-img1.png"
                    alt="admin"
                    className="img-fluid admin-img1"
                  />
                  <img
                    src="/images/admin-user-img2.png"
                    alt="admin"
                    className="img-fluid admin-img2"
                  />
                </span>
                -
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLaunchPad;
