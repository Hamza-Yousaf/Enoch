import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  GET_OTHER_USER_QUERY,
  SINGLE_EVENT_QUERY,
} from "../../../../graphql/queries";
import { useRouter } from "next/router";

interface Props {
  event: any;
}

const SingleSharedEvent: React.FC<Props> = ({ event }) => {
  const [singleEvent, setSingleEvent] = useState(null);
  const [eventSharer, setEventSharer] = useState(null);
  const [organizer, setOrganizer] = useState(null);

  console.log(event);

  const router = useRouter();

  const eventQueryData = useQuery(SINGLE_EVENT_QUERY, {
    variables: {
      id: event?.event_id,
    },
  });

  useEffect(() => {
    if (eventQueryData?.data) {
      setSingleEvent(eventQueryData?.data?.singleEvent);
    }
  }, [eventQueryData?.data]);

  const organizerQueryData = useQuery(GET_OTHER_USER_QUERY, {
    variables: {
      organizerId: singleEvent?.event_id,
    },
  });

  useEffect(() => {
    if (organizerQueryData?.data) {
      setOrganizer(organizerQueryData?.data?.getUserProfile);
    }
  }, [organizerQueryData?.data, singleEvent]);

  const sharerQueryData = useQuery(GET_OTHER_USER_QUERY, {
    variables: {
      userId: event?.sharer_id,
    },
  });

  useEffect(() => {
    if (sharerQueryData?.data) {
      setEventSharer(sharerQueryData?.data?.getOtherUserProfile);
    }
  }, [sharerQueryData?.data]);

  console.log(singleEvent);
  console.log(eventSharer);
  console.log(organizer);

  const eventDuration = () => {
    if (singleEvent?.start_date && singleEvent?.start_time) {
      return `${format(new Date(singleEvent.start_date), "E")}, ${format(
        new Date(singleEvent.start_date),
        "MMM"
      )} ${format(new Date(singleEvent.start_date), "d")}, ${format(
        new Date(singleEvent.start_time),
        "p"
      )} - ${format(new Date(singleEvent.end_date), "E")}, ${format(
        new Date(singleEvent.end_date),
        "MMM"
      )} ${format(new Date(singleEvent.end_date), "d")}, ${format(
        new Date(singleEvent.end_time),
        "p"
      )} ${format(new Date(singleEvent.end_time), "z")}`;
    }
  };

  const eventStart = () => {
    if (singleEvent?.start_date && singleEvent?.start_time) {
      return ` ${format(new Date(singleEvent?.start_date), "LLLL")} ${format(
        new Date(singleEvent?.start_date),
        "d"
      )}`;
    }
  };

  return (
    <div className="dApp-status-block mb-16">
      <div className="dApp-status-heading">
        <div className="dApp-status-heading-profile-pic">
          <img
            src={event?.sharer?.profileImage}
            alt="DP"
            className="img-fluid"
          />
        </div>
        <div className="dApp-status-heading-text">
          <h1>{event?.sharer?.userName}</h1>
          <h2>{event?.sharer?.bio}</h2>
          <h3>
            <span>
              <img src="/images/Clock.png" alt="icon" className="img-fluid" />
            </span>
            {eventStart()}
          </h3>
        </div>
        <div className="dApp-post-3dots dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="/images/dApp-ThreeDots.png"
              alt="3dots"
              className="img-fluid post-threedots"
            />
            <img
              src="/images/dApp-ThreeDots.png"
              alt="3dots"
              className="img-fluid post-threedots-active"
            />
          </a>
          <div className="dropdown-menu home-drop-postStatus">
            <ul>
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/post-save.png"
                        alt="save"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Save</h3>
                      <p>Save for later</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/copy.png"
                        alt="copy"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h4>Copy link to post</h4>
                    </div>
                  </div>
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/report.png"
                        alt="report"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Report this post</h3>
                      <p>This post is offensive or the account is hacked</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: event?.text,
        }}
        className="shareEvnt-usr-txt"
      >
        {/* Text will come here ID you want to write anything about this event */}
      </div>
      <div className="posting-steps-innerbody mb-0">
        <div className="post-share-evnt border-r-0 mt-4">
          <div className="post-share-evnt-img h-auto">
            <img
              src={
                singleEvent?.eventBannerImage || "/images/event-cover-pic.png"
              }
              alt="Cover-photo"
              className="img-fluid your-event-cover-img"
            />
            <h3>{singleEvent?.eventBanner || singleEvent?.title}</h3>
          </div>

          <div className="shareEvnt-tranfer-token shareEvnt-usr">
            <div className="shareEvnt-tranfer-token-lft">
              <h3>{eventDuration()}</h3>
              <div className="shareEvnt-tranfer-top-block">
                <div className="your-event-info-lft">
                  <h2>{singleEvent?.title}</h2>
                  <h3>Event by {singleEvent?.organizer?.userName}</h3>
                </div>
                <div className="shareEvnt-tranfer-token-right">
                  <button
                    onClick={() => {
                      router.push(`/events/${singleEvent?.id}`);
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
                    src="/images/event-vdo.png"
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
                        src="/images/MarkCircle.png"
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
      <div className="dApp-status-like-comment-share-sect">
        <ul>
          <li>
            <div className="home-post-usr-reaction-wrap">
              <div className="home-post-usr-reaction">
                <span>
                  <img
                    src="/images/reaction1.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="/images/reaction2.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="/images/reaction3.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="/images/reaction4.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="/images/reaction5.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="/images/reaction6.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
              </div>
            </div>
            <span>
              <img
                src="/images/like1.png"
                alt="icon"
                className="img-fluid post-like"
              />
              <img
                src="/images/like-hov1.png"
                alt="icon"
                className="img-fluid post-like-hov"
              />
            </span>
            <a href="#">Like</a>
          </li>

          <li>
            <span>
              <img
                src="/images/dislike.png"
                alt="icon"
                className="img-fluid post-like"
              />
              <img
                src="/images/dislike-hov.png"
                alt="icon"
                className="img-fluid post-like-hov"
              />
            </span>
            <a href="#">Dislike</a>
          </li>

          <li>
            <span>
              <img
                src="/images/gift.png"
                alt="icon"
                className="img-fluid post-like"
              />
              <img
                src="/images/gift-hov.png"
                alt="icon"
                className="img-fluid post-like-hov"
              />
            </span>{" "}
            <a href="#">Gift</a>
          </li>

          <li>
            <span>
              <img
                src="/images/comment-icon.png"
                alt="icon"
                className="img-fluid post-like"
              />
              <img
                src="/images/comment-icon-hov.png"
                alt="icon"
                className="img-fluid post-like-hov"
              />
            </span>
            <a href="#">Comment</a>
          </li>

          <li>
            <span>
              <img
                src="/images/dApp-Share.png"
                alt="icon"
                className="img-fluid post-like"
              />
              <img
                src="/images/dApp-Share-hov.png"
                alt="icon"
                className="img-fluid post-like-hov"
              />
            </span>
            <a href="#">Share</a>
          </li>

          <li>
            <span>
              <img
                src="/images/Paper-Plane.png"
                alt="icon"
                className="img-fluid post-like"
              />
              <img
                src="/images/Paper-Plane-hov.png"
                alt="icon"
                className="img-fluid post-like-hov"
              />
            </span>
            <a href="#">Send</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleSharedEvent;
