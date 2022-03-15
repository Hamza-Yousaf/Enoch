import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { GET_AVATAR_RPG, GET_AVATAR_APOCALYPSE, GET_AVATAR_ALIEN, GET_BACKGROUND_RPG, GET_BACKGROUND_APOCALYPSE, GET_BACKGROUND_ALIEN } from "../../../graphql/userProfileQueries";
import { COMPLETE_ON_BOARDING_MUTATION, USERNAME_CHECKER_MUTATION } from "../../../graphql/userProfileMutations";
import withApollo from "../../../lib/withApollo";
import { useMutation, useQuery } from "@apollo/client";
import { avatarList } from "../../../lib/avatarList";

const SelectUser: React.FC = () => {
  const router = useRouter();
  const [tab, setTab] = useState('avatar');
  const [avatarBtn, setAvatarBtn] = useState('rpg avatar');
  const [bgBtn, setBgBtn] = useState('rpg bg');
  const [reminderModel, setReminderModel] = useState(false);
  const [cardModel, setCardModel] = useState(false);


  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("funcationlity not supported");
  const [success, setSuccess] = useState(false);
  const [avatarArr, setAvatarArr] = useState(avatarList);
  const [bgArr, setBgArr] = useState([]);
  const [userName, setUserName] = useState('');

  /*query*/
  const getAvatarRPG = useQuery(GET_AVATAR_RPG);
  const getAvaterApocalypse = useQuery(GET_AVATAR_APOCALYPSE);
  const getAvatarAlien = useQuery(GET_AVATAR_ALIEN);
  const getBGRPG = useQuery(GET_BACKGROUND_RPG);
  const getBGApocalypse = useQuery(GET_BACKGROUND_APOCALYPSE);
  const getBGAlien = useQuery(GET_BACKGROUND_ALIEN);

  /*Mutation*/
  const [completeOnBoarding] = useMutation(COMPLETE_ON_BOARDING_MUTATION);
  const [userNameCheckerM] = useMutation(USERNAME_CHECKER_MUTATION);

  useEffect(() => {
    if (getAvatarRPG && getAvatarRPG?.data) {
      setAvatarArr(getAvatarRPG?.data?.RpgAvatat)
    }
    if (getBGRPG && getBGRPG?.data) {
      setBgArr(getBGRPG?.data?.BackgroundRpgImages)
    }
  }, [getAvatarRPG?.data, getBGRPG?.data]);

  const onBoardingHandler = () => {
    router.push("/onboarding-journey/term-condition");
    // completeOnBoarding().then((res) => {
    //   router.push("/onboarding-journey/term-condition");
    // })
    //   .catch((err) => {
    //     console.log(err.message);
    //     setMessage(err.message);
    //     setShowAlert(true);
    //     setSuccess(false);
    //   });
  };

  const setAvatarHandler = (value: string) => {
    setAvatarBtn(value);
    if (value == 'rpg avatar') {
      setAvatarArr(getAvatarRPG?.data?.RpgAvatat)
    }
    else if (value == 'apocalypse avatar') {
      setAvatarArr(getAvaterApocalypse?.data?.ApocalypseAvatat)

    }
    else if (value == 'alien avatar') {
      setAvatarArr(getAvatarAlien?.data?.AlienAvatar)
    }
  }

  const setBgHandler = (value: string) => {
    setBgBtn(value);
    if (value == 'rpg bg') {
      setBgArr(getBGRPG?.data?.BackgroundRpgImages)
    }
    else if (value == 'apocalypse bg') {
      setBgArr(getBGApocalypse?.data?.BackgroundApocalypseImages)

    }
    else if (value == 'alien bg') {
      setBgArr(getBGAlien?.data?.BackgroungAlienImages)
    }
  }


  const onUserNameHandler = (e: any) => {
    setUserName(e.target.value)
    userNameCheckerM({
      variables: {
        userName: e.target.value
      },
    })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err.message);
        setMessage(err.message);
        setShowAlert(true);
        setSuccess(false);
      });
  }

  return (
    <div className="row">
      <div className="onboarding-new-container">
        <div className="onboard-business-img-gal">
          <div className="business-hd-logo">
            <img
              src="/images/businessNewLogo.png"
              className="img-fluid"
              alt="logo"
            />
          </div>
          <h2>Create your profile</h2>
          <div
            className="business-user-imgGal"
            style={{
              backgroundImage: `url('/images/business-user-bg1.png')`,
            }}
          >
            <div className="business-user-select-namme-block">
              <div className="business-user-select-namme-hd">
                <h3>Select username</h3>
                <span>
                  <img
                    src="/images/userAlert.png"
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
                <div className="position-relative">
                  <span className="username-prefix">@</span>
                  <input
                    type="text"
                    className="timeSetting-droplist"
                    placeholder="Enter username (Max 11 letters, mix of numbers, and capital & lower letters  ) "
                    value={userName}
                    name="userName"
                    onChange={(e) => onUserNameHandler(e)}
                  />
                  {/* <!-- <span className="username-success"><img src="/images/business-tick.png" className="img-fluid" alt="tick"/></span> --> */}
                </div>
                <div
                  id="onkeypress-textareaList"
                  className="username-content custm-zindex-1"
                >
                  <span className="alert-red-cross">
                    <img
                      src="/images/rdCross.png"
                      className="img-fluid"
                      alt="cross"
                    />
                  </span>

                  {/* <!-- for user name avaiable -->
								<!-- <sapn className="alert-Ok"><img src="/images/usrOk.png" className="img-fluid" alt="ok"/></sapn> --> */}
                  <div className="username-content-innerbody">
                    <p className="business-username-drop-txt1">
                      <span>
                        <img
                          src="/images/redalert.png"
                          className="img-fluid"
                          alt="icon"
                        />
                      </span>
                      This username is already taken
                    </p>
                    <p className="business-username-drop-txt2">
                      Suggestion; Riddler22, Riddler45, Riddler33
                    </p>
                    {/* <!-- for user name avaiable -->
									<!-- <p className="business-username-drop-txt3">This username is available click ‘Ok’ to continue</p> --> */}
                  </div>
                </div>
              </div>
              <p>
                You can not change or apply Avatar or Background untill u choose
                a username .
              </p>
            </div>
            <div className="changeuserImg-modal-content-inner">
              <div className="changeuserImg-tab-block">
                <div className="changeuserImg-tabLink-block">
                  <ul>
                    <li>
                      <button
                        className={classnames("changeuserImg-tablinks", {
                          "active": tab == "avatar",

                        })}
                        onClick={() => setTab("avatar")}
                      >
                        Select your avatar
                      </button>{" "}
                    </li>
                    <li>
                      <button className={classnames("changeuserImg-tablinks", {
                        "active": tab == "bg",

                      })}
                        onClick={() => setTab("bg")}
                      >
                        Change Background Image
                      </button>{" "}
                    </li>
                  </ul>
                </div>
                <div className="changeuserImg-tabcontent-block">
                  <div
                    id="select-av"
                    className={classnames("changeuserImg_tabcontent", {
                      "changeuserImg-d-block": tab == "avatar",
                    })}


                  >
                    <div className="changeuserImg-Innertab-block">
                      <div className="changeuserImg-InnertabLink-block">
                        <ul>
                          <li>
                            <button
                              className={classnames("changeuserImg-Innertablinks-av", {
                                "active": avatarBtn == "rpg avatar",

                              })}
                              onClick={() => setAvatarHandler("rpg avatar")}

                            >
                              RPG AVATAR{" "}
                            </button>{" "}
                          </li>
                          <li>
                            <button className={classnames("changeuserImg-Innertablinks-av", {
                              "active": avatarBtn == "apocalypse avatar",

                            })}
                              onClick={() => setAvatarHandler("apocalypse avatar")}>
                              APOCALYPSE AVATAR{" "}
                            </button>{" "}
                          </li>
                          <li>
                            <button className={classnames("changeuserImg-Innertablinks-av", {
                              "active": avatarBtn == "alien avatar",

                            })}
                              onClick={() => setAvatarHandler("alien avatar")}>
                              ALIEN AVATAR{" "}
                            </button>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="changeuserImg-Innertabcontent-block">
                        <div
                          id="RPG-av"
                          className="changeAvImg_tabcontent changeuserImg-d-block"
                        >
                          <div className="changeAvImg-innerImg-block">
                            <div className="changeAvImg-innerImg-block-lft">
                              <img
                                src="/images/user-ava-img.png"
                                className="img-fluid"
                                alt="avatar"
                              />
                            </div>
                            <div className="changeAvImg-innerImg-block-right" onClick={() => setCardModel(true)}>
                              <ul>
                                {avatarArr?.length > 0 &&
                                  avatarArr.slice(0, 20).map((item, index) => {
                                    return (
                                      <li>
                                        <img
                                          src={
                                            item?.src != null
                                              ? item?.src
                                              : "/images/user-Av1.png"
                                          }
                                          className="img-fluid"
                                          alt="avatar"
                                          data-toggle="modal"
                                          data-target="changeImg-Modal"
                                        />
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                            <div className="changeuser-modal-block">
                              <div id="changeImg-Modal" className={classnames("modal fade changeuser-img-modal", {
                                "open": cardModel == true,

                              })}>
                                <div className="modal-dialog">
                                  <div className="modal-content changeuser-modal-content">
                                    <span className="changeImg-close"><img src="/images/proClose.png" alt="close" className="img-fluid" data-dismiss="modal" /></span>
                                    <h3>Choose your card &amp; title</h3>
                                    <div className="userImg-modal-gall2">
                                      <div className="userImg-modal-gall-lft">
                                        <div className="userImg-gall-lft">
                                          <ul>
                                            <li>
                                              <div className="userchangeAvImg-inner-block">
                                                <div className="userchangeAvImg-overFrame"><img src="/images/use-ava-img.png" className="img-fluid" alt="avatar" /></div>
                                                <span className="userchangeAvImg-avatr userchangeAvImg-card3-img"><img src="/images/user-Av4.png" className="img-fluid" alt="avatar" /></span>
                                                <p className="userchangeAvImg-lfttitle1">Hulk66</p>
                                                <div className="userchangeAvImg-bio-lfttxt1">Card  title...</div>
                                                <div className="overly-active"></div>
                                              </div>
                                            </li>

                                            <li>
                                              <div className="userchangeAvImg-inner-block">
                                                <div className="userchangeAvImg-overFrame"><img src="/images/use-ava-img3.png" className="img-fluid" alt="avatar" /></div>
                                                <span className="userchangeAvImg-avatr userchangeAvImg-card2-img"><img src="/images/user-Av4.png" className="img-fluid" alt="avatar" /></span>
                                                <p className="userchangeAvImg-lfttitle2">Hulk66</p>
                                                <div className="userchangeAvImg-bio-lfttxt2">Card  title...</div>

                                              </div>
                                            </li>
                                            <li>
                                              <div className="userchangeAvImg-inner-block">
                                                <div className="userchangeAvImg-overFrame">
                                                  <img src="/images/use-ava-img2.png" className="img-fluid" alt="avatar" />
                                                </div>
                                                <span className="userchangeAvImg-avatr userchangeAvImg-card1-img"><img src="/images/user-Av4.png" className="img-fluid" alt="avatar" /></span>
                                                <p className="userchangeAvImg-lfttitle3">Hulk66</p>
                                                <div className="userchangeAvImg-bio-lfttxt3">Card  title...</div>
                                                <div className="overly-active"></div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="userImg-gall-right">
                                          <div className="userchangeAvImg-inner-block">
                                            <div className="userchangeAvImg-overFrame">
                                              <img src="/images/use-ava-img3.png" className="img-fluid" alt="avatar" />

                                            </div>
                                            <span className="userchangeAvImg-avatr userchangeAvImg-card2-img"><img src="/images/user-Av4.png" className="img-fluid" alt="avatar" /></span>
                                            <p className="userchangeAvImg-card2-title">Hulk66</p>
                                            <div className="userchangeAvImg-card2-bio-txt"><textarea placeholder="Card  title...|"></textarea></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="userImg-modal-gall-right">
                                        <h3>Instructions!</h3>
                                        <ul>
                                          <li><span>1</span>Select your choice of card </li>
                                          <li><span>2</span>Write a title for your card.
                                            Max 16 characters.</li>
                                        </ul>
                                        <div className="changeuserImg-confirm" onClick={() => setCardModel(false)}><button className="changeuserImg-continue-btn">Confirm</button></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                        <div
                          id="APOCALYPSE-av"
                          className="changeAvImg_tabcontent"
                        >
                          <div className="changeAvImg-innerImg-block">
                            <div className="changeAvImg-innerImg-block-lft">
                              <img
                                src="/images/user-ava-img.png"
                                className="img-fluid"
                                alt="avatar"
                              />
                            </div>
                            <div className="changeAvImg-innerImg-block-right">
                              <ul>
                                {bgArr?.length > 0 &&
                                  bgArr.slice(0, 9).map((item, index) => {
                                    return (
                                      <li>
                                        <img
                                          src={
                                            item?.src != null
                                              ? item?.src
                                              : "/images/user-Av1.png"
                                          }
                                          className="img-fluid"
                                          alt="avatar"
                                        />
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div id="ALIEN-av" className="changeAvImg_tabcontent">
                          <div className="changeAvImg-innerImg-block">
                            <div className="changeAvImg-innerImg-block-lft">
                              <img
                                src="/images/user-ava-img.png"
                                className="img-fluid"
                                alt="avatar"
                              />
                            </div>
                            <div className="changeAvImg-innerImg-block-right">
                              <ul>
                                <li>
                                  <img
                                    src="/images/user-Av1.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av2.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av3.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av4.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av5.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av6.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av7.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av8.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av9.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av10.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av11.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av12.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av10.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av11.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                                <li>
                                  <img
                                    src="/images/user-Av12.png"
                                    className="img-fluid"
                                    alt="avatar"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="select-bg"
                    className={classnames("changeuserImg_tabcontent", {
                      "changeuserImg-d-block": tab == "bg",
                    })}
                  >
                    <div className="changeuserImg-Innertab-block">
                      <div className="changeuserImg-InnertabLink-block">
                        <ul>
                          <li
                          >
                            <button className={classnames("changeuserImg-Innertablinks-av", {
                              "active": bgBtn == "rpg bg",

                            })}
                              onClick={() => setBgHandler("rpg bg")}>
                              RPG BG{" "}
                            </button>{" "}
                          </li>
                          <li >
                            <button className={classnames("changeuserImg-Innertablinks-av", {
                              "active": bgBtn == "apocalypse bg",

                            })}
                              onClick={() => setBgHandler("apocalypse bg")}>
                              APOCALYPSE BG{" "}
                            </button>{" "}
                          </li>
                          <li >
                            <button className={classnames("changeuserImg-Innertablinks-av", {
                              "active": bgBtn == "alien bg",

                            })}
                              onClick={() => setBgHandler("alien bg")}>
                              ALIEN BG{" "}
                            </button>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="changeuserImg-Innertabcontent-block mt-4">
                        <div
                          id="RPG-bg"
                          className="changebgImg_tabcontent changeuserImg-d-block"
                        >
                          <div className="changeuserImg-bg-block">
                            <ul>
                              <li>
                                <img
                                  src="/images/changeImg-bg1.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg2.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg3.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg4.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg5.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg6.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg7.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg8.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg9.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          id="APOCALYPSE-bg"
                          className="changebgImg_tabcontent"
                        >
                          <div className="changeuserImg-bg-block">
                            <ul>
                              <li>
                                <img
                                  src="/images/changeImg-bg1.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg2.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg3.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg4.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg5.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg6.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg7.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg8.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg9.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div id="ALIEN-bg" className="changebgImg_tabcontent">
                          <div className="changeuserImg-bg-block">
                            <ul>
                              <li>
                                <img
                                  src="/images/changeImg-bg1.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg2.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg3.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg4.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg5.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg6.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg7.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg8.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                              <li>
                                <img
                                  src="/images/changeImg-bg9.png"
                                  className="img-fluid"
                                  alt="avatar"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="changeuserImg-continue"      
              onClick={() => onBoardingHandler()}
        
              >
                <button
                  className="changeuserImg-continue-btn"
                // continue-btn-disable
                // data-toggle="modal"
                // data-target="user-gentle-reminder"
                >
                  Continue
                </button>
              </div>
            <div className="onboard-gentleRemainder-block">
              <div
                id="user-gentle-reminder"
                className={classnames("modal fade onboard-gentleRemainder-modal", {
                  "open": reminderModel == true,
                })}
              >
                <div className="modal-dialog">
                  <div className="modal-content gentleRemainder-modalcontent">
                    <div className="gentleRemainder-modalcontent-hd">
                      <img
                        src="/images/gentleremainder-bg.png"
                        className="img-fluid"
                        alt="bg"
                      />
                      <div className="gentleremainder-hd-txt">
                        <h2>Gentle </h2>
                        <h3>Reminder</h3>
                      </div>
                    </div>
                    <div className="gentleremainder-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.{" "}
                      </p>

                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <ul>
                        <li>
                          1st Offense:{" "}
                          <span className="green-Rclr">
                            7-Day Incentive Freeze
                          </span>
                        </li>
                        <li>
                          2ndOffense:{" "}
                          <span className="yellw-Rclr">
                            14-Day Incentive Freeze
                          </span>
                        </li>
                        <li>
                          3rd and Final Offense:{" "}
                          <span className="accent-Rclr"> Incentive Freeze</span>
                        </li>
                        <li>
                          Special Condition:{" "}
                          <span className="red-Rclr"> Permanent Ban</span>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.{" "}
                      </p>

                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,.
                      </p>
                      <div className="gentleremainder-btn-grp" onClick={() => setReminderModel(false)}>
                        <button
                          className="gentleremainder-decline-btn"
                          data-dismiss="modal"
                        >
                          DECLINE
                        </button>
                        <button className="gentleremainder-agree-btn" onClick={() => {
                          setReminderModel(false), router.push("/");
                        }}>
                          AGREE (7)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(SelectUser, { getDataFromTree });