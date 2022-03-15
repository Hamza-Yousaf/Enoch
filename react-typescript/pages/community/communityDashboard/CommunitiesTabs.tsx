import React, { FC, useState } from 'react'


interface Props{
    activeTab: string
    handleTabs: (t: string) => void
}
const CommunitiesTabSection: FC<Props> = ({handleTabs, activeTab}) => {
    
    return (
        <div className="tab">
            <div className="Communities-tab-btn">
                <button className={activeTab == "all" ? "tablinks active" : "tablinks"} onClick={() => handleTabs("all")} >All</button>
                <button className={activeTab == "joined" ? "tablinks active" : "tablinks"} onClick={() => handleTabs("joined")} >Joined</button>
                <button className={activeTab == "modreating" ? "tablinks active" : "tablinks"} onClick={() => handleTabs("modreating")}>Modreating</button>
            </div>
            <div className="Create-Community-btn">
                <button>Create Community</button>
            </div>

        </div>
    )
}

export default CommunitiesTabSection