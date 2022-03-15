import React from 'react'

const PostFlair = () => {
  return (
    <div id="PostFlair" className="tabcontent">
      <div className="AllUsers_Sect_contnet">
        <div className="All_Users_headings">
          <h2>Emoji management</h2><span><img className="art_wrk" src="/images/IconArtwork_avex.png" alt="" /></span>
        </div>
        <div className="alert_disabled">
          <div className="icon"><img className="alrt_ylw img-fluid" src="/images/alert_icon.png" alt="img" /></div>
          <div className="subject">
            <h3>Warning</h3>
            <p>Anyone with access can view your invited visitors</p>
          </div>

        </div>
        <div className="communitytableList_avex_GrantUser">
          <table className="table">
            <thead>
              <tr>
                <th>Post flair&amp; preview</th>
                <th>CSS class<span><img src="/images/Icon_Artwork_avex.png" alt="img" className="tble_icn_avex img-fluid" /></span></th>
                <th>Settings<span className="icn_tct_grnt"><img src="/images/Icon_Artwork_avex.png" alt="img" /></span></th>
                <th>Flair ID <span><img src="/images/Icon_Artwork_avex.png" alt="img" className="tble_icn_avex img-fluid" /></span></th>

              </tr>
            </thead>

          </table>

        </div>

        <div className="AllUsers_body_avex_nft">

          <h3>You do not have any post flair Create</h3>
          <p>post flair in your community today
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostFlair