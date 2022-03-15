import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../../../Component/onBoard/header"));
const EventDescription = dynamic(() => import("./EventDescription"));
const EventHeader = dynamic(() => import("./EventHeader"));
const EventSideBar = dynamic(() => import("./EventSideBar"));
const InviteFollowersModal = dynamic(() => import("./InviteFollowersModal"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";
const ShareEventModal = dynamic(() => import("./ShareEventModal"));

const MyEvent = () => {
  const dispatch = useDispatch();
  const { showInviteAttendeesModal } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const showInviteAttendeesModalValue = useSelector(
    (state: State) => state.showInviteAttendeesModal
  );
  return (
    <div
      className={
        showInviteAttendeesModalValue
          ? "your-event-body modal-open"
          : "your-event-body"
      }
      style={showInviteAttendeesModalValue ? { paddingRight: 17 } : {}}
    >
      <div className="container-fluid dashboard-body-bg second-body-bg">
        <Header />
        <div className="row">
          <div className="ezl-dashboard-container">
            <div className="dApp-S-Home-body">
              <div className="row m-0">
                <div className="col-lg-9 p-0">
                  <div className="your-event-page-left-sect">
                    <EventHeader />
                    <InviteFollowersModal />
                    <ShareEventModal />
                    <EventDescription />
                  </div>
                </div>
                <EventSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEvent;
