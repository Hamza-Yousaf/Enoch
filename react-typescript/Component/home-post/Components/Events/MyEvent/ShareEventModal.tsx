import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";

const ShareEventModal = () => {
  const dispatch = useDispatch();

  const { showShareEventModal } = bindActionCreators(actionCreators, dispatch);

  const showShareEventModalValue = useSelector(
    (state: State) => state.showShareEventModal
  );
  return (
    <div className="Share-Event-Modal-sect">
      <div
        className={showShareEventModalValue ? "modal in" : "modal"}
        style={
          showShareEventModalValue
            ? { display: "block", background: "rgba(0,0,0,0.8)" }
            : {}
        }
        id="ShareEvent-Modal"
      >
        <div className="modal-dialog">
          <div className="modal-content Share-Event-Modal-content">
            <div className="Share-Event-Modal-header">
              <h1>Share This Event</h1>
              <button
                onClick={() => showShareEventModal(false)}
                type="button"
                className="close"
                data-dismiss="modal"
              >
                <img
                  src="/images/shere-event-modal-Close.png"
                  alt="X"
                  className="img-fluid"
                />
              </button>
            </div>

            <div className="Share-Event-Modal-body">
              <h2>Invite your friends to join you.</h2>
              <div className="share-media-sect">
                <ul>
                  <li className="Facebook">
                    <span>
                      <img
                        src="/images/event-share-facebook.png"
                        alt="Facebook"
                        className="img-fluid"
                      />
                    </span>
                    <h3>Share</h3>
                  </li>

                  <li className="twitter">
                    <span>
                      <img
                        src="/images/event-share-twitter.png"
                        alt="twitter"
                        className="img-fluid"
                      />
                    </span>
                    <h3>Tweet</h3>
                  </li>

                  <li className="linkedIn">
                    <span>
                      <img
                        src="/images/event-share-linkedIn.png"
                        alt="linkedIn"
                        className="img-fluid"
                      />
                    </span>
                    <h3>Post</h3>
                  </li>

                  <li className="Google">
                    <span>
                      <img
                        src="/images/event-share-Google.png"
                        alt="Google"
                        className="img-fluid"
                      />
                    </span>
                    <h3>Share</h3>
                  </li>

                  <li className="Text">
                    <span>
                      <img
                        src="/images/event-share-text.png"
                        alt="text-message"
                        className="img-fluid"
                      />
                    </span>
                    <h3>Text</h3>
                  </li>

                  <li className="Mail">
                    <span>
                      <img
                        src="/images/event-share-Mail.png"
                        alt="mail"
                        className="img-fluid"
                      />
                    </span>
                    <h3>Mail</h3>
                  </li>
                </ul>
              </div>
              <div className="Copy-Share-link-Sect">
                <h4>Share this link:</h4>
                <div className="Copy-Share-link-input">
                  <input type="text" />
                  <button>
                    <a href="#">COPY</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareEventModal;
