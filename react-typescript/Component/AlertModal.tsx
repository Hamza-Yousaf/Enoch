import React from "react";

interface alertProps {
  message: string;
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
}

const AlertModal: React.FC<alertProps> = ({
  message,
  showAlert,
  setShowAlert,
  success,
}) => {
  return (
    <div className="hModal">
      <div
        className="modal fade in"
        id="myModal"
        role="dialog"
        style={
          showAlert
            ? { display: "block", paddingRight: 17 }
            : { display: "none" }
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <h4>Alert</h4>
              </div>

              <div
                onClick={() => setShowAlert(false)}
                className="close modal-Close"
                data-dismiss="modal"
              >
                <img src="/images/hCross.png" alt="X" className="img-fluid" />
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-body-text">
                <p className={success ? "text-success" : "text-danger"}>
                  {message && message === "bad password"
                    ? "email or password is incorrect"
                    : message && message === "Failed to fetch"
                    ? "Something went wrong, please check your internet connection"
                    : message && message === "Argument Validation Error"
                    ? "Email is already registered with Enoch"
                    : message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
