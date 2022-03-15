import React, { useEffect, useState } from "react";
import withApollo from "../../../lib/withApollo";
import { actionCreators, State } from "../../../state/index";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromTree } from "@apollo/client/react/ssr";
import ManageInvitationsNoReceived from "./ManageInvitationsNoReceived";

const ManageInvitationsReceived = () => {
	const [allConnect, setAllConnect] = useState([]);
	const [totalChecked, setTotalChecked] = useState(0);
	
	const receivedNetworkValue = useSelector(
		(state: State) => state.networkState.receivedNetworkConnect
	);

	const onFollowHandler = (index: any) => {
		let newAllConnect = [];
		newAllConnect = allConnect.map((e, i) =>
			index.toString() == i.toString() ? { ...e, follow: !e?.follow } : e
		);
		setAllConnect(newAllConnect);
	};

	const onFollowCheckBoxHandler = (index: any) => {
		let newAllConnect = [];
		newAllConnect = allConnect.map((e, i) =>
			index.toString() == i.toString() ? { ...e, check: !e?.check } : e
		);
		const newTotalChecked = newAllConnect.filter((value) => value.check == true).length;
		setTotalChecked(newTotalChecked);
		setAllConnect(newAllConnect);
	};

	useEffect(() => {
		setAllConnect(receivedNetworkValue);
	}, [receivedNetworkValue]);

	return (
		<div id="Received" className="Manage_invitations_tabcontent d-block">
			{allConnect == [] ? (
				<ManageInvitationsNoReceived />
			) : (
				<>
					<div className="selct_numbering">
						<p className="num_slct">Select 1-53 of 53</p>
						<div className="Avex_Manage_invitations_sent_tab_headings_right">
							<h3>Filter By:</h3>
							{totalChecked > 0 ?
								<>
									<div className="All_invitations_dropdown_sect_avex">
										<div className="Nft_avex_All_invitations_dropbox">
											<h4>All invitations</h4>
										</div>
									</div>
									<span className="ignr_nft">
										<button className="avex_btn_ntwrk_ignr">Ignore 4</button>
									</span>
									<span className="acpt_nft">
										<button
											className="avex_btn_ntwrk_acpt"
											data-toggle="modal"
											data-target="#my_network_Modal"
										>
											Accept {totalChecked}
										</button>
									</span>
								</>
								:
								<div className="All_invitations_dropdown_sect">
									<div className="All_invitations_dropbox">
										<h4>All invitations</h4>
										<span>
											<img
												src="/images/arrow.svg"
												alt="icon"
												className="img-fluid"
											/>
										</span>
									</div>
									<div className="All_invitations_dropList">
										<ul>
											<li>-</li>
											<li>-</li>
											<li>-</li>
											<li>-</li>
										</ul>
									</div>
								</div>
							}
						</div>
					</div>
					<div className="avex_netrk1">
						<div className="Find-start-conversation-Chat-list_ave_network pt-2">
							<ul className="net_avex_new">
								{allConnect?.map((item, index) => {
									return (
										<li>
											<div className="custom_checkbox_avex">
												<label className="Avex_ntwrk_container">
													<input
														type="checkbox"
														checked={item?.check}
														onClick={() => onFollowCheckBoxHandler(index)}
													/>
													<span className="checkmark"></span>
												</label>
											</div>
											<div className="cus_avex_netwrk">
												<div className="Find-start-conversation-Chat-list-users_avex_network">
													<div className="Find-start-conversation-Chat-list-user-dp_avex_network_dp">
														<img
															src="/images/3.png"
															alt="img"
															className="img-fluid"
														/>
													</div>
													<div className="Find-start-conversation-Chat-list-text_avex_nft">
														<h4>{item?.name}</h4>
														<p>{item?.dec}</p>
													</div>
												</div>
												<div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
											</div>
											{item?.follow ? (
												<div
													className="sidebarUserListLi_follow_bck"
													onClick={() => onFollowHandler(index)}
												>
													<button className="follow_back_btn">
														Follow Back
													</button>
												</div>
											) : (
												<div className="Find-start-conversation-Chat-list-btns_avex_netwrk">
													<div
														className="sidebarUserListLiblack_avex_nft"
														onClick={() => onFollowHandler(index)}
													>
														<img
															className="plus_server_icon img-fluid green_arrow "
															src="/images/Check_tick.png"
															alt=""
														/>
														<img
															className="plus_server_icon img-fluid white_arrow"
															src="images/Check_avex_white22.svg"
															alt=""
														/>
													</div>
													<div className="sidebarUserListLired_avex_nft">
														<img
															className="plus_server_icon img-fluid"
															src="/images/Cross_alert.png"
															alt=""
														/>
													</div>
												</div>
											)}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default withApollo(ManageInvitationsReceived, { getDataFromTree });
