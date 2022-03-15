import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import dynamic from "next/dynamic";
const ForwardTextEditor = dynamic(() => import("./ForwardTextEditor"));


const ForwardTicketModal = () => {
  const dispatch = useDispatch();
  const { showForwardTicketModal, showShareTicketSuccessModal } =
    bindActionCreators(actionCreators, dispatch);

  const showForwardTicketModalValue = useSelector(
    (state: State) => state.showForwardTicketModal
  );

  const closeForwardTicketModal = () => {
    showForwardTicketModal(false);
  };

  const forwardMessage = () => {
    showForwardTicketModal(false);
    showShareTicketSuccessModal(true);
  };
  return (
    <div className="hModal-three hModal-Two-and-three">
      <div
        className={showForwardTicketModalValue ? "modal fade in" : "modal fade"}
        style={
          showForwardTicketModalValue
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <h4>Forword your message </h4>
              </div>
              <div
                onClick={closeForwardTicketModal}
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
                  <input type="email" placeholder="Enater mail id" />
                </div>
                <div className="Create-Support-dropdown-right">
                  <input type="text" placeholder="Write subject" />
                </div>
              </div>
              <ForwardTextEditor forwardMessage={forwardMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwardTicketModal;
