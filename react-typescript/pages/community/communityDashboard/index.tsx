import React, { useState } from 'react'
import CommunitiesDashContainer from './CommunitiesDashContainer'
import Header from '../../../Component/onBoard/header'


const index = () => {
  const [activeTab, setActiveTab] = useState<string>("all")
  const handleTabs = (t: string) => {
    setActiveTab(t)
  }
  
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <CommunitiesDashContainer activeTab={activeTab} handleTabs={handleTabs} />
    </div>

  )
}

export default index