import React, { useState } from "react";

const WhereSignedInContents = () => {
  const [expandDetails, setExpandDetails] = useState(false);

  const toggleExpand = (): void => {
    setExpandDetails(!expandDetails);
  };

  return (
    <div
      className={
        expandDetails
          ? "enoch-acount-detail acc-active-parent"
          : "enoch-acount-detail"
      }
    >
      <div className="enoch-acount-detail-block">
        <div className="enoch-acount-detail-lft">
          <h5>Where you are Signed-In</h5>
          <p>Add a Phone number in case you have trouble Signing In</p>
        </div>
        <div
          className={
            expandDetails
              ? "enoch-acount-detail-right acc-active"
              : "enoch-acount-detail-right"
          }
        >
          <div className="enoch-acount-detail-bk">
            <span className="enoch-acount-view-btn">
              <span
                style={{ cursor: "pointer" }}
                onClick={toggleExpand}
                className="enoch-acount-view-cls enochaccordion-block"
              >
                Change
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={toggleExpand}
                className="enoch-acount-view-cls accordion-block-close"
              >
                close
              </span>
            </span>
          </div>
          <p>3 Active session</p>
        </div>
        <div className="accordion-content-blck">
          <div className="setting-signedin">
            <h3>You’re currently signed in to 3 sessions.</h3>
            <p>
              Here’s a list of all the places you’re signed into LinkedIn right
              now. You can see details about each session, sign out of
              individual sessions, or sign out of everywhere at once. You can
              also sign out of apps you've authorized with Enoch from the
              <a href="#">Permitted services</a> setting.
            </p>
            <div className="setting-session-tbl table-responsive">
              <table className="table">
                <thead>
                  <th>
                    <div className="session-tbl-hd">Session</div>
                  </th>
                  <th>
                    <div className="session-tbl-hd">Details </div>
                  </th>
                  <th>
                    <div className="session-tbl-hd"></div>
                  </th>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div className="session-tbl-txt">Current</div>
                    </td>
                    <td>
                      <div className="session-tbl-txt">
                        <p>Calcutta, West Bengal, India</p>
                        <p>(Approximate location)</p>
                        <p>Chrome on Windows</p>
                        <p>IP Address:</p>
                        <p>2292:4061:2ed2:43jm:29b7:8cb7:hghg:b556</p>
                        <p>IP Address Owner:</p>
                        <p>Reliance Jio Infocomm Limited</p>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="session-tbl-txt">4 Hours Ago</div>
                    </td>
                    <td>
                      <div className="session-tbl-txt">
                        <p>Calcutta, West Bengal, India</p>
                        <p>(Approximate location)</p>
                        <p>On Android</p>
                      </div>
                    </td>
                    <td>
                      <div className="setting-detailsignout">
                        <span>
                          <a href="#">Details</a>
                        </span>
                        <span>
                          <a href="#">Sign Out</a>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="session-tbl-txt">1 Month Ago</div>
                    </td>
                    <td>
                      <div className="session-tbl-txt">
                        <p>Pune, Maharashtra, India</p>
                        <p>(Approximate location)</p>
                        <p>Chrome Mobile on Android 10</p>
                      </div>
                    </td>
                    <td>
                      <div className="setting-detailsignout">
                        <span>
                          <a href="#">Details</a>
                        </span>
                        <span>
                          <a href="#">Sign Out</a>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Other active sessions (2)
              <a href="#">Sign out of all these sessions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereSignedInContents;
