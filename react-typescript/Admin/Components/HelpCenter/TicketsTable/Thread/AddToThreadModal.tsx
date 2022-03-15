import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";

const AddToThreadModal = () => {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const dispatch = useDispatch();

  const { showAddToThreadModal } = bindActionCreators(actionCreators, dispatch);

  const showAddToThreadModalValue = useSelector(
    (state: State) => state.showAddToThreadModal
  );

  const toggleCatListShow = () => {
    setShowCategoryList(!showCategoryList);
  };
  return (
    <div className="addthread-modal-block">
      <div
        id="addthread-modal"
        className={showAddToThreadModalValue ? "modal fade open" : "modal fade"}
      >
        <div className="modal-content">
          <span className="close">
            <img
              onClick={() => showAddToThreadModal(false)}
              src="/images/threadCross.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="addthread-body">
            <h2>Add to Thread</h2>
            <div className="position-relative">
              <div onClick={toggleCatListShow} className="threadCat-drop-box">
                <a href="javascript:void(0)" className="threadCat-droplist">
                  Select Category
                </a>
              </div>
              <div
                id="threadCat-DropdownList"
                className={
                  showCategoryList
                    ? "threadCat-content custm-zindex-1 show"
                    : "threadCat-content custm-zindex-1"
                }
              >
                <ul className="drop-scrollable">
                  <li onClick={toggleCatListShow}>KYC/AML</li>
                  <li onClick={toggleCatListShow}>Profile</li>
                  <li onClick={toggleCatListShow}>Account</li>
                  <li onClick={toggleCatListShow}>Exchange</li>
                  <li onClick={toggleCatListShow}>Launchpad</li>
                </ul>
              </div>
            </div>
            <h3>Suggested</h3>
            <div className="suggested-list-block">
              <div className="suggested-list-block-inner">
                <ul>
                  <li>
                    <div className="suggested-user-block">
                      <div className="suggested-user">
                        <img
                          src="/images/user8.png"
                          alt="user"
                          className="img-fluid mr-2"
                        />
                        Samual Fick, KYC Desk
                      </div>
                      <div>
                        <label className="suggested-user-container">
                          <input
                            type="radio"
                            name="radio"
                            className="suggested-input"
                          />
                          <span className="suggested-user-checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suggested-user-block">
                      <div className="suggested-user">
                        <img
                          src="/images/user6.png"
                          alt="user"
                          className="img-fluid mr-2"
                        />
                        Chuck Witherington, KYC Desk
                      </div>
                      <div>
                        <label className="suggested-user-container">
                          <input
                            type="radio"
                            name="radio1"
                            className="suggested-input"
                          />
                          <span className="suggested-user-checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suggested-user-block">
                      <div className="suggested-user">
                        <img
                          src="/images/user3.png"
                          alt="user"
                          className="img-fluid mr-2"
                        />
                        Jack Williams, KYC Desk
                      </div>
                      <div>
                        <label className="suggested-user-container">
                          <input
                            type="radio"
                            name="radio2"
                            className="suggested-input"
                          />
                          <span className="suggested-user-checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suggested-user-block">
                      <div className="suggested-user">
                        <img
                          src="/images/user7.png"
                          alt="user"
                          className="img-fluid mr-2"
                        />
                        Jacquline Gantt, KYC Desk
                      </div>
                      <div>
                        <label className="suggested-user-container">
                          <input
                            type="radio"
                            name="radio3"
                            className="suggested-input"
                          />
                          <span className="suggested-user-checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suggested-user-block">
                      <div className="suggested-user">
                        <img
                          src="/images/user5.png"
                          alt="user"
                          className="img-fluid mr-2"
                        />
                        Luciana Kerney, KYC Desk
                      </div>
                      <div>
                        <label className="suggested-user-container">
                          <input
                            type="radio"
                            name="radio4"
                            className="suggested-input"
                          />
                          <span className="suggested-user-checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suggested-user-block">
                      <div className="suggested-user">
                        <img
                          src="/images/user4.png"
                          alt="user"
                          className="img-fluid mr-2"
                        />
                        Annita Feggins, KYC Desk
                      </div>
                      <div>
                        <label className="suggested-user-container">
                          <input
                            type="radio"
                            name="radio5"
                            className="suggested-input"
                          />
                          <span className="suggested-user-checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="suggested-btn-block">
              <a
                href="#"
                className="bttn-primary bttn-disable2 suggested-btn"
                id="suggested-btn-ID"
              >
                Done
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToThreadModal;
