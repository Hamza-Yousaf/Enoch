import React, { useState } from "react";

const ManagenotiModal = () => {
  const [notified, setNotified] = useState("all-new-posts");

  return (
    <div
      id="managenoti-Modal"
      className="modal managenoti-headbg-modal"
      role="dialog"
    >
      <div className="modal-dialog">
        {/* <!-- Modal content--> */}
        <div className="modal-content managenoti-hd-content">
          <button
            type="button"
            className="close managenoti-modal-close"
            data-dismiss="modal"
          >
            <img src="/images/commCross.png" alt="X" className="img-fluid" />
          </button>
          <div className="managenoti-header">
            <h3 className="modal-title">Manage notifications</h3>
            <p>Manage notifications from community name</p>
          </div>
          <div className="managenoti-hd-modal-body">
            <ul>
              <li>
                <div className="publish-cat cust-mb-40">
                  <input
                    id="publish-select"
                    name="b-plan"
                    type="radio"                   
                  />
                  <label>
                    <p className="managenoti-txt1">All new posts</p>
                    <p className="managenoti-txt2">
                      Get notified about all new posts in this group
                    </p>
                  </label>
                </div>
                <div className="publish-cat cust-mb-40">
                  <input
                    id="publish-select2"
                    name="b-plan"
                    type="radio"
                    checked={false}                 
                  />
                  <label>
                    <p className="managenoti-txt1">Highlights</p>
                    <p className="managenoti-txt2">
                      Get notified about posts from people you may know
                    </p>
                  </label>
                </div>
                <div className="publish-cat cust-mb-4">
                  <input
                    id="publish-select2"
                    name="b-plan"
                    type="radio"             
                  />
                  <label>
                    <p className="managenoti-txt1">No new posts</p>
                    <p className="managenoti-txt2">
                      Only get notified about activity involving you
                    </p>
                  </label>
                </div>
              </li>
            </ul>
            <div className="managenoti-btnBlock">
              <button className="managenoti-save-btn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagenotiModal;
