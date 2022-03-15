import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../../Component/onBoard/header"));
const Awards = dynamic(() => import("./Awards"));
const CommunityAppearance = dynamic(() => import("./CommunityAppearance"));
const CommunitySetting = dynamic(() => import("./CommunitySetting"));
const WikiPage = dynamic(() => import("./WikiPage"));
const AllUsers = dynamic(() => import("./AllUsers"));
const Banned = dynamic(() => import("./Banned"));
const Muted = dynamic(() => import("./Muted"));
const Approved = dynamic(() => import("./Approved"));
const Moderator = dynamic(() => import("./Moderator"));
const CommunityRightSideBar = dynamic(() => import("./CommunityRightSideBar"));

const CommunitySettings = () => {
  const [selectTab, setSelectTab] = useState("Community setting");

  const setSelectTabHandler = (value: string) => {
    setSelectTab(value)
  }

  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="community-body">
            <div className="row flex-row-reverse">
              <CommunityRightSideBar selectTab={selectTab} setSelectTabHandler={setSelectTabHandler} />
              <div className="col-lg-9">
                <div className="Manage-Community-tabs">
                  {selectTab == "Community setting" && <CommunitySetting />}
                  {selectTab == "Community Appearance" && <CommunityAppearance />}
                  {selectTab == "Awards" && <Awards />}
                  {selectTab == "Wiki page" && <WikiPage />}                 
                </div>

                <div className="User-Management-tabs">
                {selectTab == "All Users" && <AllUsers />}  
                {selectTab == "Banned" && <Banned />}  
                {selectTab == "Muted" && <Muted />}  
                {selectTab == "Approved" && <Approved />}  
                {selectTab == "Moderator" && <Moderator />}                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <!-- Modal --> */}
      <div className="invite-follwrs-modal">
        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

          <div className="web modal-dialog mbl ">
            <div className="modal-content modal-top">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Invite Followers</h5>

                <span className="invite-follwrs-close"><img src="/images/modal1.png" className="cursor" data-dismiss="modal" aria-label="Close" /></span>

              </div>
              <div className="modal-body">
                <div className="d-flex mb-25">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>

                  <div className="inviteeverything-cls">
                    <span className="checkbox-heading">Everything</span>

                    <p className="checkbox-description">Full access including the ability to manage moderator access and permissions.</p>
                  </div>
                </div>



                <div className="d-flex mb-25 mt-4">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div>
                    <span className="checkbox-heading">Manage Wiki Pages</span>
                    <p className="checkbox-description">Create and manage wiki pages and AutoMod*.</p>
                  </div>
                </div>

                <div className="d-flex mb-25">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div>
                    <span className="checkbox-heading">Monitor Chats</span>
                    <p className="checkbox-description">Remove messages, remove users, and lock chats.</p>
                  </div>
                </div>

                <div className="d-flex mb-25">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div>
                    <span className="checkbox-heading">Manage Chats</span>
                    <p className="checkbox-description">Create and manage chats, set up filters and rate limits, and block domains.</p>
                  </div>
                </div>

                <div className="d-flex mb-25">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div>
                    <span className="checkbox-heading">Manage Posts & Comments</span>
                    <p className="checkbox-description">Approve submitters and ban and mute users</p>
                  </div>
                </div>

                <div className="d-flex mb-25">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div>
                    <span className="checkbox-heading">Manage Users</span>
                    <p className="checkbox-description">Access queues, take action on content, and manage collections and events.</p>
                  </div>
                </div>

                <div className="d-flex mb-25">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div>
                    <span className="checkbox-heading">Manage Mod Mail</span>
                    <p className="checkbox-description">Read and respond to modmail and mute users*.</p>
                  </div>
                </div>

                <div className="d-flex mb-25">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div>
                    <span className="checkbox-heading">Manage Settings</span>
                    <p className="checkbox-description">Manage community settings, appearance, emojis, rules, and AutoMod*.</p>
                  </div>
                </div>


                <div className="d-flex mb-25">
                  <label className="mngmnt-container-checkbox mt-2 mr-2">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div>
                    <span className="checkbox-heading">Manage Flair</span>
                    <p className="checkbox-description">Create and manage user and post flair.</p>
                  </div>
                </div>

                <p className="modal-note">
                  *Note: To manage AutoMod, mods must have access to Wiki Pages and Manage Settings.
                  To mute users, mods must have access to Mod Mail and Manage Users.
                </p>



              </div>
              <div className="modal-footer mbl">
                <button type="button" className="btn inviteflwrs-cancel-btn" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn inviteflwrssave-btn">Save</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CommunitySettings;
