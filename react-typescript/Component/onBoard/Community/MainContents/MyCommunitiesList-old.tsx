import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  communities: any;
  loading: boolean;
  allCommunities: any;
}

const MyCommunitiesList: React.FC<Props> = ({
  communities,
  loading,
  allCommunities,
}) => {
  const router = useRouter();
  let filteredCommunities: any = [];

  allCommunities?.data?.getAllCommunity?.forEach(
    (nCommunity: any, key: any) => {
      let isMyCommunity = false;
      communities?.forEach((mCommunity: any, key: any) => {
        if (mCommunity.id === nCommunity.id) {
          isMyCommunity = true;
        }
      });
      if (isMyCommunity === false) {
        filteredCommunities.push(nCommunity);
      }
    }
  );

  console.log(filteredCommunities);
  return (
    <div className="col-lg-9 p-0">
      <div className="community-page-left-sect">
        <div className="community-page-left-Content">
          <div className="Search-community-sect">
            <form>
              <input type="text" placeholder="Search  the community" />
              <button>
                <img
                  src="/images/Search-the-community-serch-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </button>
            </form>
          </div>

          {/* <div className="Moderating-heading">
            <h1>Moderating</h1>
          </div> */}

          <div className="Moderating-And-MyCommunities-sect">
            <div className="MyCommunities-section">
              {/* <h1>My Communities</h1> */}
              <div className="Moderating-heading">
                <h1>Moderating</h1>
              </div>
              {communities?.length > 0 &&
                communities.map((community: any, key: any) => {
                  return (
                    <div className="Moderating-section">
                      <div className="Defi-Signal-sect">
                        <div className="Defi-Signal-left">
                          <div className="Defi-Signal-logo">
                            <img
                              src="/images/DF-logo.png"
                              alt="Logo"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Defi-Signal-text">
                            <h2>{community.communityName}</h2>
                            <a href="#">{community.communityHolder}</a>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore
                            </p>
                          </div>
                        </div>
                        <div className="Defi-Signal-right">
                          <div className="Defi-Signal-btn">
                            <button
                              onClick={() => {
                                router.push({
                                  pathname: `/communities/${community.id}`,
                                  query: {
                                    isUserCommunity: true,
                                  },
                                });
                              }}
                            >
                              <a style={{ color: "white" }}> View</a>
                              {/* <Link
                                href={`/communities/${community.id}`}
                              ></Link> */}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="MyCommunities-section">
              <h1>My Communities</h1>
              {filteredCommunities?.length > 0 &&
                filteredCommunities?.map((community: any, key: any) => {
                  return (
                    <div
                      key={key}
                      className={
                        key % 2 === 0
                          ? "CommunityName-sect CommunityName-sect-1 bg-gray"
                          : "CommunityName-sect CommunityName-sect-1"
                      }
                    >
                      <div className="CommunityName-left">
                        <div className="CommunityName-logo">
                          <img
                            src="/images/CommunityName-logo.png"
                            alt="Logo"
                            className="img-fluid"
                          />
                        </div>
                        <div className="CommunityName-text">
                          <h2>{community.communityName}</h2>
                          <a href="#">{community.communityHolder}</a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </p>
                        </div>
                      </div>
                      <div className="CommunityName-right">
                        <div className="CommunityName-btn">
                          <button
                            onClick={() => {
                              router.push({
                                pathname: `/communities/${community.id}`,
                                query: {
                                  isUserCommunity: false,
                                },
                              });
                            }}
                          >
                            <a> Visit Page</a>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCommunitiesList;
