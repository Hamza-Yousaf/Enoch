import React from "react";
import router from "next/router";

const SideBar = () => {
  return (
    <div className="col-lg-3 p-0">
      <div className="MyCommunity-Page-right-sect">
        <div className="Power-up-banner-section">
          <div className="Power-up-banner-img">
            <img
              src="images/PowerUpBanner.png"
              alt="banner"
              className="img-fluid"
            />
          </div>
          <div className="Power-up-banner-text">
            <h3>A YOUTH</h3>
            <h4>VIP Program</h4>
            <button>Subscribe Now</button>
          </div>
          <div className="MyCommunity-Page-right-Ad-icon">
            <h6>
              Ad
              <span>
                <img
                  src="images/ad-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
            </h6>
          </div>
        </div>

        <div className="LebelUp-banner-section">
          <div className="LebelUp-banner-img">
            <img
              src="images/community-levelUp-banner.png"
              alt="banner"
              className="img-fluid"
            />
          </div>
          <div className="LebelUp-btn">
            <button>See All Ranking</button>
          </div>
          <div className="MyCommunity-Page-right-Ad-icon">
            <h6>
              Ad
              <span>
                <img
                  src="images/ad-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
            </h6>
          </div>
        </div>

        <div className="Create-MyCommunity-banner-section">
          <div className="Create-MyCommunity-banner-img">
            <img
              src="images/Create-MyCommunity-banner.png"
              alt="banner"
              className="img-fluid"
            />
          </div>
          <div className="Create-MyCommunity-text">
            <p>
              Your personal Enoch frontpage. Come here to check in with your
              favorite communinities.
            </p>
            <button
              onClick={() => {
                router.push({
                  pathname: "/",
                  query: {
                    showCreateCommunityModal: true,
                  },
                });
              }}
            >
              Create Community
            </button>
          </div>
          <div className="MyCommunity-Page-right-Ad-icon">
            <h6>
              Ad
              <span>
                <img
                  src="images/ad-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
