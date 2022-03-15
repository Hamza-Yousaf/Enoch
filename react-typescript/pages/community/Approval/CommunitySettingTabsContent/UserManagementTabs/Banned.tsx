import React, { useState } from 'react'
import Empty from '../../Empty'

const Banned = () => {
    const [isData, setIsData] = useState<boolean>(false)
    return (
        <div id="Banned" className="tabcontent" >
            {isData ? <div className="usermanage">
                <div className="usermanage__userWrap">
                    <div className="usermanage__userWrapDetail">
                        <div className="usermanage__userWrap__header">
                            <h1>BANNED</h1>
                        </div>
                        {/* <div className="usermanage__userWrap__subTitle">BANNED</div> */}
                    </div>
                    <div className="usermanage__userFindWrap">
                        <label className="usermanage__userFindWrap__label">Search for the users</label>
                    </div>
                    <div className="magicSearchFull">
                        <input type="text" id="myHouse1" name="myHouse1" className="magicSearchFull_community__search" placeholder="type here..." />
                        <img src="/images/search-field-icon.svg" className="magicSearchFull__icon" alt="" />
                        <div className="magicSearch__Boxlist magicSearch-display-none ul-box" id="resultBanned">
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
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
                                                    Remove
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                {/*<!-- <tr className="communitytableList__user__emptyTR"></tr> --> */}
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
                                    <td className="communitytableList__status text-red">BANNED</td>
                                    <td className="communitytableList__showDetail">
                                        <div className="dropdown">
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
            </div> : <Empty heading='Banned' msg='No banned users in @Community name' imgSrc='banned_user_avex.svg' />}
        </div>

    )
}

export default Banned