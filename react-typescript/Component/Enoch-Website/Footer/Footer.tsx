import { LazyLoadImage } from "react-lazy-load-image-component";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const FooterWebsite = () => {
  const router = useRouter();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <div className="enochweb-footer-sect">
        <div className="enochweb-container">
          <div className="enochweb-footer-sect-top">
            <div className="enochweb-footer-sect-top-lft">
              <div className="footer-barnd-logo">
                <a href="/">
                  <img
                    src="/images/enoch-logo.png"
                    alt="logo"
                    className="img-fluid"
                  />
                  <span className="onboard-beta">BETA</span>
                </a>
              </div>
              <p>CREATORS & FANS MAKE A LIVING</p>
            </div>
            <div className="enochweb-footer-sect-top-right">
              <h3>Company</h3>
              <ul>
                <li onClick={() => router.push("/team")}>
                  <a href="#!">Team</a>
                </li>
                <li onClick={() => router.push("/career")}>
                  <a href="#!">Career</a>
                </li>
                <li onClick={() => router.push("/faq")}>
                  <a href="#!">FAQs</a>
                </li>
                <li onClick={() => router.push("/contact-us")}>
                  <a href="#!">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="enochweb-footer-sect-bottm">
            <div className="enochweb-footer-sect-bottm-lft">
              <LazyLoadImage
                src="/images/footer-bottm-img.png"
                alt="footer"
                className="img-fluid"
                effect="blur"
              />
            </div>
            <div className="enochweb-footer-sect-bottm-right">
              <h3>Be a part of Enoch family</h3>
              <form>
                <div className="enochweb-subscribeform">
                  <input type="text" placeholder="your name" />
                  <input type="text" placeholder="your mail id" />
                  <button className="subscribeform-bttn">Join Now</button>
                </div>
              </form>
              <div className="footer-share-icons">
                <ul>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon1.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon2.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon3.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon4.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon5.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon6.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon7.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon8.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon9.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                  <li>
                    <LazyLoadImage
                      src="/images/share-icon10.png"
                      alt="icon"
                      className="img-fluid"
                      effect="blur"
                    />
                  </li>
                </ul>
                <p>
                  <span>
                    <a href="/legal-disclaimer">Legal Disclaimer</a>
                  </span>
                  <span>
                    <a href="/terms-service">Terms of service </a>
                  </span>
                  <span>
                    <a href="/cookie-policy">Cookies & Privacy Policy</a>
                  </span>
                  <span>
                    <a href="/copyright-policy">Copyright Policy</a>
                  </span>
                </p>
                <p className="mb-0">© Enoch, Inc 2020. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="enochwen-scroll-btn"
          id="theFixed"
          onClick={() => scrollToTop()}
        >
          <span>
            <img
              src="/images/scroll-btn.png"
              className="img-fluid"
              alt="scroll"
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterWebsite;
