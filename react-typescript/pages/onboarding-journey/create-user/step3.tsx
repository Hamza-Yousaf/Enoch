import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { GET_SUGGEST_FOLLOW } from "../../../graphql/userProfileQueries";
import { TOGGLE_FOLLOW_MUTATION } from "../../../graphql/userProfileMutations";
import withApollo from "../../../lib/withApollo";
import { useMutation, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { SuggestionData } from "../../../lib/SuggestionData";
const AlertModal = dynamic(() => import("../../../Component/AlertModal"));


const CreateUserStep3: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("follow functionality not supported");
  const [success, setSuccess] = useState(false);
  const [suggestion, setSuggestion] = useState(SuggestionData);

  const { data, loading, error } = useQuery(GET_SUGGEST_FOLLOW);

  const [toggleFollowM] = useMutation(TOGGLE_FOLLOW_MUTATION);

  let newSuggestion: any[];

  // useEffect(() => {
  //   if (data && data?.SuggestFollow) {
  //     newSuggestion = data?.SuggestFollow.map((s: any, i: string) => {
  //       return {
  //         ...s,
  //         select: false,
  //       };
  //     });
  //     setSuggestion(newSuggestion);
  //   }
  // }, [data]);

  const onSuggestionHandler = (item: any) => {
    //due to api not working move next page
    const userid = item?.id.toString();
    const newIndustry = suggestion.map((e, i) =>
      e.id.toString() == userid ? { ...e, select: !e?.select } : e
    );
    setSuggestion(newIndustry);

    // toggleFollowM({
    //   variables: {
    //     userid: userid,
    //   },
    // })
    //   .then((res) => {
    //     let select = false;
    //     // if (res?.data?.toggleFollow != "false") {
    //     //   select = true;
    //     // } else {
    //     //   select = false;
    //     // }
    //     const newIndustry = suggestion.map((e, i) =>
    //       e.id.toString() == userid ? { ...e, select: !e?.select } : e
    //     );
    //     setSuggestion(newIndustry);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     setMessage(err.message);
    //     setShowAlert(true);
    //     setSuccess(false);
    //   });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="onboarding-new-container container-bg2">
          <div className="onboard-individual-body">
            <div className="onboard-business-logo">
              <img
                src="/images/businessNewLogo.png"
                className="img-fluid"
                alt="logo"
              />
            </div>
            <div className="onboard-business-bottm-img">
              <img
                src="/images/business-img.png"
                className="img-fluid"
                alt="logo"
              />
            </div>
            <AlertModal
              showAlert={showAlert}
              setShowAlert={setShowAlert}
              message={message}
              success={success}
            />
            <div className="onboard-business-innerbody">
              <div className="onboard-business-progressBlock">
                <div className="onboard-business-progressbar">
                  <div className="onboard-business-progressbar-inner progress-57"></div>
                </div>
                <div className="onboard-business-bottmVal">
                  <Link href="/onboarding-journey/create-user/step2">
                    <span>
                      <img
                        src="/images/back-arrow.png"
                        className="img-fluid mr-2"
                        alt="back"
                      />
                      GO BACK
                    </span>
                  </Link>
                  <span>3/6</span>
                </div>
              </div>
              <div className="onboard-business-hd">
                <h2>Suggestion for you to follow </h2>
                <p>Users you may be interested in</p>
              </div>
              {error && (
                <div>
                  <span className="sr-only">No Data Found</span>
                </div>
              )}
              {loading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div className="onboard-business-suggestFollow-block">
                  <ul>
                    {suggestion?.length > 0 &&
                      suggestion.map((item, index) => {
                        return (
                          <li>
                            <span className="bussinss-close">
                              <img
                                src="/images/businessClose.png"
                                className="img-fluid"
                                alt="close"
                              />
                            </span>
                            <div className="suggest-user-follow">
                              <div className="suggest-user-img">
                                <img
                                  src={
                                    item?.profileImage != null
                                      ? item?.profileImage
                                      : "/images/business-user1.png"
                                  }
                                  className="img-fluid"
                                  alt="user"
                                />
                              </div>
                              <h3>
                                {item?.userName != null
                                  ? item?.userName
                                  : "@Johnnyenglish"}
                              </h3>
                              <h4>
                                {item?.country != null
                                  ? item?.country
                                  : "United Kingdom"}
                              </h4>
                              <p>
                                {item?.bio != null
                                  ? item?.bio
                                  : "Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor ncidid."}
                              </p>
                              <div
                                className={
                                  item?.select
                                    ? `business-followbtn-block follow-active`
                                    : `business-followbtn-block`
                                }
                                onClick={() => onSuggestionHandler(item)}
                              >
                                <button className="business-follow-btn">
                                  + Follow
                                </button>
                                <button className="business-following-btn">
                                  <img
                                    src="/images/businessCheck.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />{" "}
                                  Following
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
              <Link href="/onboarding-journey/create-user/step4">
                <div className="onboard-busines-nxt">
                  <button
                    id="selectothers-cont-btn"
                    className="bunsinss-nxt-bttn"
                  >
                    Next
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(CreateUserStep3, { getDataFromTree });
