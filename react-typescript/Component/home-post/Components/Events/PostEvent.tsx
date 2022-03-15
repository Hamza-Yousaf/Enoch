import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../../Component/onBoard/header"));
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  GET_OTHER_USER_QUERY,
  SINGLE_EVENT_QUERY,
} from "../../../../graphql/queries";
import withApollo from "../../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { eventStatus, monthNames } from "./Manage/ManagePageComponent";
import { format } from "date-fns";
import { SHARE_EVENT_TO_PUBLIC_MUTATION } from "../../../../graphql/mutattions/shareEventsToPublic";
import { SHARE_EVENT_TO_FOLLOWERS_MUTATION } from "../../../../graphql/mutattions/shareEventToFollowers";

interface Props {
  loggedInUser: any;
}

const PostEvent: React.FC<Props> = ({ loggedInUser }) => {
  const [showPostAsDropdown, setPostAsDropDown] = useState(false);
  const [showWhoShouldViewModal, setShowWhoShouldViewModal] = useState(false);
  const [whoCanSeePost, setWhoCanSeePost] = useState("whole_public");
  const [postAs, setPostAs] = useState(loggedInUser.userName);
  const [communityToShareTo, setCommunityToShareTo] = useState("");
  const [event, setEvent] = useState(null);
  const [organizerAvatar, setOrganizerAvatar] = useState("");
  const [organizer, setOrganizer] = useState(null);
  const [postText, setPostText] = useState("");

  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  // @ts-ignore
  const { CKEditor, Editor } = editorRef.current || {};

  useEffect(() => {
    // @ts-ignore
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);

  const dispatch = useDispatch();
  const router = useRouter();

  const eventId = router.query.eventId;

  const togglePostAs = () => {
    setPostAsDropDown(!showPostAsDropdown);
  };

  const toggleShouldView = () => {
    setShowWhoShouldViewModal(!showWhoShouldViewModal);
  };

  const { data, error, loading } = useQuery(SINGLE_EVENT_QUERY, {
    variables: {
      id: eventId,
    },
  });

  useEffect(() => {
    console.log(data);
    if (data) {
      setEvent(data?.singleEvent);
    }
  }, [data, loading]);

  const getEventStatus = (
    eventStartDate: any,
    eventEndDate: any,
    eventStartTime: any,
    eventEndTime: any,
    isCancelled: any
  ) => {
    console.log(
      eventStartDate,
      eventEndDate,
      eventStartTime,
      eventEndTime,
      isCancelled
    );
    let date = new Date(eventStartDate);
    let date_2 = new Date(eventEndDate);

    let time = new Date(eventStartTime);
    let time_2 = new Date(eventEndTime);

    let eventStarts = new Date(
      `${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}:00`
    );

    let eventEnds = new Date(
      `${
        monthNames[date_2.getMonth()]
      } ${date_2.getDate()}, ${date_2.getFullYear()} ${time_2.getHours()}:${time_2.getMinutes()}:00`
    );
    console.log(
      isCancelled !== true &&
        eventStatus(eventEnds) === -1 &&
        eventStatus(eventStarts) === 1
    );

    console.log(isCancelled !== true && eventStatus(eventStarts) === -1);

    if (
      isCancelled !== true &&
      eventStatus(eventEnds) === -1 &&
      eventStatus(eventStarts) === 1
    ) {
      return "LIVE";
    } else if (isCancelled !== true && eventStatus(eventStarts) === -1) {
      return "UPCOMING";
    } else if (isCancelled !== true && eventStatus(eventEnds) === 1) {
      return "ENDED";
    } else if (isCancelled === true) {
      return "CANCELLED";
    }
  };
  console.log(event);

  const otherUserData = useQuery(GET_OTHER_USER_QUERY, {
    variables: {
      userId: event?.organizerId,
    },
  });

  useEffect(() => {
    console.log(otherUserData.data);
    let firstName = otherUserData?.data?.getOtherUserProfile.firstName
      ? otherUserData?.data?.getOtherUserProfile.firstName
      : "";

    let lastName = otherUserData?.data?.getOtherUserProfile.lastName
      ? otherUserData?.data?.getOtherUserProfile.lastName
      : "";

    let userName = otherUserData?.data?.getOtherUserProfile.userName;
    // setOrganizer(firstName + " " + lastName);

    let organizerAvatar = otherUserData?.data?.getOtherUserProfile.profileImage;

    setOrganizerAvatar(organizerAvatar);
    setOrganizer(userName);
  }, [otherUserData.data, event?.length]);

  const startDate = () => {
    let date = new Date(event?.start_date);
    let date_2 = new Date(event?.end_date);

    let time = new Date(event?.start_time);
    let time_2 = new Date(event?.end_time);

    let eventStarts = new Date(
      `${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}:00`
    );

    let eventEnds = new Date(
      `${
        monthNames[date_2.getMonth()]
      } ${date_2.getDate()}, ${date_2.getFullYear()} ${time_2.getHours()}:${time_2.getMinutes()}:00`
    );

    return format(new Date(eventStarts), "PPPppp");
  };

  const endDate = () => {
    let date = new Date(event?.start_date);
    let date_2 = new Date(event?.end_date);

    let time = new Date(event?.start_time);
    let time_2 = new Date(event?.end_time);

    let eventStarts = new Date(
      `${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}:00`
    );

    let eventEnds = new Date(
      `${
        monthNames[date_2.getMonth()]
      } ${date_2.getDate()}, ${date_2.getFullYear()} ${time_2.getHours()}:${time_2.getMinutes()}:00`
    );

    return format(new Date(eventEnds), "PPPppp");
  };

  const eventDuration = () => {
    if (event?.start_date && event?.start_time) {
      return `${format(new Date(event.start_date), "E")}, ${format(
        new Date(event.start_date),
        "MMM"
      )} ${format(new Date(event.start_date), "d")}, ${format(
        new Date(event.start_time),
        "p"
      )} - ${format(new Date(event.end_date), "E")}, ${format(
        new Date(event.end_date),
        "MMM"
      )} ${format(new Date(event.end_date), "d")}, ${format(
        new Date(event.end_time),
        "p"
      )} ${format(new Date(event.end_time), "z")}`;
    }
  };

  const shareEventsMutationData = useMutation(SHARE_EVENT_TO_PUBLIC_MUTATION);

  const shareEventToPublic = shareEventsMutationData[0];

  const shareEvent = () => {
    shareEventToPublic({
      variables: {
        text: postText,
        event_id: event?.id,
      },
    })
      .then((res) => {
        console.log(res);
        if (res?.data?.userShareEventToEveryOne?.sharedEvent) {
          router.push({
            pathname: "/feeds",
            query: {
              eventPosted: true,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const shareEventsToFollowersMutationData = useMutation(
    SHARE_EVENT_TO_FOLLOWERS_MUTATION
  );

  const shareEventToFollowers = shareEventsToFollowersMutationData[0];

  const shareEventToYourFollowers = () => {
    shareEventToFollowers({
      variables: {
        text: postText,
        event_id: event?.id,
      },
    })
      .then((res) => {
        console.log(res);
        if (res?.data?.userShareEventToFollowersOnly?.sharedEvent) {
          router.push({
            pathname: "/feeds",
            query: {
              eventPosted: true,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="posting-steps-block">
            <div className="posting-steps-block-left">
              <h2>Share</h2>
              <div className="ath-securi-add-user-scrollable shareEvnt-scroll">
                <div className="posting-steps-dropbox-block">
                  <div className="posting-steps-dropbox">
                    <a
                      onClick={togglePostAs}
                      href="#"
                      className="posting-steps-dropbox-input"
                    >
                      <span>
                        <img
                          src="images/postInfo.png"
                          className="img-fluid"
                          alt="icon"
                        />
                      </span>
                      {postAs}
                    </a>
                    <div className="post-user-modal-block">
                      <div
                        id="post-user-modal"
                        className={
                          showPostAsDropdown ? "modal fade open" : "nodal fade"
                        }
                        style={
                          showPostAsDropdown
                            ? {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }
                            : {
                                display: "none",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }
                        }
                      >
                        {/* <!-- Modal content --> */}
                        <div className="modal-content post-user-modal-content">
                          <span className="close">
                            <img
                              onClick={togglePostAs}
                              src="images/post-close.png"
                              alt="close"
                              className="img-fluid"
                            />
                          </span>
                          <h2>Posting as</h2>
                          <div className="post-user-modal-list">
                            <ul>
                              <li
                                onClick={() => {
                                  setPostAs(loggedInUser.userName);
                                  togglePostAs();
                                }}
                              >
                                <img
                                  src="images/postUser1.png"
                                  className="img-fluid"
                                  alt="pic"
                                />
                                <span>{loggedInUser.userName}</span>
                              </li>
                              <li
                                onClick={() => {
                                  togglePostAs();
                                  setPostAs("88mph");
                                }}
                              >
                                <img
                                  src="images/postUser2.png"
                                  className="img-fluid"
                                  alt="pic"
                                />
                                <span>88mph</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="posting-steps-dropbox">
                    <a
                      onClick={toggleShouldView}
                      href="#"
                      className="posting-steps-dropbox-input"
                    >
                      <span>
                        <img
                          src="images/Globe2.png"
                          className="img-fluid"
                          alt="icon"
                        />
                      </span>
                      Anyone
                    </a>
                    <div className="post-user-modal-block">
                      <div
                        id="post-user-modal2"
                        className={
                          showWhoShouldViewModal
                            ? "modal fade open"
                            : "modal fade"
                        }
                        style={
                          showWhoShouldViewModal
                            ? {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }
                            : {}
                        }
                      >
                        {/* <!-- Modal content --> */}
                        <div className="modal-content post-user-modal-content">
                          <span className="close">
                            <img
                              onClick={toggleShouldView}
                              src="images/post-close.png"
                              alt="close"
                              className="img-fluid"
                            />
                          </span>
                          <h2>Who can see your post?</h2>
                          <p className="mb-4">
                            Your post will be visible on feed, on your profile
                            and in search results
                          </p>
                          <div className="post-visible-modal-list">
                            <ul>
                              <li>
                                <div
                                  onClick={() =>
                                    setWhoCanSeePost("whole_public")
                                  }
                                  className="post-visible-left"
                                >
                                  <div className="mr-2">
                                    <img
                                      src="images/Globe2.png"
                                      className="img-fluid"
                                      alt="pic"
                                    />
                                  </div>
                                  <div>
                                    <h3>Anyone</h3>
                                    <p>Anyone on or off Enoch</p>
                                  </div>
                                </div>
                                <div className="post-visible-right">
                                  <div className="post-visible-options-sel">
                                    <input
                                      onClick={() =>
                                        setWhoCanSeePost("whole_public")
                                      }
                                      id="user-v21"
                                      name="b-plan"
                                      type="radio"
                                      checked={whoCanSeePost === "whole_public"}
                                    />
                                    <label htmlFor="user-v21"></label>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div
                                  onClick={() =>
                                    setWhoCanSeePost("followers_only")
                                  }
                                  className="post-visible-left"
                                >
                                  <div className="mr-2">
                                    <img
                                      src="images/Globe2.png"
                                      className="img-fluid"
                                      alt="pic"
                                    />
                                  </div>
                                  <div>
                                    <h3>Following Only</h3>
                                    <p>Followers on Enoch</p>
                                  </div>
                                </div>
                                <div className="post-visible-right">
                                  <div className="post-visible-options-sel">
                                    <input
                                      onClick={() =>
                                        setWhoCanSeePost("followers_only")
                                      }
                                      id="user-v22"
                                      name="b-plan"
                                      type="radio"
                                      checked={
                                        whoCanSeePost === "followers_only"
                                      }
                                    />
                                    <label htmlFor="user-v22"></label>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="post-visible-left">
                                  <div className="mr-2">
                                    <img
                                      src="images/Globe2.png"
                                      className="img-fluid"
                                      alt="pic"
                                    />
                                  </div>
                                  <div
                                    onClick={() =>
                                      setWhoCanSeePost("community")
                                    }
                                  >
                                    <h3>
                                      Community <span></span>
                                    </h3>
                                    <p>Select a Community you’re in</p>
                                  </div>
                                </div>
                                <div className="post-visible-right">
                                  <div className="post-visible-options-sel">
                                    <input
                                      onClick={() =>
                                        setWhoCanSeePost("community")
                                      }
                                      id="user-v23"
                                      name="b-plan"
                                      type="radio"
                                      checked={whoCanSeePost === "community"}
                                    />
                                    <label htmlFor="user-v23"></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="post-visible-buttn-grp">
                              <span className="mr-2">
                                <a
                                  href="#"
                                  className="btn post-visible-back-btn"
                                >
                                  Back
                                </a>
                              </span>
                              <span>
                                <a
                                  href="#"
                                  id="post-save-btn"
                                  className="btn post-visible-save-btn"
                                  onClick={() =>
                                    setShowWhoShouldViewModal(false)
                                  }
                                >
                                  save
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="select-community-modal" className="modal fade">
                        {/* <!-- Modal content --> */}
                        <div className="modal-content post-user-modal-content">
                          <span className="close">
                            <img
                              src="images/post-close.png"
                              alt="close"
                              className="img-fluid"
                              data-dismiss="modal"
                            />
                          </span>
                          <h2>Select a Community</h2>
                          <p className="mb-4">
                            Only visible to members of this tribe and will
                            appear on tribe's page
                          </p>
                          <div className="post-visible-modal-list">
                            <ul>
                              <li>
                                <div className="post-visible-left align-items-center">
                                  <div className="mr-2">
                                    <img
                                      src="images/community-icon1.png"
                                      className="img-fluid"
                                      alt="pic"
                                    />
                                  </div>
                                  <div>
                                    <h3>Ethereum Development and DApps</h3>
                                  </div>
                                </div>
                                <div className="post-visible-right">
                                  <div className="post-visible-options-sel">
                                    <input
                                      id="user-v11"
                                      name="b-plan"
                                      type="radio"
                                    />
                                    <label htmlFor="user-v11"></label>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="post-visible-left align-items-center">
                                  <div className="mr-2">
                                    <img
                                      src="images/community-icon2.png"
                                      className="img-fluid"
                                      alt="pic"
                                    />
                                  </div>
                                  <div>
                                    <h3>Ethereum</h3>
                                  </div>
                                </div>
                                <div className="post-visible-right">
                                  <div className="post-visible-options-sel">
                                    <input
                                      id="user-v12"
                                      name="b-plan"
                                      type="radio"
                                    />
                                    <label htmlFor="user-v12"></label>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="post-visible-left align-items-center">
                                  <div className="mr-2">
                                    <img
                                      src="images/community-icon3.png"
                                      className="img-fluid"
                                      alt="pic"
                                    />
                                  </div>
                                  <div>
                                    <h3>Citizen Finance</h3>
                                  </div>
                                </div>
                                <div className="post-visible-right">
                                  <div className="post-visible-options-sel">
                                    <input
                                      id="user-v13"
                                      name="b-plan"
                                      type="radio"
                                    />
                                    <label htmlFor="user-v13"></label>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="post-visible-left align-items-center">
                                  <div className="mr-2">
                                    <img
                                      src="images/community-icon4.png"
                                      className="img-fluid"
                                      alt="pic"
                                    />
                                  </div>
                                  <div>
                                    <h3>Spooky Swap</h3>
                                  </div>
                                </div>
                                <div className="post-visible-right">
                                  <div className="post-visible-options-sel">
                                    <input
                                      id="user-v14"
                                      name="b-plan"
                                      type="radio"
                                    />
                                    <label htmlFor="user-v14"></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="post-visible-buttn-grp">
                              <span className="mr-2">
                                <a
                                  href="#"
                                  className="btn post-visible-back-btn"
                                >
                                  Back
                                </a>
                              </span>
                              <span>
                                <a
                                  href="#"
                                  id="post-save-btn"
                                  className="btn post-visible-save-btn"
                                  data-toggle="modal"
                                  data-target="select-community-modal"
                                >
                                  save
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="posting-steps-content-body ckeditor-wrapper-div">
                  {editorLoaded ? (
                    <CKEditor
                      onBlur={(event: any, editor: any) => {
                        const data = editor.getData();
                        setPostText(data);
                      }}
                      config={{
                        placeholder: "What do you want to talk about ?",
                      }}
                      editor={Editor}
                      data={postText}
                    />
                  ) : (
                    ""
                  )}
                  {/* <h3>What do you want to talk about ?</h3> */}
                  <div className="posting-steps-innerbody">
                    <div className="post-share-evnt">
                      <div className="post-share-evnt-img">
                        {getEventStatus(
                          event?.start_date,
                          event?.end_date,
                          event?.start_time,
                          event?.end_time,
                          event?.is_cancelled
                        ) === "CANCELLED" && (
                          <span className="share-evnt-tag-cancel">
                            CANCELLED
                          </span>
                        )}

                        {getEventStatus(
                          event?.start_date,
                          event?.end_date,
                          event?.start_time,
                          event?.end_time,
                          event?.is_cancelled
                        ) === "LIVE" && (
                          <span className="share-evnt-tag-live">LIVE</span>
                        )}

                        {getEventStatus(
                          event?.start_date,
                          event?.end_date,
                          event?.start_time,
                          event?.end_time,
                          event?.is_cancelled
                        ) === "UPCOMING" && (
                          <span className="share-evnt-tag-upcoming">
                            UPCOMING
                          </span>
                        )}

                        {getEventStatus(
                          event?.start_date,
                          event?.end_date,
                          event?.start_time,
                          event?.end_time,
                          event?.is_cancelled
                        ) === "ENDED" && (
                          <span className="share-evnt-tag-completed">
                            COMPLETED
                          </span>
                        )}

                        <img
                          src={
                            event?.eventBannerImage ||
                            "images/event-cover-pic.png"
                          }
                          alt="Cover-photo"
                          className="img-fluid your-event-cover-img"
                        />
                        <h3>{event?.eventHeader || event?.title}</h3>
                      </div>
                      <div className="shareEvnt-tranfer-token">
                        <div className="shareEvnt-tranfer-token-lft">
                          <h3>{eventDuration()}</h3>
                          <div className="shareEvnt-tranfer-top-block">
                            <div className="your-event-info-lft">
                              <h2>{event?.title}</h2>
                              <h3>Event by {organizer}</h3>
                            </div>
                            <div className="shareEvnt-tranfer-token-right">
                              <button
                                onClick={() => {
                                  router.push(`/events/${event?.id}`);
                                }}
                                className="shareEvnt-viewEvnt-btn"
                              >
                                View Event
                              </button>
                            </div>
                          </div>
                          <div className="your-event-video">
                            <div className="your-event-video-lft">
                              <img
                                src="images/event-vdo.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                            <div className="your-event-video-right">
                              <div>
                                <button className="join-live-btn">
                                  Join with Livezone
                                </button>
                              </div>
                              <div className="your-event-video-txt">
                                livezone.enoch.app/ump-bxmd-kyt
                                <span>
                                  <img
                                    src="images/MarkCircle.png"
                                    className="img-fluid ml-1"
                                    alt="icon"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="addhash-txt">Add hashtag</p>
              <div className="posting-steps-bottm-sect">
                <div className="posting-steps-bottm-links">
                  <ul>
                    <li className="posingtablinks photo-title">
                      <a href="javascript:void(0) photo-title">
                        <img
                          src="images/post-icon1.png"
                          className="img-fluid posting-link-img"
                          alt="images"
                        />
                        <img
                          src="images/post-icon1-hov.png"
                          className="img-fluid posting-link-img-hov"
                          alt="images"
                        />
                        <span className="posting-hovr">Photo</span>
                      </a>
                    </li>
                    <li className="posingtablinks video-title">
                      <a href="javascript:void(0)">
                        <img
                          src="images/post-icon2.png"
                          className="img-fluid posting-link-img"
                          alt="images"
                        />
                        <img
                          src="images/post-icon2-hov.png"
                          className="img-fluid posting-link-img-hov"
                          alt="images"
                        />
                        <span className="posting-hovr">Video</span>
                      </a>
                    </li>
                    <li className="posingtablinks doc-title">
                      <a href="javascript:void(0)">
                        <img
                          src="images/post-icon3.png"
                          className="img-fluid posting-link-img"
                          alt="images"
                        />
                        <img
                          src="images/post-icon3-hov.png"
                          className="img-fluid posting-link-img-hov"
                          alt="images"
                        />
                        <span className="posting-hovr custm-left">
                          Documents
                        </span>
                      </a>
                    </li>
                    <li className="posingtablinks poll-title">
                      <a href="javascript:void(0)">
                        <img
                          src="images/post-icon4.png"
                          className="img-fluid posting-link-img"
                          alt="images"
                        />
                        <img
                          src="images/post-icon4-hov.png"
                          className="img-fluid posting-link-img-hov"
                          alt="images"
                        />
                        <span className="posting-hovr">Poll</span>
                      </a>
                    </li>
                    <li className="posingtablinks celeb-title">
                      <a href="javascript:void(0)">
                        <img
                          src="images/post-icon5.png"
                          className="img-fluid posting-link-img"
                          alt="images"
                        />
                        <img
                          src="images/post-icon5-hov.png"
                          className="img-fluid posting-link-img-hov"
                          alt="images"
                        />
                        <span className="posting-hovr custm-left2">
                          Celebrate
                        </span>
                      </a>
                    </li>
                    <li className="posingtablinks help-title">
                      <a href="javascript:void(0)">
                        <img
                          src="images/post-icon6.png"
                          className="img-fluid"
                          alt="images"
                        />
                        <span className="posting-hovr">Help</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="posting-steps-btn-links">
                  <span className="mr-2">
                    <a href="#" className="btn posting-steps-back-btn">
                      Back
                    </a>
                  </span>
                  <span
                    onClick={
                      whoCanSeePost === "whole_public"
                        ? shareEvent
                        : whoCanSeePost === "followers_only"
                        ? shareEventToYourFollowers
                        : () => {}
                    }
                  >
                    <a
                      href="#"
                      id="post-save-btn"
                      className="btn posting-steps-done-btn"
                    >
                      Done
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="posting-steps-block-right">
              <div className="posting-steps-block-list">
                <h2>Posting on Enoch</h2>
                <ul>
                  <li>1. Remember the human</li>
                  <li>2. Behave like you would in real life</li>
                  <li>3. Look for the original source of content</li>
                  <li>4. Search for duplicates before posting</li>
                  <li>5. Read the community’s rules</li>
                </ul>
              </div>
              <p>
                Please be mindful of Enoch's <a href="#">content policy</a> and
                practice good reddiquette.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(PostEvent, { getDataFromTree });
