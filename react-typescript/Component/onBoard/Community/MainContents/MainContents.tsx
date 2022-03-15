import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";
import dynamic from "next/dynamic";
const MyCommunitiesList = dynamic(() => import("./MyCommunitiesList"));
const MyCommunitiesListJoined = dynamic(
  () => import("./MyCommunitiesListJoined")
);
const MyCommunitiesListModreating = dynamic(
  () => import("./MyCommunitiesListModreating")
);
const SideBar = dynamic(() => import("./SideBar"));

interface Props {
  communities: any;
  loading: boolean;
  allCommunities: any;
}

const MainContents: React.FC<Props> = ({
  communities,
  loading,
  allCommunities,
}) => {
  const setCommunityTabHandler = (value: string) => {
    setCommunityTab(value);
  };
  const dispatch = useDispatch();
  // console.log(communities, allCommunities);
  const [communityTab, setCommunityTab] = useState("all");

  const { showCreateCommunityModal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { showEditProfileModal, userProfile } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const showCreateCommunityModalValue = useSelector(
    (state: State) => state.showCreateCommunityModal
  );

  const showEditProfileModalValue = useSelector(
    (state: State) => state.showEditProfileModal
  );

  useEffect(() => {
    return;
  }, showCreateCommunityModalValue);

  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="Communities-section">
          <div className="Communities-sect-headings">
            <h2>Communities</h2>
          </div>
          <div className="Communities-sect-tabs">
            <div className="tab">
              <div className="Communities-tab-btn">
                <button
                  className={classnames("tablinks", {
                    active: communityTab == "all",
                  })}
                  onClick={() => setCommunityTabHandler("all")}
                >
                  All
                </button>
                <button
                  className={classnames("tablinks", {
                    active: communityTab == "joined",
                  })}
                  onClick={() => setCommunityTabHandler("joined")}
                >
                  Joined
                </button>
                <button
                  className={classnames("tablinks", {
                    active: communityTab == "modreating",
                  })}
                  onClick={() => setCommunityTabHandler("modreating")}
                >
                  Modreating
                </button>
              </div>
              <div className="Create-Community-btn">
                <button onClick={() => showCreateCommunityModal(true)}>
                  Create Community
                </button>
              </div>
            </div>

            {communityTab == "all" && (
              <MyCommunitiesList
                communities={communities}
                loading={loading}
                allCommunities={allCommunities}
              />
            )}

            {communityTab == "joined" && <MyCommunitiesListJoined />}
            {communityTab == "modreating" && (
              <MyCommunitiesListModreating
                communities={communities}
                loading={loading}
                allCommunities={allCommunities}
              />
            )}
          </div>
        </div>
      </div>

      {/* <div classNameName="ezl-dashboard-container">
        <div classNameName="dApp-S-Home-body">
          <div classNameName="row m-0">
            <MyCommunitiesList
              communities={communities}
              loading={loading}
              allCommunities={allCommunities}
            />
            <SideBar />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MainContents;
