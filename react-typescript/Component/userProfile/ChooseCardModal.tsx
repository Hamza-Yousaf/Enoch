import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { EDIT_AVATAR_MUTATION } from "../../graphql/mutattions/editAvatar";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../AlertModal"));


interface Props {
  showChooseCardModal: any;
  setShowChooseCardModal: any;
  user: any;
  userImage: any;
  userName: any;
  setShowAvatarEditModal: any;
  setShowEditProfileForm: any;
}

const ChooseCardModal: React.FC<Props> = ({
  showChooseCardModal,
  setShowChooseCardModal,
  user,
  userImage,
  userName,
  setShowAvatarEditModal,
  setShowEditProfileForm,
}) => {
  const [selectedCard, setSelectedCard] = useState(user?.cardAvatar);
  const [cardTitle, setCardTitle] = useState(user?.cardTitle);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [editAvatarMutation, { data, loading, error }] = useMutation(
    EDIT_AVATAR_MUTATION,
    {
      refetchQueries: [
        {
          query: GET_USER_PROFILE_QUERY,
        },
      ],
    }
  );

  const editAvatar = () => {
    editAvatarMutation({
      variables: {
        profileImage: userImage,
        cardAvatar: selectedCard,
        userName,
        cardTitle,
      },
    })
      .then((res) => {
        console.log(res);
        setShowAvatarEditModal(false);
        setShowEditProfileForm(false);
        setShowChooseCardModal(false);
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
        setMessage("something went wrong please try again");
        setSuccess(false);
      });
  };

  console.log(selectedCard, typeof selectedCard);

  useEffect(() => {
    if (!selectedCard) setSelectedCard(user?.cardAvatar);
  }, [user]);

  useEffect(() => {
    if (user) setCardTitle(user?.cardTitle);
  }, [user]);

  return (
    <>
      {showAlert && (
        <AlertModal
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          message={message}
          success={success}
        />
      )}

      <div className="changeuser-modal-block">
        <div
          id="changeImg-Modal"
          className={
            showChooseCardModal
              ? "modal fade changeuser-img-modal open"
              : "modal fade changeuser-img-modal "
          }
        >
          <div className="modal-dialog">
            <div className="modal-content changeuser-modal-content">
              <span
                onClick={() => {
                  setShowChooseCardModal(false);
                }}
                className="changeImg-close"
              >
                <img
                  src="images/proClose.png"
                  alt="close"
                  className="img-fluid"
                  data-dismiss="modal"
                />
              </span>
              <h3>Choose your card &amp; title</h3>
              <div className="userImg-modal-gall2">
                <div className="userImg-modal-gall-lft">
                  <div className="userImg-gall-lft">
                    <ul>
                      <li onClick={() => setSelectedCard("1")}>
                        <div className="userchangeAvImg-inner-block">
                          <div className="userchangeAvImg-overFrame">
                            <img
                              src="images/use-ava-img.png"
                              className="img-fluid"
                              alt="avatar"
                            />
                          </div>
                          <span
                            className={`userchangeAvImg-avatr userchangeAvImg-card3-img`}
                          >
                            <img
                              src={userImage || "images/user-Av4.png"}
                              className="img-fluid"
                              alt="avatar"
                            />
                          </span>
                          <p className="userchangeAvImg-lfttitle1">
                            {userName}
                          </p>
                          <div className="userchangeAvImg-bio-lfttxt1">
                            {cardTitle}
                          </div>
                          {selectedCard !== "1" && (
                            <div className="overly-active"></div>
                          )}
                        </div>
                      </li>

                      <li onClick={() => setSelectedCard("3")}>
                        <div className="userchangeAvImg-inner-block">
                          <div className="userchangeAvImg-overFrame">
                            <img
                              src="images/use-ava-img3.png"
                              className="img-fluid"
                              alt="avatar"
                            />
                          </div>
                          <span className="userchangeAvImg-avatr userchangeAvImg-card2-img">
                            <img
                              src={userImage || "images/user-Av4.png"}
                              className="img-fluid"
                              alt="avatar"
                            />
                          </span>
                          <p className="userchangeAvImg-lfttitle2">
                            {userName}
                          </p>
                          <div className="userchangeAvImg-bio-lfttxt2">
                            {cardTitle}
                          </div>
                          {selectedCard !== "3" && (
                            <div className="overly-active"></div>
                          )}
                        </div>
                      </li>
                      <li onClick={() => setSelectedCard("2")}>
                        <div className="userchangeAvImg-inner-block">
                          <div className="userchangeAvImg-overFrame">
                            <img
                              src="images/use-ava-img2.png"
                              className="img-fluid"
                              alt="avatar"
                            />
                          </div>
                          <span className="userchangeAvImg-avatr userchangeAvImg-card1-img">
                            <img
                              src={userImage || "images/user-Av4.png"}
                              className="img-fluid"
                              alt="avatar"
                            />
                          </span>
                          <p className="userchangeAvImg-lfttitle3">
                            {userName}
                          </p>
                          <div className="userchangeAvImg-bio-lfttxt3">
                            {cardTitle}
                          </div>
                          {selectedCard !== "2" && (
                            <div className="overly-active"></div>
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="userImg-gall-right">
                    <div className="userchangeAvImg-inner-block">
                      <div className="userchangeAvImg-overFrame">
                        <img
                          src={
                            selectedCard === "1"
                              ? "images/use-ava-img.png"
                              : selectedCard === "2"
                              ? "images/use-ava-img2.png"
                              : selectedCard === "3"
                              ? "images/use-ava-img3.png"
                              : ""
                          }
                          className="img-fluid"
                          alt="avatar"
                        />
                      </div>
                      <span
                        className={`userchangeAvImg-avatr ${
                          selectedCard === "1"
                            ? "userchangeAvImg-card3-img"
                            : selectedCard === "2"
                            ? "userchangeAvImg-card1-img"
                            : "userchangeAvImg-card2-img"
                        }`}
                      >
                        <img
                          src={userImage || "images/user-Av4.png"}
                          className="img-fluid"
                          alt="avatar"
                        />
                      </span>
                      <p
                        className={
                          selectedCard === "1"
                            ? "userchangeAvImg-title1"
                            : selectedCard === "2"
                            ? "userchangeAvImg-title2"
                            : selectedCard === "3"
                            ? "userchangeAvImg-title3"
                            : ""
                        }
                      >
                        {userName}
                      </p>
                      <div
                        className={
                          selectedCard === "1"
                            ? "pl-5 pr-5 userchangeAvImg-bio-txt"
                            : selectedCard === "2"
                            ? "pl-5 pr-5 userchangeAvImg-bio-txt-2"
                            : selectedCard === "3"
                            ? "pl-5 pr-5 userchangeAvImg-bio-txt-3"
                            : ""
                        }
                      >
                        <textarea
                          maxLength={16}
                          value={cardTitle}
                          onChange={(e) => setCardTitle(e.target.value)}
                          placeholder="Card  title...|"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="userImg-modal-gall-right">
                  <h3>Instructions!</h3>
                  <ul>
                    <li>
                      <span>1</span>Select your choice of card{" "}
                    </li>
                    <li>
                      <span>2</span>Write a title for your card. Max 16
                      characters.
                    </li>
                  </ul>
                  <div className="changeuserImg-confirm">
                    <button
                      onClick={editAvatar}
                      className="changeuserImg-continue-btn"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseCardModal;
