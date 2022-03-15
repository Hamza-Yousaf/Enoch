import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state";

const TransferTicketModal = () => {
  const [showTransferList, setShowTransferList] = useState(false);
  const [button1Class, setButton1Class] = useState(false);
  const [button2Class, setButton2Class] = useState(false);
  const [button3Class, setButton3Class] = useState(false);
  const [button4Class, setButton4Class] = useState(false);

  const [user1, setUser1] = useState(true);
  const [user2, setUser2] = useState(true);
  const [user3, setUser3] = useState(true);
  const [user4, setUser4] = useState(true);

  const dispatch = useDispatch();

  const showTransferTicketModalValue = useSelector(
    (state: State) => state.showTransferTicketModal
  );

  const { showTransferTicketModal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const toggleTransferList = () => {
    setShowTransferList(!showTransferList);
  };

  return (
    <div
      className={showTransferTicketModalValue ? "modal-open" : ""}
      style={showTransferTicketModalValue ? { paddingRight: 17 } : {}}
    >
      <div className="admin-Ticket-ID-Modal">
        <div
          id="Ticket-ID-Modal"
          className={
            showTransferTicketModalValue ? "modal fade in" : "modal fade"
          }
          style={
            showTransferTicketModalValue
              ? { display: "block" }
              : { display: "none" }
          }
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="Ticket-ID-popUp-sect">
                <div className="Ticket-ID-popUp-tittle">
                  <div
                    onClick={() => showTransferTicketModal(false)}
                    className="Ticket-ID-close close"
                    data-dismiss="modal"
                  >
                    <img
                      src="/images/ticket-id-popU-X.png"
                      alt="x"
                      className="img-fluid"
                    />
                  </div>
                  <h1>Ticket ID</h1>
                </div>
                <div className="Participents">
                  <h2>6 Participent</h2>
                </div>
                <div className="Ticket-ID-Add-People">
                  <div className="Add-People-img">
                    <img
                      src="/images/Add-People-icon.png"
                      alt="+"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Add-People-text">
                    <h3>Add People</h3>
                  </div>
                </div>
                <div className="Add-People-list">
                  <ul>
                    {user1 && (
                      <li
                        onMouseOver={() => setButton1Class(true)}
                        onMouseLeave={() => setButton1Class(false)}
                      >
                        <div className="user-dp">
                          <div className="user-dp-after-select">
                            <img
                              src="/images/hAdmin-avatars-1.png"
                              alt="avatar"
                              className="img-fluid dp"
                            />
                            <div className="active-green-dot-1 active-status">
                              <div className="active"></div>
                            </div>
                            <div className="share-ticket-user-name">
                              <h5>Robert Rose</h5>
                            </div>
                          </div>
                          {button1Class && (
                            <button
                              onClick={() => setUser1(false)}
                              className="btn-Remove"
                            >
                              <a href="#">Remove</a>
                            </button>
                          )}
                        </div>
                      </li>
                    )}
                    {user2 && (
                      <li
                        onMouseOver={() => setButton2Class(true)}
                        onMouseLeave={() => setButton2Class(false)}
                      >
                        <div className="user-dp">
                          <div className="user-dp-after-select">
                            <img
                              src="/images/usr1.png"
                              alt="avatar"
                              className="img-fluid dp"
                            />
                            <div className="active-green-dot-1 active-status">
                              <div className="active"></div>
                            </div>
                            <div className="share-ticket-user-name">
                              <h5>Regina Cooper, Support Desk</h5>
                            </div>
                          </div>
                          {button2Class && (
                            <button
                              onClick={() => setUser2(false)}
                              className="btn-Remove"
                            >
                              <a href="#">Remove</a>
                            </button>
                          )}
                        </div>
                      </li>
                    )}

                    {user3 && (
                      <li
                        onMouseOver={() => setButton3Class(true)}
                        onMouseLeave={() => setButton3Class(false)}
                      >
                        <div className="user-dp">
                          <div className="user-dp-after-select">
                            <img
                              src="/images/Luciana-Kerney.png"
                              alt="avatar"
                              className="img-fluid dp"
                            />
                            <div className="active-green-dot-1 active-status">
                              <div className="active"></div>
                            </div>
                            <div className="share-ticket-user-name">
                              <h5>Luciana Kerney, KYC Desk</h5>
                            </div>
                          </div>
                          {button3Class && (
                            <button
                              onClick={() => setUser3(false)}
                              className="btn-Remove"
                            >
                              <a href="#">Remove</a>
                            </button>
                          )}
                        </div>
                      </li>
                    )}

                    {user4 && (
                      <li
                        onMouseOver={() => setButton4Class(true)}
                        onMouseLeave={() => setButton4Class(false)}
                        className="no-border"
                      >
                        <div className="user-dp">
                          <div className="user-dp-after-select">
                            <img
                              src="/images/Annita-Feggins.png"
                              alt="avatar"
                              className="img-fluid dp"
                            />
                            <div className="active-green-dot-2 active-status">
                              <div className="active"></div>
                            </div>
                            <div className="share-ticket-user-name">
                              <h5>Annita Feggins, KYC Desk</h5>
                            </div>
                          </div>
                          {button4Class && (
                            <button
                              onClick={() => setUser4(false)}
                              className="btn-Remove"
                            >
                              <a href="#">Remove</a>
                            </button>
                          )}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="Add-People-list-show-more">
                  <a href="#">Show more</a>
                </div>
                <div className="Ticket-ID-Thread-Gallery">
                  <h1>Thread Gallery</h1>
                  <div className="Thread-Gallery-img">
                    <span>
                      <img
                        src="/images/Thread-Gallery-img.png"
                        alt="img"
                        className="img-fluid"
                        data-toggle="modal"
                        data-target="attachment-modal"
                      />
                    </span>
                    <span>
                      <img
                        src="/images/Thread-Gallery-img.png"
                        alt="img"
                        className="img-fluid"
                        data-toggle="modal"
                        data-target="attachment-modal"
                      />
                    </span>
                  </div>
                </div>
                <div className="Add-People-list-show-more">
                  <a href="#">Show more</a>
                </div>
                <div className="Thread-SETTINGS-headings">
                  <h1>Thread SETTINGS</h1>
                </div>
                <div className="Thread-SETTINGS-collaps">
                  <button
                    className={
                      showTransferList
                        ? "Transfer_Ticket_collapsible active"
                        : "Transfer_Ticket_collapsible"
                    }
                  >
                    <h6>Transfer Ticket</h6>
                    <div
                      onClick={toggleTransferList}
                      className="Transfer_Ticket_collapsible-icon"
                    >
                      <img
                        src="/images/Transfer-Ticket-plus.png"
                        alt="-"
                        className="img-fluid Transfer_Ticket-collpse-plus"
                      />
                      <img
                        src="/images/Transfer-Ticket-Minus.png"
                        alt="-"
                        className="img-fluid Transfer_Ticket-collpse-minus"
                      />
                    </div>
                  </button>
                  <div
                    className="Transfer_Ticket_collaps"
                    style={
                      showTransferList
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <div className="Add-People-list mt-0">
                      <ul>
                        <li>
                          <div className="user-dp">
                            <div className="user-dp-after-select">
                              <img
                                src="/images/Luciana-Kerney.png"
                                alt="avatar"
                                className="img-fluid dp"
                              />
                              <div className="active-green-dot-1 active-status">
                                <div className="active"></div>
                              </div>
                              <div className="share-ticket-user-name transfer-ticket-user-name">
                                <h5>Luciana Kerney, KYC Desk</h5>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="no-border">
                          <div className="user-dp">
                            <div className="user-dp-after-select">
                              <img
                                src="/images/Annita-Feggins.png"
                                alt="avatar"
                                className="img-fluid dp"
                              />
                              <div className="active-green-dot-2 active-status">
                                <div className="active"></div>
                              </div>
                              <div className="share-ticket-user-name transfer-ticket-user-name">
                                <h5>Annita Feggins, KYC Desk</h5>
                              </div>
                            </div>
                            <button className="btn-Confirm">
                              <a href="#">Confirm</a>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="TiCKET-Status-headings">
                  <h1>TiCKET Status</h1>
                </div>
                <div className="TiCKET-Status-checkbox">
                  <label className="Sloved">Sloved</label>
                  <input type="checkbox" />
                  <label className="Closed">Closed</label>
                  <input type="checkbox" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="TiCKET-Status-Leave-conversation TiCKET-Status-Leave-conversation-act"
                >
                  <h1>Leave conversation</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferTicketModal;
