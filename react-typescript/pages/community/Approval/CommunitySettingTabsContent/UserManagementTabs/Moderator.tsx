import React, { useState } from 'react'
import Empty from '../../Empty'

const Moderator = () => {
    const [isData, setIsData] = useState<boolean>(true)
    const [isModal, setIsModal] = useState<boolean>(false)

    const toggleModal = () => {
        setIsModal(!isModal)
    }
    return (
        <div id="Moderator" className="tabcontent">
            {isData ? <div className="usermanage">
                <div className="usermanage__userWrap">
                    <div className="usermanage__userWrapDetail">
                        <div className="usermanage__userWrap__header">
                            <h1>Moderator</h1>
                        </div>
                        {/* <div className="usermanage__userWrap__subTitle">Moderator</div> */}
                    </div>
                    <div className="usermanage__userFindWrap">
                        <label className="usermanage__userFindWrap__label">Search for the users</label>
                    </div>
                    <div className="magicSearchFull">
                        <input type="text" id="myHouse4" name="myHouse4" className="magicSearchFull_community__search" placeholder="type here..." />
                        <img src="/images/search-field-icon.svg" className="magicSearchFull__icon" alt="" />
                        <div className="magicSearch__Boxlist magicSearch-display-none ul-box" id="resultModerator">
                            <ul className="magicSearch__list ">
                                <li className="magicSearch__list__item">
                                    <img src="/images/img-001.png" alt="User" className="magicSearch__list__img" />
                                    <div className="magicSearch__list__detail">
                                        <h4 className="magicSearch__list__name">@Leslymariax`</h4>
                                        <p className="magicSearch__list__detail">
                                            New NFT lady, Crypto Enthusiast, Lifelong Otaku
                                        </p>
                                    </div>
                                </li>
                                <li className="magicSearch__list__item">
                                    <img src="/images/user-2.png" alt="User" className="magicSearch__list__img" />
                                    <div className="magicSearch__list__detail">
                                        <h4 className="magicSearch__list__name">@Letta</h4>
                                        <p className="magicSearch__list__detail">
                                            sol &amp; eth NFT maxi and crypto enthusiast
                                        </p>
                                    </div>
                                </li>
                                <li className="magicSearch__list__item">
                                    <img src="/images/user-3.png" alt="User" className="magicSearch__list__img" />
                                    <div className="magicSearch__list__detail">
                                        <h4 className="magicSearch__list__name">@Letta</h4>
                                        <p className="magicSearch__list__detail">
                                            sol &amp; eth NFT maxi and crypto enthusiast
                                        </p>
                                    </div>
                                </li>
                                <li className="magicSearch__list__item">
                                    <img src="/images/img-001.png" alt="User" className="magicSearch__list__img" />
                                    <div className="magicSearch__list__detail">
                                        <h4 className="magicSearch__list__name">@Leslymariax`</h4>
                                        <p className="magicSearch__list__detail">
                                            New NFT lady, Crypto Enthusiast, Lifelong Otaku
                                        </p>
                                    </div>
                                </li>
                                <li className="magicSearch__list__item">
                                    <img src="/images/user-2.png" alt="User" className="magicSearch__list__img" />
                                    <div className="magicSearch__list__detail">
                                        <h4 className="magicSearch__list__name">@Letta</h4>
                                        <p className="magicSearch__list__detail">
                                            sol &amp; eth NFT maxi and crypto enthusiast
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className="   communitytableList">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User name</th>
                                    <th>Joining Date</th>
                                    <th>Role/Status</th>
                                    <th className="empty_state"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> -->*/}
                                <tr className="communitytableList__user__tr">
                                    <td className="communitytableList__user__list">
                                        <img src="/images/img-001.png" alt="User" className="communitytableList__user__img" />
                                        <div className="communitytableList__user__detail">
                                            <h4 className="communitytableList__heading">
                                                @Leslymariax`
                                            </h4>
                                            <p className="communitytableList__description">
                                                New NFT lady, Crypto Enthusiast, Lifelong Otaku
                                            </p>
                                        </div>
                                    </td>
                                    <td className="communitytableList__joinDate">20/11/2021</td>
                                    <td className="communitytableList__status text-black" onClick={() => toggleModal()}>
                                        <img className="mx-2" src="/images/edit.png" data-toggle="modal" data-target="#exampleModal" />Everything</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown dropleft">
                                            <div className="cursor" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <div className="toggle-color"></div>
                                                <div className="toggle-color"></div>
                                                <div className="toggle-color"></div>
                                            </div>
                                            <ul className="table-dm dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li className="table-ditem dropdown-item" >
                                                    Mute
                                                </li>
                                                <li className="table-ditem dropdown-item" >
                                                    Approve
                                                </li>
                                                <li className="table-ditem dropdown-item" >
                                                    Banned
                                                </li>
                                                <li className="table-ditem dropdown-item" >
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> -->*/}
                                <tr className="communitytableList__user__tr">
                                    <td className="communitytableList__user__list">
                                        <img src="/images/img-001.png" alt="User" className="communitytableList__user__img" />
                                        <div className="communitytableList__user__detail">
                                            <h4 className="communitytableList__heading">
                                                @Leslymariax`
                                            </h4>
                                            <p className="communitytableList__description">
                                                New NFT lady, Crypto Enthusiast, Lifelong Otaku
                                            </p>
                                        </div>
                                    </td>
                                    <td className="communitytableList__joinDate">20/11/2021</td>
                                    <td className="communitytableList__status text-black" onClick={() => toggleModal()}><img className="mx-2" src="/images/edit.png" data-toggle="modal" data-target="#exampleModal" />Assign Role</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown dropleft">
                                            <div className="cursor" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <div className="toggle-color"></div>
                                                <div className="toggle-color"></div>
                                                <div className="toggle-color"></div>
                                            </div>
                                            <ul className="table-dm dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li className="table-ditem dropdown-item" >
                                                    Mute
                                                </li>
                                                <li className="table-ditem dropdown-item" >
                                                    Approve
                                                </li>
                                                <li className="table-ditem dropdown-item" >
                                                    Banned
                                                </li>
                                                <li className="table-ditem dropdown-item" >
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div> : <Empty heading='Moderator' msg='No Moderator users in @Community name' imgSrc='banned_user_avex.svg' />}

            <div className="modal fade in" style={{ display: isModal ? "block" : "none" }} id="exampleModal" tab-index="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="web modal-dialog mbl ">
                    <div className="modal-content modal-top">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Invite Followers</h5>

                            <span className="invite-follwrs-close"><img src="/images/modal1.png" className="cursor" data-dismiss="modal" aria-label="Close" /></span>

                        </div>
                        <div className="modal-body">
                            <div className="d-flex mb-25">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <div className="inviteeverything-cls">
                                    <span className="checkbox-heading">Everything</span>

                                    <p className="checkbox-description">Full access including the ability to manage moderator access and permissions.</p>
                                </div>
                            </div>



                            <div className="d-flex mb-25 mt-4">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                    <span className="checkbox-heading">Manage Wiki Pages</span>
                                    <p className="checkbox-description">Create and manage wiki pages and AutoMod*.</p>
                                </div>
                            </div>

                            <div className="d-flex mb-25">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                    <span className="checkbox-heading">Monitor Chats</span>
                                    <p className="checkbox-description">Remove messages, remove users, and lock chats.</p>
                                </div>
                            </div>

                            <div className="d-flex mb-25">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                    <span className="checkbox-heading">Manage Chats</span>
                                    <p className="checkbox-description">Create and manage chats, set up filters and rate limits, and block domains.</p>
                                </div>
                            </div>

                            <div className="d-flex mb-25">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                    <span className="checkbox-heading">Manage Posts & Comments</span>
                                    <p className="checkbox-description">Approve submitters and ban and mute users</p>
                                </div>
                            </div>

                            <div className="d-flex mb-25">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                    <span className="checkbox-heading">Manage Users</span>
                                    <p className="checkbox-description">Access queues, take action on content, and manage collections and events.</p>
                                </div>
                            </div>

                            <div className="d-flex mb-25">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                    <span className="checkbox-heading">Manage Mod Mail</span>
                                    <p className="checkbox-description">Read and respond to modmail and mute users*.</p>
                                </div>
                            </div>

                            <div className="d-flex mb-25">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                    <span className="checkbox-heading">Manage Settings</span>
                                    <p className="checkbox-description">Manage community settings, appearance, emojis, rules, and AutoMod*.</p>
                                </div>
                            </div>


                            <div className="d-flex mb-25">
                                <label className="mngmnt-container-checkbox mt-2 mr-2">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                    <span className="checkbox-heading">Manage Flair</span>
                                    <p className="checkbox-description">Create and manage user and post flair.</p>
                                </div>
                            </div>

                            <p className="modal-note">
                                *Note: To manage AutoMod, mods must have access to Wiki Pages and Manage Settings.
                                To mute users, mods must have access to Mod Mail and Manage Users.
                            </p>



                        </div>
                        <div className="modal-footer mbl">
                            <button type="button" className="btn inviteflwrs-cancel-btn" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn inviteflwrssave-btn">Save</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Moderator