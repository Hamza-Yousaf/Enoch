import React, { useState } from 'react'
import classnames from 'classnames'

const BoardingJourProfileView: React.FC = () => {
    const [searchMenu, setSearchMenu] = useState<boolean>(false)
    const [switchAccount, setSwitchAccount] = useState<boolean>(false)
    const [follow, setFollow] = useState<boolean>(false)
    return (
        <>
            <div className="dApp-home-profile-sect">
                <div className="dApp-home-cover-And-DP-sect">
                    <div className="dApp-home-cover-photo">
                        <img src="/images/others-profileCover.png" alt="cover-photo" className="img-fluid h-100" />

                    </div>
                    <div className="dApp-home-profile-pic">
                        <div className="dApp-profile-picture">
                            <div className="dApp-profile-picture-img">
                                <img src="/images/other-profile-dp.png" alt="profile-picture" className="img-fluid" />
                            </div>

                        </div>
                    </div>
                    {/* <div className="other-profile-follow-sect">
                        <button><img src="/images/ThreeDots-blue.png" alt="..." className="img-fluid" /></button>
                        <button><img src="/images/OP-Email.png" alt="icon" className="img-fluid" /></button>
                        <button className="follow"><a href="#">Follow</a></button>
                    </div> */}
                    <div className="other-profile-follow-sect">
                        <div className="OPthreeDots-btn">
                            <button onClick={() => setSwitchAccount(true)}><img src="/images/ThreeDots-blue.png" alt="..." className="img-fluid" /></button>
                            <div className={classnames('OPthreeDots-btn-content', {
                                "d-block": switchAccount,
                                "d-none": switchAccount,
                            })}>
                                <ul>
                                    <li>Mute <a href="#">@CedYoungelman</a></li>
                                    <li>Block <a href="#">@CedYoungelman</a></li>
                                    <li className="no-border">Report <a href="#">@CedYoungelman</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="OP-Email-btn">
                            <button><img src="/images/OP-Email.png" alt="icon" className="img-fluid" /></button>
                        </div>
                        <div className="op-follow-btn">
                            <button className="follow" onClick={() => setFollow(true)}><a href="#">Follow</a></button>
                            <div className={classnames('op-follow-btn-content', {
                                "d-block": follow,
                                "d-none": follow,
                            })}>
                                <h1>Unfollow @CedYoungelman</h1>
                                <p>Their Tweets will no longer show up in your home timeline. You can still view thier profile, unless their Tweets are protected.</p>
                                <div className="OP-unfollow-btn">
                                    <button className="Cancel" onClick={() => setFollow(false)}><a href="#">Cancel</a></button>
                                    <button className="Unfollow"><a href="#">Unfollow</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dApp-home-username-sect">
                        <h1>Cedric Youngelman</h1>
                        <a href="#">@CedYoungelman</a>
                        <p>Host of the Bitcoin Matrix podcast @DeLaBtcMatrix A philosophical podcast about #Bitcoin. Family man.</p>
                    </div>
                    <div className="dApp-home-user-info">
                        <ul>
                            <li className="active"><span><img src="/images/dAppPin.png" alt="icon" className="img-fluid" /></span>London, England</li>
                            <li className="active"><span><img src="/images/dAppGlobe.png" alt="icon" className="img-fluid" /></span>Podcast.com</li>
                            <li className="active"><span><img src="/images/dAppCalendar.png" alt="icon" className="img-fluid" /></span>Joined May 2009</li>
                        </ul>
                        <ul>
                            <li className="active"><span><img src="/images/dApp-Ballon.png" alt="icon" className="img-fluid" /></span>15 Sep 1983</li>
                        </ul>
                    </div>
                    <div className="dApp-home-user-followers-sect">
                        <ul>
                            <li>4,997 <span>Following</span></li>
                            <li>5,863 <span>Followers</span></li>
                        </ul>

                        <div className="dApp-home-user-followers-imgs">
                            <img src="/images/followers%20.png" alt="dp" className="img-fluid pr-3" />
                            <img src="/images/Platium.png" alt="dp" className="img-fluid pr-0" />
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className='dApp-home-profile-modal-sect'>
                <div className='modal fade' id='dApp-home-profile-modal' role='dialog'>
                    <div className='modal-dialog'>
                        {/* <!-- Modal content--> */}
                        <div className='modal-content'>
                            <div className='dApp-home-profile-modal-header'>
                                <h4 className='modal-title'>Edit Profile</h4>
                                <div
                                    className='close dApp-home-profile-modal-close'
                                    data-dismiss='modal'
                                >
                                    <img
                                        src='/images/hCross.png'
                                        alt='icon'
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                            <div className='modal-body'>
                                <div>
                                    <div className='dApp-home-cover-photo'>
                                        <img
                                            src='/images/dApp-edit-cover-photo.png'
                                            alt='cover-photo'
                                            className='img-fluid h-100'
                                        />
                                        <div className='coverPhoto-change-btn'>
                                            <span>
                                                <img
                                                    src='/images/dApp-Camera.png'
                                                    alt='camera'
                                                    className='img-fluid'
                                                />
                                            </span>
                                            <a href='#'>Cover image</a>
                                        </div>
                                    </div>
                                    <div className='dApp-home-profile-pic'>
                                        <div className='dApp-profile-picture'>
                                            <div className='dApp-profile-picture-img'>
                                                <img
                                                    src='/images/dApp-progile-pic.png'
                                                    alt='profile-picture'
                                                    className='img-fluid'
                                                />
                                            </div>
                                            <input type='file' className='my_file update-profile' />
                                        </div>
                                    </div>
                                    <div className='dApp-home-profile-modal-form'>
                                        <form>
                                            <div className='input-name input-fild'>
                                                <label>Name</label>
                                                <input type='text' placeholder='Robert Rose' />
                                            </div>

                                            <div className='Edit-username input-fild'>
                                                <label>Edit username</label>
                                                <input
                                                    type='text'
                                                    placeholder='@userenoch007'
                                                    id='Edit-username-input'
                                                />
                                                <div className='username-dropdown'>
                                                    <ul>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className='Bio input-fild'>
                                                <label>Bio</label>
                                                <textarea placeholder='Write your Bio'></textarea>
                                            </div>

                                            <div className='City-dropdown input-fild'>
                                                <label>City</label>
                                                <div className='City-dropdown-box' id='City-drop-box'>
                                                    Select City
                                                </div>
                                                <div className='City-dropdown-list'>
                                                    <ul>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className='Country-dropdown input-fild'>
                                                <label>Select Country</label>
                                                <div
                                                    className='Country-dropdown-box'
                                                    id='Country-drop-box'
                                                >
                                                    Select Country
                                                </div>
                                                <div className='Country-dropdown-list'>
                                                    <ul>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                        <li>&nbsp;</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className='Website input-fild'>
                                                <label>Website</label>
                                                <input type='text' placeholder='your website' />
                                            </div>

                                            <div className='Date-of-birth input-fild'>
                                                <label>Date of birth</label>
                                                <input type='text' placeholder='Date of birth' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button data-dismiss='modal'>
                                    <a className='white-color-txt'>Save</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoardingJourProfileView
