import React from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import dynamic from "next/dynamic";
const HeaderWebsite = dynamic(() => import("./Header/Header"));
const FooterWebsite = dynamic(() => import("./Footer/Footer"));
const CookiesWebsite = dynamic(() => import("./Cookies/Cookies"));

const HomeEnoch: React.FC = (props) => {
  const {} = props;
  return (
    <LazyLoadComponent>
      <div className="enoch-container-fluid enochweb-body-bg">
        <HeaderWebsite>
          <div className="enochweb-header-centent">
            <span className="enochweb-top-hd">
              <LazyLoadImage
                src="/images/enochweb-img1.png"
                className="img-fluid"
                alt="enoch"
                effect="blur"
              />
            </span>
            <div className="enochweb-header-img">
              <LazyLoadImage
                src="/images/enochweb-header-img.png"
                className="img-fluid"
                alt="enoch"
                effect="blur"
              />
            </div>
            <p>
              Enoch is getting ready to roll out new meta -Commerce features by
              adding Bitmoji avatars that let users dress them up in items
              provided by creators on our NFT’S marketplace
            </p>
          </div>
        </HeaderWebsite>
        <div className="enochweb-explore-sect">
          <div className="enochweb-container" id="home-social">
            <h2>
              Enoch is exploring new meta-commerce features to monetise in rich
              and diverse short-form video content, Enabling creators to better
              integrate their products and ads on enoch video-sharing app , as
              we rolls out social shopping and in-app capabilities in 2022.
            </h2>
            <div className="enoch-home-explore-item">
              <ul>
                <li>
                  <div>
                    <LazyLoadImage
                      src="/images/socialmedia.png"
                      className="img-fluid"
                      alt="social media"
                      effect="blur"
                    />
                  </div>
                  <h3 className="explore-item-clr1">
                    Social Media+ <br />
                    Avatar Identity{" "}
                  </h3>
                  <p>
                    The merging of avatar, social media and the meta-Commerce,
                    will produce a platform that will change the dynamics of
                    digital content ownership.
                  </p>
                </li>
                <li className="explore-cust-padd">
                  <div>
                    <img
                      src="/images/NFTsM.png"
                      className="img-fluid"
                      alt="NFTs"
                    />
                  </div>
                  <h3 className="explore-item-clr2">
                    NFT’s
                    <br />
                    Marketplace
                  </h3>
                  <p>
                    Create,sell virtual products , you can immediately begin to
                    leverage massive boosts in brand equity. creators using NFTs
                    and virtual products to reach younger audiences.
                  </p>
                </li>
                <li>
                  <div>
                    <img
                      src="/images/palyToearn.png"
                      className="img-fluid"
                      alt="paly To earn"
                    />
                  </div>
                  <h3 className="explore-item-clr3">
                    Play-to-earn <br />
                    game tournaments{" "}
                  </h3>
                  <p>
                    As long as you have a mobile device, desktop computer or VR
                    helmet you can access tournaments . Furthermore, every day
                    something new will happen, and new giveaways will open up.
                  </p>
                </li>
                <li>
                  <div>
                    <img
                      src="/images/metaCommerce.png"
                      className="img-fluid"
                      alt="meta Commerce"
                    />
                  </div>
                  <h3 className="explore-item-clr4">
                    Live <br />
                    Meta-commerce{" "}
                  </h3>
                  <p>
                    Linking up an online livestream broadcast with digital
                    e-commerce store combines instant purchasing of a featured
                    product and audience participation through a chat function
                    or reaction buttons
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="enochweb-home-stuff-sect">
          <div className="enochweb-do-stuff-block">
            <div className="enochweb-do-stuff-innerblock">
              <div className="enochweb-do-stuff-block-lft">
                <p className="do-stuff-txt1">Reaching Massive Audiences</p>
                <h3>Do stuff you can’t do with any other platform</h3>
                <p className="do-stuff-txt2">
                  Launch your own social token that enables transactions,
                  access, and more creative solutions for your economy. Grow
                  revenue while increasing productivity.Enoch shops creates new
                  interactive sales channels that will convert passive users
                  into paying customers.
                </p>
                <ul>
                  <li>
                    <span className="mr-2">
                      <LazyLoadImage
                        src="/images/CheckSquare.png"
                        className="img-fluid"
                        alt="check"
                        effect="blur"
                      />
                    </span>
                    Royalties
                  </li>
                  <li>
                    <span className="mr-2">
                      <LazyLoadImage
                        src="/images/CheckSquare.png"
                        className="img-fluid"
                        alt="check"
                        effect="blur"
                      />
                    </span>
                    Reels and Live post
                  </li>
                  <li>
                    <span className="mr-2">
                      <LazyLoadImage
                        src="/images/CheckSquare.png"
                        className="img-fluid"
                        alt="check"
                        effect="blur"
                      />
                    </span>
                    Participation Prizes{" "}
                  </li>
                  <li>
                    <span className="mr-2">
                      <LazyLoadImage
                        src="/images/CheckSquare.png"
                        className="img-fluid"
                        alt="check"
                        effect="blur"
                      />
                    </span>
                    Auctions
                  </li>
                  <li>
                    <span className="mr-2">
                      <LazyLoadImage
                        src="/images/CheckSquare.png"
                        className="img-fluid"
                        alt="check"
                        effect="blur"
                      />
                    </span>
                    Drops{" "}
                  </li>
                  <li>
                    <span className="mr-2">
                      <LazyLoadImage
                        src="/images/CheckSquare.png"
                        className="img-fluid"
                        alt="check"
                        effect="blur"
                      />
                    </span>
                    Instant Sales
                  </li>
                </ul>
              </div>
              <div className="enochweb-do-stuff-block-right">
                <div className="stuff-block-img">
                  <LazyLoadImage
                    src="/images/do-stuff.png"
                    className="img-fluid"
                    alt="enoch"
                    effect="blur"
                  />
                </div>
                <span className="do-stuff-img">
                  <LazyLoadImage
                    src="/images/dostuuff-img1.png"
                    className="img-fluid"
                    alt="enoch"
                    effect="blur"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="enochweb-makemoney-sect" id="home-earn">
          <div className="enochweb-container">
            <div className="makemoney-hd-img">
              <LazyLoadImage
                src="/images/makemoney.png"
                className="img-fluid"
                alt="money"
                effect="blur"
              />
            </div>
            <p className="makemoney-hd-txt">
              Enoch Shopping - A New Dawn For Social Commerce
            </p>
            <div className="enoch-home-makemoney-item">
              <ul>
                <li>
                  <div className="makemoney-hd-icon">
                    <LazyLoadImage
                      src="/images/makemoney-img1.png"
                      className="img-fluid"
                      alt="social media"
                      effect="blur"
                    />
                  </div>
                  <h3>
                    Earn as creator, artist
                    <br />
                    or influencer{" "}
                  </h3>
                  <p>
                    We are launching a creator shop options and bonuses for
                    hitting milestones with badges and Live
                    sessions,subscriptions, gated content, merch initiatives,
                    and even NFTs.If you can reach coveted influencer status,
                    you can use your Enoch profile to promote all kinds of
                    products from all kinds of brands.
                  </p>
                </li>
                <li>
                  <div className="makemoney-hd-icon">
                    <LazyLoadImage
                      src="/images/makemoney-img2.png"
                      className="img-fluid"
                      alt="NFTs"
                      effect="blur"
                    />
                  </div>
                  <h3>
                    Earn as
                    <br />
                    livestreamer
                  </h3>
                  <p>
                    Livestreamers can earn money, Gifts & Subscriptions, Income
                    are based on the earning they receive from viewers. Income
                    can be withdrawn to web3.0 wallet. The compensation is
                    calculated by the platform based on various factors
                    including the number of coins a livestreamer has earned.{" "}
                  </p>
                </li>
                <li>
                  <div className="makemoney-hd-icon">
                    <LazyLoadImage
                      src="/images/makemoney-img3.png"
                      className="img-fluid"
                      alt="paly To earn"
                      effect="blur"
                    />
                  </div>
                  <h3>
                    Earn as User or
                    <br />
                    Player{" "}
                  </h3>
                  <p>
                    Learn-to-earn and participate-to-earn, where users can earn
                    money, prizes by Play-to-earn allows players to participate
                    in the development of the game and they can earn money,
                    prizes by simply playing.{" "}
                  </p>
                </li>
                <li>
                  <div className="makemoney-hd-icon">
                    <LazyLoadImage
                      src="/images/makemoney-img4.png"
                      className="img-fluid"
                      alt="meta Commerce"
                      effect="blur"
                    />
                  </div>
                  <h3>
                    Earn as affiliate
                    <br />
                    marketer{" "}
                  </h3>
                  <p>
                    You can sell other people’s products and get a cut.
                    Affiliates make money through a trackable link or a promo
                    code to make sure that you know exactly which sales came
                    directly from your posts.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="enochweb-promoteBrand-sect" id="home-brands">
          <div className="enochweb-container">
            <div className="promoteBrand-hd-content">
              <h3>
                Get Ready to Promote <br />
                Your Brand on Metaverse
              </h3>
              <p>
                The Meta-Commerce can extend to digital fashion, social media,
                augmented reality, virtual stores, video games and non-fungible
                tokens (NFTs), meaning that many brands began dabbling in
                meta-commerce principles even before the term became common
                place
              </p>
            </div>
            <div className="promoteBrand-list">
              <ul>
                <li className="promote-brand-list-lft">
                  <div className="promote-card-hd-img">
                    <LazyLoadImage
                      src="/images/promotebrand-img1.png"
                      className="img-fluid"
                      alt="promote"
                      effect="blur"
                    />
                    <span className="promobrand-bag">
                      <LazyLoadImage
                        src="/images/promo-card-icon.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>
                  </div>
                  <div className="promotebrand-use">
                    <span>
                      <LazyLoadImage
                        src="/images/promo-user1.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>{" "}
                    Ironebel_anz
                  </div>
                  <div className="promote-card-content">
                    <div className="promote-card-content-lft">
                      <p className="promote-line1"></p>
                      <p className="promote-line2"></p>
                      <div className="promote-line-bottp">
                        <span>
                          <LazyLoadImage
                            src="/images/dollas.png"
                            className="img-fluid"
                            alt="icon"
                            effect="blur"
                          />
                        </span>
                        <p className="promote-line3"></p>
                        <span>
                          <LazyLoadImage
                            src="/images/dobl-redArrow.png"
                            className="img-fluid"
                            alt="icon"
                            effect="blur"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="promote-card-content-right">
                      <div className="promote-addcart-brn">
                        <button>
                          Add to Cart
                          <span className="ml-2">
                            <LazyLoadImage
                              src="/images/cart-icon.png"
                              className="img-fluid"
                              alt="cart"
                              effect="blur"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="promote-brand-list-mid">
                  <div className="promote-card-hd-img">
                    <LazyLoadImage
                      src="/images/promotebrand-img2.png"
                      className="img-fluid"
                      alt="promote"
                      effect="blur"
                    />
                    <span className="promobrand-bag">
                      <LazyLoadImage
                        src="/images/promo-card-icon.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>
                  </div>
                  <div className="promotebrand-use">
                    <span>
                      <LazyLoadImage
                        src="/images/promo-user2.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>{" "}
                    Fisk22
                  </div>
                  <div className="promote-card-content">
                    <div className="promote-card-content-lft">
                      <p className="promote-line4"></p>

                      <div className="promote-line-bottp">
                        <span>
                          <LazyLoadImage
                            src="/images/dollas.png"
                            className="img-fluid"
                            alt="icon"
                            effect="blur"
                          />
                        </span>
                        <p className="promote-line5"></p>
                        <span>
                          <LazyLoadImage
                            src="/images/dobl-redArrow.png"
                            className="img-fluid"
                            alt="icon"
                            effect="blur"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="promote-card-content-right">
                      <div className="promote-addcart-brn">
                        <button>
                          Add to Cart
                          <span className="ml-2">
                            <LazyLoadImage
                              src="/images/cart-icon.png"
                              className="img-fluid"
                              alt="cart"
                              effect="blur"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="promote-brand-list-right">
                  <div className="promote-reminder-block">
                    <span className="promobrand-bag">
                      <LazyLoadImage
                        src="/images/promo-card-icon.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>
                    <div className="promotebrand-launch">
                      <span>
                        <LazyLoadImage
                          src="/images/promo-user3.png"
                          className="img-fluid"
                          alt="icon"
                          effect="blur"
                        />
                      </span>{" "}
                      KinghtKing
                    </div>
                    <div className="launcing-block">
                      <div className="launcing-innerblock">
                        <h3>LAUNCHING IN</h3>
                        <div className="launching-time-block">
                          <span className="mr-1">0</span>
                          <span className="mr-1">4</span>:
                          <span className="ml-1">0</span>
                          <span className="ml-1 mr-1">1</span>:
                          <span className="ml-1">0</span>
                          <span className="ml-1">2</span>
                        </div>
                        <div className="reminfer-bttn-blcok">
                          <button> Reminder</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="promote-brand-list-bottm-lft">
                  <div className="promote-card-hd-img">
                    <LazyLoadImage
                      src="/images/promotebrand-img4.png"
                      className="img-fluid"
                      alt="promote"
                      effect="blur"
                    />
                    <span className="promobrand-bag">
                      <LazyLoadImage
                        src="/images/promo-card-icon.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>
                  </div>
                  <div className="promotebrand-use">
                    <span>
                      <LazyLoadImage
                        src="/images/promo-user4.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>
                    Gandalf
                  </div>
                  <div className="promote-card-btmcontent">
                    <p className="promote-line6"></p>
                    <p className="promote-btmtxt">NFT SPACE odyssey</p>
                    <p className="promote-btmtxt2">
                      <LazyLoadImage
                        src="/images/ether-img.png"
                        className="img-fluid"
                        alt="promote"
                        effect="blur"
                      />
                      0.5
                    </p>
                    <div className="promote-offer-btn">
                      <button>Make a Offer</button>
                    </div>
                  </div>
                </li>
                <li className="promote-brand-list-bottm-mid">
                  <div className="promote-brand-TAC">
                    <div className="promote-brand-TAC-lft">
                      <h3>15% OFF</h3>
                      <p>To all clothin items through January 2022</p>
                    </div>
                    <div className="promote-brand-TAC-right">
                      <h3>USE BY</h3>
                      <h4>30 Jan 2022</h4>
                      <p>Excludes Sporting items and golf equipment.</p>
                      <div>
                        <LazyLoadImage
                          src="/images/tac.png"
                          className="img-fluid"
                          alt="TAC"
                          effect="blur"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="promotebrand-use mt-42">
                    <span>
                      <LazyLoadImage
                        src="/images/promo-user5.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>
                    Bilbo
                  </div>
                  <div className="promote-card-content mt-13">
                    <div className="promote-card-content-lft">
                      <p className="promote-line6"></p>
                      <p className="promote-btmtxt">nft Voucher -TAC </p>
                    </div>
                    <div className="promote-card-content-right">
                      <div className="promote-addcart-brn mt-2">
                        <button>Reedem Now</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="promote-brand-list-bottm-lft">
                  <div className="promote-card-hd-img">
                    <LazyLoadImage
                      src="/images/promotebrand-img5.png"
                      className="img-fluid"
                      alt="promote"
                      effect="blur"
                    />
                    <span className="promobrand-bag">
                      <LazyLoadImage
                        src="/images/promo-card-icon.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>
                  </div>
                  <div className="promotebrand-use">
                    <span>
                      <LazyLoadImage
                        src="/images/promo-user6.png"
                        className="img-fluid"
                        alt="icon"
                        effect="blur"
                      />
                    </span>
                    SexyShooter
                  </div>
                  <div className="promote-card-btmcontent">
                    <p className="promote-line6"></p>
                    <p className="promote-btmtxt">nft Men summer shirt set </p>
                    <p className="promote-btmtxt2">
                      <LazyLoadImage
                        src="/images/ether-img.png"
                        className="img-fluid"
                        alt="promote"
                        effect="blur"
                      />
                      0.5
                    </p>
                    <div className="promote-offer-btn">
                      <button>Make a Offer</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="enochweb-behind-sect" id="home-team">
          <div className="enochweb-container">
            <div className="behind-enoch-block">
              <div className="behind-enoch-block-lft">
                <LazyLoadImage
                  src="/images/behind-enoch.png"
                  className="img-fluid"
                  alt="behind enoch"
                  effect="blur"
                />
              </div>
              <div className="behind-enoch-block-right">
                <h3>Who's behind Enoch?</h3>
                <p className="behind-enoch-txt1">
                  Enoch is an open project that believes in open source code and
                  creative contribution from people with diverse interests and
                  skillsets.
                </p>
                <p className="behind-enoch-txt2">
                  Intrested in joining Enoch ?{" "}
                  <a href="/career">Visit our open position</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="enochweb-roadmap-sect" id="home-roadmap">
          <LazyLoadImage
            src="/images/roadmap.png"
            className="img-fluid"
            alt="roadmap"
            effect="blur"
          />
          <div className="enoch-roadmap-schedule1">
            <h3 className="roadmap-clr1">Sep,2021</h3>
            <ul>
              <li>
                Launch the Enoch ‘closed beta’ application with social media and
                profile card avatar.
              </li>
              <li>Launch Enoch DEX contracts on polygon testnet.</li>
            </ul>
          </div>
          <div className="enoch-roadmap-schedule2">
            <h3 className="roadmap-clr2">Feb, 2022</h3>
            <ul>
              <li>Launch the NFT marketplace on the application.</li>
              <li>Deploy the beta version of the mobile app for Enoch.</li>
              <li>
                Liquidity mining with $Enoch token for pre-sale and provide
                staking pools for $Enoch.
              </li>
              <li>All transactions processed in amber coin</li>
            </ul>
          </div>
          <div className="enoch-roadmap-schedule3">
            <h3 className="roadmap-clr3">May, 2022</h3>
            <ul>
              <li>Launch all entertainment pools for games.</li>
              <li>Improved community management tools.</li>
              <li>All transactions processed in any liquid crypto token</li>
            </ul>
          </div>
          <div className="enoch-roadmap-schedule4">
            <h3 className="roadmap-clr4">Sep, 2022</h3>
            <ul>
              <li>
                Develop the advertising and recommendation engine for the social
                media.
              </li>
              <li>Standardise all beta contracts to a stable version.</li>
            </ul>
          </div>
          <div className="enoch-roadmap-schedule5">
            <h3 className="roadmap-clr5">Feb, 2023</h3>
            <ul>
              <li>
                Integrate third party games to utilize entertainment pools.
              </li>
              <li>
                provide 3D avatars for user profile and 3D models to sell on the
                Marketplace.
              </li>
            </ul>
          </div>
        </div>
        <div className="enochweb-invest-sect" id="home-invest">
          <div className="enochweb-invest-innerblock">
            <div className="enoch-invest-block">
              <div className="enoch-invest-block-lft">
                <h3>Invest in $Enoch Token </h3>

                <p className="enoch-invest-txt1">
                  Our mission is to return power to users. Enoch is a platform
                  for creators and their communities build their own independent
                  digital economies. Enoch governance tokens confer holders the
                  power to influence decisions concerning the core protocol,
                  product or feature roadmap and changes to governance
                  parameters.
                </p>
                <p>
                  Social Commerce is generation’s Z gold rush.
                  <br />
                  <b>
                    Join whitelist and get access to the public sale of $Enoch
                    tokens
                  </b>
                </p>
                <div className="mt-4">
                  <button className="enochweb-learnmo-bttn">Learn More</button>
                </div>
              </div>
              <div className="enoch-invest-block-right">
                <LazyLoadImage
                  src="/images/invest-enoch.png"
                  className="img-fluid"
                  alt="invest"
                  effect="blur"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="enochweb-partners-investors-sect">
          <div className="enochweb-container">
            <div className="partners-investors-body">
              <div className="partners-investors-hd">
                <h3>Our Partners & Investors </h3>
                <p>
                  Enoch provides the expertise and tools to <br />
                  support your journey
                </p>
              </div>
              <div className="partners-compny-list">
                <ul className="partners-compny-listBlock1">
                  <li className="pcompny-logo1">
                    <LazyLoadImage
                      src="/images/FinLogo.png"
                      className="img-fluid"
                      alt="finaxis"
                      effect="blur"
                    />
                  </li>
                  <li className="pcompny-logo2">
                    <LazyLoadImage
                      src="/images/JEfashion.png"
                      className="img-fluid"
                      alt="JEfashion"
                      effect="blur"
                    />
                  </li>
                  <li className="pcompny-logo3">
                    <LazyLoadImage
                      src="/images/pop-art-logo.png"
                      className="img-fluid"
                      alt="pop-art-logo"
                      effect="blur"
                    />
                  </li>
                </ul>
                <ul className="partners-compny-listBlock2">
                  <li className="pcompny-logo4">
                    <LazyLoadImage
                      src="/images/16games.png"
                      className="img-fluid"
                      alt="16games"
                      effect="blur"
                    />
                  </li>
                  <li className="pcompny-logo5">
                    <LazyLoadImage
                      src="/images/Skin_Industries.png"
                      className="img-fluid"
                      alt="Skin_Industries"
                      effect="blur"
                    />
                  </li>
                  <li className="pcompny-logo6">
                    <LazyLoadImage
                      src="/images/film1.png"
                      className="img-fluid"
                      alt="film1"
                      effect="blur"
                    />
                  </li>
                  <li className="pcompny-logo7">
                    <LazyLoadImage
                      src="/images/6flow-records.png"
                      className="img-fluid"
                      alt="6flow-records"
                      effect="blur"
                    />
                  </li>
                  <li className="pcompny-logo8">
                    <LazyLoadImage
                      src="/images/racco.png"
                      className="img-fluid"
                      alt="racco"
                      effect="blur"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="enochweb-nft-market-sect">
          <div className="enochweb-container">
            <div className="enochweb-nft-market-block">
              <div className="enochweb-nft-market-lft">
                <h2>This app will be live in Q2 2022!</h2>
                <h3>A social Meta-commerce & NFT Marketplace </h3>
                <p className="mb-36">
                  No complicated crypto-jargon. Just sign up, earn from your
                  content, start creator journey, setup your own shop and
                  monetize to earn a fortune!
                  <br /> Who said crypto had to be hard?
                </p>
                <p className="mb-26">
                  <span data-toggle="modal" data-target="#subscribeModal">
                    Join Our
                  </span>{" "}
                  list to get notified when Enoch is <br />
                  available for you.
                </p>
                {/* <!-- Modal --> */}
                <div
                  id="subscribeModal"
                  className="modal subscribeModal-block in"
                  role="dialog"
                >
                  <div className="modal-dialog">
                    {/* <!-- Modal content--> */}
                    <div className="modal-content subscribeModal-content">
                      <div className="subscribeModal-close">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          <LazyLoadImage
                            src="/images/subscribeCross.png"
                            className="img-fluid"
                            alt="close"
                            effect="blur"
                          />
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="subscribeModal-head">
                          <h2>Help us to complete our mission</h2>
                          <p>
                            We are stronger. Help us get to the end of the
                            journey and start getting paid
                          </p>
                        </div>
                        <div className="subscribeModal-steps">
                          <ul>
                            <li>
                              <div className="subscribeModal-steps-content">
                                <LazyLoadImage
                                  src="/images/sbuscribe-img1.png"
                                  className="img-fluid"
                                  alt="subscribe"
                                  effect="blur"
                                />
                                <div className="steps-innercontent">
                                  <h3>25,000</h3>
                                  <p>Air Drop VIP Pass</p>
                                </div>
                                <span className="substeps-img1">
                                  <LazyLoadImage
                                    src="/images/sbuscribe-img4.png"
                                    className="img-fluid"
                                    alt="subscribe"
                                    effect="blur"
                                  />
                                </span>
                                <span className="substeps-img2">
                                  <LazyLoadImage
                                    src="/images/sbuscribe-img2.png"
                                    className="img-fluid"
                                    alt="subscribe"
                                    effect="blur"
                                  />
                                </span>
                              </div>
                              <div className="subscribeModal-steps-bottmcontent">
                                <LazyLoadImage
                                  src="/images/sbuscribe-img9.png"
                                  className="img-fluid"
                                  alt="subscribe"
                                  effect="blur"
                                />
                                VIP Pass will get you access to the upcoming
                                beta & Prizes.
                              </div>
                            </li>
                            <li className="subscribeModal-line">
                              <LazyLoadImage
                                src="/images/sbuscribe-img8.png"
                                className="img-fluid"
                                alt="subscribe"
                                effect="blur"
                              />
                            </li>
                            <li>
                              <div className="subscribeModal-steps-content">
                                <LazyLoadImage
                                  src="/images/sbuscribe-img1.png"
                                  className="img-fluid"
                                  alt="subscribe"
                                  effect="blur"
                                />
                                <div className="steps-innercontent">
                                  <h3>25,000</h3>
                                  <p>users get early access </p>
                                </div>
                                <span className="substeps-img3">
                                  <LazyLoadImage
                                    src="/images/sbuscribe-img3.png"
                                    className="img-fluid"
                                    alt="subscribe"
                                    effect="blur"
                                  />
                                </span>
                                <span className="substeps-img4">
                                  <LazyLoadImage
                                    src="/images/sbuscribe-img6.png"
                                    className="img-fluid"
                                    alt="subscribe"
                                    effect="blur"
                                  />
                                </span>
                                <span className="substeps-img5">
                                  <LazyLoadImage
                                    src="/images/sbuscribe-img7.png"
                                    className="img-fluid"
                                    alt="subscribe"
                                    effect="blur"
                                  />
                                </span>
                                <p className="substeps-txt">
                                  we’re working on this now
                                </p>
                              </div>
                              <div className="subscribeModal-steps-bottmcontent">
                                <LazyLoadImage
                                  src="/images/sbuscribe-img10.png"
                                  className="img-fluid"
                                  alt="subscribe"
                                  effect="blur"
                                />
                                We need your input.
                                <br />
                                We’re building this for you.
                              </div>
                            </li>
                            <li className="subscribeModal-line">
                              <LazyLoadImage
                                src="/images/sbuscribe-img8.png"
                                className="img-fluid"
                                alt="subscribe"
                                effect="blur"
                              />
                            </li>
                            <li>
                              <div className="subscribeModal-steps-content">
                                <LazyLoadImage
                                  src="/images/sbuscribe-img1.png"
                                  className="img-fluid"
                                  alt="subscribe"
                                  effect="blur"
                                />
                                <div className="steps-innercontent">
                                  <h3>25,000</h3>
                                  <p>
                                    Users start
                                    <br />
                                    getting prizes
                                  </p>
                                </div>
                                <span className="substeps-img6">
                                  <LazyLoadImage
                                    src="/images/sbuscribe-img5.png"
                                    className="img-fluid"
                                    alt="subscribe"
                                    effect="blur"
                                  />
                                </span>
                              </div>
                              <div className="subscribeModal-steps-bottmcontent">
                                <LazyLoadImage
                                  src="/images/sbuscribe-img11.png"
                                  className="img-fluid"
                                  alt="subscribe"
                                  effect="blur"
                                />
                                Among all the participants, some will get 500
                                USD worth of tokens. In addition we will hand
                                out other NFT rewards as a bonus.
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="subscribeModal-form">
                          <form>
                            <div className="subscribeModal-subscribeform">
                              <input type="text" placeholder="your name" />
                              <input type="text" placeholder="your mail id" />
                              <button className="subscribeform-bttn2">
                                Join whitelist
                              </button>
                            </div>
                          </form>
                          <div className="subscribeform-bttm-txt">
                            By signing up you agree to our{" "}
                            <a href="#">privacy policy</a> You can opt out
                            anytime.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nft-market-btngroup">
                  <button>
                    <LazyLoadImage
                      src="/images/gplay.png"
                      className="img-fluid"
                      alt="google play"
                      effect="blur"
                    />
                  </button>
                  <button>
                    <LazyLoadImage
                      src="/images/appstore.png"
                      className="img-fluid"
                      alt="app store"
                      effect="blur"
                    />
                  </button>
                </div>
              </div>
              <div className="enochweb-nft-market-right">
                <div className="market-mbl1">
                  <LazyLoadImage
                    src="/images/mbl1.png"
                    className="img-fluid"
                    alt="market"
                    effect="blur"
                  />
                </div>
                <div className="market-mbl2">
                  <LazyLoadImage
                    src="/images/mbl2.png"
                    className="img-fluid"
                    alt="market"
                    effect="blur"
                  />
                </div>
              </div>
            </div>
            <div className="enochweb-follow">
              <h3>Follow along</h3>
              <p>
                We’re all users and in it together. No secrets. Real
                transparency. Follow us, tweet us, hit us up. Together we’re a
                revolution
              </p>
              <ul>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon1.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon2.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon3.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon4.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon5.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon6.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon7.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon8.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon9.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LazyLoadImage
                      src="/images/social-icon10.png"
                      className="img-fluid"
                      alt="icon"
                      effect="blur"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <FooterWebsite />
        <CookiesWebsite />
      </div>
    </LazyLoadComponent>
  );
};

export default trackWindowScroll(HomeEnoch);
