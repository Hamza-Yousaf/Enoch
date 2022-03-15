import React, { FC } from 'react'
import CommunitySettingsSidebar from './CommunitySettingsSidebar'
import CommunitySettingsContentBar from './CommunitySettingsContentBar'


interface Props {
    activeTab: string,
    handleTab: (arg: string) => void
}
const CommunitySettingsDash: FC<Props> = ({activeTab, handleTab}) => {
  return (
    <div className='row'>
        <div className='ezl-dashboard-container'>
        <div className='community-body'>
            <div className='row flex-row-reverse'>
                <CommunitySettingsSidebar activeTab={activeTab} handleTab={handleTab}/>
                <CommunitySettingsContentBar activeTab={activeTab}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CommunitySettingsDash