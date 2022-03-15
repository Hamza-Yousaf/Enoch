import React from "react";

const CommunitySetting = () => {
    return (
        <div id="CommunitySetting" className="tabcontent">
            <div className="community-body-left-Col CommunitySetting-left-Col">
                <div className="community-headings">
                    <h2>Community Setting</h2>
                    <p>COMMUNITY PROFILE</p>
                </div>
                <div className="community-name-sect">
                    <h2>Community name</h2>
                    <div className="input-ticket">
                        <input type="text" placeholder="Hello Cricket" />
                    </div>
                    <p>88 Characters remaining</p>
                </div>
                <div className="Community-topics">
                    <h2>Community topics</h2>
                    <div className="Community-topics-content">
                        <p>This will help Reddit recommend your community to relevant users and other discovery experiences. <a >Learn more.</a></p>
                        <strong>0/25</strong>
                    </div>
                    <a >Add a Primary Topic</a>
                </div>
                <div className="community-description">
                    <h2>Community description</h2>
                    <p>This is how new members come to understand your community.</p>
                    <div className="textarea-sect">
                        <textarea>Hello Cricket</textarea>
                        <p>500 Characters remaining</p>
                    </div>
                </div>
                <div className="welcome-message-sect">
                    <div className="welcome-message-content">
                        <h2>Send welcome message to new members</h2>
                        <p>Create a custom welcome message to greet people the instant they join your community. New community members will see this as soon as they join, and in a direct message 1 hour after joining. Learn more.</p>
                    </div>
                    <div className="welcome-message-toggle-switch">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="community-type-sect">
                    <h2>COMMUNITY TYPE</h2>
                    <div className="community-type-content">
                        <h5>Type of community</h5>
                        <div className="community-type-checkbox">
                            <label className="container">
                                <p><b>Public</b>Anyone can view this community, but only approved users can post</p>
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <p><b>Restricted</b>Anyone can view this community, but only approved users can post</p>
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <p> <b>Private</b>Anyone can view this community, but only approved users can post</p>
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="adult-community-sect">
                    <div className="adult-community-content">
                        <h2>18+ year old community</h2>
                        <p>When your community is marked as an 18+ community, users must be flagged as 18+ in their user settings</p>
                    </div>
                    <div className="adult-community-toggle-switch">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunitySetting;
