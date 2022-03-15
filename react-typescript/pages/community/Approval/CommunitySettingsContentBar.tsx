import React, { FC } from 'react'
import CommunitySettingTabsContent from './CommunitySettingTabsContent'


interface Props {
    activeTab: string
} 
const CommunitySettingsContentBar: FC<Props> = ({activeTab}) => {
  return (
    <div className='col-lg-9'>
        <CommunitySettingTabsContent activeTab={activeTab}/>
    </div>
  )
}

export default CommunitySettingsContentBar