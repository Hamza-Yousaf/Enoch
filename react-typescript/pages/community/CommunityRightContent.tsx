import React,{useState} from 'react';
import {UPDATE_COMMUNITY_DESCRIPTION} from "../../graphql/mutattions/updateDescriptionForCommunity"
import {useMutation} from '@apollo/client';
const CommunityRightContent = ({id, communityDescription, updated_at}) => {
    const [addDescription, setAddDescription] = useState({
        descriptionEvent:false,
        description:""
    })
    const handleDescription = () => {
        
        setAddDescription({...addDescription, descriptionEvent:true})
    }
    const handleDescriptionChange = (e:any) => {
        const newDescription = {...addDescription}
        newDescription.description = addDescription.description + e.target.value
        setAddDescription(newDescription)
    }
	const updateDescription = useMutation(UPDATE_COMMUNITY_DESCRIPTION);
	const updateDescriptionValue = updateDescription[0];
	const updateDescriptionValueSending = updateDescription[1]?.loading;


    const handleOnSaveDescription = (e: any) => {
		updateDescriptionValue({
			variables:{
				communityId:id,
				description:addDescription?.description
			}
		})
		.then(res => {
			console.log(res)
		})
        setAddDescription({...addDescription, descriptionEvent:false})
    }
    const handleOnCancelDescription = (e: any) => {
        setAddDescription({...addDescription, descriptionEvent:false})
        setAddDescription({...addDescription, description:""})
    }
	console.log({communityDescription})
    return (

        <div className="enoch-community-deefi-block-right">
					<div className="enoch-manage-comm">
						<h3>Manage Community  </h3>
						
						<div className="ml-4 mr-4">
                        {addDescription.descriptionEvent === false && addDescription.description && <div className="enoch-manage-description description-border">
								 {/* <span className="manage-description-txt">Add description</span> */}
								<div className="manage-description-write">
									<div className="descriptionscroll">{communityDescription}<span className="manage-edit-txt" onClick={handleDescription}><img src="/images/manageedit.png" className="img-fluid" alt="edit"/></span></div>
									 {/* <div>
										<div className="manage-description-btngrp">500 character remaining <span><button className="manage-description-cancel">Cancel</button></span><button className="manage-description-save">Save</button></span></div>
									</div>  */}
								</div>
							</div>}
							<div className="enoch-manage-description">
								{addDescription.descriptionEvent === false && !addDescription.description && <span className="manage-description-txt" onClick={handleDescription}>Add description</span>}
                                
                                {addDescription.descriptionEvent && <div className="manage-description-write">
									<textarea className="scroll"  placeholder="Tell us about your community" name="description" onChange={handleDescriptionChange}></textarea>
									<div>
										<div className="manage-description-btngrp">500 character remaining <span><button className="manage-description-cancel" onClick={handleOnCancelDescription}>Cancel</button></span><span><button className="manage-description-save" onClick={handleOnSaveDescription}>Save</button></span></div>
									</div>
								</div>}
							</div>
							<div className="enoch-community-online">
								<div className="enoch-community-online-lft">
									<p>1</p>
									<h4>Members</h4>
								</div>
								<div className="enoch-community-online-right">
									<p>2</p>
									<h4>Online</h4>
								</div>
								
							</div>
							<div className="enoch-community-created">
								Created at {updated_at}
							</div>
							<div className="community-manage-topic">
								<h4>Community topics</h4>
								<p>Add a Primary Topics <span className="ml-2"><img src="/images/manageInfo.png" className="img-fluid" alt="info"/></span></p>
							</div>
							<div><button className="community-manage-post-btn">Create Post</button></div>
						</div>
					</div>
					<div className="enoch-manage-comm-block2">
						<h3>1 Member</h3>
						<p>Including Hitman99 and 104 other connections</p>
						<div className="enoch-manage-member"><img src="/images/user-ReginaCooper.png" className="img-fluid" alt="user-ReginaCooper"/></div>
						<div><button className="community-manage-post-btn">Invite Connections</button></div>
						<h4>Manage</h4>
					</div>
					
					<div className="enoch-manage-comm-block3">
						<h3>Moderator</h3>
						<div className="manage-moderator">
							<div className="manage-moderator-lft">
								<img src="/images/speaker1.png" className="img-fluid" alt="user"/>
							</div>
							<div className="manage-moderator-right">
								<h4>@Leslymariax`</h4>
								<p>New NFT lady, Crypto Enthusiast, Lifelong Otaku </p>
							</div>
						</div>
						<h5>Manage</h5>
					</div>
					<div className="enoch-community-addSect1">
						 
						<div className="enoch-community-levelup">
							<img src="/images/Banner-Side1.png" className="img-fluid comm-banner-img" alt="banner"/>
							<div className="community-levelup-block">
								<p className="community-levelup-txt1">upgrade to VIP Pass to <br/>Unlock NFT prizes</p>
								<p className="community-levelup-txt2">VIP level bONUS PrizeS </p>
								<p className="community-levelup-txt3">UP TO 20,000 <span>amber COINS </span></p>
								<div><button className="community-levelup-upgrade-btn">UPGRADE</button></div>
							</div>
						</div>
					
					</div>
					<div className="enoch-community-addSect2">
						<p className="mb-2">Ad by <span className="ml-1"><img src="/images/managelogoo.png" className="img-fluid" alt="icon"/></span></p>
						<div className="enoch-community-addSect2-inner">
							<div className="enoch-community-addSect2-inner-block">
								<h3>Top GAMING Communities</h3>
								<div><button className="btn comm-explorenw-btn">EXLPORE NOW</button></div>
							</div>
						</div>
						
					</div>
				</div>
    );
};

export default CommunityRightContent;