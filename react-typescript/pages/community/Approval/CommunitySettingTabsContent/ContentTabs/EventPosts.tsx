import React from 'react'
import Link from 'next/link'

const EventPosts = () => {
  return (
    <div id="EventPosts" className="tabcontent">
      <div className="AllUsers_Sect_contnet_nft">
        <div className="All_Users_headings">
          <h2>Upcoming and live events</h2>
        </div>
        <div className="AllUsers_body_nft_post">
          <h3>No upcoming or live events in @Username</h3>


          <div className="AllUsers_body_img_time_refresh">
            <img src="/images/time_shedule.png" alt="img" className="img-fluid" />

          </div>
          <div className="nft_shed">
            <Link href="/community/Approval/CommunitySettingTabsContent/ContentTabs/CreatePost">
              <p>CREATE EVENT POST</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EventPosts