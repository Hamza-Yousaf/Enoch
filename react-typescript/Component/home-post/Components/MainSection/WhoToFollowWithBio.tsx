import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";
import { GET_MY_FOLLOERS } from "../../../../graphql/Queries/myFollowers";
import { USERS_I_FOLLOW_QUERY } from "../../../../graphql/Queries/usersIFollow";
import { TOGGLE_FOLLOW_MUTATION } from "../../../../graphql/userProfileMutations";
import { useRouter } from "next/router";
import { getOtherUsersFollowers } from "../../../../graphql/Queries/otherUsersFollowers";

interface Props {
  item: any;
  followers: any;
  usersIFollow: any;
  setShowMoreSuggestions: any;
}

const WhoToFollowWithBio: React.FC<Props> = ({
  item,
  followers,
  usersIFollow,
  setShowMoreSuggestions,
}) => {
  const [message, setMessage] = useState("follow functionality not supported");
  const [success, setSuccess] = useState(false);
  const [following, setFollowing] = useState(false);
  const [isMyFollower, setIsMyFollower] = useState(false);
  const [alreadyFollowed, setAlreadyFollowed] = useState(false);
  const [usersFollowers, setUsersFollowers] = useState([]);

  const router = useRouter();

  const usersFollowersQueryData = useQuery(getOtherUsersFollowers, {
    variables: { userId: item.id },
  });

  useEffect(() => {
    if (usersFollowersQueryData?.data) {
      setUsersFollowers(usersFollowersQueryData?.data?.GetOthersUsersFollowers);
    }
  }, [usersFollowersQueryData?.data]);

  console.log("followers", usersFollowers);

  useEffect(() => {
    if (followers?.length > 0) {
      let result = followers.filter((follower: any) => {
        console.log("itme", item.userName, follower.userName);

        return follower.userid === item.id;
      });

      console.log("res", result);

      if (result.length > 0) {
        setIsMyFollower(true);
      } else {
        setIsMyFollower(false);
      }
    }
  }, [followers]);

  const [toggleFollowM] = useMutation(TOGGLE_FOLLOW_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_PROFILE_QUERY,
      },
      {
        query: USERS_I_FOLLOW_QUERY,
      },
    ],
  });

  const onSuggestionHandler = (item: any) => {
    const userid = item?.id.toString();
    toggleFollowM({
      variables: {
        userid: userid,
      },
    })
      .then((res) => {
        setSuccess(true);
        if (/you start following/.test(res?.data?.FollowerAndUnfollowRequeat)) {
          setFollowing(true);
        }
        if (/you cancel follow/.test(res?.data?.FollowerAndUnfollowRequeat)) {
          setFollowing(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setMessage(err.message);
        setSuccess(true);
      });
  };

  console.log(usersIFollow);

  useEffect(() => {
    let result = usersIFollow.filter((user: any) => {
      return user.followinguserid === item.id;
    });

    console.log(result);

    if (result?.length > 0) {
      setFollowing(true);
    }
  }, [usersIFollow]);
  return (
    <li>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push(`/user/${item.id}`);
          setShowMoreSuggestions(false);
        }}
        className="You-might-like-follow-dp"
      >
        <img
          src={
            item?.profileImage != null
              ? item?.profileImage
              : "/images/follow-user-dp.png"
          }
          style={{ borderRadius: "50%" }}
          alt="image"
          className="img-fluid"
        />
        {/* <div className="user-vip-tag">
          <img src="/images/vip-tag.png" alt="icon" className="img-fluid" />
        </div> */}
      </div>
      <div className="You-might-like-follow-text-sect">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push(`/user/${item.id}`);
            setShowMoreSuggestions(false);
          }}
          className="You-might-like-follow-text"
        >
          <div className="follow-dp-vip-user-text">
            <span>
              <img
                src="/images/vip-user-icon.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            <h4>
              {usersFollowers?.length === 0 ? `no followers` : ""}
              {usersFollowers?.length === 1
                ? `@${usersFollowers[0].follower?.userName} follows`
                : ""}
              {usersFollowers?.length === 2
                ? `@${usersFollowers[0].follower?.userName} and 1 other follow`
                : ""}
              {usersFollowers?.length > 2
                ? `@${usersFollowers[0].follower?.userName} and ${
                    usersFollowers?.length - 1
                  } others follow`
                : ""}
            </h4>
          </div>
          <div className="You-might-like-follow-username">
            <h5> {item?.userName != null ? item?.userName : "@JaniceHum"}</h5>
            {isMyFollower && <span>Follows You</span>}
          </div>
          <p>
            {item?.bio != null ? (
              item?.bio
            ) : (
              <span>
                Entrepreneur always eager to learn more and contribute as much
                as possible into making a better world. <a href="#">#crypto</a>{" "}
                beginner & <a href="#">#nft</a> creator <a href="#">#startup</a>{" "}
                enthusiast
              </span>
            )}
          </p>
        </div>
        <div
          className="You-might-like-follow-btn"
          onClick={() => onSuggestionHandler(item)}
        >
          <button>{following ? "Following" : "Follow"}</button>
        </div>
      </div>
    </li>
  );
};

export default WhoToFollowWithBio;
