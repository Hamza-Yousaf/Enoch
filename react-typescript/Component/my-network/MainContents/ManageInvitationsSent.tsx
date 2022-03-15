import React, { useState } from "react";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

const ManageInvitationsSent = () => {
	return (
		<div id="Sent" className="Manage_invitations_tabcontent d-block">
			<div className="Manage_invitations_sent_tab_sect">
				<div className="Manage_invitations_sent_tab_headings">
					<div className="Manage_invitations_sent_tab_headings_left">
						<h3>Select 1-53 of 53</h3>
					</div>
					<div className="Manage_invitations_sent_tab_headings_right">
						<h3>Filter By:</h3>
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
					</div>
				</div>
				<div className="Manage_invitations_sent_tab_body"></div>
			</div>
		</div>
	);
};

export default withApollo(ManageInvitationsSent, { getDataFromTree });
