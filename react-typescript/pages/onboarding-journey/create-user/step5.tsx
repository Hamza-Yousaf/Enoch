import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { LATEST_NEWSUBSCRIBE_MUTATION } from "../../../graphql/userProfileMutations";
import withApollo from "../../../lib/withApollo";
import { useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../Component/AlertModal"));


const CreateUserStep5: React.FC = () => {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState(
    "Subscription functionality not supported"
  );
  const [success, setSuccess] = useState(false);
  const [newssubscribArr, setNewssubscribArr] = useState([
    {
      label: "Social commerce",
      des: "The power of customer reviews was borne of the social commerce revolution.",
      select: true,
    },
    {
      label: "Metaverse Channels",
      des: "Learn about metavese potential, to reinvent the way we interact with our friends and loved ones.",

      select: false,
    },
    {
      label: "Livestreaming",
      des: "Connect with your viewers in real time. launch a product, deliver an interactive className, a fashion or music show to generate income.",
      select: true,
    },
    {
      label: "Brand & NFT Trend",
      des: "NFT technology can provide a new user experience and help increase brand awareness and affinity.",
      select: false,
    },
    {
      label: "Enoch Marketplace",
      des: "Discover, buy and sell crypto collectibles and assets nonfungible tokens (NFTs) or create your own.",
      select: false,
    },
    {
      label: "Unleashing Communities",
      des: "Building and curating a strong community around your ideas is the same as building value.",
      select: false,
    },
    {
      label: "Entertaintment",
      des: "covering everything about our NFT games and online gaming, casino and sportsbook blockchain you need to know about recent updates.",
      select: false,
    },
    {
      label: "Open Finance",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      select: false,
    },
  ]);
  const [lastNewsSubscribeM, { data, loading, error }] = useMutation(
    LATEST_NEWSUBSCRIBE_MUTATION
  );

  const onSubscribeHandler = (item: any) => {
    const selectItem = item;
    const selectLabel = item.label;
    if (selectItem.select) {
      selectItem.select = false;
    } else {
      selectItem.select = true;
    }
    const newsSubscribItem = newssubscribArr.filter((e, i) =>
      e.label.toString() == selectLabel.toString() ? selectItem : e
    );
    setNewssubscribArr(newsSubscribItem);
  };

  const onClickHandler = () => {
    //due to api not working move next page
    router.push("/onboarding-journey/create-user/step6");

    let newssubscrib = [];
    newssubscrib = newssubscribArr
      .filter((item, index) => item.select)
      .map((e) => e.label);

    // lastNewsSubscribeM({
    //   variables: {
    //     newssubscrib: newssubscrib.toString(),
    //   },
    // })
    //   .then((res) => {
    //     if (res) router.push("/onboarding-journey/create-user/step6");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setMessage(err.message);
    //     setShowAlert(true);
    //     setSuccess(false);
    //   });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="onboarding-new-container container-bg2">
          <div className="onboard-individual-body">
            <div className="onboard-business-logo">
              <img
                src="/images/businessNewLogo.png"
                className="img-fluid"
                alt="logo"
              />
            </div>
            <AlertModal
              showAlert={showAlert}
              setShowAlert={setShowAlert}
              message={message}
              success={success}
            />
            <div className="onboard-business-bottm-img">
              <img
                src="/images/business-img.png"
                className="img-fluid"
                alt="logo"
              />
            </div>

            <div className="onboard-business-innerbody">
              <div className="onboard-business-progressBlock">
                <div className="onboard-business-progressbar">
                  <div className="onboard-business-progressbar-inner progress-80"></div>
                </div>
                <div className="onboard-business-bottmVal">
                  <Link href="/onboarding-journey/create-user/step4">
                    <span>
                      <img
                        src="/images/back-arrow.png"
                        className="img-fluid mr-2"
                        alt="back"
                      />
                      GO BACK
                    </span>
                  </Link>
                  <span>5/6</span>
                </div>
              </div>
              <div className="onboard-business-hd">
                <h2>Subscribe for latest news </h2>
                <p>
                  Signup to best social commerce based decentralised unlockable
                  content. Some content creators, featured in our social
                  metaverse, also created NFT metadata that Enoch marketplace is
                  minting on Polygon Network, contributing across these NFT
                  based unlockable content bundles— from art to digital fashion
                  to music to collectibles to in-game items.
                </p>
              </div>
              <div className="onboard-business-subscribe-block">
                <div className="onboard-business-subscribe-block-lft">
                  <ul>
                    {newssubscribArr.map((item, index) => {
                      return (
                        <li>
                          <div className="subscribe-checkbox">
                            <input
                              type="checkbox"
                              checked={item.select == true}
                              onClick={() => onSubscribeHandler(item)}
                            />
                          </div>
                          <div className="onboard-business-subscribe-contnt">
                            <h3>{item.label} </h3>
                            <p>
                              {item.des}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="onboard-business-subscribe-block-right">
                  <img
                    src="/images/subscribe-img.png"
                    className="img-fluid mr-2"
                    alt="subscribe"
                  />
                </div>
              </div>
              <div
                className="onboard-busines-nxt"
                onClick={() => onClickHandler()}
              >
                <button
                  id="selectothers-cont-btn"
                  className="bunsinss-nxt-bttn"
                >
                  {loading ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(CreateUserStep5, { getDataFromTree });
