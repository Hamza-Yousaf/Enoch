import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { boolean } from "yup/lib/locale";
import { CHECK_USERNAME_MUTATION } from "../../graphql/mutattions/checkUsername";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import dynamic from "next/dynamic";
const ChooseCardModal = dynamic(() => import("./ChooseCardModal"));


import SelectAvatar from "./SelectAvatar";
import SelectBg from "./SelectBg";

interface Props {
  showAvatarEditModal: any;
  setShowAvatarEditModal: any;
  avatarModalTab: any;
  setAvatarModalTab: any;
  user: any;
  setShowEditProfileForm: any;
}

const AvatarChangeModal: React.FC<Props> = ({
  showAvatarEditModal,
  setShowAvatarEditModal,
  avatarModalTab,
  setAvatarModalTab,
  setShowEditProfileForm,
}) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(user?.userName);
  const [userNameAlreadyTaken, setUserNameAlreadyTaken] = useState(false);

  const { data, loading, error } = useQuery(GET_USER_PROFILE_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const checkUserNameMutationData = useMutation(CHECK_USERNAME_MUTATION);

  const checkUserName = checkUserNameMutationData[0];

  const checkTheUserName = (userName: any) => {
    if (userName !== user?.userName) {
      checkUserName({
        variables: {
          userName: userName,
        },
      })
        .then((res) => {
          console.log(res);
          setUserNameAlreadyTaken(res?.data?.CheckIfUserNameIsAlreadyTaken);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (data) {
      setUser(data?.getUserProfile);
    }
  }, [data, user]);

  useEffect(() => {
    if (user) {
      if (!userName) setUserName(user?.userName);
    }
  }, [user]);

  console.log(userName);

  return (
    <>
      <div
        id="changeImg-Modal2"
        className={
          showAvatarEditModal
            ? "modal changeImg-edit-modal in"
            : "modal changeImg-edit-modal"
        }
        style={
          showAvatarEditModal
            ? {
                display: "block",
                background: "rgba(0,0,0,0.9)",
                overflowY: "scroll",
                paddingLeft: "200px !important",
              }
            : {}
        }
      >
        <div className="modal-dialog">
          {/* <!-- Modal content --> */}
          <div className="modal-content changeImg-modal-content">
            <span
              onClick={() => setShowAvatarEditModal(false)}
              className="close"
            >
              <img
                src="images/proClose.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>
            <div className="business-user-select-namme-block">
              <div className="business-user-select-namme-hd">
                <h3>Select username</h3>
                <span>
                  <img
                    src="images/userAlert.png"
                    className="img-fluid"
                    alt="info"
                  />
                  <div className="businessusr-info-txt">
                    In the case of your username, remember that will have to be
                    unique, you need to be aware of before you change your
                    username. First, your username can only be changed once
                    every 30 days, so make sure it’s one you can live with, at
                    least for that period.
                  </div>
                </span>
              </div>

              <div className="business-username-select-box">
                <div className="position-relative ">
                  <span className="username-prefix">@</span>
                  <input
                    type="text"
                    placeholder="Enter username (Max 11 letters, mix of numbers, and capital & lower letters  ) "
                    value={
                      /^@/.test(user?.userName)
                        ? userName?.replace("@", "")
                        : userName
                    }
                    onChange={(e) => {
                      console.log(e.target.value);
                      checkTheUserName(e.target.value);
                      setUserName(e.target.value);
                    }}
                    onBlur={() =>
                      console.log("check if username already exists")
                    }
                  />
                </div>
                <div
                  id="onkeypress-textareaList"
                  className={"username-content custm-zindex-1 show"}
                >
                  {userNameAlreadyTaken && (
                    <span className="alert-red-cross">
                      <img
                        src="images/rdCross.png"
                        className="img-fluid"
                        alt="cross"
                      />
                    </span>
                  )}
                  {userNameAlreadyTaken === false && (
                    <span className="alert-red-cross">
                      <img
                        src="images/business-tick.png"
                        className="img-fluid"
                        alt="tick"
                      />
                    </span>
                  )}
                  {userNameAlreadyTaken && (
                    <div className="username-content-innerbody">
                      <p className="business-username-drop-txt1">
                        <span>
                          <img
                            src="images/redalert.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>
                        This username is already taken
                      </p>
                      {/* <p className="business-username-drop-txt2">
    Suggestion; Riddler22, Riddler45, Riddler33
  </p> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-content changeImg-modal-content-inner">
              <div className="changeImg-tab-block">
                <div className="changeImg-tabLink-block">
                  <ul>
                    <li>
                      <button
                        className={
                          avatarModalTab === "avatar"
                            ? "changeImg-tablinks active"
                            : "changeImg-tablinks"
                        }
                        onClick={() => setAvatarModalTab("avatar")}
                      >
                        Select your avatar
                      </button>{" "}
                    </li>
                    <li>
                      <button
                        className={
                          avatarModalTab === "bg"
                            ? "changeImg-tablinks active"
                            : "changeImg-tablinks"
                        }
                        onClick={() => setAvatarModalTab("bg")}
                      >
                        Change Background Image
                      </button>{" "}
                    </li>
                  </ul>
                </div>
                <div className="changeImg-tabcontent-block">
                  <SelectAvatar
                    avatarModalTab={avatarModalTab}
                    setAvatarModalTab={setAvatarModalTab}
                    user={user}
                    setShowAvatarEditModal={setShowAvatarEditModal}
                    userName={userName}
                    setShowEditProfileForm={setShowEditProfileForm}
                  />
                  <SelectBg
                    avatarModalTab={avatarModalTab}
                    setAvatarModalTab={setAvatarModalTab}
                    setShowAvatarEditModal={setShowAvatarEditModal}
                  />
                </div>
              </div>
            </div>
            {/* <!-- <div className="changeImg-btn-block">
              <button className="changeImg-back-bttn">Back</button>
              <button className="changeImg-apply-bttn">Apply</button>
            </div> --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarChangeModal;
