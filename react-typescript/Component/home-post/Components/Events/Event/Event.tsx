import React, { useEffect, useState } from "react";
import Header from "../../../../../Component/onBoard/header";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";
import { useRouter } from "next/router";
import withApollo from "../../../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import {
  GET_OTHER_USER_QUERY,
  GET_USER_PROFILE_QUERY,
  SINGLE_EVENT_QUERY,
} from "../../../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { format, compareAsc, isValid } from "date-fns";
import "three-dots/dist/three-dots.min.css";
import dynamic from "next/dynamic";
const EventHeaderSection = dynamic(() => import("./EventHeaderSection"));



interface Props {
  allEvents: any;
}

const Event: React.FC<Props> = ({ allEvents }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const showInviteAttendeesModalValue = useSelector(
    (state: State) => state.showInviteAttendeesModal
  );
  const [userId, setUserId] = useState("");

  const {
    showInviteAttendeesModal,
    showShareEventModal,
    currentEventCreationStage,
    currentLoggedInUser,
  } = bindActionCreators(actionCreators, dispatch);
  const [currentEvent, setCurrentEvent] = useState(null);

  const queriedEvent = router.query.eventId;

  const { data, loading, error } = useQuery(GET_OTHER_USER_QUERY, {
    variables: {
      userId: currentEvent?.organizerId,
    },
  });

  const formatTime = (time: any) => {
    return format(new Date(time), "p");
  };

  const formatDate = (time: any) => {
    return format(new Date(time), "PPP");
  };

  console.log(currentEvent);

  const userProfile = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (userProfile) {
      console.log(userProfile);
      setUserId(userProfile?.data?.getUserProfile.id);
    }
  }, [userProfile]);

  console.log(userId);

  const singleEventQueryData = useQuery(SINGLE_EVENT_QUERY, {
    variables: {
      id: queriedEvent,
    },
  });

  useEffect(() => {
    console.log("single", singleEventQueryData?.data);
    setCurrentEvent(singleEventQueryData?.data?.singleEvent);
  }, [singleEventQueryData?.data, singleEventQueryData?.loading]);

  console.log(currentEvent);

  return (
    <div
      className={
        showInviteAttendeesModalValue
          ? "your-event-body modal-open"
          : "your-event-body"
      }
      style={showInviteAttendeesModalValue ? { paddingRight: 17 } : {}}
    >
      <div className="container-fluid dashboard-body-bg second-body-bg">
        <Header />
        <div className="row">
          <div className="ezl-dashboard-container">
            <div className="dApp-S-Home-body">
              <div className="row m-0">
                <div className="col-lg-9 p-0">
                  <div className="your-event-page-left-sect">
                    <EventHeaderSection
                      userId={userId}
                      currentEvent={currentEvent}
                    />

                    <div className="Invite-Attendees-modal-sect">
                      {/* <!-- Share-Event-Modal --> */}
                      <div className="modal" id="Invite-Attendees-Modal">
                        <div className="modal-dialog">
                          <div className="modal-content Invite-Attendees-Modal-content">
                            {/* <!-- Modal Header --> */}
                            <div className="Invite-Attendees-Modal-header">
                              <h1>Invite Followers</h1>
                              <button
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

                            {/* <!-- Modal body --> */}
                            <div className="Invite-Attendees-Modal-body">
                              <div className="Invite-Attendees-Modal-searchBar">
                                <button>
                                  <img
                                    src="/images/invite-modal-Search.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                </button>
                                <input type="text" value="Amelia" />
                              </div>
                              <div className="Invite-Attendees-list-sect">
                                <div className="Invite-Attendees-list-right">
                                  <div className="Invite-Attendees-list-people no-border">
                                    <div className="Invite-Attendees-people-checkBox">
                                      <input type="checkbox" />
                                    </div>
                                    <div className="Invite-Attendees-people-profilePic">
                                      <img
                                        src="/images/event-invite-people1.png"
                                        alt="UserDP"
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="Invite-Attendees-people-Text">
                                      <h1>Amelia Margaret</h1>
                                      <p>
                                        UX Director & Designer • Producer,
                                        Bollywood • Ex Design Head AthenaHealth,
                                        Apple Mobility Partners, Althea Americas
                                      </p>
                                    </div>
                                  </div>

                                  <div className="Invite-Attendees-list-people">
                                    <div className="Invite-Attendees-people-checkBox">
                                      <input type="checkbox" />
                                    </div>
                                    <div className="Invite-Attendees-people-profilePic">
                                      <img
                                        src="/images/event-invite-people2.png"
                                        alt="UserDP"
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="Invite-Attendees-people-Text">
                                      <h1>Harry Callum</h1>
                                      <p>
                                        UX Director & Designer • Producer,
                                        Bollywood • Ex Design Head AthenaHealth,
                                        Apple Mobility Partners, Althea Americas
                                      </p>
                                    </div>
                                  </div>

                                  <div className="Invite-Attendees-list-people">
                                    <div className="Invite-Attendees-people-checkBox">
                                      <input type="checkbox" />
                                    </div>
                                    <div className="Invite-Attendees-people-profilePic">
                                      <img
                                        src="/images/event-invite-people3.png"
                                        alt="UserDP"
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="Invite-Attendees-people-Text">
                                      <h1>Thomas Joe</h1>
                                      <p>
                                        UX Director & Designer • Producer,
                                        Bollywood • Ex Design Head AthenaHealth,
                                        Apple Mobility Partners, Althea Americas
                                      </p>
                                    </div>
                                  </div>

                                  <div className="Invite-Attendees-list-people">
                                    <div className="Invite-Attendees-people-checkBox">
                                      <input type="checkbox" />
                                    </div>
                                    <div className="Invite-Attendees-people-profilePic">
                                      <img
                                        src="/images/event-invite-people4.png"
                                        alt="UserDP"
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="Invite-Attendees-people-Text">
                                      <h1>James Charlie</h1>
                                      <p>
                                        UX Director & Designer • Producer,
                                        Bollywood • Ex Design Head AthenaHealth,
                                        Apple Mobility Partners, Althea Americas
                                      </p>
                                    </div>
                                  </div>

                                  <div className="Invite-Attendees-list-people">
                                    <div className="Invite-Attendees-people-checkBox">
                                      <input type="checkbox" />
                                    </div>
                                    <div className="Invite-Attendees-people-profilePic">
                                      <img
                                        src="/images/event-invite-people5.png"
                                        alt="UserDP"
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="Invite-Attendees-people-Text">
                                      <h1>William Damian</h1>
                                      <p>
                                        UX Director & Designer • Producer,
                                        Bollywood • Ex Design Head AthenaHealth,
                                        Apple Mobility Partners, Althea Americas
                                      </p>
                                    </div>
                                  </div>

                                  <div className="Invite-Attendees-list-people">
                                    <div className="Invite-Attendees-people-checkBox">
                                      <input type="checkbox" />
                                    </div>
                                    <div className="Invite-Attendees-people-profilePic">
                                      <img
                                        src="/images/event-invite-people5.png"
                                        alt="UserDP"
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="Invite-Attendees-people-Text">
                                      <h1>William Damian</h1>
                                      <p>
                                        UX Director & Designer • Producer,
                                        Bollywood • Ex Design Head AthenaHealth,
                                        Apple Mobility Partners, Althea Americas
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="Invite-Attendees-list-left">
                                  <div className="Invite-Attendees-left-header">
                                    <h1>1 Selected</h1>
                                    <h2>Remove All</h2>
                                  </div>
                                  <ul>
                                    <li>
                                      <div className="Invite-Attendees-seleceted-list">
                                        <div
                                          className="
                                          Invite-Attendees-seleceted-person-img
                                        "
                                        >
                                          <img
                                            src="/images/KieraThomson.png"
                                            alt="UserDP"
                                            className="img-fluid"
                                          />
                                        </div>
                                        <div
                                          className="
                                          Invite-Attendees-seleceted-person-name
                                        "
                                        >
                                          <h3>Amelia Margaret</h3>
                                        </div>
                                        <div
                                          className="
                                          Invite-Attendees-seleceted-person-close
                                        "
                                        >
                                          <img
                                            src="/images/selecetd-closeCross.png"
                                            alt="X"
                                            className="img-fluid"
                                          />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Invite-Attendees-btn">
                                <button>
                                  <a href="#">Invite 1</a>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="Share-Event-Modal-sect">
                      <div className="modal" id="ShareEvent-Modal">
                        <div className="modal-dialog">
                          <div className="modal-content Share-Event-Modal-content">
                            <div className="Share-Event-Modal-header">
                              <h2>Share This Event</h2>
                              <button
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
                              <div className="share-post-evnt">
                                <h3>Share in a post</h3>
                                <div
                                  data-dismiss="modal"
                                  className="sharepost-btn-block"
                                >
                                  <span>
                                    <img
                                      src="/images/share-logo.png"
                                      className="img-fluid"
                                      alt="logo"
                                    />
                                  </span>
                                  <button
                                    onClick={() => {
                                      router.push({
                                        pathname: "/post-event",
                                        query: {
                                          eventId: currentEvent?.id,
                                        },
                                      });
                                    }}
                                    className="sharenow-post-btn"
                                  >
                                    Share now
                                  </button>
                                </div>
                              </div>
                              <h3>Invite your friends to join you.</h3>
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
                                    <h4>Share</h4>
                                  </li>

                                  <li className="twitter">
                                    <span>
                                      <img
                                        src="/images/event-share-twitter.png"
                                        alt="twitter"
                                        className="img-fluid"
                                      />
                                    </span>
                                    <h4>Tweet</h4>
                                  </li>

                                  <li className="linkedIn">
                                    <span>
                                      <img
                                        src="/images/event-share-linkedIn.png"
                                        alt="linkedIn"
                                        className="img-fluid"
                                      />
                                    </span>
                                    <h4>Post</h4>
                                  </li>

                                  <li className="Google">
                                    <span>
                                      <img
                                        src="/images/event-share-Google.png"
                                        alt="Google"
                                        className="img-fluid"
                                      />
                                    </span>
                                    <h4>Share</h4>
                                  </li>

                                  <li className="Text">
                                    <span>
                                      <img
                                        src="/images/event-share-text.png"
                                        alt="text-message"
                                        className="img-fluid"
                                      />
                                    </span>
                                    <h4>Text</h4>
                                  </li>

                                  <li className="Mail">
                                    <span>
                                      <img
                                        src="/images/event-share-Mail.png"
                                        alt="mail"
                                        className="img-fluid"
                                      />
                                    </span>
                                    <h4>Mail</h4>
                                  </li>
                                </ul>
                              </div>
                              <div className="Copy-Share-link-Sect">
                                <h4>Share this link:</h4>
                                <div className="Copy-Share-link-input">
                                  <input
                                    type="text"
                                    value="Enoch.app/manage/events/164813165615/preview_publish"
                                  />
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

                    <div
                      className="your-event-about-sect"
                      dangerouslySetInnerHTML={{
                        __html: currentEvent?.description,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="col-lg-3 p-0">
                  <div className="your-event-page-right-sect">
                    <div className="Manage-Events-sect">
                      <div className="Manage-Events-sect-headings">
                        <h1>Manage Events</h1>
                      </div>
                      <div className="Manage-Events-list">
                        <ul>
                          <li
                            onClick={() => {
                              currentEventCreationStage(0);
                              router.push(`/events/create`);
                            }}
                          >
                            <a href="#">Craete New Event</a>
                          </li>
                          <li
                            onClick={() => {
                              router.push({
                                pathname: `/events/manage`,
                                query: {
                                  tab: "allEvents",
                                  eventId: currentEvent?.id,
                                },
                              });
                            }}
                          >
                            <a href="#">Manage Event</a>
                          </li>
                          <li>
                            <a href="#">Analytics</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="Sponsored-banner-Section">
                      <div className="Sponsored-banner-bg h-240">
                        <div className="Sponsored-banner-img">
                          <img
                            src="/images/Sponsored-img.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="img-resulation">
                          <h1>324PX /240PX</h1>
                        </div>
                      </div>
                      <div className="Sponsored-text">
                        <h6>
                          Sponsored
                          <span>
                            <img
                              src="/images/Sponsored-icon.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="Sponsored-banner-Section">
                      <div className="Sponsored-banner-bg h-360">
                        <div className="Sponsored-banner-img">
                          <img
                            src="/images/Sponsored-img.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="img-resulation">
                          <h1>324PX /360PX</h1>
                        </div>
                      </div>
                      <div className="Sponsored-text">
                        <h6>
                          Sponsored
                          <span>
                            <img
                              src="/images/Sponsored-icon.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="Sponsored-banner-Section">
                      <div className="Sponsored-banner-bg h-480">
                        <div className="Sponsored-banner-img">
                          <img
                            src="/images/Sponsored-img.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="img-resulation">
                          <h1>324PX /480PX</h1>
                        </div>
                      </div>
                      <div className="Sponsored-text">
                        <h6>
                          Sponsored
                          <span>
                            <img
                              src="/images/Sponsored-icon.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                        </h6>
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

export default withApollo(Event, { getDataFromTree });
