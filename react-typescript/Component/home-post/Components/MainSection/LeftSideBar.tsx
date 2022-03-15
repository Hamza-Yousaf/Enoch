import React from "react";
import Link from "next/link";

const LeftSideBar = () => {
  return (
    <div className="home-post-lft">
      <div className="dApp-Win-a-Day-Banner-sect">
        <img
          src="/images/win-a-day-banner.png"
          alt="Banner"
          className="img-fluid"
        />
      </div>
      <Link href="/entertainment">
        <div className="dApp-daily-bonous-Banner-sect cursor_mouse">
          <img
            src="/images/daily-bonous-banner.png"
            alt="Banner"
            className="img-fluid"
          />
        </div>
      </Link>
      <div className="dApp-home-Create-Post-sect">
        <h1>Home</h1>
        <p>
          Your personal Enoch frontpage. Comehere to check in with your favorite
          communication.
        </p>
        <div className="dApp-home-Create-Post-btn-sect">
          <button className="Create-Post-btn">
            <a href="#">Create Post</a>
          </button>
          <button className="Create-Community-btn">
            <a href="#">Create Community</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
