import React from 'react'
import Header from '../../../../../Component/onBoard/header'
const CreatePost = () => {
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="posting-steps-block">
            <div className="posting-steps-block-left">
              <div className="community-post-content-body">
                <h2 className="border-0">Create Post</h2>
                <div className="community-post-To">
                  <div className="event-form-input dropdown">
                    <div className="community-post-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="/images/Community-Info.png" className="img-fluid mr-1" alt="info" /><span id="dropdown-boxId22">88mph</span>
                    </div>
                    <div id="create-event-dropList33" className="dropdown-menu create-drop-list-quantity">
                      <ul>
                        <li><img src="/images/defi.png" className="img-fluid" alt="defi" /><span>DeFi Signal</span> </li>
                        <li><img src="/images/postUser2.png" className="img-fluid" alt="defi" /><span>88mph</span></li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="community-post-title">
                  <input type="text" placeholder="Title" />
                </div>
                <div className="community-post-textarea">
                  <div className="posting-steps-topBar">
                    <ul>
                      <li><img src="/images/Ebold.png" className="img-fluid" alt="Ebold" /></li>
                      <li><img src="/images/Eitalic.png" className="img-fluid" alt="Eitalic" /></li>
                      <li><img src="/images/Eunderline.png" className="img-fluid" alt="Eunderline" /></li>
                      <li><img src="/images/strikeThrough.png" className="img-fluid" alt="strikeThrough" /></li>
                      <li className="mr-5"><img src="/images/Esmile.png" className="img-fluid" alt="Esmile" /></li>
                      <li><img src="/images/Etextalign.png" className="img-fluid" alt="Etextalign" /></li>
                      <li><img src="/images/EDropdown.png" className="img-fluid" alt="EDropdown" /></li>
                      <li><img src="/images/EDropdown2.png" className="img-fluid" alt="EDropdown" /></li>
                      <li><img src="/images/Eindent.png" className="img-fluid" alt="Eindent" /></li>
                      <li className="mr-5"><img src="/images/outdent.png" className="img-fluid" alt="outdent" /></li>
                      <li><img src="/images/EinsertImage.png" className="img-fluid" alt="EinsertImage" /></li>
                      <li><img src="/images/EinsertLink.png" className="img-fluid" alt="EinsertLink" /></li>
                      <li><img src="/images/EinsertVideo.png" className="img-fluid" alt="EinsertVideo" /></li>
                      <li><img src="/images/redo.png" className="img-fluid" alt="redo" /></li>
                      <li><img src="/images/undo.png" className="img-fluid" alt="undo" /></li>
                    </ul>
                  </div>
                  <textarea placeholder="Text (optional)"></textarea>
                </div>
                <h3>Posts to</h3>
                <div className="community-post-To">
                  <div className="event-form-input dropdown">
                    <div id="dropdown-boxId3" className="community-post-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Enoch/Community Name
                    </div>
                    <div id="create-event-dropList23" className="dropdown-menu create-drop-list-quantity">
                      <ul>
                        <li><img src="/images/defi.png" className="img-fluid" alt="defi" /><span>DeFi Signal</span> </li>
                        <li><img src="/images/postUser2.png" className="img-fluid" alt="defi" /><span>88mph</span></li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="posting-steps-bottm-sect border-0">
                  <div className="posting-steps-bottm-links">
                    <ul>
                      <li className="posingtablinks photo-title" >
                        <a href="javascript:void(0) photo-title"><img src="/images/post-icon1.png" className="img-fluid posting-link-img" alt="images" /><img src="/images/post-icon1-hov.png" className="img-fluid posting-link-img-hov" alt="images" /><span className="posting-hovr">Photo</span></a>
                      </li>
                      <li className="posingtablinks video-title" >
                        <a href="javascript:void(0)"><img src="/images/post-icon2.png" className="img-fluid posting-link-img" alt="images" /><img src="/images/post-icon2-hov.png" className="img-fluid posting-link-img-hov" alt="images" /><span className="posting-hovr">Video</span></a>
                      </li>
                      <li className="posingtablinks doc-title">
                        <a href="javascript:void(0)"><img src="/images/post-icon3.png" className="img-fluid posting-link-img" alt="images" /><img src="/images/post-icon3-hov.png" className="img-fluid posting-link-img-hov" alt="images" /><span className="posting-hovr custm-left">Documents</span></a>
                      </li>
                      <li className="posingtablinks poll-title" >
                        <a href="javascript:void(0)"><img src="/images/post-icon4.png" className="img-fluid posting-link-img" alt="images" /><img src="/images/post-icon4-hov.png" className="img-fluid posting-link-img-hov" alt="images" /><span className="posting-hovr">Poll</span></a>
                      </li>
                      <li className="posingtablinks celeb-title" >
                        <a href="javascript:void(0)"><img src="/images/post-icon5.png" className="img-fluid posting-link-img" alt="images" /><img src="/images/post-icon5-hov.png" className="img-fluid posting-link-img-hov" alt="images" /><span className="posting-hovr custm-left2">Celebrate</span></a>
                      </li>
                      <li className="posingtablinks help-title">
                        <a href="javascript:void(0)"><img src="/images/post-icon6.png" className="img-fluid" alt="images" /><span className="posting-hovr">Help</span></a>
                      </li>
                    </ul>

                  </div>
                  <div className="posting-steps-btn-links">
                    <span className="mr-2"><a href="#!" className="btn posting-steps-back-btn">Back</a></span>
                    <span><a href="#!" id="post-save-btn" className="btn posting-steps-done-btn">Done</a></span>
                  </div>
                </div>
              </div>

            </div>
            <div className="posting-steps-block-right">
              <div className="posting-steps-block-list">
                <h2>Posting on Enoch</h2>
                <ul>
                  <li>1. Remember the human</li>
                  <li>2. Behave like you would in real life</li>
                  <li>3. Look for the original source of content</li>
                  <li>4. Search for duplicates before posting</li>
                  <li>5. Read the community’s rules</li>
                </ul>

              </div>
              <p>Please be mindful of Enoch's <a href="#!">content policy</a> and practice good reddiquette.</p>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}

export default CreatePost