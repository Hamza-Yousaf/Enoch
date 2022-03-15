import React, { FC } from 'react'
import CommunitiesTabs from './CommunitiesTabs'
import JoinedCommunities from './JoinedCommunities'
import AllCommunities from './AllCommunities'
import ModreatingCommunities from './ModreatingCommunities'


interface Props {
  activeTab: string
  handleTabs: (t: string) => void
}
const CommunitiesDashContainer: FC<Props> = ({ activeTab, handleTabs }) => {
 
  return (
    <div className='row'>
      <div className='ezl-dashboard-container'>
        <div className='Communities-section'>
          <div className="Communities-sect-headings">
            <h2>Communities</h2>
          </div>
          <div className="Communities-sect-tabs">
            <CommunitiesTabs activeTab={activeTab} handleTabs={handleTabs} />
            {activeTab === "all" && <AllCommunities />}
            {activeTab === "joined" && <JoinedCommunities />}
            {activeTab === "modreating" && <ModreatingCommunities />}
          </div>
        </div>
      </div>
      </div>
  )
}

export default CommunitiesDashContainer