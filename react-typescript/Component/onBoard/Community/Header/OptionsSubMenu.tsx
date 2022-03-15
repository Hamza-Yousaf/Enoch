import React from "react";

interface Props {
  showOptionsSubMenu: boolean;
  setShowOptionsSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionsSubMenu: React.FC<Props> = ({
  showOptionsSubMenu,
  setShowOptionsSubMenu,
}) => {
  return (
    <div
      id="right-top-modal"
      className={showOptionsSubMenu ? " modal fade open" : "modal fade"}
    >
      <div className="modal-content right-top-modal-content">
        <span onClick={() => setShowOptionsSubMenu(false)} className="close">
          <img
            src="/images/postCross2.png"
            alt="close"
            className="img-fluid"
            data-dismiss="modal"
          />
        </span>
        <div className="right-top-body-block">
          <div className="right-top-body-block-lft">
            <form className="right-search-form">
              <div className="right-form-group">
                <img
                  src="/images/help-Search.png"
                  className="img-fluid"
                  alt="search"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search menu..."
                />
              </div>
            </form>
            <div className="enoch-community-scrollable">
              <div className="enoch-menu-block-panel">
                <div className="enoch-menu-block-lft">
                  <div className="enoch-menu-block-items">
                    <h2>Peronal</h2>
                    <ul>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon1.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Earn</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon2.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Ranking</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon3.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Billing</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon4.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Affiliate</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="enoch-menu-block-items">
                    <h2>Entertainment</h2>
                    <ul>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon11.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Popular</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon12.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Slots</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon13.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Live Casino</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon14.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Lottery</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon15.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Roulette</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon16.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Promotions</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="enoch-menu-block-items">
                    <h2>Advertising</h2>
                    <ul>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon19.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Ad Manager</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon20.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Enoch Ad</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="enoch-menu-block-items mb-0">
                    <h2>User Setting</h2>
                    <ul>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon26.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Your Profile</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon27.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Your Account</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="enoch-menu-block-right">
                  <div className="enoch-menu-block-items">
                    <h2>Social</h2>
                    <ul>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon5.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>My Networks</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon6.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Communities</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon7.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Artist Channels</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon8.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Company pages</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon9.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Events</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon10.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>News Feed</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="enoch-menu-block-items">
                    <h2>Shopping</h2>
                    <ul>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon17.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Digital Art Marketplace</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="enoch-menu-block-items">
                    <h2>Jobs</h2>
                    <ul>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon18.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Remote workhub</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="enoch-menu-block-items">
                    <h2>Developer</h2>
                    <ul>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon21.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Develop</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon22.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Grow</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon23.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Earn</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon24.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Github</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="right-modal-lft">
                          <img
                            src="/images/menu-icon25.png"
                            className="img-fluid"
                            alt="planner"
                          />
                        </div>
                        <div className="right-modal-right">
                          <a href="#">
                            <h3>Docs</h3>
                            <p>
                              Organise or find events and other things to do
                              online and nearby
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-top-body-block-right">
            <h3>Create</h3>
            <ul>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon1.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  Post
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon2.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  Community
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon3.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  Artist Channel
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon4.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  Group
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon5.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  Event
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon6.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  Company page
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon7.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  Job
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon8.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  Digital Art
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="/images/creat-icon8.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  AD
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsSubMenu;
