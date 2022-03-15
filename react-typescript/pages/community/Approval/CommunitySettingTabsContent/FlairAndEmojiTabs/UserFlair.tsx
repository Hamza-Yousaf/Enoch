import React from 'react'

const UserFlair = () => {
  return (
    <div id="UserFlair" className="tabcontent">
      <div className="community-body-left-Col_avex CommunityAppearance-left-Col_avex">
        <div className="community-headings_avex">
          <h2>Grant user flair</h2>
          {/* <p>All Users</p> */}
        </div>
        <div className="community-name-sect_avex">
          <h2>Search for the users</h2>
          <div className="magicSearchFull_avex">
            <input className="magicSearchFull__search_avex" placeholder="type here..." />
            <img src="/images/search-field-icon.svg" className="magicSearchFull__icon_avex" alt="" />
          </div>
          {/*<!-- Ahti User Flair -->*/}

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
          <div className="create-page-sect_nft_grant">
            <h3 className="exist_main">"You do not have any post</h3>
            <h5>Search for a user to assign a user flair</h5>



          </div>


          {/*<!-- End  -->*/}

        </div>
      </div>
    </div>
  )
}

export default UserFlair