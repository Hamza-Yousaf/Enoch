import { useMutation } from "@apollo/client";
import { DatePicker } from "antd";
import { format } from "date-fns";
import moment from "moment";
import React, { useState } from "react";
import { EDIT_USER_PROFILE_MUTATION } from "../../graphql/mutattions/editUserProfile";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import { countries } from "../../lib/countryList";

interface Props {
  user: any;
  setShowEditProfileForm: any;
}

export const userBirthdayInForm = (date: string) => {
  if (date?.length > 0) {
    return `${format(new Date(date), "y")}-${format(
      new Date(date),
      "M"
    )}-${format(new Date(date), "d")}`;
  }
};

const EditProfileForm: React.FC<Props> = ({ user, setShowEditProfileForm }) => {
  const [userName, setUserName] = useState(user?.userName);
  const [DOB, setDOB] = useState(userBirthdayInForm(user?.dateOfBirth));
  const [hideBirthdayInfo, setHideBirthdayInfo] = useState(
    user?.hideDateOfBirth === "false"
      ? false
      : user?.hideDateOfBirth === "true"
      ? true
      : false
  );
  const [gender, setGender] = useState(user?.gender);
  const [website, setWebsite] = useState(user?.website);
  const [country, setCountry] = useState(user?.country);
  const [bio, setBio] = useState(user?.bio);
  const [hereFor, setHereFor] = useState(user?.herefor);
  const [hideHereFor, sethideHereFor] = useState(
    user?.hideherefor === "false"
      ? false
      : user?.hideherefor === "true"
      ? true
      : false
  );
  const [hideRelationship, setHideRelationship] = useState(
    user?.hiderelationshipInProfile === "false"
      ? false
      : user?.hiderelationshipInProfile === "true"
      ? true
      : false
  );
  const [RelationshipStatus, setRelationshipStatus] = useState(
    user?.relationShip
  );

  const [editUserProfile, { data, loading, error }] = useMutation(
    EDIT_USER_PROFILE_MUTATION,
    {
      refetchQueries: [
        {
          query: GET_USER_PROFILE_QUERY,
        },
      ],
    }
  );

  const update = () => {
    editUserProfile({
      variables: {
        EditProfileInput: {
          userName: userName,
          dateOfBirth: DOB,
          hideDateOfBirth: hideBirthdayInfo,
          gender: gender,
          website: website,
          country: country,
          bio: bio,
          relationShip: RelationshipStatus,
          herefor: hereFor,
          hideherefor: hideHereFor,
          hiderelationshipInProfile: hideRelationship,
        },
      },
    })
      .then((res) => {
        console.log("xxx", res);
        setShowEditProfileForm(false);
      })
      .catch((err) => console.log("xxx", err));
  };

  const handleDOB = (date: any, dateString: any) => {
    if (date) {
      setDOB(date._d);
      console.log(date._d);
    } else {
      setDOB("");
    }
  };

  const reset = () => {
    setUserName(`${user?.userName} ${user?.userName}`);
    setDOB(user?.dateOfBirth);
    setHideBirthdayInfo(user?.hideDateOfBirth);
    setGender(user?.gender);
    setWebsite(user?.website);
    setCountry(user?.country);
    setBio(user?.bio);
    setHereFor(user?.herefor);
    sethideHereFor(user?.hideherefor);
    setHideRelationship(user?.hiderelationshipInProfile);
    setRelationshipStatus(user?.relationShip);
  };

  console.log(
    RelationshipStatus,
    DOB,
    hideBirthdayInfo,
    hideHereFor,
    hideRelationship,
    gender,
    website,
    country,
    bio,
    hereFor
  );
  return (
    <div className="onbording-new-edit-form edit-form-d-block">
      <span
        onClick={() => setShowEditProfileForm(false)}
        className="onbordingedit-form-close"
      >
        <img src="images/close-o.png" className="img-fluid" alt="close" />
      </span>
      <h3>Edit Profile</h3>
      <form>
        <div className="onbording-new-edit-form-body">
          <div className="onbording-edit-input-group">
            <div className="floating-label-edit">
              <input
                className="floating-edit-input"
                type="text"
                placeholder=" "
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label>
                Your username<sup>*</sup>
              </label>
            </div>
            <p className="loating-edit-txt">
              We will not show your name in your profile
            </p>
          </div>
          <div className="onbording-edit-input-group">
            <div className="floating-label-edit">
              <DatePicker
                className="w-100"
                bordered={false}
                onChange={handleDOB}
                value={moment(DOB, "YYYY-MM-DD")}
              />
              <label>
                {DOB?.length < 1 && (
                  <>
                    Date of birth<sup>*</sup>
                  </>
                )}
              </label>
              <span className="edit-cal-btn">
                <img
                  src="/images/editCalendar.png"
                  className="img-fluid"
                  alt="calender"
                />
              </span>
            </div>
            <div className="onbording-edit-checkbox">
              <input
                onChange={() => setHideBirthdayInfo(!hideBirthdayInfo)}
                type="checkbox"
                id="au_input4"
                checked={hideBirthdayInfo}
              />
              <label>Hide this in my profie</label>
            </div>
          </div>
          <div className="onbording-edit-input-group">
            <div className="floating-label-edit">
              <div
                id="edit-input-dropBox"
                className="edit-input-dropdownBox"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {gender?.length > 0 ? (
                  gender
                ) : (
                  <>
                    {" "}
                    Gender<sup>*</sup>
                  </>
                )}
              </div>
              <div
                id="edit-input-dropList"
                className="dropdown-menu edit-input-dropbox-list"
              >
                <ul>
                  <li onClick={() => setGender("male")}>Male</li>
                  <li onClick={() => setGender("female")}>Female</li>
                  <li onClick={() => setGender("others")}>Others</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="onbording-edit-input-group">
            <div className="floating-label-edit">
              <input
                className="floating-edit-input"
                type="text"
                placeholder=" "
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <label>
                Website<sup>*</sup>
              </label>
            </div>
          </div>
          <div className="onbording-edit-input-group">
            <div className="floating-label-edit">
              <div
                id="edit-countryinput-dropBox"
                className="edit-input-dropdownBox"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {country?.length > 0 ? (
                  country
                ) : (
                  <>
                    {" "}
                    Country<sup>*</sup>
                  </>
                )}
              </div>
              <div
                id="edit-countryinput-dropList"
                className="dropdown-menu edit-input-dropbox-list"
              >
                <ul>
                  {countries.map((country, index) => {
                    return (
                      <li key={index} onClick={() => setCountry(country)}>
                        {country}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="onbording-edit-bio">
          <h3>Your Bio</h3>
          <div className="onbording-edit-textarea">
            <textarea
              maxLength={160}
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              placeholder="Write your bio (160 Letters max.)"
            ></textarea>
          </div>
        </div>
        <div className="onbording-new-edit-form-body">
          <div className="onbording-edit-input-group">
            <div className="floating-label-edit">
              <div
                id="edit-relationinput-dropBox"
                className="edit-input-dropdownBox"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {RelationshipStatus?.length > 0 ? (
                  RelationshipStatus
                ) : (
                  <>
                    Relationship Status<sup>*</sup>
                  </>
                )}
              </div>
              <div
                id="edit-relationinput-dropList"
                className="dropdown-menu edit-input-dropbox-list"
              >
                <ul>
                  <li onClick={() => setRelationshipStatus("Single")}>
                    Single
                  </li>
                  <li onClick={() => setRelationshipStatus("Married")}>
                    Married
                  </li>
                  <li onClick={() => setRelationshipStatus("Widowed")}>
                    Widowed
                  </li>
                  <li onClick={() => setRelationshipStatus("Divorced")}>
                    Divorced
                  </li>
                  <li
                    onClick={() =>
                      setRelationshipStatus("Domestic Partnership")
                    }
                  >
                    Domestic partnership
                  </li>
                  <li
                    onClick={() => setRelationshipStatus("Prefer not to say")}
                  >
                    Prefer not to say
                  </li>
                </ul>
              </div>
            </div>
            <div className="onbording-edit-checkbox">
              <input
                onChange={() => setHideRelationship(!hideRelationship)}
                checked={hideRelationship}
                type="checkbox"
                id="au_input4"
              />
              <label>Hide this in my profie</label>
            </div>
          </div>
          <div className="onbording-edit-input-group">
            <div className="floating-label-edit">
              <div
                id="edit-hereinput-dropBox"
                className="edit-input-dropdownBox"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {hereFor?.length < 1 ? "Here for" : hereFor}
              </div>
              <div
                id="edit-hereinput-dropList"
                className="dropdown-menu edit-input-dropbox-list"
              >
                <ul>
                  <li onClick={() => setHereFor("Selling Digital Arts")}>
                    Selling Digital Arts
                  </li>
                  <li onClick={() => setHereFor("Making Social Circle")}>
                    Making Social Circle
                  </li>
                  <li onClick={() => setHereFor("Investing in Marketplace")}>
                    Investing in Marketplace
                  </li>
                  <li onClick={() => setHereFor("Prefer not to say")}>
                    Prefer not to say
                  </li>
                </ul>
              </div>
            </div>
            <div className="onbording-edit-checkbox">
              <input
                onChange={() => sethideHereFor(!hideHereFor)}
                checked={hideHereFor}
                type="checkbox"
                id="au_input4"
              />
              <label>Hide this in my profie</label>
            </div>
          </div>
        </div>
        <div className="onboarding-edit-btngroup">
          <button onClick={reset} type="reset" className="onboarding-rest-bttn">
            Reset{" "}
          </button>
          <button
            onClick={update}
            type="button"
            className="onboarding-update-bttn"
          >
            Update{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
