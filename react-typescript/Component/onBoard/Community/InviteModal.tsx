import React, { useState } from "react";

const InviteModal = () => {

  return (
    <div className="modal" id="Invite-Attendees-Modal">
      <div className="modal-dialog">
        <div className="modal-content Invite-Attendees-Modal-content">

          {/* <!-- Modal Header --> */}
          <div className="Invite-Attendees-Modal-header">
            <h1>Invite Followers</h1>
            <button type="button" className="close" data-dismiss="modal"><img src="/images/shere-event-modal-Close.png" alt="X" className="img-fluid" /></button>
          </div>

          {/* <!-- Modal body --> */}
          <div className="Invite-Attendees-Modal-body">
            <div className="Invite-Attendees-Modal-searchBar">
              <button><img src="/images/invite-modal-Search.png" alt="icon" className="img-fluid" /></button>
              <input type="text" value="Amelia" />
            </div>
            <div className="Invite-Attendees-list-sect">
              <div className="Invite-Attendees-list-right">
                <div className="Invite-Attendees-list-people no-border">
                  <div className="Invite-Attendees-people-checkBox">
                    <input type="checkbox" />
                  </div>
                  <div className="Invite-Attendees-people-profilePic">
                    <img src="/images/event-invite-people1.png" alt="UserDP" className="img-fluid" />
                  </div>
                  <div className="Invite-Attendees-people-Text">
                    <h1>Amelia Margaret</h1>
                    <p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                  </div>
                </div>

                <div className="Invite-Attendees-list-people">
                  <div className="Invite-Attendees-people-checkBox">
                    <input type="checkbox" />
                  </div>
                  <div className="Invite-Attendees-people-profilePic">
                    <img src="/images/event-invite-people2.png" alt="UserDP" className="img-fluid" />
                  </div>
                  <div className="Invite-Attendees-people-Text">
                    <h1>Harry Callum</h1>
                    <p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                  </div>
                </div>

                <div className="Invite-Attendees-list-people">
                  <div className="Invite-Attendees-people-checkBox">
                    <input type="checkbox" />
                  </div>
                  <div className="Invite-Attendees-people-profilePic">
                    <img src="/images/event-invite-people3.png" alt="UserDP" className="img-fluid" />
                  </div>
                  <div className="Invite-Attendees-people-Text">
                    <h1>Thomas Joe </h1>
                    <p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                  </div>
                </div>

                <div className="Invite-Attendees-list-people">
                  <div className="Invite-Attendees-people-checkBox">
                    <input type="checkbox" />
                  </div>
                  <div className="Invite-Attendees-people-profilePic">
                    <img src="/images/event-invite-people4.png" alt="UserDP" className="img-fluid" />
                  </div>
                  <div className="Invite-Attendees-people-Text">
                    <h1>James Charlie</h1>
                    <p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                  </div>
                </div>

                <div className="Invite-Attendees-list-people">
                  <div className="Invite-Attendees-people-checkBox">
                    <input type="checkbox" />
                  </div>
                  <div className="Invite-Attendees-people-profilePic">
                    <img src="/images/event-invite-people5.png" alt="UserDP" className="img-fluid" />
                  </div>
                  <div className="Invite-Attendees-people-Text">
                    <h1>William Damian</h1>
                    <p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                  </div>
                </div>

                <div className="Invite-Attendees-list-people">
                  <div className="Invite-Attendees-people-checkBox">
                    <input type="checkbox" />
                  </div>
                  <div className="Invite-Attendees-people-profilePic">
                    <img src="/images/event-invite-people5.png" alt="UserDP" className="img-fluid" />
                  </div>
                  <div className="Invite-Attendees-people-Text">
                    <h1>William Damian</h1>
                    <p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                  </div>
                </div>


              </div>
              <div className="Invite-Attendees-list-left">
                <div className="Invite-Attendees-left-header">
                  <h1>1 Selected</h1>
                  <h2>Remove All</h2>
                </div>
                <ul>
                  <li>
                    <div className="Invite-Attendees-seleceted-list">
                      <div className="Invite-Attendees-seleceted-person-img">
                        <img src="/images/KieraThomson.png" alt="UserDP" className="img-fluid" />
                      </div>
                      <div className="Invite-Attendees-seleceted-person-name">
                        <h3>Amelia Margaret</h3>
                      </div>
                      <div className="Invite-Attendees-seleceted-person-close">
                        <img src="/images/selecetd-closeCross.png" alt="X" className="img-fluid" />
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
            <div className="Invite-Attendees-btn">
              <button><a href="#">Invite 1</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
