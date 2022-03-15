import React, { useState } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import classnames from "classnames";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";
import { INDUSTRIES_MUTATION, OTHER_INDUSTRIES_MUTATION } from "../../../graphql/userProfileMutations";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../Component/AlertModal"));

const CreateUserStep2: React.FC = () => {
  const router = useRouter();
  const [industryField, setIndustryField] = useState("");
  const [modal, setModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("create user not supported");
  const [success, setSuccess] = useState(false);
  const [industryArr, setIndustryArr] = useState([
    {
      label: "Arts & Crafts",
      select: false,
    },
    {
      label: "Video Gaming",
      select: false,
    },
    {
      label: "Gambling/Sports Betting",
      select: false,
    },
    {
      label: "Fashion",
      select: false,
    },
    {
      label: "Crypto / DeFi",
      select: false,
    },
    {
      label: "None Fungible Token(NFT)",
      select: false,
    },
    {
      label: "Music",
      select: false,
    },
    {
      label: "Entertainment & Media",
      select: false,
    },
  ]);

  const [industriesMutation, { data, loading, error }] =
    useMutation(INDUSTRIES_MUTATION);

  const [otherIndustriesMutation] =
    useMutation(OTHER_INDUSTRIES_MUTATION);


  const onClickHandler = () => {
    //due to api not working move next page
    router.push("/onboarding-journey/create-user/step3");

    let industries = [];
    industries = industryArr
      .filter((item, index) => item.select)
      .map((e) => e.label);

    industriesMutation({
      variables: {
        industries: industries.toString(),
      },
    })
      .then((res) => {
        if (res) router.push("/onboarding-journey/create-user/step3");
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.message);
        setShowAlert(true);
        setSuccess(false);
      });
  };

  const onIndustryHandler = (item: any) => {
    const selectItem = item;
    const selectLabel = item.label;
    if (selectItem.select) {
      selectItem.select = false;
    } else {
      selectItem.select = true;
    }
    const newIndustry = industryArr.filter((e, i) =>
      e.label.toString() == selectLabel.toString() ? selectItem : e
    );
    setIndustryArr(newIndustry);
  };


  const onOtherIndustryHandler = () => {
    otherIndustriesMutation({
      variables: {
        otherIndustries: industryField
      },
    })
      .then((res) => {
        if (res) setModal(false);
        router.push("/onboarding-journey/create-user/step2");
      })
      .catch((err) => {
        setModal(false);
        setMessage(err.message);
        setShowAlert(true);
        setSuccess(false);
        console.log(err);
      });
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
                  <div className="onboard-business-progressbar-inner progress-29"></div>
                </div>
                <div className="onboard-business-bottmVal">
                  <Link href="/onboarding-journey/create-user/step1">
                    <span>
                      <img
                        src="/images/back-arrow.png"
                        className="img-fluid mr-2"
                        alt="back"
                      />
                      GO BACK
                    </span>
                  </Link>
                  <span>2/6</span>
                </div>
              </div>
              <div className="onboard-business-hd">
                <h2>Which industry do you work for ? </h2>
                <p>Select your industry to get benefits of social commerce </p>
              </div>
              <div className="onboard-business-selection-block">
                <ul>
                  {industryArr.map((item, index) => {
                    const i = index + 1;
                    return (
                      <li
                        className={
                          item.select
                            ? `select-border-clr${i} seclect-active`
                            : `select-border-clr${i}`
                        }
                        onClick={() => onIndustryHandler(item)}
                      >
                        <div className="selection-imgblock">
                          <img
                            src={`/images/section-img${i}.png`}
                            className="img-fluid"
                            alt="icon"
                          />
                        </div>
                        <p> {item.label} </p>
                        <div className="seclection-check">
                          <img src="/images/business-tick.png" className="img-fluid business-tick" alt="tick" />
                          <img src="/images/business-cross.png" className="img-fluid business-cross" alt="tick" />
                        </div>
                      </li>
                    );
                  })}
                  <li className="select-border-clr9">
                    <div className="selection-imgblock">
                      <img
                        src="/images/section-img9.png"
                        className="img-fluid"
                        alt="icon"
                        onClick={() => setModal(true)}
                      />
                    </div>
                    <p
                      data-toggle="modal"
                      data-target="onboard-selectOthers-modal"
                      onClick={() => setModal(true)}
                    >
                      Others{" "}
                    </p>
                    <div className="onboard-select-modalBlock">
                      <div
                        id="onboard-selectOthers-modal2"
                        className={classnames("modal fade", {
                          "open": modal == true,
                        })}

                      >
                        <div className="modal-dialog">
                          <div className="modal-content selectOthers-modal-content">
                            <span className="close" onClick={() => setModal(false)}>
                              <img
                                src="/images/businessCross.png"
                                alt="close"
                                className="img-fluid"
                                data-dismiss="modal"
                              />
                            </span>
                            <h3>
                              What type of things are you interetsed in ?{" "}
                            </h3>
                            <div className="selectothers-form-block">
                              <form>
                                <div className="selectothers-form-input">
                                  <input
                                    type="text"
                                    placeholder="Industry name"
                                    onChange={(e) => setIndustryField(e.target.value)}
                                    name="industryField"
                                    value={industryField}
                                  />
                                </div>
                                <a href="/onboarding-journey/create-user/step2">
                                  <div className="selectothers-btn-block">
                                    <button className="selectothers-nxt-bttn">
                                      Submit & Continue
                                    </button>
                                  </div>
                                </a>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="onboard-busines-nxt">
                <button
                  id="selectothers-cont-btn"
                  className="bunsinss-nxt-bttn"
                  onClick={() => onClickHandler()}
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

export default withApollo(CreateUserStep2, { getDataFromTree });
