import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import router from "next/router";

const index = () => {
    const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
    return (
        <div>
            <div className="container-fluid dashboard-body-bg second-body-bg">
	<div className="row">
		<header className="custom-header">			
			<div className="ezl-dashboard-header">
				<div className="menu-left">
					<div className="menu-wrap">
						<a href="#menu" className="menu-link" ><img src="images/Menu.png" alt="Menu" className="img-fluid"/></a>
						<div className="tradecontainer" id="trademenu-drpdown">
						  <div className="trade-menu-panel-panel-group" id="accordionMenu" role="tablist" aria-multiselectable="true">
							<div className="trade-menu-panel">
							  <div className="trade-menu-heading" role="tab">
								<h4 className="trade-menu-title">
								<a role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
								  <span><img src="images/Over.png" className="img-fluid" alt="Overview"/></span>Overview
								</a>
							  </h4>
							  </div>
							 
							</div>
							<div className="trade-menu-panel">
							  <div className="trade-menu-heading" role="tab" id="headingTwo">
								<h4 className="trade-menu-title">
								<a className="collapsed trade-dropmenu" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								 <span><img src="images/Borrow.png" className="img-fluid trade-menu-icon" alt="Trade"/><img src="images/Borrow2.png" className="img-fluid trade-menu-icon-active" alt="Trade"/></span>Trade
								</a>
							  </h4>
							  </div>
							  <div id="collapseTwo" className="trade-menu-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
								<ul className="nav">
									<li><a href="#!">Swap</a></li>
									<li><a href="#!" className="trade-menuItem-active">Liquidity</a></li>
								  </ul>
							  </div>
							</div>
							<div className="trade-menu-panel">
							  <div className="trade-menu-heading" role="tab" id="headingThree">
								<h4 className="trade-menu-title">
								<a className="collapsed trade-dropmenu" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								 <span><img src="images/pools.png" className="img-fluid trade-menu-icon" alt="pools"/><img src="images/pools2.png" className="img-fluid trade-menu-icon-active" alt="pools"/></span>Pools
								</a>
							  </h4>
							  </div>
							  <div id="collapseThree" className="trade-menu-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
								<ul className="nav">
									<li><a href="#!" className="trade-menuItem-active">Entertainment Pools</a></li>
									<li><a href="#!">NFT Farming Pools</a></li>
								  </ul>
							  </div>
							</div>
							
							
							<div className="trade-menu-panel">
							  <div className="trade-menu-heading" role="tab" id="headingFour">
								<h4 className="trade-menu-title">
								<a className="collapsed trade-dropmenu" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
								  <span><img src="images/menuStacking.png" className="img-fluid trade-menu-icon" alt="Staking"/><img src="images/menuStacking2.png" className="img-fluid trade-menu-icon-active" alt="Staking"/></span>Staking
								</a>
							  </h4>
							  </div>
							  <div id="collapseFour" className="trade-menu-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
								
								  <ul className="">
									<li><a href="#!">Enoch Staking</a></li>
									<li><a href="#!" className="trade-menuItem-active">NFT staking</a></li>
								  </ul>
							
							  </div>
							</div>
							
						  </div>
						</div>
					</div>
					<div className="header-logo"><a href="javascript:void(0)"><img src="images/logo.png" alt="logo" className="img-fluid"/><span className="onboard-beta">BETA</span></a></div>
				</div>
				<div className="menuright-side">
					<div className="right-search">
						<form className="search-form">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Search"/>
									<button className="search-form-btn"><img className="search-img" src="images/search.png" alt="search"/></button>
							</div>
						</form>
					</div>
					<div className="menu-mid-sect">
						<ul id="submenubar">
							<li className="submenubar-item">
								<div className="menu-times-notifi"><img src="images/home.png" alt="home" className="img-fluid"/></div>
								<a href="javascript:void(0)">Home</a>
							</li>
							
							<li className="submenubar-item">
								<div className="menu-times-notifi"><img src="images/Chat.png" alt="Chat" className="img-fluid"/><span>0</span></div>
								<a href="javascript:void(0)">Messaging</a>
							</li>
							<li className="ether-block">
								<div className="menu-times-notifi mr-2"><img src="images/Ethereum.png" alt="Ethereum" className="img-fluid"/></div>
								<a href="javascript:void(0)">ETH Mainnet <i className="fa fa-angle-right"></i></a>
							</li>
							<li className="connect-wallet-block">
								
								<a href="javascript:void(0)">Connect Wallet</a>
							</li>
							<li className="connect-wallet-block">
								
								<a href="javascript:void(0)"><span><img src="images/cart.png" className="img-fluid mr-2"/></span>Cart</a>
							</li>
							
						</ul>
						<div className="toggle-menu">
								<div className="d-inline-block">
									<i className="fa fa-bars" aria-hidden="true" id="submenu-toggle"></i>
								</div>
							</div>
					</div>
					
					<div className="ezl-notificaion">
					<div className="position-relative notificaion-dropdown ezl-notificaion-marg">
						<a href="javascript:void(0)" className="popup"><img src="images/help.png" alt="help"/></a>							
											
					</div>
					<div className=" position-relative notificaion-dropdown">
						<a href="javascript:void(0)" className="popup"><img src="images/alertBell.png" alt="Bell"/><span className="notificaion-spn">10</span></a>							
						
					</div>
					</div>
					<div className="ezl-user-ac">
					
					<div className="account-d dropdown">
						<div className="dropdown-buttn"><span className="popup" ><div className="user-img"><img src="images/user-ReginaCooper.png" alt="user image" className="img-fluid"/></div></span>
							<div className="popupbox dropdown-menu" id="myPopup">
								
								<ul className="">
									<li>
										<div  className="enoch-usr-prof"><span><img src="images/user-pro-pic.png" className="img-fluid mr-1" alt="profile- pic"/> @Hulk66</span><span><a href="#!">Change</a></span></div>
									</li>
									<li>
										<div className="enoch-usr-status-block">
											<div className="usr-status-left">Online Status</div>
											<div className="usr-status-right">
												<div className="post-switch">
													<label className="postswitch">
													  <input type="checkbox" checked/>
													  <span className="post-slider round"></span>
													</label>
												</div>
											</div>
										</div>
										<div className="enoch-usr-status-block"><a href="#!">Become Creator </a></div>
										<div className="enoch-usr-status-block mb-0"><a href="#!" className="enoch-blue-clr">Your Public Profile</a></div>
									</li>
									<li>
										<div className="enoch-usr-status-block"><a href="#!">Setting </a></div>
										<div className="enoch-usr-status-block"><a href="#!">Help Center</a></div>										
										<div className="enoch-usr-status-block mb-0"><a href="#!" className="orange-clr">Upgrade to Premium</a></div>
									</li>
									<li className="mt-4">
										<div className="enoch-usr-status-block mb-0">Wallet  <span><a href="#!" className="btn freebonus-btn">$400 </a></span></div>
									</li>
									<li className="mt-4 pb-0">
										<div className="enoch-usr-status-block mb-0 manage-ac">
											<h3>Manage</h3>
											<ul>
												<li>
													<div className="manage-ac-block">
														<span>Comapny:	</span>
														<span className="ml-1"><img src="images/man-icon1.png" className="img-fluid mr-1" alt="user"/>88mph  </span>
													</div>
												</li>
												<li>
													<div className="manage-ac-block">
														<span>Comapny:	</span>
														<span className="ml-1"><img src="images/man-icon2.png" className="img-fluid mr-1" alt="user"/>CryptoBlue    </span>
													</div>
												</li>
											</ul>
										</div>
										
									</li>
									<li className="mb-0 pb-0">
										<div className="enoch-usr-status-block mb-0"><a href="#!" className="post-red-clr">Logout</a></div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					</div>
				</div>				
			</div>
			
			<div className="dApp-menu-btn">
				<a href="#!"><img src="images/LeftSide-Menu.png" alt="menu" className="img-fluid"  data-toggle="modal" data-target="right-top-modal" /></a>
				<div className="right-top-modal-block">
					<div id="right-top-modal" className="modal fade">
						{/* <!-- Modal content --> */}
						<div className="modal-content right-top-modal-content">
							<span className="close"><img src="images/postCross2.png" alt="close" className="img-fluid" data-dismiss="modal"/></span>
							<div className="right-top-body-block">
								<div className="right-top-body-block-lft">
									<form className="right-search-form">
										<div className="right-form-group">
											<img src="images/help-Search.png" className="img-fluid" alt="search"/><input type="text" className="form-control" placeholder="Search menu..."/>
												
										</div>
									</form>
									<div className="enoch-community-scrollable">
									<div className="enoch-menu-block-panel">
										<div className="enoch-menu-block-lft">
											<div className="enoch-menu-block-items">
												<h2>Personal</h2>
												<ul>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon1.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">NFT Vault </a>
																<p>Organise or find events and other things
																	to do online and nearby</p>
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon2.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Earning </a>
															<p>Organise or find events and other things to do online and nearby</p>
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon28.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Wallet</a>
															<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon3.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Billing</a>
															<p>Organise or find events and other things to do online and nearby</p>
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon29.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Membership</a>
															<p>Organise or find events and other things to do online and nearby</p>
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon35.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Ranking</a>
															<p>Organise or find events and other things to do online and nearby</p>
														</div>
													</li>
													
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon4.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Affiliate</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
												</ul>
											</div>
											<div className="enoch-menu-block-items">
												<h2>Entertainment</h2>
												<ul>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon11.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Popular</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon30.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Casino</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon31.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Sports</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon32.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Games</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon16.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Promotions</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
												</ul>
											</div>
											<div className="enoch-menu-block-items">
												<h2>Advertising</h2>
												<ul>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon19.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Ad Manager </a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon20.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Enoch Ad</a>
																<p>Organise or find events and other things to do online and nearby</p>
														
														</div>
													</li>
													
												</ul>
											</div>
											<div className="enoch-menu-block-items mb-0">
												<h2>User Setting </h2>
												<ul>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon26.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Your Profile </a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon27.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Your Account</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													
												</ul>
											</div>
										</div>
										<div className="enoch-menu-block-right">
											<div className="enoch-menu-block-items">
												<h2>Social</h2>
												<ul>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon5.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">My Networks</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon6.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Communities</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon33.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Creator Portals </a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon36.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Livezone</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon8.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Company pages </a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon9.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Events</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon37.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">News Feed </a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
												</ul>
											</div>
											<div className="enoch-menu-block-items">
												<h2>Shopping</h2>
												<ul>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon34.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Digital  Marketplace</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon38.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Enoch Shops</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
												</ul>
											</div>
											<div className="enoch-menu-block-items">
												<h2>Jobs</h2>
												<ul>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon18.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Remote workhub</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													
												</ul>
											</div>
											<div className="enoch-menu-block-items">
												<h2>Developer</h2>
												<ul>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon21.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Develop</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon22.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Grow</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon23.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Monetisation </a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													 <li>
														<div className="right-modal-lft"><img src="images/menu-icon24.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Github</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li>
													<li>
														<div className="right-modal-lft"><img src="images/menu-icon25.png" className="img-fluid" alt="planner"/></div>
														<div className="right-modal-right">
															<a href="#!">Docs</a>
																<p>Organise or find events and other things to do online and nearby</p>
															
														</div>
													</li> 
													
												</ul>
											</div>
										</div>
									</div>
									</div>
								</div>
								<div className="right-top-body-block-right">
									<h3>Create</h3>
									<ul>
										<li><a href="#!"><span><img src="images/creat-icon1.png" className="img-fluid" alt="icon"/></span> Post</a></li>
										<li><a href="#!"><span><img src="images/creat-icon2.png" className="img-fluid" alt="icon"/></span> Community</a></li>
										<li><a href="#!"><span><img src="images/creat-icon5.png" className="img-fluid" alt="icon"/></span> Event</a></li>
										<li><a href="#!"><span><img src="images/creat-icon10.png" className="img-fluid" alt="icon"/></span> NFT</a></li>
										<li><a href="#!"><span><img src="images/creat-icon11.png" className="img-fluid" alt="icon"/></span> Reel</a></li>
										<li><a href="#!"><span><img src="images/creat-icon14.png" className="img-fluid" alt="icon"/></span> Company page </a></li>
										<li><a href="#!"><span><img src="images/creat-icon12.png" className="img-fluid" alt="icon"/></span> Group</a></li>
										<li><a href="#!"><span><img src="images/creat-icon7.png" className="img-fluid" alt="icon"/></span> Job</a></li>								
										<li><a href="#!"><span><img src="images/creat-icon13.png" className="img-fluid" alt="icon"/></span> AD </a></li>									 
									</ul>
								</div>
							</div>
						</div>
					</div>								
				</div>
				</div>
		</header>
	</div>	
	<div className="row">	
		<div className="ezl-dashboard-container">			
			<div className="posting-steps-block">
				<div className="posting-steps-block-left">
						<div className="community-post-content-body">
							<h2 className="border-0">Create Post</h2>
							<div className="community-post-To">
								<div className="event-form-input dropdown">
									<div className="community-post-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<img src="images/Community-Info.png" className="img-fluid mr-1" alt="info"/><span id="dropdown-boxId22">88mph</span>
									</div>
									<div id="create-event-dropList33" className="dropdown-menu create-drop-list-quantity">
									  <ul>
										<li><img src="images/defi.png" className="img-fluid" alt="defi"/><span>DeFi Signal</span> </li>
										<li><img src="images/postUser2.png" className="img-fluid" alt="defi"/><span>88mph</span></li>
										
									  </ul>
									</div>
								  </div>
							</div>
							<div className="community-post-title">
								<input type="text" placeholder="Title"/>
							</div>
							<div className="community-post-textarea">
								<div className="posting-steps-topBar">
									<ul>
									  <li><img src="images/Ebold.png" className="img-fluid" alt="Ebold"/></li>
									  <li><img src="images/Eitalic.png" className="img-fluid" alt="Eitalic"/></li>
									  <li><img src="images/Eunderline.png" className="img-fluid" alt="Eunderline"/></li>
									  <li><img src="images/strikeThrough.png" className="img-fluid" alt="strikeThrough"/></li>
									  <li className="mr-5"><img src="images/Esmile.png" className="img-fluid" alt="Esmile"/></li>
									  <li><img src="images/Etextalign.png" className="img-fluid" alt="Etextalign"/></li>
									  <li><img src="images/EDropdown.png" className="img-fluid" alt="EDropdown"/></li>
									  <li><img src="images/EDropdown2.png" className="img-fluid" alt="EDropdown"/></li>
									  <li><img src="images/Eindent.png" className="img-fluid" alt="Eindent"/></li>
									  <li className="mr-5"><img src="images/outdent.png" className="img-fluid" alt="outdent"/></li>
									  <li><img src="images/EinsertImage.png" className="img-fluid" alt="EinsertImage"/></li>
									  <li><img src="images/EinsertLink.png" className="img-fluid" alt="EinsertLink"/></li>
									  <li><img src="images/EinsertVideo.png" className="img-fluid" alt="EinsertVideo"/></li>
									  <li><img src="images/redo.png" className="img-fluid" alt="redo"/></li>
									  <li><img src="images/undo.png" className="img-fluid" alt="undo"/></li>
									</ul>
								</div>
								<textarea placeholder="Text (optional)"></textarea>
							</div>
							<h3>Posts to</h3>
							<div className="community-post-To">
								<div className="event-form-input dropdown">
									<div id="dropdown-boxId3" className="community-post-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Enoch/Community Name
									</div>
									<div id="create-event-dropList23" className="dropdown-menu create-drop-list-quantity">
									  <ul>
										<li><img src="images/defi.png" className="img-fluid" alt="defi"/><span>DeFi Signal</span> </li>
										<li><img src="images/postUser2.png" className="img-fluid" alt="defi"/><span>88mph</span></li>
										
									  </ul>
									</div>
								  </div>
							</div>
							<div className="posting-steps-bottm-sect border-0">
								<div className="posting-steps-bottm-links">
									<ul>
										<li className="posingtablinks photo-title">
											<a href="javascript:void(0) photo-title"><img src="images/post-icon1.png" className="img-fluid posting-link-img" alt="images"/><img src="images/post-icon1-hov.png" className="img-fluid posting-link-img-hov" alt="images"/><span className="posting-hovr">Photo</span></a>
										</li>
										<li className="posingtablinks video-title" >
											<a href="javascript:void(0)"><img src="images/post-icon2.png" className="img-fluid posting-link-img" alt="images"/><img src="images/post-icon2-hov.png" className="img-fluid posting-link-img-hov" alt="images"/><span className="posting-hovr">Video</span></a>
										</li>
										<li className="posingtablinks doc-title">
											<a href="javascript:void(0)"><img src="images/post-icon3.png" className="img-fluid posting-link-img" alt="images"/><img src="images/post-icon3-hov.png" className="img-fluid posting-link-img-hov" alt="images"/><span className="posting-hovr custm-left">Documents</span></a>
										</li>
										<li className="posingtablinks poll-title" >
											<a href="javascript:void(0)"><img src="images/post-icon4.png" className="img-fluid posting-link-img" alt="images"/><img src="images/post-icon4-hov.png" className="img-fluid posting-link-img-hov" alt="images"/><span className="posting-hovr">Poll</span></a>
										</li>
										<li className="posingtablinks celeb-title" >
											<a href="javascript:void(0)"><img src="images/post-icon5.png" className="img-fluid posting-link-img" alt="images"/><img src="images/post-icon5-hov.png" className="img-fluid posting-link-img-hov" alt="images"/><span className="posting-hovr custm-left2">Celebrate</span></a>
										</li>
										<li className="posingtablinks help-title">
											<a href="javascript:void(0)"><img src="images/post-icon6.png" className="img-fluid" alt="images"/><span className="posting-hovr">Help</span></a>
										</li>
									</ul>
								</div>
								<div className="posting-steps-btn-links">
									<span className="mr-2"><a href="#!" className="btn posting-steps-back-btn">Back</a></span>
									<span><a href="#!" id="post-save-btn" className="btn posting-steps-done-btn" onClick={() => {setCreatePostState({...createPostState, communitiesPostTriger:true}); router.push('/community')}}>Done</a></span>
								</div>
							</div>
						</div>

				</div>
				<div className="posting-steps-block-right">
					<div className="posting-steps-block-list">
						<h2>Posting on Enoch</h2>
						<ul>
							<li>1. Remember the human</li>
							<li>2. Behave like you would in real life</li>
							<li>3. Look for the original source of content</li>
							<li>4. Search for duplicates before posting</li>
							<li>5. Read the community’s rules</li>
						</ul>
						
					</div>
					<p>Please be mindful of Enoch's <a href="#!">content policy</a> and practice good reddiquette.</p>
				</div>
			</div>
		</div>
		
	
	</div>
	
	</div>
        </div>
    );
};

export default index;