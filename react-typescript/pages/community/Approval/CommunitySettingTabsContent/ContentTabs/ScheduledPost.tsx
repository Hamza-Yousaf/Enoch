import React from 'react'

const ScheduledPost = () => {
  return (
    <div id="ScheduledPost" className="tabcontent">
      <div className="AllUsers_Sect_contnet_nft">
        <div className="All_Users_headings">
          <h2> scheduled posts</h2>
        </div>
        <div className="AllUsers_body_nft_post">
          <h3>No scheduled posts in r/UIDesignIndia</h3>


          <div className="AllUsers_body_img_time_refresh">
            <img src="/images/time_shedule.png" alt="img" className="img-fluid" />

          </div>
          <div className="nft_shed">
            <p>SCHEDULE POST</p>
          </div>
        </div>

      </div>
      <div className="AllUsers_Sect_contnet_avex_post">
        <div className="All_Users_headings">
          <h2>RECURRING POST</h2>
        </div>
        <div className="AllUsers_body_avex_post">
          <h3>No recurring posts</h3>
          <div className="AllUsers_body_img_time_refresh">
            <img src="/images/IconArtwork_post.png" alt="img" className="img-fluid" />

          </div>
          <div className="nft_shed">
            <p>SCHEDULE RECURRING POST</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ScheduledPost