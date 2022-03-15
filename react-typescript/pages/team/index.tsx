import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import dynamic from "next/dynamic";
const HeaderWebsite = dynamic(() => import("../../Component/Enoch-Website/Header/Header"));
const FooterWebsite = dynamic(() => import("../../Component/Enoch-Website/Footer/Footer"));

const Team: React.FC = () => {
  return (
    <LazyLoadComponent>
      <div className="enoch-container-fluid enochweb-body-bg">
        <HeaderWebsite>
          <div className="enochweb-header-team">
            <div className="enochweb-header-teamimg">
              <LazyLoadImage
                src="/images/team-head.png"
                className="img-fluid"
                alt="enoch"
                effect="blur"
              />
            </div>
          </div>
        </HeaderWebsite>

        <div className="enochweb- team-sect">
          <div className="enochweb-container">
            <div className="enochweb-team-block">
              <div className="enochweb-team-block-hd">
                <h2>Team</h2>
                <h3>Get to know the people behind the product </h3>
                <p>
                  Our mission is to bring everyone the inspiration to create a
                  life they love—and that includes our employees.
                </p>
                <p>
                  We empower our team to take on the most inspiring challenges of
                  their working lives.
                </p>
              </div>
              <div className="enochweb-team-members">
                <ul>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem1.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-twitter.png"
                            alt="enoch-twitter"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Mikael Kayanian </h3>
                    <p>Head of Engineering</p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem2.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-twitter.png"
                            alt="enoch-twitter"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Dhruv Godambe </h3>
                    <p>Head Of Blockchain </p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem3.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Jai Singh</h3>
                    <p>Head of Product </p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem4.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Godwin Omale </h3>
                    <p>Full-stack Developer </p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem5.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Sammy Ochabs </h3>
                    <p>Full -Stack Developer </p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem6.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Hamza Yousaf </h3>
                    <p>Front -End Developer </p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem7.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Ruhit Deori</h3>
                    <p>Front-End Developer </p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem8.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Gaurav Sharma</h3>
                    <p>DevOps</p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem9.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-twitter.png"
                            alt="enoch-twitter"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Alexander Batechko</h3>
                    <p>Investor Relation</p>
                  </li>
                </ul>
              </div>
              <div className="enochweb-team-members">
                <h2>Advisors</h2>
                <ul className="justify-content-xl-center">
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem10.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-twitter.png"
                            alt="enoch-twitter"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Marcus Tenore </h3>
                    <p>Casino & Betting </p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem11.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-twitter.png"
                            alt="enoch-twitter"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>David Pughi </h3>
                    <p>Brand Design </p>
                  </li>
                  <li>
                    <div className="enochweb-team-img">
                      <LazyLoadImage
                        src="/images/team-mem12.png"
                        alt="team member"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochweb-team-socio-media">
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-linkedin.png"
                            alt="enoch-linkedin"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <LazyLoadImage
                            src="/images/enoch-twitter.png"
                            alt="enoch-twitter"
                            className="img-fluid"
                            effect="blur"
                          />
                        </a>
                      </span>
                    </div>
                    <h3>Vincenzo Cacciopoli </h3>
                    <p>Crypto/NFT Marketing </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="enochweb-adventure">
          <div className="enochweb-container">
            <div className="enochweb-adventure-block">
              <div className="enochweb-adventure-left">
                <LazyLoadImage
                  src="/images/team-advan.png"
                  alt="team"
                  className="img-fluid"
                  effect="blur"
                />
              </div>
              <div className="enochweb-adventureright">
                <h3>Join us in our adventures</h3>
                <p>
                  Want to join us? We’re actively hiring across the board. Get in
                  touch, we would love to talk.
                </p>
                <div>
                  <button className="jointeam-btn">Join Our Team</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterWebsite />
      </div>
    </LazyLoadComponent>
  );
};

export default trackWindowScroll(Team);
