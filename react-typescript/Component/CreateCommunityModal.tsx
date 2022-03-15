import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state/index";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_COMMUNITY_MUTATION } from "../graphql/mutations";
import { GET_ALL_ENOCH_COMMUNITIES } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import router from "next/router";

const CreateCommunityModal = () => {
  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState("");
  const [isAdultCommunity, setIsAdultCommunity] = useState(false);
  const [isSuccessfull, setIsSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [communityId, setCommunityId] = useState("");
  const [communityNameAlreadyTaken, setCommunityNameAlreadyTaken] =
    useState(false);
  const [charactersLeft, setCharactersLeft] = useState(50);

  const dispatch = useDispatch();
  const { showCreateCommunityModal } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const showCreateCommunityModalValue = useSelector(
    (state: State) => state.showCreateCommunityModal
  );

  const allCommunities = useQuery(GET_ALL_ENOCH_COMMUNITIES);

  const onChangeName = (e: any) => {
    // console.log(e.target.value);
    if (allCommunities?.data?.getAllCommunity?.length > 0) {
      allCommunities?.data?.getAllCommunity.some((community: any) => {
        // console.log(community.communityName);
        if (community.communityName !== "") {
          const testRegex = new RegExp(`^@${community.communityName}$`, "i");

          if (testRegex.test(e.target.value)) {
            setCommunityNameAlreadyTaken(true);
            return true;
          } else {
            setCommunityNameAlreadyTaken(false);
          }
        }
      });
    }
    if (communityName[0] === "@") {
      setCommunityName(e.target.value);
    } else {
      setCommunityName("@" + e.target.value);
    }
  };

  const onChangeType = (e: any) => {
    setCommunityType(e.target.value);
  };

  const toggleIsAdult = (e: any) => {
    setIsAdultCommunity(!isAdultCommunity);
  };

  const [createCommunity, { data, loading, error }] = useMutation(
    CREATE_COMMUNITY_MUTATION
  );

  const create_Community = () => {
    createCommunity({
      variables: {
        communityType: communityType,
        CommunityInput: {
          communityName: communityName,
          adult_community: isAdultCommunity,
        },
        about: "",
      },
    })
      .then((result) => {
        showCreateCommunityModal(false);
        if (result?.data?.CreateCommunity?.communityName?.length > 0) {
          setIsSuccessful(true);
          setMessage("Community Successfully created");
          setCommunityId(result?.data?.CreateCommunity?.id);
        }
      })
      .catch((err) => {
        setIsSuccessful(false);
        setMessage(err.message);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      if (isSuccessfull === true) {
        router.push({
          pathname: `/communities/${communityId}`,
          query: {
            isUserCommunity: true,
          },
        });
        // router.push(`/communities/${communityId}`);
      }
    }, 500);
  }, [communityId]);

  return (
    <>
      <div className="CreateCommunity-Modal-sect">
        <div
          className={showCreateCommunityModalValue ? "modal in" : "modal"}
          style={
            showCreateCommunityModalValue
              ? { display: "block", background: "rgba(0,0,0,0.8)" }
              : { display: "none" }
          }
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {message.length > 0 ? (
                <>
                  <div className="CreateCommunity-Modal-header">
                    <div
                      className="close CreateCommunity-Modal-modal-close"
                      data-dismiss="modal"
                      onClick={() => {
                        showCreateCommunityModal(false);
                        setMessage("");
                      }}
                    >
                      <img
                        src="/images/hCross.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="CreateCommunity-Modal-body">
                    <p
                      className={
                        !isSuccessfull
                          ? "text-danger text-center p-5"
                          : "text-center p-5 text-success"
                      }
                    >
                      {message}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* <!-- Modal Header --> */}
                  <div className="CreateCommunity-Modal-header">
                    {/* <!--<h4 className="modal-title">Add experience</h4>--> */}
                    <div
                      className="close CreateCommunity-Modal-modal-close"
                      data-dismiss="modal"
                      onClick={() => showCreateCommunityModal(false)}
                    >
                      <img
                        src="/images/hCross.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="CreateCommunity-Modal-body">
                    <div className="input-name">
                      <h1>Name*</h1>
                      <p>
                        Community names including capitalization cannot be
                        changed.
                      </p>
                      <input
                        type="text"
                        value={communityName}
                        onChange={(e) => onChangeName(e)}
                        placeholder="@community_name"
                        id="CreateCommunity-input-name-fild"
                        className={
                          communityNameAlreadyTaken && communityName.length > 0
                            ? "border border-danger"
                            : communityNameAlreadyTaken === false &&
                              communityName.length > 0
                            ? "border border-success"
                            : ""
                        }
                      />
                      <p
                        className={
                          communityNameAlreadyTaken
                            ? "input-name-error-text  show-community-name-error"
                            : "input-name-error-text "
                        }
                      >
                        This Community name is taken, please choose some
                        different name
                      </p>
                      <p className="pt-1">
                        {50 - communityName.length} character remaining{" "}
                      </p>
                    </div>

                    <div className="Community-type">
                      <h1>Community type*</h1>

                      <div
                        className="Community-type-radio-sect"
                        onChange={(e) => onChangeType(e)}
                      >
                        <label className="container">
                          <strong>
                            Public{" "}
                            <span>
                              Anyone can view, post, and comment to this
                              community
                            </span>
                          </strong>
                          <input type="radio" value="public" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">
                          <strong>
                            Restricted{" "}
                            <span>
                              Anyone can view this community, but only approved
                              users can post
                            </span>
                          </strong>
                          <input type="radio" value="restricted" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">
                          <strong>
                            Private{" "}
                            <span>
                              Only approved users can view and submit to this
                              community
                            </span>
                          </strong>
                          <input type="radio" value="private" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="Adult-content-sect">
                      <h1>Adult content</h1>
                      <div className="Adult-content-Checkbox">
                        <input
                          type="checkbox"
                          checked={isAdultCommunity}
                          onChange={toggleIsAdult}
                        />
                        <label>18+ year old community</label>
                      </div>
                    </div>

                    <div className="CreateCommunity-Modal-btn">
                      <button
                        id="Create-Community-button"
                        onClick={create_Community}
                      >
                        {loading ? (
                          <div
                            className="spinner-border text-light text-white"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          <a className="text-white">Create Community</a>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(CreateCommunityModal, { getDataFromTree });
