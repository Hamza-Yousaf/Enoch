import React, { FC } from 'react'


interface Props {
    activeTab: string,
    handleTab: (arg: string) => void
}
const CommunitySettingsSidebar: FC<Props> = ({activeTab, handleTab}) => {
    return (
        <div className='col-lg-3'>
            <div className='community-body-right-Col'>
                <div className='community-body-right-Col-content'>
                    <div className="community-body-right-Col-card community-body-right-Col-card-1">
                        <h2>QUEUES</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className={activeTab === "modqueue" ? "tablinks active" : "tablinks"} onClick={() => handleTab("modqueue")} >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Mod queue</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "reports" ? "tablinks active" : "tablinks"} onClick={() => handleTab("reports")} >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Reports</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "spam" ? "tablinks active" : "tablinks"} onClick={() => handleTab("spam")} >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Spam</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "edited" ? "tablinks active" : "tablinks"} onClick={() => handleTab("edited")}>
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Edited</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "unmoderator" ? "tablinks active no-border pb-0" : "tablinks no-border pb-0" } onClick={() => handleTab("unmoderator")}>
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Unmoderator</h5>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="community-body-right-Col-card">
                        <h2>User Management</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className={activeTab === "allusers" ? "tablinks active" : "tablinks"} onClick={() => handleTab("allusers")}>
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/all-users.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>All Users</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "banned" ? "tablinks active" : "tablinks"} onClick={() => handleTab("banned")}>
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/banned.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Banned</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "muted" ? "tablinks active" : "tablinks"} onClick={() => handleTab("muted")} >
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/muted.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Muted</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "approved" ? "tablinks active" : "tablinks"} onClick={() => handleTab("approved")}>
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/approved.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Approved</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button  className={activeTab === "moderator" ? "tablinks no-border pb-0 active" : "tablinks no-border pb-0"} onClick={() => handleTab("moderator")}>
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/moderator.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Moderator</h5>
                                        </div>
                                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="community-body-right-Col-card">
                        <h2>Flair & Emoji</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className={activeTab === "grantuserflair" ? "tablinks active" : "tablinks"} id="defaultOpen" onClick={() => handleTab("grantuserflair")}>
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/grant-user-flair.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Grant User Flair</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "emoji" ? "tablinks active" : "tablinks"} onClick={() => handleTab("emoji")}>
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/emoji-flair.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Emoji</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "userflair" ? "tablinks active" : "tablinks"} onClick={() => handleTab("userflair")} >
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/user-flair.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>User Flair</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "postflair" ? "tablinks no-border pb-0 active" : "tablinks no-border pb-0"} onClick={() => handleTab("postflair")}>
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/post-flair.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Post Flair</h5>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="community-body-right-Col-card">
                        <h2>Rules & Regulations</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className={activeTab === "rules" ? "tablinks active" : "tablinks"} onClick={() => handleTab("rules")} id="defaultOpen">
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/rules.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Rules</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "removalreason" ? "tablinks active" : "tablinks"} onClick={() => handleTab("removalreason")} >
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/removal%20reason.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Removal Reason</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "contentcontrol" ? "tablinks active" : "tablinks"} onClick={() => handleTab("contentcontrol")} >
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/content%20control.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Content Control</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "automated" ? "tablinks active no-border pb-0" : "tablinks no-border pb-0"} onClick={() => handleTab("automated")}>
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

                    <div className="community-body-right-Col-card">
                        <h2>Content</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className={activeTab === "scheduledpost" ? "tablinks active" : "tablinks"} onClick={() => handleTab("scheduledpost")} >
                                        <div className="btn-content">
                                            <div className="icon">
                                                <img src="/images/scheduled-post.png" alt="icon" className="img-fluid" />
                                            </div>
                                            <h5>Scheduled Post</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "eventposts" ? "tablinks active no-border pb-0" : "tablinks no-border pb-0"} onClick={() => handleTab("eventposts")} >
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

                    <div className="community-body-right-Col-card">
                        <h2>Other</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className={activeTab === "award" ? "tablinks " : "tablinks"} onClick={() => handleTab("award")}>
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Award</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "wikipages" ? "tablinks active" : "tablinks "} onClick={() => handleTab("wikipages")}>
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Wiki Pages</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className={activeTab === "communitysetting" ? "tablinks active" : "tablinks"} onClick={() => handleTab("communitysetting")} >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Community Setting</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className="tablinks no-border pb-0" >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Community Appearance</h5>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="community-body-right-Col-card">
                        <h2>Modmail</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className="tablinks no-border pb-0" >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Modmail</h5>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="community-body-right-Col-card">
                        <h2>Chat</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className="tablinks no-border pb-0" >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Chatting Settings</h5>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="community-body-right-Col-card">
                        <h2>Community Activity</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className="tablinks" >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Traffic Stats</h5>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button className="tablinks no-border pb-0" >
                                        <div className="btn-content">
                                            <div className="icon">

                                            </div>
                                            <h5>Mod log</h5>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="community-body-right-Col-card community-body-right-Col-card-10">
                        <h2>Help Center</h2>
                        <div className="tab">
                            <ul>
                                <li>
                                    <button className="tablinks no-border pb-0" >
                                        <div className="btn-content">
                                            <div className="icon">

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
        </div>
    )
}

export default CommunitySettingsSidebar