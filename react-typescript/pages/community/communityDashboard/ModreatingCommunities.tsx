import React from 'react'

const ModreatingCommunities = () => {
    return (
        <div id="Modreating_Communities" className="Communities_tabcontent" style={{display: "block"}}>
            <div className="All_Communities-content">
                <div className="All_Communities-content-left">
                    <div className="Find-Community-section">
                        <h2>Find Community</h2>
                        <form>
                            <button><img src="/images/community-find.png" alt="icon" className="img-fluid" /></button>
                            <input type="text" placeholder="Search community" />
                        </form>
                        <div className="Find-Community-list-sect pb-5">
                            <div className="Find-Community-list-headings active">
                                <h3>Finance</h3>
                                <div className="Find-Community-list-headings-icon">
                                    <img src="/images/find-community-headings-icon.png" alt="icon" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="All_Communities-content-right">
                    <div className="All-Communities-list">
                        <ul>
                            <li>
                                <div className="All-Communities-list-left">
                                    <div className="Communities-dp">
                                        <img src="/images/community-mmoderate-dp.png" alt="image" className="img-fluid" />
                                    </div>
                                    <div className="Communities-text">
                                        <h3>Defi Signal</h3>
                                        <h4>@defisignal</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                    </div>
                                </div>
                                <div className="All-communities-list-right">
                                    <button className="Manage-btn">Manage</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModreatingCommunities