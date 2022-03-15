import React, { useState, useCallback, useEffect } from "react";
import classnames from "classnames";
import { useDropzone, FileRejection, FileError } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_COUNTRIES,
  GET_USER_PROFILE_QUERY,
} from "../../../graphql/queries";
import {
  ALIENSS_AVATAR,
  APOCALYPSE_AVATARA,
  BACKGROUND_AVATAR,
  RPG_AVATAR_IMAGES,
} from "../../../graphql/Queries/homepostQuery";
import withCountryData from "../../../lib/withCountryData";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { EDIT_USER_PROFILE_MUTATION } from "../../../graphql/mutations";
import { UPDATE_USER_AVATAR_PROFILE } from "../../../graphql/mutattions/homePost";
import router from "next/router";

export interface UploadableFile {
  file: File;
  errors: FileError[];
}

const BoardingJourProfile: React.FC = () => {
  const [files, setFiles] = useState<UploadableFile[]>([]);
  const [currentCountry, setCurrentCountry] = useState({
    name: "United Kingdom",
    code: "GB",
  });
  const [currentCity, setCurrentCity] = useState("");
  const [website, setWebsite] = useState("");
  const [DOB, setDOB] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [showCityList, setShowCityList] = useState(false);

  const [tab, setTab] = useState("avatar");
  const [avatarBtn, setAvatarBtn] = useState("rpg avatar");
  const [bgBtn, setBgBtn] = useState("rpg bg");
  const [avatarset, setavatarset] = useState("rpg");

  const dispatch = useDispatch();

  const { showEditProfileModal, userProfile } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const showEditProfileModalValue = useSelector(
    (state: State) => state.showEditProfileModal
  );

  const openEditProfileModal = () => {
    showEditProfileModal(true);
  };

  const closeEditProfileModal = () => {
    showEditProfileModal(false);
  };

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const profilePictureUrlValue = useSelector(
    (state: State) => state.profilePictureUrl
  );

  const coverImageUrlValue = useSelector((state: State) => state.coverImageUrl);

  const { data, loading, error } = useQuery(GET_USER_PROFILE_QUERY);

  const user = data?.getUserProfile;

  if (user) {
    userProfile(user);
  }
  console.log(user);
  const [showCountryList, setShowCountryList] = useState(false);

  const toggleCountryDropdown = () => {
    setShowCountryList(!showCountryList);
    setShowCityList(false);
  };

  const handleWebsiteChange = (e: any) => {
    setWebsite(e.target.value);
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleBioChange = (e: any) => {
    setBio(e.target.value);
  };

  const handleDOBChange = (e: any) => {
    setDOB(e.target.value);
  };
  const editProfile = useMutation(EDIT_USER_PROFILE_MUTATION, {
    refetchQueries: [{ query: GET_USER_PROFILE_QUERY }],
  });
  // console.log(editProfile[0]);

  const editUserProfile = () => {
    const editProfileMutation = editProfile[0];
    const editProfileData = editProfile[1].data;
    const editProfileLoading = editProfile[1].loading;
    const editProfileErrors = editProfile[1].error;

    editProfileMutation({
      variables: {
        website: website,
        country: currentCountry.name,
        city: currentCity,
        username: username,
      },
    })
      .then((result) => {})
      .catch((err) => {});
  };
  const bgImages = useQuery(BACKGROUND_AVATAR);
  const [bgd, setbgd] = useState([]);
  const [setBgc, setsetBgc] = useState("rpgbg");
  const rgpData = useQuery(RPG_AVATAR_IMAGES);
  const [rpg, setrpg] = useState([]);
  const aliensData = useQuery(ALIENSS_AVATAR);
  const [aliens, setaliens] = useState([]);
  const apocalypseData = useQuery(APOCALYPSE_AVATARA);
  const [apocalypse, setapocalypse] = useState([]);
  const [selectImg, setSelectImg] = useState("bgrpg");
  const [bgchoose, setbgchoose] = useState("");
  const [showuser, setshowuser] = useState("/images/use-ava-img.png");
  const [profileAvatar, setprofileAvatar] = useState("");
  const [twoSrc, settwoSrc] = useState("onboard");

  const [userprofile, setuserprofile] = useState("");

  // const [update_user_profile] = useMutation(UPDATE_USER_AVATAR_PROFILE);

  // const create_user_avatars = () => {
  //   update_user_profile({
  //     variables: {
  //       profileImage: profileAvatar,
  //       cardAvatar: showuser,
  //       backgroundAvatar: bgchoose,
  //       cardTwoavatar: twoSrc,
  //     },
  //     refetchQueries: [{ query: UPDATE_USER_AVATAR_PROFILE }],
  //   })
  //     .then((resp) => {
  //       console.log(resp);
  //       router.push("/my-profile");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const upLoaduserdata = useMutation(UPDATE_USER_AVATAR_PROFILE, {
    onCompleted: () => {
      console.log("jjjjjj");
    },
    refetchQueries: [
      {
        query: GET_USER_PROFILE_QUERY,
      },
    ],
  });

  const upload = upLoaduserdata[0];
  const create_user_avatars = () => {
    upload({
      variables: {
        profileImage: profileAvatar,
        cardAvatar: showuser,
        backgroundAvatar: bgchoose,
        cardTwoavatar: twoSrc,
      },
    })
      .then((resp) => {
        console.log(resp);
        router.push("/my-profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (user) {
      setuserprofile(data?.getUserProfile);
    }
    if (rgpData) {
      setrpg(rgpData?.data?.RpgAvatar);
    }
    if (aliensData) {
      setaliens(aliensData?.data?.AliensAvatar);
    }
    if (apocalypseData) {
      setapocalypse(apocalypseData?.data?.ApocolypseAvatar);
    }
    if (bgImages) {
      setbgd(bgImages?.data?.BGAvatar);
    }
  }, [rgpData?.data, aliensData?.data, apocalypseData.data, bgImages.data]);

  const date = new Date(parseInt(user?.createdAt));
  let comp, bgimg;

  const previewAvatar = (e: any) => {};

  console.log();

  console.log(rgpData?.data?.RpgAvatar);
  if (avatarset === "rpg") {
    comp = (
      <ul>
        {rpg?.map((rpg: any, index: any) => {
          return (
            <li>
              <img
                onClick={() => {
                  setshowuser(rpg.oneSrc);
                  setprofileAvatar(rpg.userprofileavatar);
                  settwoSrc(rpg.twoSrc);
                }}
                src={rpg?.userprofileavatar}
                className="img-fluid"
                alt="avatar"
                data-toggle="modal"
                data-target="changeImg-Modal"
              />
            </li>
          );
        })}
      </ul>
    );
  }
  if (avatarset === "alien") {
    comp = (
      <ul>
        {aliens?.map((rpg: any, index: any) => {
          return (
            <li>
              <img
                onClick={() => {
                  setshowuser(rpg.oneSrc);
                  setprofileAvatar(rpg.userprofileavatar);
                  settwoSrc(rpg.twoSrc);
                }}
                src={rpg?.userprofileavatar}
                className="img-fluid"
                alt="avatar"
                data-toggle="modal"
                data-target="changeImg-Modal"
              />
            </li>
          );
        })}
      </ul>
    );
  }
  if (avatarset === "apocalypse") {
    comp = (
      <ul>
        {apocalypse?.map((rpg: any, index: any) => {
          return (
            <li>
              <img
                onClick={() => {
                  setshowuser(rpg.oneSrc);
                  setprofileAvatar(rpg.userprofileavatar);
                  settwoSrc(rpg.twoSrc);
                }}
                src={rpg?.userprofileavatar}
                className="img-fluid"
                alt="avatar"
                data-toggle="modal"
                data-target="changeImg-Modal"
              />
            </li>
          );
        })}
      </ul>
    );
  }

  if (selectImg === "bgapocalypse") {
    bgimg = (
      <ul>
        {bgd?.map((rpg: any, index: any) => {
          return (
            <li>
              <img
                onClick={(e) => {
                  setbgchoose(rpg.bgApocalypsegSrc);
                  console.log(bgchoose);
                }}
                key={index}
                src={rpg.bgApocalypsegSrc}
                className="img-fluid"
                alt="avatar"
              />
            </li>
          );
        })}
      </ul>
    );
  }
  if (selectImg === "bgalien") {
    bgimg = (
      <ul>
        {bgd?.map((rpg: any, index: any) => {
          return (
            <li>
              <img
                onClick={(e) => {
                  setbgchoose(rpg.bgRAliensSrc);
                  console.log(bgchoose);
                }}
                key={index}
                src={rpg.bgRAliensSrc}
                className="img-fluid"
                alt="avatar"
              />
            </li>
          );
        })}
      </ul>
    );
  }
  if (selectImg === "bgrpg") {
    bgimg = (
      <ul>
        {bgd?.map((rpg: any, index: any) => {
          return (
            <li>
              <img
                onClick={(e) => {
                  setbgchoose(rpg.bgRpgSrc);
                  console.log(bgchoose);
                }}
                key={index}
                src={rpg.bgRpgSrc}
                className="img-fluid"
                alt="avatar"
              />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div className="dApp-home-profile-sect">
        <div className="dApp-home-cover-And-DP-sect">
          <div className="dApp-home-cover-photo">
            <img
              src={
                user?.backgroundAvatar?.length > 0
                  ? user?.backgroundAvatar
                  : "/images/dApp-home-profile-cover.png"
              }
              alt="cover-photo"
              className="img-fluid cover-bg-img"
            />
            <div className="onboarding-prof-avatr">
              <div className="onboarding-prof-avatr-pic">
                <img
                  height="70px"
                  width="180px"
                  src={
                    user?.cardAvatar
                      ? user?.cardAvatar
                      : "/images/onboard-user-pi2.png"
                  }
                  className="img-fluid"
                  alt="avaatar"
                />
                <div
                  className={classnames("dApp-proPoic-overlay", {
                    "proPoic-overlay": showEditProfileModalValue,
                  })}
                >
                  <button
                    className="dApp-overlay-profPic-editBttn"
                    data-toggle="modal"
                    data-target="#changeImg-Modal"
                    onClick={() => showEditProfileModal(false)}
                  >
                    <img
                      src="/images/userEdit.png"
                      className="img-fluid"
                      alt="user"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={classnames("dApp-prof-bg", {
                "dApp-prof-bg-d-block": showEditProfileModalValue,
              })}
              role="dialog"
            >
              <img
                src="/images/change-bg-icon.png"
                className="img-fluid mr-2"
                alt="icon"
              />
              <span>Change the Background Image</span>
            </div>
            <div
              className={classnames("onboardinguser-edit", {
                "d-none-actiive": !showEditProfileModalValue,
                "d-none": showEditProfileModalValue,
              })}
            >
              <button
                className="onboardinguser-edit-btn"
                onClick={openEditProfileModal}
              >
                <img
                  src="/images/userEdit.png"
                  className="img-fluid"
                  alt="user"
                />
              </button>
            </div>
            <div className="onboardinguser-edit-modal-block">
              <div id="changeImg-Modal" className="modal changeImg-edit-modal">
                <div className="modal-dialog">
                  {/* <!-- Modal content --> */}
                  <div className="modal-content changeImg-modal-content">
                    <span
                      className="close"
                      onClick={() => showEditProfileModal(false)}
                    >
                      <img
                        src="/images/proClose.png"
                        alt="close"
                        className="img-fluid"
                        data-dismiss="modal"
                      />
                    </span>
                    <div className="modal-content changeImg-modal-content-inner">
                      <div className="changeImg-tab-block">
                        <div className="changeImg-tabLink-block">
                          <ul>
                            <li>
                              <button
                                className={classnames("changeImg-tablinks", {
                                  active: tab == "avatar",
                                })}
                                onClick={() => setTab("avatar")}
                              >
                                Select your avatar
                              </button>{" "}
                            </li>
                            <li>
                              <button
                                className={classnames("changeImg-tablinks", {
                                  active: tab == "bg",
                                })}
                                onClick={() => setTab("bg")}
                              >
                                Change Background Image
                              </button>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="changeImg-tabcontent-block">
                          <div
                            id="select-av"
                            className={classnames("changeImg_tabcontent", {
                              "changeImg-d-block": tab == "avatar",
                            })}
                          >
                            <div className="changeImg-Innertab-block">
                              <div className="changeImg-InnertabLink-block">
                                <ul>
                                  <li>
                                    <button
                                      className={classnames(
                                        "changeImg-Innertablinks-av",
                                        {
                                          active: avatarBtn == "rpg avatar",
                                        }
                                      )}
                                      onClick={() => {
                                        setAvatarBtn("rpg avatar");
                                        setavatarset("rpg");
                                      }}
                                    >
                                      RPG AVATAR{" "}
                                    </button>{" "}
                                  </li>
                                  <li>
                                    <button
                                      className={classnames(
                                        "changeImg-Innertablinks-av",
                                        {
                                          active:
                                            avatarBtn == "apocalypse avatar",
                                        }
                                      )}
                                      onClick={() => {
                                        setAvatarBtn("apocalypse avatar");
                                        setavatarset("apocalypse");
                                      }}
                                    >
                                      APOCALYPSE AVATAR{" "}
                                    </button>{" "}
                                  </li>
                                  <li>
                                    <button
                                      className={classnames(
                                        "changeImg-Innertablinks-av",
                                        {
                                          active: avatarBtn == "alien avatar",
                                        }
                                      )}
                                      onClick={() => {
                                        setAvatarBtn("alien avatar");
                                        setavatarset("alien");
                                      }}
                                    >
                                      ALIEN AVATAR{" "}
                                    </button>{" "}
                                  </li>
                                </ul>
                              </div>
                              <div className="changeImg-Innertabcontent-block">
                                <div
                                  id="RPG-av"
                                  className={classnames(
                                    "changeAvImg_tabcontent",
                                    {
                                      "changeImg-d-block": tab == "avatar",
                                    }
                                  )}
                                >
                                  <div className="changeAvImg-innerImg-block">
                                    <div className="changeAvImg-innerImg-block-lft">
                                      <img
                                        src={showuser}
                                        className="img-fluid"
                                        alt="avatar"
                                      />
                                    </div>
                                    <div className="changeAvImg-innerImg-block-right">
                                      {comp}
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
                                        src="/images/use-ava-img.png"
                                        className="img-fluid"
                                        alt="avatar"
                                      />
                                    </div>
                                    <div className="changeAvImg-innerImg-block-right">
                                      <img
                                        src="/images/user-av-imgBlock.png"
                                        className="img-fluid"
                                        alt="avatar"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="ALIEN-av"
                                  className="changeAvImg_tabcontent"
                                >
                                  <div className="changeAvImg-innerImg-block">
                                    <div className="changeAvImg-innerImg-block-lft">
                                      <img
                                        src="/images/use-ava-img.png"
                                        className="img-fluid"
                                        alt="avatar"
                                      />
                                    </div>
                                    <div className="changeAvImg-innerImg-block-right">
                                      <img
                                        src="/images/user-av-imgBlock.png"
                                        className="img-fluid"
                                        alt="avatar"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="select-bg"
                            className={classnames("changeImg_tabcontent", {
                              "changeImg-d-block": tab == "bg",
                            })}
                          >
                            <div className="changeImg-Innertab-block">
                              <div className="changeImg-InnertabLink-block">
                                <ul>
                                  <li>
                                    <button
                                      className={classnames(
                                        "changeImg-Innertablinks-bg",
                                        {
                                          active: bgBtn == "rpg bg",
                                        }
                                      )}
                                      onClick={() => {
                                        setBgBtn("rpg bg");
                                        setSelectImg("bgrpg");
                                      }}
                                    >
                                      RPG BG{" "}
                                    </button>{" "}
                                  </li>
                                  <li>
                                    <button
                                      className={classnames(
                                        "changeImg-Innertablinks-bg",
                                        {
                                          active: bgBtn == "apocalypse bg",
                                        }
                                      )}
                                      onClick={() => {
                                        setBgBtn("apocalypse bg");
                                        setSelectImg("bgapocalypse");
                                      }}
                                    >
                                      APOCALYPSE BG{" "}
                                    </button>{" "}
                                  </li>
                                  <li>
                                    <button
                                      className={classnames(
                                        "changeImg-Innertablinks-bg",
                                        {
                                          active: bgBtn == "alien bg",
                                        }
                                      )}
                                      onClick={() => {
                                        setBgBtn("alien bg");
                                        setSelectImg("bgalien");
                                      }}
                                    >
                                      ALIEN BG{" "}
                                    </button>{" "}
                                  </li>
                                </ul>
                              </div>
                              <div className="changeImg-Innertabcontent-block mt-4">
                                <div
                                  id="RPG-bg"
                                  className="changebgImg_tabcontent changeImg-d-block"
                                >
                                  <div className="changeImg-bg-block">
                                    {bgimg}
                                  </div>
                                </div>
                                <div
                                  id="APOCALYPSE-bg"
                                  className="changebgImg_tabcontent"
                                >
                                  <div className="changeImg-bg-block">
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
                                  id="ALIEN-bg"
                                  className="changebgImg_tabcontent"
                                >
                                  <div className="changeImg-bg-block">
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
                    <div className="changeImg-btn-block">
                      <button
                        className="changeImg-back-bttn"
                        data-dismiss="modal"
                      >
                        Back
                      </button>
                      <button
                        onClick={create_user_avatars}
                        className="changeImg-apply-bttn"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classnames("onbording-new-edit-form", {
              "edit-form-d-block": showEditProfileModalValue,
            })}
          >
            <h3>Edit Profile</h3>
            <form>
              <div className="onbording-new-edit-form-body">
                <div className="onbording-edit-input-group">
                  <div className="floating-label-edit">
                    <input
                      className="floating-edit-input"
                      type="text"
                      placeholder=" "
                    />
                    <label>
                      Your full name<sup>*</sup>
                    </label>
                  </div>
                  <p className="loating-edit-txt">
                    We will not show your name in your profile
                  </p>
                </div>
                <div className="onbording-edit-input-group">
                  <div className="floating-label-edit">
                    <input
                      className="floating-edit-input"
                      type="text"
                      placeholder=" "
                    />
                    <label>
                      Your full name<sup>*</sup>
                    </label>
                    <span className="edit-cal-btn">
                      <img
                        src="/images/editCalendar.png"
                        className="img-fluid"
                        alt="calender"
                      />
                    </span>
                  </div>
                  <div className="onbording-edit-checkbox">
                    <input type="checkbox" id="au_input4" />
                    <label>Hide this in my profie</label>
                  </div>
                </div>
                <div className="onbording-edit-input-group">
                  <div className="floating-label-edit">
                    <div
                      id="edit-input-dropBox"
                      className="edit-input-dropdownBox"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gender<sup>*</sup>
                    </div>
                    <div
                      id="edit-input-dropList"
                      className="dropdown-menu edit-input-dropbox-list"
                    >
                      <ul>
                        <li>Male</li>
                        <li>Female</li>
                        <li>Others</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="onbording-edit-input-group">
                  <div className="floating-label-edit">
                    <input
                      className="floating-edit-input"
                      type="text"
                      placeholder=" "
                    />
                    <label>
                      Website<sup>*</sup>
                    </label>
                  </div>
                </div>
                <div className="onbording-edit-input-group">
                  <div className="floating-label-edit">
                    <div
                      id="edit-countryinput-dropBox"
                      className="edit-input-dropdownBox"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Country<sup>*</sup>
                    </div>
                    <div
                      id="edit-countryinput-dropList"
                      className="dropdown-menu edit-input-dropbox-list"
                    >
                      <ul>
                        <li>Afghanistan</li>
                        <li>Åland Islands</li>
                        <li>Albania</li>
                        <li>Algeria</li>
                        <li>American Samoa</li>
                        <li>Andorra</li>
                        <li>Angola</li>
                        <li>Anguilla</li>
                        <li>Antarctica</li>
                        <li>Antigua and Barbuda</li>
                        <li>Argentina</li>
                        <li>Armenia</li>
                        <li>Aruba</li>
                        <li>Australia</li>
                        <li>Austria</li>
                        <li>Azerbaijan</li>
                        <li>Bahamas</li>
                        <li>Bahrain</li>
                        <li>Bangladesh</li>
                        <li>Barbados</li>
                        <li>Belarus</li>
                        <li>Belgium</li>
                        <li>Belize</li>
                        <li>Benin</li>
                        <li>Bermuda</li>
                        <li>Bhutan</li>
                        <li>Bolivia</li>
                        <li>Bosnia and Herzegovina</li>
                        <li>Botswana</li>
                        <li>Bouvet Island</li>
                        <li>Brazil</li>
                        <li>British Indian Ocean Territory</li>
                        <li>Brunei Darussalam</li>
                        <li>Bulgaria</li>
                        <li>Burkina Faso</li>
                        <li>Burundi</li>
                        <li>Cambodia</li>
                        <li>Cameroon</li>
                        <li>Canada</li>
                        <li>Cape Verde</li>
                        <li>Cayman Islands</li>
                        <li>Central African Republic</li>
                        <li>Chad</li>
                        <li>Chile</li>
                        <li>China</li>
                        <li>Christmas Island</li>
                        <li>Cocos (Keeling) Islands</li>
                        <li>Colombia</li>
                        <li>Comoros</li>
                        <li>Congo</li>
                        <li>Congo, The Democratic Republic of The</li>
                        <li>Cook Islands</li>
                        <li>Costa Rica</li>
                        <li>Cote D'ivoire</li>
                        <li>Croatia</li>
                        <li>Cuba</li>
                        <li>Cyprus</li>
                        <li>Czech Republic</li>
                        <li>Denmark</li>
                        <li>Djibouti</li>
                        <li>Dominica</li>
                        <li>Dominican Republic</li>
                        <li>Ecuador</li>
                        <li>Egypt</li>
                        <li>El Salvador</li>
                        <li>Equatorial Guinea</li>
                        <li>Eritrea</li>
                        <li>Estonia</li>
                        <li>Ethiopia</li>
                        <li>Falkland Islands (Malvinas)</li>
                        <li>Faroe Islands</li>
                        <li>Fiji</li>
                        <li>Finland</li>
                        <li>France</li>
                        <li>French Guiana</li>
                        <li>French Polynesia</li>
                        <li>French Southern Territories</li>
                        <li>Gabon</li>
                        <li>Gambia</li>
                        <li>Georgia</li>
                        <li>Germany</li>
                        <li>Ghana</li>
                        <li>Gibraltar</li>
                        <li>Greece</li>
                        <li>Greenland</li>
                        <li>Grenada</li>
                        <li>Guadeloupe</li>
                        <li>Guam</li>
                        <li>Guatemala</li>
                        <li>Guernsey</li>
                        <li>Guinea</li>
                        <li>Guinea-bissau</li>
                        <li>Guyana</li>
                        <li>Haiti</li>
                        <li>Heard Island and Mcdonald Islands</li>
                        <li>Holy See (Vatican City State)</li>
                        <li>Honduras</li>
                        <li>Hong Kong</li>
                        <li>Hungary</li>
                        <li>Iceland</li>
                        <li>India</li>
                        <li>Indonesia</li>
                        <li>Iran, Islamic Republic of</li>
                        <li>Iraq</li>
                        <li>Ireland</li>
                        <li>Isle of Man</li>
                        <li>Israel</li>
                        <li>Italy</li>
                        <li>Jamaica</li>
                        <li>Japan</li>
                        <li>Jersey</li>
                        <li>Jordan</li>
                        <li>Kazakhstan</li>
                        <li>Kenya</li>
                        <li>Kiribati</li>
                        <li>Korea, Democratic People's Republic of</li>
                        <li>Korea, Republic of</li>
                        <li>Kuwait</li>
                        <li>Kyrgyzstan</li>
                        <li>Lao People's Democratic Republic</li>
                        <li>Latvia</li>
                        <li>Lebanon</li>
                        <li>Lesotho</li>
                        <li>Liberia</li>
                        <li>Libyan Arab Jamahiriya</li>
                        <li>Liechtenstein</li>
                        <li>Lithuania</li>
                        <li>Luxembourg</li>
                        <li>Macao</li>
                        <li>Macedonia, The Former Yugoslav Republic of</li>
                        <li>Madagascar</li>
                        <li>Malawi</li>
                        <li>Malaysia</li>
                        <li>Maldives</li>
                        <li>Mali</li>
                        <li>Malta</li>
                        <li>Marshall Islands</li>
                        <li>Martinique</li>
                        <li>Mauritania</li>
                        <li>Mauritius</li>
                        <li>Mayotte</li>
                        <li>Mexico</li>
                        <li>Micronesia, Federated States of</li>
                        <li>Moldova, Republic of</li>
                        <li>Monaco</li>
                        <li>Mongolia</li>
                        <li>Montenegro</li>
                        <li>Montserrat</li>
                        <li>Morocco</li>
                        <li>Mozambique</li>
                        <li>Myanmar</li>
                        <li>Namibia</li>
                        <li>Nauru</li>
                        <li>Nepal</li>
                        <li>Netherlands</li>
                        <li>Netherlands Antilles</li>
                        <li>New Caledonia</li>
                        <li>New Zealand</li>
                        <li>Nicaragua</li>
                        <li>Niger</li>
                        <li>Nigeria</li>
                        <li>Niue</li>
                        <li>Norfolk Island</li>
                        <li>Northern Mariana Islands</li>
                        <li>Norway</li>
                        <li>Oman</li>
                        <li>Pakistan</li>
                        <li>Palau</li>
                        <li>Palestinian Territory, Occupied</li>
                        <li>Panama</li>
                        <li>Papua New Guinea</li>
                        <li>Paraguay</li>
                        <li>Peru</li>
                        <li>Philippines</li>
                        <li>Pitcairn</li>
                        <li>Poland</li>
                        <li>Portugal</li>
                        <li>Puerto Rico</li>
                        <li>Qatar</li>
                        <li>Reunion</li>
                        <li>Romania</li>
                        <li>Russian Federation</li>
                        <li>Rwanda</li>
                        <li>Saint Helena</li>
                        <li>Saint Kitts and Nevis</li>
                        <li>Saint Lucia</li>
                        <li>Saint Pierre and Miquelon</li>
                        <li>Saint Vincent and The Grenadines</li>
                        <li>Samoa</li>
                        <li>San Marino</li>
                        <li>Sao Tome and Principe</li>
                        <li>Saudi Arabia</li>
                        <li>Senegal</li>
                        <li>Serbia</li>
                        <li>Seychelles</li>
                        <li>Sierra Leone</li>
                        <li>Singapore</li>
                        <li>Slovakia</li>
                        <li>Slovenia</li>
                        <li>Solomon Islands</li>
                        <li>Somalia</li>
                        <li>South Africa</li>
                        <li>South Georgia and The South Sandwich Islands</li>
                        <li>Spain</li>
                        <li>Sri Lanka</li>
                        <li>Sudan</li>
                        <li>Suriname</li>
                        <li>Svalbard and Jan Mayen</li>
                        <li>Swaziland</li>
                        <li>Sweden</li>
                        <li>Switzerland</li>
                        <li>Syrian Arab Republic</li>
                        <li>Taiwan (ROC)</li>
                        <li>Tajikistan</li>
                        <li>Tanzania, United Republic of</li>
                        <li>Thailand</li>
                        <li>Timor-leste</li>
                        <li>Togo</li>
                        <li>Tokelau</li>
                        <li>Tonga</li>
                        <li>Trinidad and Tobago</li>
                        <li>Tunisia</li>
                        <li>Turkey</li>
                        <li>Turkmenistan</li>
                        <li>Turks and Caicos Islands</li>
                        <li>Tuvalu</li>
                        <li>Uganda</li>
                        <li>Ukraine</li>
                        <li>United Arab Emirates</li>
                        <li>United Kingdom</li>
                        <li>United States</li>
                        <li>United States Minor Outlying Islands</li>
                        <li>Uruguay</li>
                        <li>Uzbekistan</li>
                        <li>Vanuatu</li>
                        <li>Venezuela</li>
                        <li>Viet Nam</li>
                        <li>Virgin Islands, British</li>
                        <li>Virgin Islands, U.S.</li>
                        <li>Wallis and Futuna</li>
                        <li>Western Sahara</li>
                        <li>Yemen</li>
                        <li>Zambia</li>
                        <li>Zimbabwe</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onbording-edit-bio">
                <h3>Your Bio</h3>
                <div className="onbording-edit-textarea">
                  <textarea placeholder="Write your bio (160 Letters max.)"></textarea>
                </div>
              </div>
              <div className="onbording-new-edit-form-body">
                <div className="onbording-edit-input-group">
                  <div className="floating-label-edit">
                    <div
                      id="edit-relationinput-dropBox"
                      className="edit-input-dropdownBox"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Relationship Status<sup>*</sup>
                    </div>
                    <div
                      id="edit-relationinput-dropList"
                      className="dropdown-menu edit-input-dropbox-list"
                    >
                      <ul>
                        <li>Single</li>
                        <li>Married</li>
                        <li>Widowed</li>
                        <li>Divorced</li>
                        <li>Domestic partnership</li>
                        <li>Prefer not to say</li>
                      </ul>
                    </div>
                  </div>
                  <div className="onbording-edit-checkbox">
                    <input type="checkbox" id="au_input4" />
                    <label>Hide this in my profie</label>
                  </div>
                </div>
                <div className="onbording-edit-input-group">
                  <div className="floating-label-edit">
                    <div
                      id="edit-hereinput-dropBox"
                      className="edit-input-dropdownBox"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Here for
                    </div>
                    <div
                      id="edit-hereinput-dropList"
                      className="dropdown-menu edit-input-dropbox-list"
                    >
                      <ul>
                        <li>Selling Digital Arts</li>
                        <li>Making Social Circle</li>
                        <li>Investing in Marketplace</li>
                        <li>Prefer not to say</li>
                      </ul>
                    </div>
                  </div>
                  <div className="onbording-edit-checkbox">
                    <input type="checkbox" id="au_input4" />
                    <label>Hide this in my profie</label>
                  </div>
                </div>
              </div>
              <div className="onboarding-edit-btngroup">
                <button type="reset" className="onboarding-rest-bttn">
                  Reset{" "}
                </button>
                <button
                  type="submit"
                  className="onboarding-update-bttn"
                  onClick={() => showEditProfileModal(false)}
                >
                  Update{" "}
                </button>
              </div>
            </form>
          </div>
          <div
            className={classnames("onbording-new-userSect d-none-actiive", {
              "d-none": showEditProfileModalValue,
            })}
          >
            <div className="onbording-new-userSect-hd">
              <h3>{user?.userName}</h3>
              <p>{user?.bio}</p>
            </div>
            <div className="onbording-new-userSect-info">
              <ul>
                <li>
                  <span>
                    <img
                      src="/images/userPin.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  {user?.country}
                </li>
                <li className="deactive">
                  <span>
                    <img
                      src="/images/userGlobe.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  Not availabel
                </li>
                <li>
                  <span>
                    <img
                      src="/images/userCalendar.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  Joined Jul 2021
                </li>
                <li className="deactive">
                  <span>
                    <img
                      src="/images/userBirthday.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  Not availabel
                </li>
                <li>
                  <span>
                    <img
                      src="images/male.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  {user?.gender}
                </li>
                <li>
                  <span>
                    <img
                      src="/images/commited.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  Committed
                </li>
              </ul>
            </div>
            <div className="onbording-new-userSect-followers">
              <ul>
                <li>
                  <span>{user?.followingCount}</span> Following
                </li>
                <li>
                  <span>{user?.followerCount}</span> Followers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withCountryData(BoardingJourProfile, { getDataFromTree });
