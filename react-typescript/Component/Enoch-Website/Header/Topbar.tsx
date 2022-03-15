import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classnames from "classnames";
import { removeUserToken } from "../../../lib/removeUserToken";
import { verifyToken } from "../../../lib/verifyToken";

const Topbar = () => {
  const router = useRouter();
  const [toggleMenuBar, setToggleMenuBar] = useState<boolean>(false);
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (verifyToken()) {
        setToggleMenuBar(true);
      } else {
        setToggleMenuBar(false);
      }
    }
  });

  const logoutHandler = () => {
    removeUserToken();
    router.push("/");
  };

  return (
    <div className="enochweb-top-block">
      <div className="enochweb-beta-verse">
        BETA<span>VERSION</span>
      </div>
      <div className="enochweb-container">
        <div className="enochweb-top-bar">
          <div className="enochweb-top-bar-lft">
            <h2>
              Enoch has opened the pre-registration for the upcoming closed beta
              test, in Q1-2022 !
            </h2>
            <p>
              <a href="#">Join</a> the whitelist to win VIP pass, a special
              membership NFT that rewards its holder with event invitations,
              $ENOCH tokens special NFTs and more.{" "}
            </p>
          </div>
          {toggleMenuBar ? (
            <div className="enochweb-top-bar-rihgt">
              <div
                className={classnames("enochweb-userLoggedin dropdown", {
                  open: toggleDropDown,
                })}
              >
                <div
                  onClick={() => setToggleDropDown(!toggleDropDown)}
                  className="enochweb-dropdown-buttn"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="enochweb-user-img">
                    <img
                      src="/images/loggedin-user.png"
                      alt="user image"
                      className="img-fluid"
                    />
                  </span>
                  <span className="enochweb-user-name">@Hulk66</span>
                </div>
                <div className="enochweb-dropdown-menu">
                  <ul className="">
                    <li
                      onClick={() => {
                        router.push("/feeds");
                      }}
                    >
                      <span>
                        <img
                          src="/images/enochweb-dash.png"
                          className="img-fluid"
                          alt="dashboard"
                        />
                      </span>
                      Dashboard
                    </li>
                    <li onClick={() => logoutHandler()}>
                      <span>
                        <img
                          src="/images/enochweb-logout.png"
                          className="img-fluid"
                          alt="logout"
                        />
                      </span>
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <a onClick={() => router.push("/signup")} href="#!">
              <div className="enochweb-top-bar-rihgt">
                <button>SIGN UP/SIGN IN</button>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
