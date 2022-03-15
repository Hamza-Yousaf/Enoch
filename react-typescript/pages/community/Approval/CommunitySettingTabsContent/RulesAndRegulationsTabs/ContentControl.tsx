import React from 'react'

const ContentControl = () => {
  return (
    <div id="ContentControl" className="tabcontent">
      <div className="community-body-left-Col_avex_content CommunitySetting-left-Col">
        <div className="community-headings">
          <h2>Content controls</h2>
          <span><img src="/images/Icon_Artwork_avex.png" alt="img" className="tble_icn img-fluid" /></span>
        </div>
        <div className="welcome-message-sect_avex">
          <div className="welcome-message-content_avex">
            <h2>Provide members with posting guidelines</h2>
            <p>Posting guidelines let people who are new to your community or posting for the first time
              know what your expectations are. If you have specific flair or formatting
              requirements for posts, this is the place to make it clear what you’d like.</p>
          </div>
          <div className="welcome-message-toggle-switch_nft">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- 2 -->*/}
        <div className="welcome-message-sect_avex">
          <div className="welcome-message-content_avex">
            <h2>Require words in the post title</h2>
            <p>Posts without these words in the title can’t be submitted. (Choose up to 15 words, 40 characters each.)</p>
          </div>
          <div className="welcome-message-toggle-switch_nft">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- 3 -->*/}

        <div className="welcome-message-sect_avex">
          <div className="welcome-message-content_avex">
            <h2>Ban words from the post title</h2>
            <p>Posts with these words in the title can’t be submitted. (Choose up to 15 words, 40 characters each.)</p>
          </div>
          <div className="welcome-message-toggle-switch_nft">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- 4 -->*/}

        <div className="welcome-message-sect_avex">
          <div className="welcome-message-content_avex">
            <h2>Ban words from the post title</h2>
            <p>Posts with these words in the title can’t be submitted. (Choose up to 15 words, 40 characters each.)</p>
          </div>
          <div className="welcome-message-toggle-switch_nft">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- 5 -->*/}

        <div className="welcome-message-sect_avex">
          <div className="welcome-message-content_avex">
            <h2>Require or ban links from specific domains</h2>
            <p>Posts with links that don’t fit your requirements can’t be submitted.</p>
          </div>
          <div className="welcome-message-toggle-switch_nft">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- 6 -->*/}

        <div className="welcome-message-sect_avex">
          <div className="welcome-message-content_avex">
            <h2>Restrict how often the same link can be posted</h2>
            <p>Posts that have a link that has already been posted to your community
              can only be submitted within the number of days you select.</p>
          </div>
          <div className="welcome-message-toggle-switch_nft">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="community-type-sect_avex_new">
          <h2>Advanced post requirements</h2>
          <div className="community-type-content_avex">
            <h5>Text post body</h5>
            <p>Allow text posts to have body text</p>
            <div className="community-type-checkbox_avex">
              <label className="container-avex">
                <p>Post body is optional </p>
                <input type="radio" name="radio" />
                <span className="checkmark_avex1"></span>
              </label>
              <label className="container-avex">
                <p>Post body is required</p>
                <input type="radio" name="radio" />
                <span className="checkmark_avex1"></span>
              </label>
              <label className="container-avex">
                <p>Post body is disabled</p>
                <input type="radio" name="radio" />
                <span className="checkmark_avex1"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="adult-community-sect_avex">
          <div className="adult-community-content_avex">
            <h2>Restrict post title length</h2>
            <p>Set a minimum and/or maximum post title length</p>
          </div>
          <div className="adult-community-toggle-switch">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- 2 -->*/}
        <div className="adult-community-sect_avex">
          <div className="adult-community-content_avex">
            <h2>Use title text RegEx requirements</h2>
            <p>Use regular expressions for more advanced title matching. These use the <a className="anchor_txt">Python RegEx syntax</a></p>
          </div>
          <div className="adult-community-toggle-switch">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- 3 -->*/}

        <div className="adult-community-sect_avex">
          <div className="adult-community-content_avex">
            <h2>Use body text RegEx requirements</h2>
            <p>Use regular expressions for more advanced body text matching. These use the <a className="anchor_txt">Python RegEx syntax</a></p>
          </div>
          <div className="adult-community-toggle-switch">
            <div className="usr-cntrol-event">
              <div className="cntrol-switch-usr">
                <label className="switch-cntrol">
                  <input type="checkbox" />
                  <span className="slider-cntrol round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContentControl