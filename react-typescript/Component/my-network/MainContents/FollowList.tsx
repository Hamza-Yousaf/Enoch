import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { followData } from "../../../lib/FollowData";

const FollowList = () => {
  const [followArry, setArryFollow] = useState(followData);

  const onFollowHandler = (index: any) => {
    console.log("onFollowHandler");
    let newFollowArry = [];
    newFollowArry = followArry.map((e, i) =>
      index.toString() == i.toString() ? { ...e, follow: !e?.follow } : e
    );
    setArryFollow(newFollowArry);
  };

  return (
    <div className="follow-list-content">
      {followArry &&
        followArry.map((item, index) => {
          return (
            <div className="follow_list_card">
              <div className="follow_list_card_DP">
                <img src={item?.img} alt="img" className="img-fluid" />
              </div>
              <h4>{item?.name}</h4>
              <h5>{item?.dec}</h5>
              <h6>
                <span>
                  <img
                    src="/images/mutual.svg"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                {item?.mutualFirendsCount} mutual firends
              </h6>
              <div
                className={classnames("follow_card_btns", {
                  "active": item?.follow == true,
                  "": !item?.follow == false,
                })}
              >
                <button
                  className="Follow-btn"
                  onClick={() => onFollowHandler(index)}
                >
                  <span>
                    <img
                      src="/images/follow-Icon-Artwork.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  Follow
                </button>
                <button
                  className="Following-btn"
                  onClick={() => onFollowHandler(index)}
                >
                  <span>
                    <img
                      src="/images/following-Check.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  Following
                </button>
              </div>

              <button className="follow-card-close-btn">
                <img
                  src="/images/follow-card-Cross.svg"
                  alt="icon"
                  className="img-fluid"
                />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default FollowList;
