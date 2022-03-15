import React from "react";
import Link from "next/link";

const GrowYourCommunity = () => {
  return (
    <>
      <div className="enoch-community-grow">
        <h2>Grow your community</h2>
        <ul>
          <li className="grow-list-bg1">
            <div className="enoch-community-grow-listItem">
              <div className="grow-block-close">
                <img
                  src="/images/comm-close.png"
                  className="img-fluid"
                  alt="close"
                />
              </div>
              <div className="grow-top-bg1">
                <img
                  src="/images/community-img3.png"
                  className="img-fluid"
                  alt="post"
                />
              </div>
              <span>
                <img
                  src="/images/comm-icon1.png"
                  className="img-fluid"
                  alt="post"
                />
              </span>
              <div className="grow-listItem-details">
                <h3>Time to make your first post!</h3>
                <p>
                  Now that you’ve created your community, start things off right
                  by making your first post.
                </p>
                <p className="mb-0">
                  <Link href='/post'>
                    <button className="btn comm-grow-btn grow-bttn-clr1">
                      Make your first post
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </li>
          <li className="grow-list-bg2">
            <div className="enoch-community-grow-listItem">
              <div className="grow-block-close">
                <img
                  src="/images/comm-close.png"
                  className="img-fluid"
                  alt="close"
                />
              </div>
              <div className="grow-top-bg1">
                <img
                  src="/images/community-img4.png"
                  className="img-fluid"
                  alt="post"
                />
              </div>
              <span>
                <img
                  src="/images/comm-icon2.png"
                  className="img-fluid"
                  alt="post"
                />
              </span>
              <div className="grow-listItem-details">
                <h3>Recruit more members</h3>
                <p>
                  Learn how to use invitations to bring more members and
                  moderators to your community.
                </p>
                <p className="mb-0">
                  <button className="btn comm-grow-btn grow-bttn-clr2">
                    Learn More
                  </button>
                </p>
              </div>
            </div>
          </li>
          <li className="grow-list-bg3">
            <div className="enoch-community-grow-listItem">
              <div className="grow-block-close">
                <img
                  src="/images/comm-close.png"
                  className="img-fluid"
                  alt="close"
                />
              </div>
              <div className="grow-top-bg1">
                <img
                  src="/images/community-img5.png"
                  className="img-fluid"
                  alt="post"
                />
              </div>
              <span>
                <img
                  src="/images/comm-icon3.png"
                  className="img-fluid"
                  alt="post"
                />
              </span>
              <div className="grow-listItem-details">
                <h3>Use the power of the crosspost</h3>
                <p>
                  Add more posts to your community while showcasing content from
                  accross Enoch.
                </p>
                <p className="mb-0">
                  <button className="btn comm-grow-btn grow-bttn-clr3">
                    Learn More
                  </button>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GrowYourCommunity;
