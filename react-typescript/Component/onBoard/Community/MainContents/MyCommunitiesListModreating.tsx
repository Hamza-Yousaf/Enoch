import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  communities: any;
  loading: boolean;
  allCommunities: any;
}

const MyCommunitiesListModreating: React.FC<Props> = ({
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

  return (
    <div id="Modreating_Communities" className="Communities_tabcontent d-block">
      <div className="All_Communities-content">
        <div className="All_Communities-content-left">
          <div className="Find-Community-section">
            <h2>Find Community</h2>
            <form>
              <button>
                <img
                  src="/images/community-find.png"
                  alt="icon"
                  className="img-fluid"
                />
              </button>
              <input type="text" placeholder="Search community" />
            </form>
            <div className="Find-Community-list-sect pb-5">
              <div className="Find-Community-list-headings active">
                <h3>Finance</h3>
                <div className="Find-Community-list-headings-icon">
                  <img
                    src="/images/find-community-headings-icon.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="All_Communities-content-right">
          <div className="All-Communities-list">
            <ul>
            {communities?.length > 0 &&
                communities.map((community: any, key: any) => {
                  return (
              
              <li>
                <div className="All-Communities-list-left">
                  <div className="Communities-dp">
                    <img
                      src="/images/community-mmoderate-dp.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="Communities-text">
                    <h3>{community.communityName}</h3>
                    <h4>{community.communityHolder}</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore
                    </p>
                  </div>
                </div>
                <div className="All-communities-list-right">
                  <button className="Manage-btn">Manage</button>
                </div>
              </li>
               );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCommunitiesListModreating;
