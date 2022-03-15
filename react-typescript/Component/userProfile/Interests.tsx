import React, { useState } from "react";

interface Props {
  userId: string;
}

const Interests: React.FC<Props> = ({ userId }) => {
  const [collaps, setCollaps] = useState({
    collpasMain: false,
    classNameOfMainButton: "dApp-home-profile-collapsible",
    classNameActiveOfMainButton: "dApp-home-profile-collapsible active",
    InfulencersClick: true,
    Creators: false,
    Companies: false,
    Communities: false,
  });

  // main collaps state button changer
  const handleCollapsDownClick = () => {
    if (collaps.collpasMain === false) {
      const newCollapsClick = { ...collaps };
      newCollapsClick.collpasMain = true;
      setCollaps(newCollapsClick);
      console.log(collaps);
    } else {
      const newCollapsClick = { ...collaps };
      newCollapsClick.collpasMain = false;
      setCollaps(newCollapsClick);
      console.log(collaps);
    }
  };

  // handeling influencer click
  const handleInfulencersClick = () => {
    const newCollapsClick = { ...collaps };
    newCollapsClick.InfulencersClick = true;
    newCollapsClick.Creators = false;
    newCollapsClick.Companies = false;
    newCollapsClick.Communities = false;
    setCollaps(newCollapsClick);
    console.log(collaps);
  };
  // creator handleing
  const handleCreatorOnClick = () => {
    const newCollapsClick = { ...collaps };
    newCollapsClick.InfulencersClick = false;
    newCollapsClick.Creators = true;
    newCollapsClick.Companies = false;
    newCollapsClick.Communities = false;
    setCollaps(newCollapsClick);
    console.log(collaps);
  };

  // companies handeling
  const handleCompaniesOnClick = () => {
    const newCollapsClick = { ...collaps };
    newCollapsClick.InfulencersClick = false;
    newCollapsClick.Creators = false;
    newCollapsClick.Companies = true;
    newCollapsClick.Communities = false;
    setCollaps(newCollapsClick);
    console.log(collaps);
  };
  // communites changer
  const handleCommunitiesChange = () => {
    const newCollapsClick = { ...collaps };
    newCollapsClick.InfulencersClick = false;
    newCollapsClick.Creators = false;
    newCollapsClick.Companies = false;
    newCollapsClick.Communities = true;
    setCollaps(newCollapsClick);
    console.log(collaps);
  };
  return (
    <div className="dApp-home-profile-collaps-content">
      <button
        className={`${
          collaps.collpasMain
            ? collaps.classNameActiveOfMainButton
            : collaps.classNameOfMainButton
        }`}
        onClick={handleCollapsDownClick}
      >
        <div className="dApp-home-profile-collaps-btn">
          <label>Interest </label>
        </div>
      </button>
      {collaps.collpasMain && (
        <div className="roles_collaps" style={{ display: "block" }}>
          <div className="dApp-Interest-tab-sect">
            <div className="dApp-Interest-tabs">
              <div className="dApp-Interest-tab-heading tab">
                <button
                  className={`${
                    collaps.InfulencersClick
                      ? `Interest_tablinks dApp-Interest_tablinks active`
                      : `Interest_tablinks dApp-Interest_tablinks`
                  }`}
                  id="Interest_defaultOpen"
                  onClick={handleInfulencersClick}
                >
                  Infulencers
                  <div className="dApp-Interest-tab-underline"></div>
                </button>
                <button
                  className={`${
                    collaps.Creators
                      ? `Interest_tablinks dApp-Interest_tablinks active`
                      : `Interest_tablinks dApp-Interest_tablinks`
                  }`}
                  onClick={handleCreatorOnClick}
                >
                  Creators
                  <div className="dApp-Interest-tab-underline"></div>
                </button>
                <button
                  className={`${
                    collaps.Companies
                      ? `Interest_tablinks dApp-Interest_tablinks active`
                      : `Interest_tablinks dApp-Interest_tablinks`
                  }`}
                  onClick={handleCompaniesOnClick}
                >
                  Companies
                  <div className="dApp-Interest-tab-underline"></div>
                </button>
                <button
                  className={`${
                    collaps.Communities
                      ? `Interest_tablinks dApp-Interest_tablinks active`
                      : `Interest_tablinks dApp-Interest_tablinks`
                  }`}
                  onClick={handleCommunitiesChange}
                >
                  Communities
                  <div className="dApp-Interest-tab-underline"></div>
                </button>
              </div>

              {collaps.collpasMain && collaps.InfulencersClick && (
                <div
                  id="Infulencers"
                  className="Interest_tabcontent"
                  style={{ display: "block" }}
                >
                  {userId?.length < 1 && (
                    <ul>
                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img1.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Zachking</h1>
                            <h3>
                              NFT Community and Metaverse. Follow and please
                              share your amazing NFT Projects for all to see.{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img2.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Addisonrae</h1>

                            <h3>
                              (310) 340-7892 | EQUAL IN THE DARKNESS OUT NOW |
                              JOIN THE DISCORD{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img3.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Hudakattan</h1>

                            <h3>
                              co-founder <a href="#">@manifoldxyz</a> || Punk
                              #6046 || Professional NFT Degen || smART contract
                              artist
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img4.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Khabylame</h1>

                            <h3>
                              Freshly minted NFT news, curation and analysis. On
                              a mission to empower the creators of culture.{" "}
                              <a href="#">http://nftnow.com.</a>
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img5.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@KaylaItsines</h1>

                            <h3>
                              Emmy Nominated Photographer | Planetary Wanderer
                              Believer in Sustainability | Ultra Hodler | NFT
                              Enthusiast | WLTC
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>
                    </ul>
                  )}
                  {userId?.length > 0 && (
                    <ul>
                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img2.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Addisonrae</h1>

                            <h3>
                              (310) 340-7892 | EQUAL IN THE DARKNESS OUT NOW |
                              JOIN THE DISCORD{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img3.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Hudakattan</h1>

                            <h3>
                              co-founder <a href="#">@manifoldxyz</a> || Punk
                              #6046 || Professional NFT Degen || smART contract
                              artist
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img4.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Khabylame</h1>

                            <h3>
                              Freshly minted NFT news, curation and analysis. On
                              a mission to empower the creators of culture.{" "}
                              <a href="#">http://nftnow.com.</a>
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/influence-img5.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/follow-orng.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@KaylaItsines</h1>

                            <h3>
                              Emmy Nominated Photographer | Planetary Wanderer
                              Believer in Sustainability | Ultra Hodler | NFT
                              Enthusiast | WLTC
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              )}
              {collaps.collpasMain && collaps.Creators && (
                <div
                  id="Creators"
                  className="Interest_tabcontent"
                  style={{ display: "block" }}
                >
                  {userId?.length < 1 && (
                    <ul>
                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img1.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Zachking</h1>
                            <h3>
                              NFT Community and Metaverse. Follow and please
                              share your amazing NFT Projects for all to see.{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img2.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Addisonrae</h1>

                            <h3>
                              My name JacK. I am 3Dartist⛽⛽ part-time 3D (NFT)
                              , 3D Artist
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img3.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Ruang sunyi</h1>

                            <h3>Design grafis dan ilusyrator studio</h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img4.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Miguel Castro Diseño</h1>

                            <h3>
                              Especialista en Comunicación Estratégica de Marca
                              en Entornos Digitales - UAO
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img5.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Cryptochotu</h1>

                            <h3>
                              <a href="#">#Monsterra</a> is a
                              Free-to-play-to-earn <a href="#">#GameNFT</a> ​on{" "}
                              <a href="#">#BSC</a> powered by Mongens. Enjoy
                              "fun" and "profit" with lowest investment
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/followPlus.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Follow</a>
                          </button>
                        </div>
                      </li>
                    </ul>
                  )}

                  {userId?.length > 0 && (
                    <ul>
                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img1.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Zachking</h1>
                            <h3>
                              NFT Community and Metaverse. Follow and please
                              share your amazing NFT Projects for all to see.{" "}
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img2.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Addisonrae</h1>

                            <h3>
                              My name JacK. I am 3Dartist⛽⛽ part-time 3D (NFT)
                              , 3D Artist
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img3.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Ruang sunyi</h1>

                            <h3>Design grafis dan ilusyrator studio</h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img4.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Miguel Castro Diseño</h1>

                            <h3>
                              Especialista en Comunicación Estratégica de Marca
                              en Entornos Digitales - UAO
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>

                      <li>
                        <div className="Interest_tabcontent-list-left">
                          <div className="Interest_tabcontent-list-img">
                            <img
                              src="/images/creator-img5.png"
                              alt="user img"
                              className="img-fluid"
                            />
                            <div className="Interest_tabcontent-list-img-act">
                              <img
                                src="/images/creatorStatus-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="Interest_tabcontent-list-text">
                            <h1>@Cryptochotu</h1>

                            <h3>
                              <a href="#">#Monsterra</a> is a
                              Free-to-play-to-earn <a href="#">#GameNFT</a> ​on{" "}
                              <a href="#">#BSC</a> powered by Mongens. Enjoy
                              "fun" and "profit" with lowest investment
                            </h3>
                          </div>
                        </div>
                        <div className="Interest_tabcontent-list-Following-btn">
                          <button>
                            <span>
                              <img
                                src="/images/influence-following.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            <a href="#">Following</a>
                          </button>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              )}
              {collaps.collpasMain && collaps.Companies && (
                <div
                  id="Companies"
                  className="Interest_tabcontent"
                  style={{ display: "block" }}
                >
                  <ul>
                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/compound.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Compound</h1>
                          <h3>912 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>

                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/aave.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Aave</h1>
                          <h3>912 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>

                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/kava.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Kava</h1>
                          <h3>912 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>

                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/balancer.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Balancer</h1>
                          <h3>912 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>

                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/kyberswap.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Kyberswap</h1>
                          <h3>912 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {collaps.collpasMain && collaps.Communities && (
                <div
                  id="Tribes"
                  className="Interest_tabcontent"
                  style={{ display: "block" }}
                >
                  <ul>
                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img no-border">
                          <img
                            src="/images/ethereum-dApps.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Ethereum Development and DApps</h1>
                          <h3>2467537 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>

                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/dApp-ethereum.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Ethereum</h1>
                          <h3>2467537 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>

                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/citizenFinance.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Citizen Finance</h1>
                          <h3>2467537 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>

                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/spooky-swap.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>Spooky Swap</h1>
                          <h3>2467537 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>

                    <li>
                      <div className="Interest_tabcontent-list-left">
                        <div className="Interest_tabcontent-list-img">
                          <img
                            src="/images/Defl-Pulse.png"
                            alt="user img"
                            className="img-fluid"
                          />
                        </div>

                        <div className="Interest_tabcontent-list-text">
                          <h1>DefI Pulse</h1>
                          <h3>2467537 followers</h3>
                        </div>
                      </div>
                      <div className="Interest_tabcontent-list-Following-btn">
                        <button>
                          <span>
                            <img
                              src="/images/dApp-Checkmark.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </span>
                          <a href="#">Following</a>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interests;
