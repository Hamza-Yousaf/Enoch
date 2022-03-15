import React, { useState } from "react";
import classnames from "classnames";
import {
  LazyLoadImage,
} from 'react-lazy-load-image-component';
import Link from "next/link";

const Menubar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className="position-relative">
      <div className="header-menu-main">
        <div className="enochweb-container">
          <div className="header-menu">
            <div className="header-menu-left">
              <div className="barnd-logo">
                <a href="/">
                  <LazyLoadImage
                    src="/images/enoch-logo.png" alt="logo" className="img-fluid"
                    effect="blur"
                  />
                  <span className="onboard-beta">BETA</span>
                </a>
              </div>
            </div>
            <div className="header-menu-right">
              <div className={classnames("menu-right", {
                "active": toggleMenu,
              })} id="menubar">
                <ul className="hover-menu">
                  <li className=""><Link href="/#home-social"><a>Social</a></Link></li>
                  <li className=""> <Link href="/#home-earn"><a> EARN</a></Link></li>
                  <li className=""><Link href="/#home-brands"><a>BRANDS</a></Link></li>
                  <li className=""><a href="/#home-team">Team</a></li>
                  <li className=""><Link href="/#home-roadmap"><a>Roadmap</a></Link></li>
                  <li className=""><Link href="/#home-invest"><a>INVEST </a></Link></li>
                  <li className=""><Link href="/contact-us"><a>Contact</a></Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className={classnames("enochweb-toggle-menu", {
          "active": toggleMenu,
        })}
          onClick={() => setToggleMenu(!toggleMenu)}>
          <div className="d-inline-block">
            <i className={classnames("", {
              "fa fa-bars": !toggleMenu,
              "fa fa-times": toggleMenu,
            })} aria-hidden="true" id="menu-toggle"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
