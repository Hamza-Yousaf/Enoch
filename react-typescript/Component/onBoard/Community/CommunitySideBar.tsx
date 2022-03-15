import React from "react";

const CommunitySideBar = () => {
  return (
    <div className="enoch-community-manage-block-lft">
      <div className="mange-community-block">
        <h3>Manage Community</h3>
        <ul>
          <li className="mang-active">
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon1.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Community setting
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon2.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Community Appearance
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon3.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Awards
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon4.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Wiki page
            </a>
          </li>
        </ul>
      </div>
      <div className="mange-community-block">
        <h3>User Management</h3>
        <ul>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon5.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Banned
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon6.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Muted
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon7.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Approved
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon8.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Moderator
            </a>
          </li>
        </ul>
      </div>
      <div className="mange-community-block">
        <h3>Flair & Emoji</h3>
        <ul>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon9.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Grant User Flair
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon10.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Post Flair
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon11.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              User Flair
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon12.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Emoji
            </a>
          </li>
        </ul>
      </div>
      <div className="mange-community-block">
        <h3>Rules & Regulations</h3>
        <ul>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon9.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Rules
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon10.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Removal Reason
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon11.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Content Control
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img
                  src="/images/manage-icon12.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
              Automated
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommunitySideBar;
