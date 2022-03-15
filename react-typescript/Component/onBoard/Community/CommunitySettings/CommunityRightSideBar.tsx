import React from "react";

const ManageCommunityArr = [
    { label: 'Community setting', sr: "/images/community-setting.png" },
    { label: 'Community Appearance', sr: "/images/community-Apperance.png" },
    { label: 'Awards', sr: "/images/community-Apperance.png" },
    { label: 'Wiki page', sr: "/images/wiki-page.png" },

]

const UserManagementArr = [
    { label: 'All Users', sr: "/images/all-users.png" },
    { label: 'Banned', sr: "/images/banned.png" },
    { label: 'Muted', sr: "/images/muted.png" },
    { label: 'Approved', sr: "/images/approved.png" },
    { label: 'Moderator', sr: "/images/moderator.png" },
]

const CommunityRightSideBar = (props: any) => {
    const { selectTab, setSelectTabHandler } = props;
    return (
        <div className="col-lg-3">
            <div className="community-body-right-Col">
                <div className="community-body-right-Col-card mb-4">
                    <h2>Manage Community</h2>
                    <div className="tab">
                        <ul>
                            {ManageCommunityArr.map((item, i) => {
                                return (
                                    <li onClick={() => setSelectTabHandler(item.label)}>
                                        <button className={selectTab == item.label ? "tablinks active" : "tablinks"} id="defaultOpen">
                                            <div className="btn-content">
                                                <div className="icon">
                                                    <img src={item.sr} alt="icon" className="img-fluid" />
                                                </div>
                                                <h5>{item.label}</h5>
                                            </div>
                                        </button>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>

                <div className="community-body-right-Col-card mb-4">
                    <h2>User Management</h2>
                    <div className="tab">
                        <ul>
                            {UserManagementArr.map((item, i) => {
                                return (
                                    <li onClick={() => setSelectTabHandler(item.label)}>
                                        <button className={selectTab == item.label ? "tablinks active" : "tablinks"} >
                                            <div className="btn-content">
                                                <div className="icon">
                                                    <img src={item.sr} alt="icon" className="img-fluid" />
                                                </div>
                                                <h5>{item.label}</h5>
                                            </div>
                                        </button>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
                <div className="community-body-right-Col-card mb-4">
                    <h2>Flair & Emoji</h2>
                    <div className="tab">
                        <ul>
                            <li>
                                <button className="tablinks">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/grant-user-flair.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Grant User Flair</h5>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button className="tablinks">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/post-flair.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Post Flair</h5>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button className="tablinks">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/user-flair.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>User Flair</h5>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button className="tablinks no-border pb-0">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/emoji-flair.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Emoji</h5>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="community-body-right-Col-card mb-4">
                    <h2>Rules & Regulations</h2>
                    <div className="tab">
                        <ul>
                            <li>
                                <button className="tablinks">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/rules.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Rules</h5>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button className="tablinks">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/removal%20reason.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Removal Reason</h5>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button className="tablinks">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/content%20control.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Content Control</h5>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button className="tablinks no-border pb-0">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/automated.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Automated</h5>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="community-body-right-Col-card mb-4">
                    <h2>Content</h2>
                    <div className="tab">
                        <ul>
                            <li>
                                <button className="tablinks">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/scheduled-post.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Scheduled Post</h5>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button className="tablinks no-border pb-0">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/event-post.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Event Posts</h5>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="community-body-right-Col-card mb-4">
                    <h2>Community Insights</h2>
                    <div className="tab">
                        <ul>
                            <li>
                                <button className="tablinks">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/trafic-state.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Traffic Stats</h5>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button className="tablinks no-border pb-0">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/moderator-logs.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Moderator Logs</h5>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="community-body-right-Col-card mb-4">
                    <h2>Help Center</h2>
                    <div className="tab">
                        <ul>
                            <li>
                                <button className="tablinks no-border pb-0">
                                    <div className="btn-content">
                                        <div className="icon">
                                            <img src="/images/contact-enoch.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <h5>Contact Enoch</h5>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityRightSideBar;
