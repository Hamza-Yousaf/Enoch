import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import { GET_USER_PROFILE_QUERY } from "../../../graphql/queries";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import withCountryData from "../../../lib/withCountryData";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { GET_SUGGEST_FOLLOW } from "../../../graphql/userProfileQueries";
import { TOGGLE_FOLLOW_MUTATION } from "../../../graphql/userProfileMutations";

const RightSideBar: React.FC = () => {
  const dispatch = useDispatch();
  const { showEditProfileModal } = bindActionCreators(actionCreators, dispatch);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("follow functionality not supported");
  const [success, setSuccess] = useState(false);
  const [getSuggestFollowFn, { loading, data }] =
    useLazyQuery(GET_SUGGEST_FOLLOW);

  const [toggleFollowM] = useMutation(TOGGLE_FOLLOW_MUTATION);

  const showEditProfileModalValue = useSelector(
    (state: State) => state.showEditProfileModal
  );

  const openEditProfileModal = () => {
    showEditProfileModal(true);
  };

  const closeEditProfileModal = () => {
    showEditProfileModal(false);
  };
  const postData = useQuery(GET_USER_PROFILE_QUERY);

  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    getSuggestFollowFn();
  }, []);

  useEffect(() => {
    if (postData) {
      setPosts(postData?.data?.getUserProfile);
    }
  }, [postData.data]);
  console.log(Posts);

  const onSuggestionHandler = (item: any) => {
    const userid = item?.id.toString();
    toggleFollowM({
      variables: {
        userid: userid,
      },
    })
      .then((res) => {
        //setMessage(res);
        getSuggestFollowFn();
        setShowAlert(true);
        setSuccess(true);
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
      <div className="home-post-right">
        <div
          className={classnames("right-ovelay dApp-overlay", {
            "right-ovelay dApp-overlay panel-overlay":
              showEditProfileModalValue,
          })}
        ></div>
        <div className="Complete-profile-progress-sect">
          <div className="Complete-profile-DP">
            <img
              height="100"
              //@ts-ignore
              src={Posts?.cardAvatar}
              alt="User-DP"
              className="img-fluid"
            />
          </div>
          <div className="Complete-profile-progress-userName">
            <div className="Complete-profile-progress-Bar">
              <div className="Complete-profile-progress-line"></div>
            </div>
            <p>60% Complete</p>
          </div>
          <div
            className="onboarding-edit-prof-link"
            onClick={openEditProfileModal}
          >
            <a href="#">Edit Public Profile & URL</a>
          </div>
          <p className="onboarding-edit-prof-bottm">
            A Completed profile is 71% more likely to be views by a recruiter.
          </p>
        </div>

        <div className="dApp-Who-to-follow-sect">
          <div className="dApp-Who-to-follow-headings">
            <h1>Who to follow</h1>
          </div>
          {data?.SuggestFollow?.length > 0 ? (
            data?.SuggestFollow?.slice(0, 3).map(
              (item: any, index: boolean) => {
                return (
                  <>
                    <div className="dApp-Who-to-follow">
                      <div className="dApp-Who-to-follow-content">
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
                            {item?.userName != null
                              ? item?.userName
                              : "@Johnnyenglish"}{" "}
                          </li>
                          <li className="Promoted">
                            <span>
                              <img
                                src="/images/External-Link.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            Promoted
                          </li>
                        </ul>
                      </div>
                      <div
                        className="dApp-Who-to-follow-btn"
                        onClick={() => onSuggestionHandler(item)}
                      >
                        <button>Follow</button>
                      </div>
                    </div>
                  </>
                );
              }
            )
          ) : (
            <div className="dApp-Who-to-follow">
              <div className="dApp-Who-to-follow-content">
                <ul>
                  <li className="Promoted">
                    <span>No Follow</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="dApp-Who-seemore">
            <a href="/follow-show-more">Show more</a>
          </div>
        </div>

        <div className="dApp-Topics-to-follow-sect">
          <div className="dApp-Topics-to-follow-headings">
            <h1>Topics to follow</h1>
          </div>
          <div className="dApp-Topics-to-follow">
            <div className="dApp-Topics-to-follow-content">
              <h2>Cricket </h2>
              <h3>Sport</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>

          <div className="dApp-Topics-to-follow">
            <div className="dApp-Topics-to-follow-content">
              <h2>Female Top Fashion </h2>
              <h3>All about fashion world</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>

          <div className="dApp-Topics-to-follow">
            <div className="dApp-Topics-to-follow-content">
              <h2>Technology </h2>
              <h3>Latest gadgets</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>

          <div className="dApp-Topics-to-follow">
            <div className="dApp-Topics-to-follow-content">
              <h2>Entertainment </h2>
              <h3>All about hollywood</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>

          <div className="dApp-Topics-to-follow mb-0">
            <div className="dApp-Topics-to-follow-content">
              <h2>Careers </h2>
              <h3>Search for jobs</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withCountryData(RightSideBar, { getDataFromTree });
