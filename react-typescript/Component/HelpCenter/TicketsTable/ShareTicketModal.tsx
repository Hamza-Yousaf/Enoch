import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import dynamic from "next/dynamic";
const NetworkMembersList = dynamic(() => import("./NetworkMembersList"));
const SelectedUser = dynamic(() => import("./SelectedUser"));
const ShareTextEditor = dynamic(() => import("./ShareTextEditor"));

const initialSelectedMembers: {
  img: string;
  name: string;
}[] = [];

const ShareTicketModal = () => {
  const [showNetworkMembersList, setShowNetworkMembersList] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState(
    initialSelectedMembers
  );

  const dispatch = useDispatch();
  const { showShareTicketModal, showShareTicketSuccessModal } =
    bindActionCreators(actionCreators, dispatch);
  const showShareTicketModalValue = useSelector(
    (state: State) => state.showShareTicketModal
  );

  const closeShareTicketModal = () => {
    showShareTicketModal(false);
  };

  const addMemberToShareTo = (e: any) => {
    setShowNetworkMembersList(true);
  };

  const sendSharedMessage = () => {
    showShareTicketModal(false);
    showShareTicketSuccessModal(true);
  };

  return (
    <div className="hModal-Two hModal-Two-and-three">
      <div
        className={
          showShareTicketModalValue === true ? "modal fade in" : "modal fade"
        }
        style={
          showShareTicketModalValue === true
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <h4>Share your message in your network</h4>
              </div>
              <div
                onClick={closeShareTicketModal}
                className="close modal-Close"
                data-dismiss="modal"
              >
                <img
                  src="images/hModal-close-icon.png"
                  alt="X"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-body-keyDropdown-and-input">
                <div className="Create-Support-dropdown-left">
                  <div className="position-relative">
                    <div className="onkeypress-DropBox">
                      {selectedMembers.map((member: any, key: any) => {
                        return (
                          <div
                            id="onkeypressdropdown"
                            className={"select-active d-flex flex-row"}
                          >
                            <SelectedUser
                              key={key}
                              memberImg={member.img}
                              memberName={member.name}
                            />
                          </div>
                        );
                      })}

                      <input
                        onClick={addMemberToShareTo}
                        className="timeSetting-droplist"
                        placeholder={
                          selectedMembers.length > 0
                            ? ""
                            : "Share the ticket within your network"
                        }
                      />
                    </div>
                    <div
                      id="onkeypress-DropdownList"
                      className={
                        showNetworkMembersList
                          ? "timeSetting-content custm-zindex-1 show"
                          : "timeSetting-content custm-zindex-1 "
                      }
                    >
                      <NetworkMembersList
                        setSelectedMembers={setSelectedMembers}
                        setShowNetworkMembersList={setShowNetworkMembersList}
                        selectedMembers={selectedMembers}
                      />
                    </div>
                  </div>
                </div>
                <div className="Create-Support-dropdown-right">
                  <input type="text" placeholder="Write subject" />
                </div>
              </div>

              <ShareTextEditor sendSharedMessage={sendSharedMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareTicketModal;
