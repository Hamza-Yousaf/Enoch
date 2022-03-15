import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";

const DeleteConfirmModal = () => {
  const dispatch = useDispatch();
  const {
    showDeleteConfirmModal,
    deleteInboxTickets,
    deleteSentTickets,
    deleteDraftTickets,
  } = bindActionCreators(actionCreators, dispatch);
  const showDeleteConfirmModalValue = useSelector(
    (state: State) => state.showDeleteConfirmModal
  );

  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );
  const deleteMarkedInboxTickets = () => {
    if (messageTab === "INBOX") {
      deleteInboxTickets(true);
    } else if (messageTab === "SENT") {
      deleteSentTickets(true);
    } else {
      deleteDraftTickets(true);
    }
  };

  const cancelDeleting = () => {
    showDeleteConfirmModal(false);
  };

  return (
    <div className="hModal">
      <div
        className="modal fade in"
        id="myModal"
        role="dialog"
        style={
          showDeleteConfirmModalValue
            ? { display: "block", paddingRight: 17 }
            : { display: "none" }
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <h4>Delete permanently</h4>
              </div>

              <div
                onClick={cancelDeleting}
                className="close modal-Close"
                data-dismiss="modal"
              >
                <img src="/images/hCross.png" alt="X" className="img-fluid" />
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-body-text">
                <p>
                  This messages will deleted parmanently from your inbox. This
                  cannot be <b>undone.</b>
                </p>
              </div>
              <div className="modal-body-btns">
                <button
                  onClick={cancelDeleting}
                  className="Cancle close"
                  data-dismiss="modal"
                >
                  <a href="#">Cancle</a>
                </button>
                <button onClick={deleteMarkedInboxTickets} className="Delete">
                  <a href="#">Delete</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
