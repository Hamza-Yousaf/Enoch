import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { COMPLETE_ON_BOARDING_MUTATION } from "../../../graphql/userProfileMutations";
import { useMutation } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";

const EnochInfo: React.FC = () => {

  const router = useRouter();
  /*Mutation*/
  const [completeOnBoarding] = useMutation(COMPLETE_ON_BOARDING_MUTATION);


  const onContinueHandler = () => {
    //due to api not working move next page
    router.push("/landing");
    // completeOnBoarding().then((res) => {
    //   router.push("/landing");
    // })
    //   .catch((err) => {
    //     console.log(err.message);

    //   });
  }



  return (
    <>
      <div className="main info-body-img">
        <section>
          <div className="ezl-dashboard-container">
            {/* <!-- video section --> */}
            <div className="video">
              <video controls src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                poster="/images/image_2021_12_09T18_25_57_100Z.png">
                Sorry, your browser doesn't support embedded videos, but don't
                worry, you can
                <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
                and watch it with your favorite video player!
              </video>
            </div>
            {/* <!-- video section --> */}
            <h1 className="join-heading">Join Enoch | Better.Together</h1>


            <div className="margin-b-25">

              <div className="enoch-for-sec">
                <span className="enoch-for-text">Enoch for @hulk66</span>
              </div>

              <div className="bg-white follower-sec">
                <div className="followerWrap">
                  <span className="pro_enoch">
                    <img src="/images/profile.png" alt="enoch" className="img-fluid" />
                  </span>
                  <div className="follower">
                    <span className="m-lft-20 desc"> <span className="enoch-colorno">05</span> Following </span>
                  </div>
                  <div className="follower">
                    <span className="m-lft-20 desc"> <span className="enoch-colorno">00</span> Followers </span>
                  </div>
                </div>
                <button className="launch-btn">Launch Enoch</button>
              </div>
            </div>

            <div className="bg-white onboard-section">
              <div className="onboardWrap">
                <img className="margin-t-25 img-fluid" src="/images/gilrFrame.png" alt="enoch" />
                <div className="">
                  <span className="desc1">Want to see the onpabding steps agains</span>
                </div>
              </div>

              <button className="onboard-btn">Take me to Onboarding</button>
            </div>
            <h2 className="community-heading">Join Our Community</h2>
            <div className="cardset1">

              {/* <!-- enoch card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card enoch-bg text-center">
                  <img src="/images/purplecircle.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Enoch Community</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>

              {/* <!-- insta card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card insta-bg text-center">
                  <img src="/images/insta.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Instagram</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>


              {/* <!-- Twitter card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card twitter-bg text-center">
                  <img src="/images/Enoch-twitter.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Twitter</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>

              {/* <!-- youtube card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card youtube-bg text-center">
                  <img src="/images/youtube.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Youtube</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>

              {/* <!-- fb card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card fb-bg text-center">
                  <img src="/images/fb.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Facebook</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>

              {/* <!-- Linkedin card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card linkedin-bg text-center">
                  <img src="/images/linkedin.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Linkedin</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>

              {/* <!-- tiktok card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card tiktok-bg text-center">
                  <img src="/images/tiktok.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">TikTok</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>

              {/* <!-- pintrest card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card tiktok-bg text-center">
                  <img src="/images/pintrest.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Pintrest</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>

              {/* <!-- Discord card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card discord-bg text-center">
                  <img src="/images/discord.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Discord</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>

              {/* <!-- Telegram card --> */}
              <div className="card info-card-size ">
                <div className="card_head community-card telegram-bg text-center">
                  <img src="/images/telegram.png" className="img-fluid rounded-start" alt="icon" />
                </div>
                <div className="card_body community-card text-center">
                  <h5 className="app-title">Telegram</h5>
                  <p className="app-desc">Join +50K users across the world</p>
                </div>
              </div>
            </div>
            <div className="enoch-bg enoch-mac-section">
              <div className="EnochMain">
                <img className="downloadIcon" src="/images/Enoch-download.png" />
                <div className="m-lft-20 enochTextWrap">
                  <span className="enoch-mac-text">Enoch on Mac</span>
                  <p className="desc">Launch Enoch from your dock and stay up to date with desktop notifications.</p>
                </div>
              </div>
              <div className="downloadButton">
                <button className="text-white align-self-center download-link">Download</button>
              </div>

            </div>
            <div className="mac" onClick={() => onContinueHandler()}>
              <button className="eno-mac-continue">Continue</button>
            </div>
          </div>
        </section>
      </div>
    </>

  );
};

export default withApollo(EnochInfo, { getDataFromTree });