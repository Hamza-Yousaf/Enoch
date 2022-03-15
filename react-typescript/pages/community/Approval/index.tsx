import React, { useState } from 'react'
import Header from '../../../Component/onBoard/header'
import CommunitySettingsDash from './CommunitySettingsDash'

const index = () => {

    const [activeTab, setActiveTab] = useState<string>("allusers")

    const handleTab = (arg: string) => {
        setActiveTab(arg)
    }
    return (
        <div className='container-fluid dashboard-body-bg second-body-bg'>
            <Header />
            <CommunitySettingsDash activeTab={activeTab} handleTab={handleTab}/>
        </div>
    )
}

export default index