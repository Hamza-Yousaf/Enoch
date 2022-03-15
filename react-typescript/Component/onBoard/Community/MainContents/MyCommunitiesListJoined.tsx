import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const MyCommunitiesListJoined: React.FC = () => {
  return (
    <div id="Joined_Communities" className="Communities_tabcontent d-block">
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
              <div className="Find-Community-list">
                <ul>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="All_Communities-content-right">
          <div className="All-Communities-list">
            <ul>
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
                    <h3>Community name</h3>
                    <h4>@CommunityName</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore
                    </p>
                  </div>
                </div>
                <div className="All-communities-list-right">
                  <button className="Joined-btn">Joined</button>
                </div>
              </li>
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
                    <h3>Community name</h3>
                    <h4>@CommunityName</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore
                    </p>
                  </div>
                </div>
                <div className="All-communities-list-right">
                  <button className="Joined-btn">Joined</button>
                </div>
              </li>
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
                    <h3>Community name</h3>
                    <h4>@CommunityName</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore
                    </p>
                  </div>
                </div>
                <div className="All-communities-list-right">
                  <button className="Joined-btn">Joined</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCommunitiesListJoined;
