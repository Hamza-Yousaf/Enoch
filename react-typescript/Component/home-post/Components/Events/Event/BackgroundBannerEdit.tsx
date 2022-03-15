import React, { useState } from "react";
import Banner from "./Banner";
import { banners } from "../../../../../lib/banners";
import dynamic from "next/dynamic";
const BackgroundsImagesTab = dynamic(() => import("./BackgroundImagesTab"));
import { useMutation } from "@apollo/client";
import { EVENT_HEADER_BANNER_IMAGE_MUTATION } from "../../../../../graphql/mutations";
import { GET_EVENTS_QUERY } from "../../../../../graphql/queries";
import Cookie from "js-cookie";
const AlertModal = dynamic(() => import("../../../../AlertModal"));

interface Props {
  backgroundBanner: string;
  setBackgroundBanner: React.Dispatch<React.SetStateAction<string>>;
  eventHeader: string;
  event: any;
  setShowComponentBanner: any;
  showComponentBanner: any;
  showBackgroundEditModal: any;
  setShowBackgroundEditModal: any;
}

const BackgroundBannerEdit: React.FC<Props> = ({
  backgroundBanner,
  setBackgroundBanner,
  eventHeader,
  event,
  setShowComponentBanner,
  showComponentBanner,
  showBackgroundEditModal,
  setShowBackgroundEditModal,
}) => {
  const [currentBackgroundsTab, setCurrentBackgroundsTab] = useState("popular");
  const [bgToSet, setBgToSet] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [updateBackgroundBannerImage, { data, loading, error }] = useMutation(
    EVENT_HEADER_BANNER_IMAGE_MUTATION,
    {
      refetchQueries: [{ query: GET_EVENTS_QUERY }],
    }
  );

  const setBackground = () => {
    console.log(event.id);
    updateBackgroundBannerImage({
      variables: {
        eventId: event.id,
        bannerImageName: bgToSet,
      },
    })
      .then((resp) => {
        console.log(resp);
        if (resp?.data?.updateEventBannerImage?.success === true) {
          console.log(resp?.data?.updateEventBannerImage?.event);
          Cookie.set("currentEvent", resp?.data?.updateEventBannerImage?.event);
          setShowBackgroundEditModal(false);
          setBackgroundBanner(bgToSet);
        } else {
          setShowAlert(true);
          setMessage(resp?.data?.updateEventBannerImage?.errors[0]?.message);
          setSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
        setMessage("failed to update the event banner");
        setSuccess(false);
      });
  };

  console.log(showBackgroundEditModal);

  return (
    <div
      // id="community-head-bg"
      className={
        showBackgroundEditModal === true
          ? "modal community-headbg-modal in"
          : "modal community-headbg-modal"
      }
      role="dialog"
      style={
        showBackgroundEditModal === true
          ? {
              display: "block",
              background: "rgba(0,0,0,0.5)",
              overflow: "scroll",
            }
          : { display: "none" }
      }
    >
      <div className="modal-dialog">
        {/* <!-- Modal content--> */}
        <div className="modal-content community-hd-content">
          <div className="community-header">
            <h3 className="modal-title">Background Photo</h3>
          </div>
          <div className="community-hd-modal-body">
            <div className="community-modal-imgBlock">
              <img
                src={
                  event?.eventBannerImage?.length > 0 &&
                  showComponentBanner === false
                    ? event?.eventBannerImage
                    : backgroundBanner
                }
                className="img-fluid your-event-cover-img"
                alt="community"
              />
              <div className="community-modal-innerimgBlock">
                <h3>
                  {eventHeader?.length > 0 ? eventHeader : "event Header"}
                </h3>
              </div>
            </div>
            <AlertModal
              message={message}
              setShowAlert={setShowAlert}
              showAlert={showAlert}
              success={success}
            />
            <div className="community-modal-imgGal">
              <h4>Select the background banner</h4>
              <BackgroundsImagesTab
                setCurrentBackgroundsTab={setCurrentBackgroundsTab}
                currentBackgroundsTab={currentBackgroundsTab}
              />
              <div className="imgGalTab-content-block">
                <div
                  id="popular"
                  className={
                    currentBackgroundsTab === "popular"
                      ? " imgGaltabcontent imgGaltabcontent-d-block"
                      : "imgGaltabcontent"
                  }
                >
                  <ul>
                    {banners.map((banner, key) => {
                      return (
                        <Banner
                          setBackground={setBackground}
                          backgroundImg={banner.bg}
                          backgroundImage={backgroundBanner}
                          setShowComponentBanner={setShowComponentBanner}
                          setBgToSet={setBgToSet}
                          setBackgroundBanner={setBackgroundBanner}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div
                  id="Sports"
                  className={
                    currentBackgroundsTab === "sports"
                      ? " imgGaltabcontent imgGaltabcontent-d-block"
                      : "imgGaltabcontent"
                  }
                >
                  <ul>
                    {banners.map((banner, key) => {
                      return (
                        <Banner
                          setBackground={setBackground}
                          backgroundImg={banner.bg}
                          backgroundImage={backgroundBanner}
                          setShowComponentBanner={setShowComponentBanner}
                          setBgToSet={setBgToSet}
                          setBackgroundBanner={setBackgroundBanner}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div
                  id="games"
                  className={
                    currentBackgroundsTab === "games"
                      ? " imgGaltabcontent imgGaltabcontent-d-block"
                      : "imgGaltabcontent"
                  }
                >
                  <ul>
                    {banners.map((banner, key) => {
                      return (
                        <Banner
                          setBackground={setBackground}
                          backgroundImg={banner.bg}
                          backgroundImage={backgroundBanner}
                          setShowComponentBanner={setShowComponentBanner}
                          setBgToSet={setBgToSet}
                          setBackgroundBanner={setBackgroundBanner}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div
                  id="Blockchain"
                  className={
                    currentBackgroundsTab === "blockchain"
                      ? " imgGaltabcontent imgGaltabcontent-d-block"
                      : "imgGaltabcontent"
                  }
                >
                  <ul>
                    {banners.map((banner, key) => {
                      return (
                        <Banner
                          setBackground={setBackground}
                          backgroundImg={banner.bg}
                          backgroundImage={backgroundBanner}
                          setShowComponentBanner={setShowComponentBanner}
                          setBgToSet={setBgToSet}
                          setBackgroundBanner={setBackgroundBanner}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div
                  id="It"
                  className={
                    currentBackgroundsTab === "IT"
                      ? " imgGaltabcontent imgGaltabcontent-d-block"
                      : "imgGaltabcontent"
                  }
                >
                  <ul>
                    {banners.map((banner, key) => {
                      return (
                        <Banner
                          setBackground={setBackground}
                          backgroundImg={banner.bg}
                          backgroundImage={backgroundBanner}
                          setShowComponentBanner={setShowComponentBanner}
                          setBgToSet={setBgToSet}
                          setBackgroundBanner={setBackgroundBanner}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div
                  id="Fashion"
                  className={
                    currentBackgroundsTab === "fashion"
                      ? " imgGaltabcontent imgGaltabcontent-d-block"
                      : "imgGaltabcontent"
                  }
                >
                  <ul>
                    {banners.map((banner, key) => {
                      return (
                        <Banner
                          setBackground={setBackground}
                          backgroundImg={banner.bg}
                          backgroundImage={backgroundBanner}
                          setShowComponentBanner={setShowComponentBanner}
                          setBgToSet={setBgToSet}
                          setBackgroundBanner={setBackgroundBanner}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="community-bottom-bttngrp">
              <div className="community-bottom-bttnlft">Delete Photo</div>
              <div className="community-bottom-bttnright">
                <button
                  onClick={() => {
                    setShowBackgroundEditModal(false);
                  }}
                  className="community-bttnright-cancel"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setBackground();
                  }}
                  className="community-bttnright-apply"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBannerEdit;
