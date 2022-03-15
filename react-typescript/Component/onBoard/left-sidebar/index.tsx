//@ts-nocheck
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import classnames from "classnames";
import {actionCreators, State} from "../../../state/index";
import CreateCommunityModal from "../../CreateCommunityModal";
import {CHECK_COMMUNITY_MUTATION} from "../../../graphql/mutattions/checkCommunityName"
import {useRouter} from "next/router";
import {useQuery, useMutation } from '@apollo/client';
import {CREATE_COMMUNITY_MUTATION} from "../../../graphql/mutattions/createCommunityMuntaion"

import {GET_USER_PROFILE_QUERY} from "../../../graphql/Queries/getUserProfile"

const LeftSideBar: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const {showCreateCommunityModal} = bindActionCreators(actionCreators, dispatch);

    const {showEditProfileModal, userProfile} = bindActionCreators(
        actionCreators,
        dispatch
    );
    const [communites, setCommunites] = useState({name: "",about: "this is a community"})
    const [communiteNameLength, setCommuniteNameLength] = useState(true);
    const [adultToggle, setAdultToggle] = useState(false)
    const [communityExist, setCommunityExist] = useState("")
    const [radio, setRadio] = useState('public')
    
    const { loading, error, data } = useQuery(GET_USER_PROFILE_QUERY);

    console.log("userPofile",data)

    const handleAdultToggle = (e : any) => {
        if (!adultToggle) {
            setAdultToggle(true)
        } else if (adultToggle) {
            setAdultToggle(false)
        }
    }
    console.log({adultToggle})

    const handleCommunitesName = (e : any) => {

       
            const newCommunites = {
                ...communites
            }
            newCommunites.name = e.target.value;
            setCommunites(newCommunites)
            
            
            console.log(communites)
        
    }

    const showCreateCommunityModalValue = useSelector(
        (state : State) => state.showCreateCommunityModal
    );

    const showEditProfileModalValue = useSelector(
        (state : State) => state.showEditProfileModal
    );

    useEffect(() => {
        return;
    }, showCreateCommunityModalValue);
    const checkCommunityMutation = useMutation(CHECK_COMMUNITY_MUTATION);

    const gettingCommunityName = checkCommunityMutation[0];
    const CommunityNameSending =  checkCommunityMutation[1]?.loading;


    const createCommunityMutation = useMutation(CREATE_COMMUNITY_MUTATION);
    const gettingCommunityData = createCommunityMutation[0];
    const CommunityDataSending =  createCommunityMutation[1]?.loading;
    
    const handleCreatedCommunity = () => {
        gettingCommunityName({
            variables:{
                communityName:communites.name
            }
        })
        .then(res => {
            if(res?.data?.checkCommunityName === false){
            gettingCommunityData({
                    variables: {
                        communityType: radio,
                        communityName: communites.name,
                        adult_community: adultToggle,
                        about: "This is a community",
                        
                    }
                })
                .then(res => {
                console.log(res?.data?.CreateCommunity);
                if(res?.data?.CreateCommunity){
                    router.push(`/community/${res?.data?.CreateCommunity.id}`)
                    //@ts-ignore
                    setCommunityExist(false)
                }
                })
            }
            else{
                setCommunityExist(true)
                console.log('The community already exist')
            }
        })

   
}
const handleRadioChange = (e:any) => {
      const newRadio = e.target.value;
      setRadio(newRadio)
      console.log({radio});
}
    return (
        <> < div className = "home-post-lft" > <div className="lft-ovelay dApp-overlay"></div>
        <div className="dApp-new-banner-sect1">
            <img src="/images/onboard-banners.png" alt="Banner" className="img-fluid"/>
            <div className="dApp-new-banner-content-sect">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididun
                </p>
                <div>
                    <button className="dApp-unlockClub-btn">Unlock VIP cLUB</button>
                </div>
            </div>
        </div>
        <div className="dApp-Win-a-Day-Banner-sect">
            <img src="/images/win-a-day-banner.png" alt="Banner" className="img-fluid"/>
            <div className="dApp-betNow">
                <button
                    onClick={() => router.push(`/entertainment`)}
                    className="dApp-betnow-btn">
                    <img src="/images/BetNow.png" className="img-fluid" alt="bet now"/>
                </button>
            </div>
        </div>
        <div className="dApp-daily-bonous-Banner-sect">
            <img src="/images/daily-bonous-banner.png" alt="Banner" className="img-fluid"/>
            <div className="dApp-playNow">
                <button
                    onClick={() => router.push(`/entertainment`)}
                    className="dApp-playnow-btn">
                    <img src="/images/PlayNow.png" className="img-fluid" alt="bet now"/>
                </button>
            </div>
        </div>

        <div className="dApp-home-Create-Post-sect">
            <h1>Community</h1>
            <p>
                Your personal Enoch frontpage. Comehere to check in with your favorite
                communication.
            </p>
            <div className="dApp-home-Create-Post-btn-sect">
                <button
                    className="Create-Post-btn"
                    data-toggle="modal"
                    data-target="#CreatePostModal">
                    Create Post
                </button>
                <button
                    className="Create-Community-btn"
                    data-toggle="modal"
                    data-target="#CreateCommunity-Modal">
                    Create Community
                </button>
            </div>
        </div>
            {/* <!-- The Modal --> */
        } < div className = "CreateCommunity-Modal-sect" > <div className="modal" id="CreateCommunity-Modal">
            <div className="modal-dialog">
                <div className="modal-content">

                    {/* <!-- Modal Header --> */}
                    <div className="CreateCommunity-Modal-header">

                        <div className="close CreateCommunity-Modal-modal-close" data-dismiss="modal"><img src="images/hCross.png" alt="icon" className="img-fluid"/></div>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="CreateCommunity-Modal-body">
                        <div className="input-name">
                            <h1>Name*</h1>
                            <p>Community names including capitalization cannot be changed.</p>
                            <input
                                type="text"
                                placeholder="@defiInvestment"
                                id="CreateCommunity-input-name-fild"
                                name="nameOfCommunities"
                                className={`${communityExist?"error":"community-success"}`}
                                style={{border:!communityExist?'1px solid #2BBD54':''}}
                                onChange={handleCommunitesName}/>
                            <p className="input-name-error-text" style={{display: communityExist ? 'block': 'none'}}>Community already availabel, Please choose some diffrent name</p>
                            {
                                communiteNameLength && <p className="pt-1">Community names must be between 3–21 characters, and can
                                        only contain letters, numbers, or underscores.
                                    </p>
                            }
                            {!communiteNameLength && <p className="pt-1 text-danger">21 characters Remaining</p>}
                        </div>

                        <div className="Community-type">
                            <h1>Community type*</h1>

                            <div className="Community-type-radio-sect">
                                <label className="container">
                                    <strong>Public
                                        <span>Anyone can view, post, and comment to this community</span>
                                    </strong>
                                    <input type="radio" name="radio" value="public" onBlur={handleRadioChange}/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">
                                    <strong>Restricted
                                        <span>Anyone can view this community, but only approved users can post</span>
                                    </strong>
                                    <input type="radio" name="radio" value="restricted" onBlur={handleRadioChange}/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">
                                    <strong>Private
                                        <span>Only approved users can view and submit to this community</span>
                                    </strong>
                                    <input type="radio" name="radio" value="private" onBlur={handleRadioChange}/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                        </div>

                        <div className="Adult-content-sect">
                            <h1>Adult content</h1>
                            <div className="Adult-content-Checkbox">
                                <input type="checkbox" onClick={handleAdultToggle}/>
                                <label>18+ year old community</label>
                            </div>
                        </div>

                        <div className="CreateCommunity-Modal-btn">
                            <button id="Create-Community-button" onClick={handleCreatedCommunity}>
                                <a>Create Community</a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="Create-Post-Modal-sect">
            {/* <!-- Modal --> */
        } < div className = "modal fade create-post-modal-body" id = "CreatePostModal" role = "dialog" > <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
                <div className="Create-post-modal-header">
                    <h4 className="modal-title">Create your first post</h4>
                    <button className="close" data-dismiss="modal">
                        <img
                            src="/images/create-post-modal-Cross.png"
                            alt="icon"
                            className="imf-fluid"/>
                    </button>
                </div>
                <div className="Create-post-modal-body">
                    <p>
                        Welcome to your new community, Enoch/Community name. Set for your community and
                        welcome new members with a post
                    </p>
                    <div className="Create-post-modal-btns">
                        <button>Continue</button>
                        <button>Create a Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</>
    );
};

export default LeftSideBar;
