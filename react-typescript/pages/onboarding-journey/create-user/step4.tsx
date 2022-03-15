import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { GET_ALL_COMMUNITIES } from "../../../graphql/userProfileQueries";
import { JOIN_COMMUNITY_MUTATION } from "../../../graphql/userProfileMutations";
import withApollo from "../../../lib/withApollo";
import { useMutation, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../Component/AlertModal"));


const CreateUserStep4: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("follow functionality not supported");
  const [success, setSuccess] = useState(false);
  const [communities, setCommunities] = useState([]);

  const { data, loading, error } = useQuery(GET_ALL_COMMUNITIES);

  const [joinCommunityM] = useMutation(JOIN_COMMUNITY_MUTATION);

  let newCommunities: any[];

  useEffect(() => {
    if (data && data?.getAllCommunity) {
      newCommunities = data?.getAllCommunity.map((s: any, i: string) => {
        return {
          ...s,
          select: false,
        };
      });
      setCommunities(newCommunities);
    }
  }, [data]);


  const onCommunityHandler = (item: any) => {
    const communityId = item?.id.toString();
    joinCommunityM({
      variables: {
        communityId: communityId,
      },
    })
      .then((res) => {
        const newCommunity = communities.map((e, i) =>
          e.id.toString() == communityId ? { ...e, select: !e?.select } : e
        );
        setCommunities(newCommunity);
      })
      .catch((err) => {
        console.log(err.message);
        setMessage(err.message);
        setShowAlert(true);
        setSuccess(false);
      });
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
                  <div className="onboard-business-progressbar-inner progress-65"></div>
                </div>
                <div className="onboard-business-bottmVal">
                  <Link href="/onboarding-journey/create-user/step3">
                    <span>
                      <img
                        src="/images/back-arrow.png"
                        className="img-fluid mr-2"
                        alt="back"
                      />
                      GO BACK
                    </span>
                  </Link>
                  <span>4/6</span>
                </div>
              </div>
              <div className="onboard-business-hd">
                <h2>Communities by topics you’re intrested in</h2>
                <p>
                  We own, publish and serve some of the biggest Social web3.0
                  Communities worldwide. We engage regularly hundreds of
                  influencers to amplify our brand messages and to inspire our
                  users.
                </p>
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
                <div className="onboard-business-communities-block">
                  <ul>
                    {communities?.length > 0 &&
                      communities.map((item, index) => {
                        return (
                          <li>
                            <div className="business-communities-left">
                              <span>
                                <img
                                  src={
                                    item?.image != null
                                      ? item?.image
                                      : "/images/comm-img2.png"
                                  }

                                  className="img-fluid"
                                  alt="img"
                                />
                              </span>
                              <div className="business-communities-user-right">
                                <h3>
                                  {item?.communityName != null ? item?.communityName : 'Community name'} <span>36.6M members</span>
                                </h3>
                                <p>
                                  {item?.communityDescription != null ? item?.communityDescription : 'Enoch is a cryptocurrency that s required to cryptocurrency that s required use the site.'}
                                </p>
                              </div>
                            </div>
                            <div className="business-communities-right" onClick={() => onCommunityHandler(item)}>
                              <button
                                className={
                                  item?.select
                                    ? `community-joind-btn join-active`
                                    : `community-joind-btn`
                                }
                              >
                                JOIN
                              </button>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
              <Link href="/onboarding-journey/create-user/step5">
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

export default withApollo(CreateUserStep4, { getDataFromTree });
