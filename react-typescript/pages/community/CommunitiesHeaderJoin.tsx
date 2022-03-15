import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import {JOIN_COMMUNITY} from "../../graphql/mutattions/joinCommunity";
import {useMutation, useQuery } from '@apollo/client';
import { GET_USER_PROFILE_QUERY } from './../../graphql/Queries/getUserProfile';
const CommunitiesHeaderJoin = ({id, joinedUsers}) => {
    const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  

  const joinMutation = useMutation(JOIN_COMMUNITY)
  const joinMutationData = joinMutation[0];
  const joinMutationSending = joinMutation[1].loading

  const { loading, error, data } = useQuery(GET_USER_PROFILE_QUERY);
  console.log(data?.getUserProfile?.id)

  function lineaerSearchForJoinUserFind(array:any, key:any){
	let i = 0;
	for(i; i <= array.length; i++){
		if(array[i]?.id === key ){
		  return array[i]
		}
		return -1
	}
  }

  const handleCommunityJoinTrigger = (e:any ) => {
	joinMutationData({
		variables:{
			communityId: id
		}
	})
	.then(res => {
		console.log(res?.data?.joinCommunity)
		if(res?.data?.joinCommunity === "Community Joined Successfully"){
			const newJoined = {...createPostState}
			newJoined.joinCommunites = true
		    setCreatePostState(newJoined);
		 
		}
		
	})
  }
  const resultOflinear =	lineaerSearchForJoinUserFind(joinedUsers, data?.getUserProfile?.id)	
	console.log({resultOflinear})
    return (
        <div>
            <div className="communityView-defi-panel">
						<div className="enoch-community-deefi-signal">
							<div className="enoch-community-deefi-signal-lft">
								<div className="community-deefi-logo mr-4"><img src="/images/18+Community-ER-dp.png" className="img-fluid" alt="defi"/></div>
								<div>
									<h3>ExpectationVsReality</h3>
									<p>@expectationvsreality</p>
								</div>
								<span className="enoch-community-deefi-editbtn"><img src="/images/communityEdit.png" className="img-fluid" alt="edit"/></span>
								
							</div>
							<div className="enoch-community-deefi-signal-right">
								<ul className="community-deefi-signal-list">
									
									<li>
										<div className="comuni-defi-share" data-toggle="modal" data-target="#managenoti-Modal"><img src="/images/community-alert.png" className="img-fluid community-alert" alt="share"/><img src="/images/community-alert2.png" className="img-fluid community-alert-hovr" alt="share"/></div>
									</li>
									{createPostState.joinCommunites?(<li><button className="comuni-defiJoin-btn joined-clr" onClick={() => {setCreatePostState({...createPostState, joinCommunites: false})} }>Joined</button></li>):(<li><button className="comuni-defiJoin-btn" onClick={handleCommunityJoinTrigger} >Join</button></li>)}
									
								</ul>
								
							</div>
						</div>
						<div className="communityView-tab">
							<ul className="communityViewCatTab">
								<li><button className={`${!createPostState.wikiClick? "communityViewlinks active": "communityViewlinks"}`} onClick={() => {setCreatePostState({...createPostState, wikiClick:false})}}>Posts</button></li>
								<li><button className="communityViewlinks" >Predictions</button></li>
								<li><button className={`${createPostState.wikiClick? "communityViewlinks active": "communityViewlinks"}`} onClick={() => {setCreatePostState({...createPostState, wikiClick:true})}}>Wiki </button></li>
								<li><button className="communityViewlinks" >FAQ </button></li>
								<li><button className="communityViewlinks" >Rules </button></li>
								<li><button className="communityViewlinks" >AMAs </button></li>
								<li>
									<div className="communityView-dropbox">
											
										<a href="#!" id="communityView-dropbox-list" className="communityView-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Discussions</a>
										<div id="communityView-dropbox-list1" className="dropdown-menu communityView-dropbox-listItems">
											<ul>
												<li>
													-
												</li>
												<li>
													-
												</li>
												<li>
													-
												</li>
												
												
											</ul>										
										</div>
									</div>
								</li>
								
							</ul>
							<span className="communityView-span">@defisignal</span>
						 </div>
					</div>
					<div id="managenoti-Modal" className="modal managenoti-headbg-modal" role="dialog">
		<div className="modal-dialog">
			
		  {/* <!-- Modal content--> */}
		  <div className="modal-content managenoti-hd-content">
			<button type="button" className="close managenoti-modal-close" data-dismiss="modal"><img src="/images/commCross.png" alt="X" className="img-fluid"/></button>
			<div className="managenoti-header">
			  <h3 className="modal-title">Manage notifications</h3>
			  <p>Manage notifications from community name</p>
			</div>
			<div className="managenoti-hd-modal-body">
				<ul>
					<li>
						<div className="publish-cat cust-mb-40">
							<input id="publish-select" name="b-plan" type="radio" checked/>
							<label htmlFor="publish-select">
								<p className="managenoti-txt1">All new posts</p>
								<p className="managenoti-txt2">Get notified about all new posts in this group</p>
							</label>
						</div>
						<div className="publish-cat cust-mb-40">
							<input id="publish-select2" name="b-plan" type="radio"/>
							<label htmlFor="publish-select2">
								<p className="managenoti-txt1">Highlights</p>
								<p className="managenoti-txt2">Get notified about posts from people you may know</p>
							</label>
						</div>
						<div className="publish-cat cust-mb-4">
							<input id="publish-select2" name="b-plan" type="radio"/>
							<label htmlFor="publish-select2">
								<p className="managenoti-txt1">No new posts</p>
								<p className="managenoti-txt2">Only get notified about activity involving you</p>
							</label>
						</div>
					</li>
				</ul>
				<div className="managenoti-btnBlock"><button className="managenoti-save-btn">Save</button></div>
			</div>
			
		  </div>
	  
		</div>
	  </div>
        </div>
    );
};

export default CommunitiesHeaderJoin;