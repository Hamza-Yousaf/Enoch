import React, { useState } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import dynamic from "next/dynamic";
const HeaderWebsite = dynamic(() => import("../../Component/Enoch-Website/Header/Header"));
const FooterWebsite = dynamic(() => import("../../Component/Enoch-Website/Footer/Footer"));

const CookiePolicy: React.FC = () => {
  return (
    <LazyLoadComponent>
    <div className="enoch-container-fluid">
      <HeaderWebsite>
        <div className="enochweb-header-coookiePolicy">
          <div className="enochweb-header-coookiePolicyimg">
            <LazyLoadImage
                src="/images/cookie-policy-bg.png" 
                className="img-fluid" 
                alt="enoch"
                effect="blur"
              />
          </div>
          <div className="enochweb-header-tag">
            <div id="cookie-hd-title1" className="enochwen-cookiePolicy-headline cookiePolicy-headline-dBlock">
              <h2>Privacy and Cookie Policy</h2>
            </div>
            <div id="cookie-hd-title2" className="enochwen-cookiePolicy-headline">
              <h2>Legal Disclaimer</h2>
            </div>

            <div id="cookie-hd-title3" className="enochwen-cookiePolicy-headline">
              <h2>Copyright Policy</h2>
            </div>
            <div id="cookie-hd-title4" className="enochwen-cookiePolicy-headline">
              <h2>Terms of service</h2>
            </div>
          </div>

        </div>
      </HeaderWebsite>
      <div className="enochweb-cookiePolicy-sect">
        <div className="enochweb-container">
          <div className="cookie-policy-block">
            <div className="cookie-policy-block-lft">
              <ul>
                <li>
                  {" "}
                  <a href="/cookie-policy">
                    <button className="cookietablink active">
                      privacy & Cookie Policy{" "}
                    </button>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/legal-disclaimer">
                    <button className="cookietablink">Legal disclaimer </button>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/copyright-policy">
                    <button className="cookietablink">Copyright policy</button>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/terms-service">
                    <button className="cookietablink">
                      Terms of service
                    </button>
                  </a>
                </li>
              </ul>

            </div>
            <div className="cookie-policy-block-right">
              <div id="privacy" className="cookietabcontent cookie-display">
                <div className="cookie-policy-privacy">

                  <div className="cookie-policy-privacy-body">
                    <h2>Privacy and Cookie Policy</h2>
                    <p>Finrate AG ("us", "we", or "our") operates the https://stakingrewards.com website (the “Service”).</p>
                    <p>We’re committed to protecting and respecting your privacy. We use your data to provide and improve the Service only.</p>
                    <p>We may change this Policy from time to time so please check this page occasionally to ensure that you’re happy with any changes. By using our website, you’re agreeing to be bound by this Policy.</p>
                    <h3 className="mt-5">1. Information Collection And Use</h3>
                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                    <h3 className="mt-4">2. Types of Data Collected</h3>

                    <h4 className="mt-4">2.1. Personal Data</h4>
                    <p className="mt-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:</p>
                    <div className="mt-4">
                      <p>Email address</p>
                      <p>First name and last name</p>
                      <p>Address, State, Province, ZIP/Postal code, City</p>
                      <p>Cookies and Usage Data</p>
                      <p>Usage Data</p>
                    </div>
                    <p className="mt-4">We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                    <h4 className="mt-4">2.2. Tracking & Cookies Data</h4>
                    <p className="mt-4">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                    <p className="mt-4">Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>

                    <p className="mt-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

                    <p className="mt-4">Examples of Cookies we use:</p>
                    <div className="mt-4">
                      <p>Session Cookies. We use Session Cookies to operate our Service.</p>
                      <p>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</p>
                      <p>Security Cookies. We use Security Cookies for security purposes.</p>

                    </div>
                    <h3 className="mt-4">3. Use of Data</h3>
                    <p>Stakingrewards.com uses the collected data for various purposes:</p>
                    <div className="mt-4">
                      <p>To provide and maintain the Service</p>
                      <p>To notify you about changes to our Service</p>
                      <p>To allow you to participate in interactive features of our Service when you choose to do so</p>
                      <p>To provide customer care and support</p>
                      <p>To provide analysis or valuable information so that we can improve the Service</p>
                      <p>To monitor the usage of the Service</p>
                      <p>To detect, prevent and address technical issues</p>
                    </div>
                    <h3 className="mt-4">4. Transfer Of Data</h3>
                    <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>

                    <p className="mt-4">If you are located outside Germany and choose to provide information to us, please note that we transfer the data, including Personal Data, to Germany and process it there.</p>

                    <p className="mt-4">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>

                    <p className="mt-4">Stakingrewards.com will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

                    <h3 className="mt-4">5. Disclosure Of Data</h3>

                    <h4 className="mt-4">5.1. Legal Requirements</h4>
                    <p>Stakingrewards.com may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                    <div className="mt-4">
                      <p>To comply with a legal obligation</p>
                      <p>To protect and defend the rights or property of Stakingrewards.com</p>
                      <p>To prevent or investigate possible wrongdoing in connection with the Service</p>
                      <p>To protect the personal safety of users of the Service or the public</p>
                    </div>
                    <h4 className="mt-4">4.1.5. To protect against legal liability</h4>
                    <h3 className="mt-4">6. Security Of Data</h3>
                    <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                    <h3 className="mt-4">7. Service Providers</h3>
                    <p>We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                    <p className="mt-4">These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

                    <h3 className="mt-4">8. Analytics</h3>
                    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>

                    <h4 className="mt-4">8.1. Google Analytics</h4>
                    <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>

                    <p className="mt-4">You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>

                    <p className="mt-4">For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>

                    <h3 className="mt-4">9. General Data Protection Regulation (GDPR)</h3>
                    <p>We are a Data Controller of your information. If you’d like to learn more about GDPR and your rights under GDPR, please read the GDPR guide.</p>

                    <p className="mt-4">Stakingrewards.com legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:</p>
                    <div className="mt-4">
                      <p>Stakingrewards.com needs to perform a contract with you;</p>
                      <p>You have given Stakingrewards.com permission to do so;</p>
                      <p>Processing your personal information is in Stakingrewards.com legitimate interests;</p>
                      <p>com needs to comply with the law.</p>
                    </div>
                    <p className="mt-4">Stakingrewards.com will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

                    <p className="mt-4">If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.</p>

                    <p className="mt-4">In certain circumstances, you have the following data protection rights:</p>
                    <div className="mt-4">
                      <p>The right to access, update or to delete the information we have on you.</p>
                      <p>The right of rectification.</p>
                      <p>The right to object.</p>
                      <p>The right of restriction.</p>
                      <p>The right to data portability</p>
                      <p>The right to withdraw consent</p>
                    </div>
                    <h3 className="mt-4">10. Log Files</h3>
                    <p>Stakingrewards.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>

                    <h3 className="mt-4">11. Links To Other Sites</h3>
                    <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

                    <h3 className="mt-4">12. Children’s Privacy</h3>
                    <p>Our Service does not address anyone under the age of 14 (“Children”). We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                    <p>We do not knowingly collect personally identifiable information from anyone under the age of 14. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

                    <h3 className="mt-4">13. Changes To This Privacy Policy</h3>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                    <h3 className="mt-4">14. Contact Us</h3>

                    <p className="mt-4">If you have any questions about this Privacy Policy, please contact us:</p>

                    <p className="mt-4">By email: <a href="mailto:info@stakingrewards.com">info@stakingrewards.com</a></p>
                  </div>
                </div>
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

export default trackWindowScroll(CookiePolicy);
