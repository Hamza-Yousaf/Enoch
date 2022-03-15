import { useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../../../state/index";
import withApollo from "../../../../lib/withApollo";
import { useRouter } from "next/router";
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";
import { bindActionCreators } from "redux";

const MakePost = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const router = useRouter();

  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const goToCreatePostPage = (tab: string) => {
    setCreatePostState({
      ...createPostState,
      currentCreatePostTab: tab,
      postingAs: loggedInUser?.userName,
      userProfileImage: loggedInUser?.profileImage,
      userName: loggedInUser?.userName,
      usersCommunity: "88mph",
      whoCanSeePost: "anyone",
      postText: "",
      sendingPost: false,
      isPostScreenOpen: false,
      postVideoFile: "",
      postImageFile: "",
      postTitle: "",
      selectedCommunityName: "",
      selectedCommunityImage: "",
      pollQuestion: "",
      OptionA: "",
      OptionB: "",
      OptionC: "",
      OptionD: "",
      duration: "1 Week",
      pollCreationStage: 1,
      optionCAdded: false,
      addOptionC: false,
      addOptionD: false,
    });
    router.push("/create-a-post");
  };

  const { data, loading, error } = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (data) {
      setLoggedInUser(data?.getUserProfile);
    }
  }, [data]);

  return (
    <div className="dApp-status-block mb-16">
      <div className="home-post-share-block">
        <div className="home-post-share-lft">
          <img
            src={loggedInUser?.profileImage || "/images/comm-usr-img6.png"}
            alt="DP"
            className="img-fluid"
          />
        </div>

        <div className="home-post-share-right">
          <div
            style={{ width: "100%" }}
            onClick={() => goToCreatePostPage("text-post")}
          >
            <input
              style={{ width: "100%" }}
              disabled
              className="home-post-input"
              placeholder="Post"
            />
          </div>

          <ul>
            <li onClick={() => goToCreatePostPage("photo-post")}>
              <span>
                <img
                  src="/images/post-Image.png"
                  className="img-fluid"
                  alt="Photo"
                />
              </span>
              Photo
            </li>
            <li onClick={() => goToCreatePostPage("video-post")}>
              <span>
                <img
                  src="/images/post-Video.png"
                  className="img-fluid"
                  alt="Video"
                />
              </span>
              Video
            </li>
            <li onClick={() => router.push("/events/create")}>
              <span>
                <img
                  src="/images/post-Event.png"
                  className="img-fluid"
                  alt="Event"
                />
              </span>
              Event
            </li>
            <li onClick={() => router.push("/feeds")}>
              <span>
                <img
                  src="/images/post-Article.png"
                  className="img-fluid"
                  alt="Write Article"
                />
              </span>
              Write Article
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withApollo(MakePost, { getDataFromTree });
