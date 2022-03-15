import React, { useState } from "react";
import classnames from "classnames";
import { useMutation } from "@apollo/client";
import { EDIT_COMMUNITY_MUTATION } from "../../../graphql/mutations";
import { useRouter } from "next/router";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../Component/AlertModal"));


const CommunityEdit = () => {
  const [toggleTable, setToggleTable] = useState<boolean>(false);
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");
  const [communityType, setCommunityType] = useState("");
  const [isAdultCommunity, setIsAdultCommunity] = useState(false);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const onChangeName = (e: any) => {
    setCommunityName(e.target.value);
  };

  const onChangeDescription = (e: any) => {
    setCommunityDescription(e.target.value);
  };

  const onChangeType = (e: any) => {
    console.log(e.target.value);
    setCommunityType(e.target.value);
  };

  const toggleIsAdult = (e: any) => {
    setIsAdultCommunity(!isAdultCommunity);
  };

  const id = router.query.communityId;

  console.log(communityName, communityDescription, id);

  const [editCommunity, { data, error, loading }] = useMutation(
    EDIT_COMMUNITY_MUTATION
  );

  const clearFields = () => {
    setCommunityDescription("");
    setCommunityName("");
    setToggleTable(false);
  };

  const edit_community = () => {
    editCommunity({
      variables: {
        about: "",
        CommunityInput: {
          communityName: communityName,
          adult_community: isAdultCommunity,
        },
        description: communityDescription,
        communityType: communityType,
        communityId: id,
      },
    })
      .then((result) => {
        console.log(result);
        if (result?.data?.editCommunity === "Community Joined Successfully") {
          setMessage("community updated successfully");
          setShowAlert(true);
          setSuccess(true);
        } else {
          setMessage("something went wrong please try again");
          setShowAlert(true);
          setSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.message);
        setShowAlert(true);
      });
  };

  return (
    <>
      <div className="enoch-community-manage-block-right">
        <div
          className={classnames("enoch-community-editable-form", {
            "form-enable": toggleTable == true,
          })}
        >
          <div className="enoch-community-editable-form-hd">
            <h3>Community Setting</h3>
            <span
              onClick={() => {
                setToggleTable(true);
              }}
            >
              <button className="comm-set-edit-btn">Edit</button>
            </span>
          </div>
          <form>
            <div className="editable-form-input-grp">
              <div className="editable-form-input-label">Date</div>
              <div className="editable-form-dateinput-field">
                <input
                  type="text"
                  placeholder="date"
                  value="25/07/2021"
                  disabled
                />
                <span>
                  <img
                    src="/images/dApp-DoB-Calendar.png"
                    className="img-fluid"
                    alt="calender"
                  />
                </span>
              </div>
            </div>
            <div className="editable-form-input-grp">
              <div className="editable-form-input-label">Community name</div>
              <div className="editable-form-txtinput-field">
                <input
                  onChange={(e) => onChangeName(e)}
                  type="text"
                  placeholder="Community name"
                  value={communityName}
                />
              </div>
              <p>@defisignal</p>
            </div>
            <div className="editable-form-input-grp">
              <div className="editable-form-input-label">
                Description (max 5000 letters)
              </div>
              <div className="editable-form-input-field">
                <textarea
                  onChange={(e) => onChangeDescription(e)}
                  placeholder="what is your community all about"
                  value={communityDescription}
                >
                  {/* {communityDescription} */}
                </textarea>
              </div>
            </div>
            <div className="Community-type">
              <div className="editable-form-input-label">Community type</div>

              <div
                className="Community-type-radio-sect"
                onChange={(e) => onChangeType(e)}
              >
                <label className="container">
                  <strong>
                    Public{" "}
                    <span>
                      Anyone can view, post, and comment to this community
                    </span>
                  </strong>
                  <input
                    disabled={!toggleTable}
                    type="radio"
                    value="public"
                    name="radio"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <strong>
                    Restricted{" "}
                    <span>
                      Anyone can view this community, but only approved users
                      can post
                    </span>
                  </strong>
                  <input
                    disabled={!toggleTable}
                    type="radio"
                    value="restricted"
                    name="radio"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <strong>
                    Private{" "}
                    <span>
                      Only approved users can view and submit to this community
                    </span>
                  </strong>
                  <input
                    disabled={!toggleTable}
                    type="radio"
                    value="private"
                    name="radio"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="Adult-content-sect">
              <div className="editable-form-input-label">Adult content</div>
              <div className="Adult-content-Checkbox">
                <input
                  type="checkbox"
                  checked={isAdultCommunity}
                  onChange={toggleIsAdult}
                  disabled={!toggleTable}
                />
                <label>18+ year old community</label>
              </div>
            </div>

            {/* <div className="community-cat">
            <input
              onClick={() => {
                console.log("jjj");
              }}
              onChange={(e) => onChangeType(e)}
              value="public"
              name="b-plan"
              type="radio"
              checked={communityType === "public"}
            />
            <label htmlFor="community-select"></label>
            <div className="community-select-txt">
              <p className="community-event-txt1">Public</p>
              <p className="community-event-txt2">
                Shared on Eventbrite and search engines
              </p>
            </div>
          </div>
          <div className="community-cat">
            <input
              onChange={(e) => onChangeType(e)}
              value="restricted"
              name="b-plan"
              type="radio"
              checked={communityType === "restricted"}
            />
            <label htmlFor="community-select1"></label>
            <div className="community-select-txt txt-disabled">
              <p className="community-event-txt1">Restricted</p>
              <p className="community-event-txt2">
                Only approved users can view and submit to this community
              </p>
            </div>
          </div>
          <div className="community-cat">
            <input
              onChange={(e) => onChangeType(e)}
              value="private"
              name="b-plan"
              type="radio"
              checked={communityType === "private"}
            />
            <label htmlFor="community-select2"></label>
            <div className="community-select-txt txt-disabled">
              <p className="community-event-txt1">Private</p>
              <p className="community-event-txt2">
                Only available to a selected audience
              </p>
            </div>
          </div> */}

            {/* <div className="community-cat">
            <input
              id="community-select4"
              name="b-plan"
              type="checkbox"
              checked
            />
            <label htmlFor="community-select4"></label>
            <div className="community-select-txt">
              <p className="community-event-txt1">Adult Content</p>
              <p className="bttm-txt-disabled">
                When your community is marked as adult content, users must be
                flagged as 18+ in their user settings
              </p>
            </div>
          </div> */}
            <div className="editable-form-buttn-grp">
              <span className="comm-mr-16">
                <button
                  onClick={clearFields}
                  type="button"
                  className="editable-cancel-btn"
                >
                  Cancel
                </button>
              </span>
              <span>
                <button
                  onClick={() => {
                    edit_community();
                    clearFields();
                  }}
                  type="button"
                  className="editable-update-btn"
                >
                  Update
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <AlertModal
        message={message}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        success={success}
      />
    </>
  );
};

export default withApollo(CommunityEdit, { getDataFromTree });
