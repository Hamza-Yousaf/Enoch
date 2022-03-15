import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { ADD_EXPERIENCE } from "../../graphql/mutattions/addExperience";
import {
  otherUserExperienceQuery,
  userExperienceQuery,
} from "../../graphql/Queries/otherUserExperience";

interface Props {
  userId: any;
}

const Experience: React.FC<Props> = ({ userId }) => {
  const [collaps, setCollaps] = useState({ eventActive: false });
  const [allExperiences, setAllExperiences] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // state managment for modal handeling
  const [experience, setExperience] = useState({
    title: "",
    employment_type: "Full-Time",
    company: "",
    location: "",
    headline: "",
    description: "",
    currentyly_working: false,
  });

  const handleExpericeOnClick = () => {
    if (collaps.eventActive === false) {
      const newEventClick = {
        ...collaps,
      };
      newEventClick.eventActive = true;
      setCollaps(newEventClick);
    } else {
      const newEventClick = {
        ...collaps,
      };
      newEventClick.eventActive = false;
      setCollaps(newEventClick);
    }
  };
  // handleing modal Input

  const handleOnChangeInput = (e: any) => {
    // the code is write inside of here
    const newExperience = {
      ...experience,
    };
    //@ts-ignore
    newExperience[e.target.name] = e.target.value;
    newExperience.currentyly_working = true;
    setExperience(newExperience);
  };

  // handleExperience

  const [createExperience, { data, loading, error }] = useMutation(
    ADD_EXPERIENCE,
    {
      refetchQueries: [
        {
          query: userExperienceQuery,
        },
      ],
    }
  );

  // handle All the mutation on submit
  const handleOnSubmit = (e: any) => {
    createExperience({
      variables: {
        title: experience.title,
        employment_type: experience.employment_type,
        company: experience.company,
        location: experience.location,
        headline: experience.headline,
        description: experience.description,
        currentyly_working: experience.currentyly_working,
      },
    })
      .then((res) => {
        console.log(res);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);

    e.preventDefault();
  };

  const otherUserExperience = useQuery(otherUserExperienceQuery, {
    variables: {
      id: userId,
    },
  });

  const userExperience = useQuery(userExperienceQuery);
  console.log("user exp", otherUserExperience?.data);

  useEffect(() => {
    if (userId?.length > 0) {
      if (otherUserExperience?.data) {
        setAllExperiences(otherUserExperience?.data?.getOthereUserExperience);
      }
    } else {
      console.log("here");
      if (userExperience?.data) {
        setAllExperiences(userExperience?.data?.getUserExperience);
      }
    }
  }, [otherUserExperience?.data, userExperience?.data]);

  console.log("expee", allExperiences);
  console.log("empt type", experience.employment_type);
  return (
    <div className="dApp-home-profile-collaps-content">
      <button
        className={`${
          collaps.eventActive
            ? "dApp-home-profile-collapsible active"
            : "dApp-home-profile-collapsible"
        }`}
        onClick={handleExpericeOnClick}
      >
        <div className="dApp-home-profile-collaps-btn">
          <label>Experince</label>
        </div>
      </button>
      {collaps.eventActive && (
        <div
          className="roles_collaps"
          style={{
            display: "block",
          }}
        >
          {allExperiences?.length < 1 && (
            <div className="dApp-Add-Experince-sect">
              <h6>No records availabel</h6>
              {userId?.length < 1 && (
                <button
                  data-toggle="modal"
                  data-target="#dApp-Add-Experince-modal"
                >
                  <span>
                    <img src="/images/dApp-btn-Plus.png" alt="+" />
                  </span>
                  <a href="#">Add Experience</a>
                </button>
              )}
            </div>
          )}
          {allExperiences?.length > 0 && (
            <div className="dApp-Add-Experince-sect-after">
              {allExperiences?.map((exp: any, key: any) => {
                return (
                  <div key={key} className="dApp-Add-Experince-content">
                    <div className="dApp-Add-Experince-img">
                      <img
                        src="/images/CommunityName-logo.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="dApp-Add-Experince-text">
                      <h1>{exp?.title}</h1>
                      <h2>{exp?.company + " . " + exp?.employment_type}</h2>
                      <p>Jan 2018 - Counting . 2 years 11 mons</p>
                      <p>{exp?.location}</p>
                    </div>
                  </div>
                );
              })}

              {userId?.length < 1 && (
                <div className="dApp-Add-Experince-btn">
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <span>
                      <img src="/images/dApp-btn-Plus.png" alt="+" />
                    </span>
                    <a href="#">Add Experience</a>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* <!-- Modal --> */}

          <div className="dApp-home-profile-modal-sect dApp-Add-Experince-modal-sect">
            <div
              className={showModal ? "modal fade in" : "modal fade"}
              id="dApp-Add-Experince-modal"
              role="dialog"
              style={
                showModal
                  ? { display: "block", overflowY: "scroll" }
                  : { display: "none" }
              }
            >
              <div className="modal-dialog">
                {/* <!-- Modal content--> */}
                <form className="modal-content" onSubmit={handleOnSubmit}>
                  <div className="dApp-home-profile-modal-header dApp-Add-Experince-modal-header">
                    <h4 className="modal-title">Add experience</h4>
                    <div
                      className="close dApp-home-profile-modal-close"
                      onClick={() => setShowModal(false)}
                    >
                      <img
                        src="/images/hCross.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="modal-body">
                    <div>
                      <div className="dApp-home-profile-modal-form pb-0 mt-0">
                        <form>
                          <div className="input-Title input-fild">
                            <label>
                              Title
                              <span>{' '}*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Ex. Retail Sales Manager"
                              id="au_input1"
                              name="title"
                              onChange={handleOnChangeInput}
                            />
                          </div>

                          <div className="Employment-type-dropdown input-fild">
                            <label>Employment type</label>
                            <select
                              className="Edit-Employment-input-field Employment-type-dropdownBox"
                              name="employment_type"
                              onChange={handleOnChangeInput}
                            >
                              <option value="Full-Time">Full-time</option>
                              <option value="Part-Time">Part-time</option>
                              <option value="Self-Employed">
                                Self-employed
                              </option>
                              <option value="Freelancer">Freelance</option>
                              <option value="Interniship">Interniship</option>
                              <option value="Trainee">Trainee</option>
                            </select>

                            <h6>Country-specific employment types</h6>
                          </div>

                          <div className="Company input-fild">
                            <label>
                              Company
                              <span>{' '}*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Ex: Cashcoin"
                              id="au_input2"
                              name="company"
                              onChange={handleOnChangeInput}
                            />
                          </div>

                          <div className="Location input-fild">
                            <label>
                              Location
                              <span>{' '}*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Ex: London, United Kingdom"
                              id="au_input3"
                              name="location"
                              onChange={handleOnChangeInput}
                            />
                          </div>

                          <div className="Location-checkbox">
                            <input
                              type="checkbox"
                              id="au_input4"
                              name="workingRole"
                              onChange={handleOnChangeInput}
                            />
                            <label>I am currently working in this role</label>
                          </div>

                          <div className="Headline input-fild">
                            <label>
                              Headline
                              <span>{' '}*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Type something"
                              id="au_input5"
                              name="headline"
                              onChange={handleOnChangeInput}
                            />
                          </div>

                          <div className="Description input-fild">
                            <label>Description</label>
                            <textarea
                              placeholder="Type something"
                              name="description"
                              onChange={handleOnChangeInput}
                            ></textarea>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer no-border pt-0 pb-4">
                    <button
                      className={`${
                        experience.currentyly_working &&
                        experience.headline != ""
                          ? "add-exprnc-bttn"
                          : "add-exprnc-bttn exprnc-disable-bttn"
                      } `}
                      id="onboardSavebtn"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div> 
  );
};

export default Experience;
