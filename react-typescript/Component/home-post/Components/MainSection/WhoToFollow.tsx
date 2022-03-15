import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";
import { USERS_I_FOLLOW_QUERY } from "../../../../graphql/Queries/usersIFollow";
import { TOGGLE_FOLLOW_MUTATION } from "../../../../graphql/userProfileMutations";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../AlertModal"));
import { useRouter } from "next/router";
import { getOtherUsersFollowers } from "../../../../graphql/Queries/otherUsersFollowers";
import { POSTS_QUERY } from "../../../../graphql/Queries/homepostQuery";

interface Props {
  item: any;

  usersIFollow: any;
}

const WhoToFollow: React.FC<Props> = ({ item, usersIFollow }) => {
  const router = useRouter();
  const [following, setFollowing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("follow functionality not supported");
  const [success, setSuccess] = useState(false);
  const [usersFollowers, setUsersFollowers] = useState([]);

  const [toggleFollowM] = useMutation(TOGGLE_FOLLOW_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_PROFILE_QUERY,
      },
      {
        query: USERS_I_FOLLOW_QUERY,
      },
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
          limit: 150,
        },
      },
    ],
  });

  const usersFollowersQueryData = useQuery(getOtherUsersFollowers, {
    variables: { userId: item.id },
  });

  useEffect(() => {
    if (usersFollowersQueryData?.data) {
      setUsersFollowers(usersFollowersQueryData?.data?.GetOthersUsersFollowers);
    }
  }, [usersFollowersQueryData?.data]);

  useEffect(() => {
    let result = usersIFollow.filter((user: any) => {
      return user.followinguserid === item.id;
    });

    console.log(result);

    if (result?.length > 0) {
      setFollowing(true);
    }
  }, [usersIFollow]);

  const onSuggestionHandler = (item: any) => {
    const userid = item?.id.toString();
    toggleFollowM({
      variables: {
        userid: userid,
      },
    })
      .then((res) => {
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
        setShowAlert(true);
        setSuccess(true);
      });
  };

  return (
    <>
      <AlertModal
        message={message}
        setShowAlert={setShowAlert}
        showAlert={showAlert}
        success={success}
      />
      <div className="dApp-Who-to-follow">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push(`/user/${item.id}`);
          }}
          className="dApp-Who-to-follow-content"
        >
          <div className="dApp-Who-to-follow-dp">
            <img
              src={
                item?.profileImage != null
                  ? item?.profileImage
                  : "images/userAvatar4.png"
              }
              alt="photo"
              className="img-fluid"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <ul>
            <li className="profile-name">
              {" "}
              {item?.userName != null ? item?.userName : "@anonymous"}{" "}
            </li>
            {/* <li className="Promoted">
                              <span>
                                <img
                                  src="/images/External-Link.png"
                                  alt="icon"
                                  className="img-fluid"
                                />
                              </span>
                              Promoted
                            </li> */}
          </ul>
        </div>
        <div
          className="dApp-Who-to-follow-btn"
          onClick={() => onSuggestionHandler(item)}
        >
          <button>{following ? "Following" : "Follow"}</button>
        </div>
      </div>
    </>
  );
};

export default WhoToFollow;
