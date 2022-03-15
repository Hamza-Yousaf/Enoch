import React, { useState } from "react";

interface Props {
  postState: any;
  setPostState: any;
}

const VisibilitySection: React.FC<Props> = ({ postState, setPostState }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className="VisibilityofShared-Posts-sect"
      style={
        postState?.showVisibilitySection
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <div className="VisibilityofShared-Posts-headings">
        <h2>Visibility of Shared Posts</h2>
      </div>
      <div className="VisibilityofShared-Posts-body">
        <p>
          The visibility of posts and engagement activity that appear in the
          main feed and profile may vary depending on the visibility option that
          the author has selected for the post. You can't change the visibility
          option after you've shared your post.
        </p>
        <p>The visibility options are:</p>
        <div className="The-visibility-options-list">
          <form>
            <ul>
              <li>
                <label className="container">
                  <h3>
                    Anyone
                    <span>
                      – visible to anyone on or off LinkedIn, including your
                      extended network.
                    </span>
                  </h3>
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container">
                  <h3>
                    Anyone + Twitter
                    <span>
                      – visible to anyone on both LinkedIn and Twitter.
                    </span>
                  </h3>
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container">
                  <h3>
                    Connections only
                    <span>
                      – visible to only 1st-degree connections of the post
                      author.
                    </span>
                  </h3>
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container">
                  <h3>
                    Group members
                    <span>
                      – only visible to members of the group where the post was
                      shared.
                    </span>
                  </h3>
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container">
                  <h3>
                    Event attendees
                    <span>– visible to any attendee of the event.</span>
                  </h3>
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </li>
            </ul>
          </form>
        </div>
        <p>
          Once you select a visibility option, it is saved as your default
          visibility option. But you can change this before posting content the
          next time.
        </p>
        <div className="The-visibility-options-collaps">
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
            className={
              showMore
                ? "visibility-options-collapsible active"
                : "visibility-options-collapsible"
            }
          >
            Where can my post be seen if I set it to Anyone?
          </button>
          <div
            className="visibility-options-collaps-content"
            style={showMore ? { maxHeight: 560 } : {}}
          >
            <h5>
              If your post visibility is set to Anyone, the post may appear on:
            </h5>
            <ul>
              <li>
                <span>
                  <img
                    src="images/list-type-orange.png"
                    alt="dot"
                    className="img-fluid"
                  />
                </span>
                The homepage of your 1st-degree connections.
              </li>
              <li>
                <span>
                  <img
                    src="images/list-type-orange.png"
                    alt="dot"
                    className="img-fluid"
                  />
                </span>
                The homepage of your 2nd or 3rd-degree connections if re-shared,
                commented on, or liked by your 1st-degree connections.
              </li>
              <li>
                <span>
                  <img
                    src="images/list-type-orange.png"
                    alt="dot"
                    className="img-fluid"
                  />
                </span>
                Content search results for topics you've posted.
              </li>
              <li>
                <span>
                  <img
                    src="images/list-type-orange.png"
                    alt="dot"
                    className="img-fluid"
                  />
                </span>
                Search results for hashtags you've used in posts.
              </li>
              <li>
                <span>
                  <img
                    src="images/list-type-orange.png"
                    alt="dot"
                    className="img-fluid"
                  />
                </span>
                Your Recent Activity page.
              </li>
              <li>
                <span>
                  <img
                    src="images/list-type-orange.png"
                    alt="dot"
                    className="img-fluid"
                  />
                </span>
                Your public profile, which is also visible to people who aren't
                signed in to LinkedIn. This may not show if you've turned off
                public profile visibility or Articles & Activity section from
                public profile settings.
              </li>
              <li>
                <span>
                  <img
                    src="images/list-type-orange.png"
                    alt="dot"
                    className="img-fluid"
                  />
                </span>
                Other sites off LinkedIn. This means that even people who aren't
                signed in to LinkedIn can see your post.
              </li>
              <li className="mb-0">
                <span>
                  <img
                    src="images/list-type-orange.png"
                    alt="dot"
                    className="img-fluid"
                  />
                </span>
                Your followers’ feeds, who may not be connected to you.
              </li>
            </ul>
          </div>
        </div>
        <div className="learn-about-list">
          <h4>Learn more about:</h4>
          <ul>
            <li>Post and share content</li>
            <li>Your network and degrees of connection</li>
            <li>Share posts on and off LinkedIn</li>
            <li>Your recent activity on LinkedIn</li>
            <li>LinkedIn public profile visibility</li>
            <li>View list of your followers</li>
          </ul>
        </div>
        <div className="Last-updated-text">
          <h6>Last updated: 2 months ago</h6>
        </div>
      </div>
    </div>
  );
};

export default VisibilitySection;
