import React from "react";

interface Props {
  openActivitiesModal: boolean;
  setOpenActivitiesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActivitiesModal: React.FC<Props> = ({
  openActivitiesModal,
  setOpenActivitiesModal,
}) => {
  return (
    <div className="right-top-modal-block">
      <div
        id="right-top-modal"
        className={
          openActivitiesModal === true ? "modal fade open" : "modal fade"
        }
      >
        <div className="modal-content right-top-modal-content">
          <span onClick={() => setOpenActivitiesModal(false)} className="close">
            <img
              src="/images/postCross2.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="right-top-body-block">
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
            <ul>
              <li>
                <div className="right-modal-lft">
                  <img
                    src="/images/planner3.png"
                    className="img-fluid"
                    alt="planner"
                  />
                </div>
                <div className="right-modal-right">
                  <h3>Events</h3>
                  <p>
                    Organise or find events and other things to do online and
                    nearby
                  </p>
                </div>
              </li>
              <li>
                <div className="right-modal-lft">
                  <img
                    src="/images/handshake3.png"
                    className="img-fluid"
                    alt="handshake"
                  />
                </div>
                <div className="right-modal-right">
                  <h3>Find Friends</h3>
                  <p>
                    Organise or find events and other things to do online and
                    nearby
                  </p>
                </div>
              </li>
              <li>
                <div className="right-modal-lft">
                  <img
                    src="/images/network2.png"
                    className="img-fluid"
                    alt="network"
                  />
                </div>
                <div className="right-modal-right">
                  <h3>Community</h3>
                  <p>
                    Organise or find events and other things to do online and
                    nearby
                  </p>
                </div>
              </li>
              <li>
                <div className="right-modal-lft">
                  <img
                    src="/images/envelope1.png"
                    className="img-fluid"
                    alt="envelope"
                  />
                </div>
                <div className="right-modal-right">
                  <h3>News Feed</h3>
                  <p>
                    Organise or find events and other things to do online and
                    nearby
                  </p>
                </div>
              </li>
              <li>
                <div className="right-modal-lft">
                  <img
                    src="/images/flag1.png"
                    className="img-fluid"
                    alt="flag"
                  />
                </div>
                <div className="right-modal-right">
                  <h3>Create Company Pages</h3>
                  <p>
                    Organise or find events and other things to do online and
                    nearby
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesModal;
