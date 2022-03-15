import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state";
import { useDispatch, useSelector } from "react-redux";

const AttachmentsModal = () => {
  const [currentImage, setCurrentImage] = useState("images/drivinglicence.png");
  const dispatch = useDispatch();
  const { openMessageAttachments } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const openMessageAttachmentsValue = useSelector(
    (state: State) => state.openMessageAttachment
  );

  const closeAttachmentsModal = () => {
    openMessageAttachments(false);
  };

  const changeCurrentImage = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div className="attach-modal-block">
      <div
        id="attachment-modal"
        className={
          openMessageAttachmentsValue ? "modal fade open" : "modal fade"
        }
      >
        <div className="modal-content">
          <span onClick={closeAttachmentsModal} className="close">
            <img
              src="images/hclose.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="attach-body">
            <div className="attach-body-left">
              <div
                id="doc-DL"
                className={
                  currentImage === "images/drivinglicence.png"
                    ? "doccontent doc-block"
                    : "doccontent"
                }
              >
                <img
                  src="images/drivinglicence.png"
                  alt="driving licence"
                  className="img-fluid"
                />
              </div>
              <div
                id="doc-ID"
                className={
                  currentImage === "images/doc-img2.png"
                    ? "doccontent doc-block"
                    : "doccontent"
                }
              >
                <img
                  src="images/doc-img2.png"
                  alt="driving licence"
                  className="img-fluid"
                />
              </div>
              <div
                id="doc-PDF"
                className={
                  currentImage === "images/doc-img3.png"
                    ? "doccontent doc-block"
                    : "doccontent"
                }
              >
                <img
                  src="images/doc-img3.png"
                  alt="driving licence"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="attach-body-right">
              <ul>
                <li
                  onClick={() =>
                    changeCurrentImage("images/drivinglicence.png")
                  }
                >
                  <a
                    href="#"
                    className={
                      currentImage === "images/drivinglicence.png"
                        ? "doctalinks d-active"
                        : "doctablinks "
                    }
                  >
                    <img
                      src="images/drivinglicence-small.png"
                      alt="driving licence"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li onClick={() => changeCurrentImage("images/doc-img2.png")}>
                  <a
                    href="#"
                    className={
                      currentImage === "images/doc-img2.png"
                        ? "doctalinks d-active"
                        : "doctablinks "
                    }
                  >
                    <img
                      src="images/doc2-small.png"
                      alt="doc2-small"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li onClick={() => changeCurrentImage("images/doc-img3.png")}>
                  <a
                    href="#"
                    className={
                      currentImage === "images/doc-img3.png"
                        ? "doctalinks d-active"
                        : "doctablinks "
                    }
                  >
                    <img
                      src="images/PDF2-small.png"
                      alt="pdf"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachmentsModal;
