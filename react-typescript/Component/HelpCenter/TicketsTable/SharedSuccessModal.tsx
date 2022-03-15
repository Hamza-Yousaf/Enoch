import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

const SharedSuccessModal = () => {
  const dispatch = useDispatch();
  const { showShareTicketSuccessModal } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const showShareTicketModalSuccessValue = useSelector(
    (state: State) => state.showSharedTicketSuccessModal
  );

  const closeSuccessModal = () => {
    showShareTicketSuccessModal(false);
  };
  return (
    <div className="hModal hModal-Success hModal-Two-and-three">
      <div
        className={
          showShareTicketModalSuccessValue ? "modal fade in" : "modal fade"
        }
        style={
          showShareTicketModalSuccessValue
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <div className="modal-success-icon">
                  <img
                    src="images/hSuccess.png"
                    alt="✅"
                    className="img-fluid"
                  />
                </div>
                <h5>The messge has been sent successfully</h5>
              </div>
              <div
                onClick={closeSuccessModal}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedSuccessModal;
