import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

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
  const [toggleSideBar, setToggleSideBar] = useState(false);

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
    <div id="All_Communities" className="Communities_tabcontent d-block">
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
            <div className="Find-Community-list-sect">
              <div className="Find-Community-list-headings active">
                <h3>Sports</h3>
                <div className="Find-Community-list-headings-icon">
                  <img
                    src="/images/find-community-headings-icon.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="Find-Community-list">
                <ul className="Show-less-list">
                  <li>
                    Sports
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Gaming
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    News
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    TV
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Aww
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Memes
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Pics & Gifs
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Travel
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Tech
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                </ul>
                <ul
                  className={classnames("Show-more-list", {
                    'd-none': !toggleSideBar,
                    'd-block': toggleSideBar,
                  })}
                >
                  <li>
                    Music
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Art & Design
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Beauty
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Books & Writing
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Crypto
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Discussion
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    E3
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Fashion
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Finance & Business
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Food
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Health & Fitness
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Learning
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Mindblowing
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Outdoors
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Parenting
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Photography
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Relationships
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Science
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Videos
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Vroom
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    Wholesome
                    <div className="Find-Community-list-headings-icon">
                      <img
                        src="/images/find-community-headings-icon.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="Show-more-or-less-btn">
                <button
                  className={classnames("Show-more-btn", {
                    'd-none': toggleSideBar,
                    'd-block': !toggleSideBar,
                  })}

                  onClick={() => setToggleSideBar(true)}>Show more</button>
                <button
                  className={classnames("Show-less-btn", {
                    'd-none': !toggleSideBar,
                    'd-block': toggleSideBar,
                  })}

                  onClick={() => setToggleSideBar(false)}>Show less</button>
              </div>
            </div>
          </div>
        </div>
        <div className="All_Communities-content-right">
          <div className="All-Communities-list">
            <ul>
              {allCommunities?.data?.getAllCommunity?.length > 0 &&
                allCommunities?.data?.getAllCommunity.map((community: any, key: any) => {
                  return (
                    <li>
                      <div className="All-Communities-list-left">
                        <div className="Communities-dp">
                          <img
                            src="/images/community-dp.png"
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
                        <button className="view-btn"
                          onClick={() => {
                            router.push({
                              pathname: `/communities/${community.id}`,
                              query: {
                                isUserCommunity: false,
                              },
                            });
                          }}>View</button>
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

export default MyCommunitiesList;
