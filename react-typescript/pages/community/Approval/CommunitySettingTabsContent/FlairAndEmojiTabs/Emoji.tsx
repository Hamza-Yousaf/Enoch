import React from 'react'

const Emoji = () => {
  return (
    <div id="EmojiFlair" className="tabcontent">
      <div className="usermanage">
        <div className="Emoji_management_sect">
          <div className="Emoji_management_headings">
            <h2>Emoji management</h2>
            <span><img src="/images/Icon_Artwork.svg" alt="icon" className="img-fluid" /></span>
          </div>
          <div className="Emoji_management_body">
            <div className="Emoji_management_alart_sect">
              <div className="Emoji_management_alart_icon">
                <img src="/images/warning.svg" alt="icon" className="img-fluid" />
              </div>
              <div className="Emoji_management_alart_text">
                <h3>Emojis have been disabled for this community</h3>
                <h4>Emojis in flairs will not be displayed, and existing emojis will appear as plain text.</h4>
              </div>
            </div>
            <div className="Emoji_management_Table_sect">
              <table className="table">
                <thead>
                  <tr>
                    <th className="Image_Col">Image</th>
                    <th className="Name_Col">Name</th>
                    <th className="Appears_Col">Appears in<span><img src="/images/Icon_Artwork.svg" alt="icon" className="img-fluid" /></span></th>
                    <th className="Settings_Col">Settings<span><img src="/images/Icon_Artwork.svg" alt="icon" className="img-fluid" /></span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="communitytableList__user__tr">
                    <td className="Image_Col"><img src="/images/emoji-1.png" alt="img" className="img-fluid" /></td>
                    <td className="Name_Col">Cake</td>
                    <td className="Appears_Col">Post flair, user flair</td>
                    <td className="Settings_Col">Edit</td>
                  </tr>
                  <tr className="communitytableList__user__tr">
                    <td className="Image_Col"><img src="/images/emoji-2.png" alt="img" className="img-fluid" /></td>
                    <td className="Name_Col">cat_blep</td>
                    <td className="Appears_Col">Post flair, user flair</td>
                    <td className="Settings_Col">Edit</td>
                  </tr>
                  <tr className="communitytableList__user__tr">
                    <td className="Image_Col"><img src="/images/emoji-3.png" alt="img" className="img-fluid" /></td>
                    <td className="Name_Col">doge</td>
                    <td className="Appears_Col">Post flair, user flair</td>
                    <td className="Settings_Col">Edit</td>
                  </tr>
                  <tr className="communitytableList__user__tr">
                    <td className="Image_Col"><img src="/images/emoji-4.png" alt="img" className="img-fluid" /></td>
                    <td className="Name_Col">downnote</td>
                    <td className="Appears_Col">Post flair, user flair</td>
                    <td className="Settings_Col">Edit</td>
                  </tr>
                  <tr className="communitytableList__user__tr">
                    <td className="Image_Col"><img src="/images/emoji-5.png" alt="img" className="img-fluid" /></td>
                    <td className="Name_Col">hamster</td>
                    <td className="Appears_Col">Post flair, user flair</td>
                    <td className="Settings_Col">Edit</td>
                  </tr>
                  <tr className="communitytableList__user__tr">
                    <td className="Image_Col"><img src="/images/emoji-6.png" alt="img" className="img-fluid" /></td>
                    <td className="Name_Col">illuminate</td>
                    <td className="Appears_Col">Post flair, user flair</td>
                    <td className="Settings_Col">Edit</td>
                  </tr>
                  <tr className="communitytableList__user__tr">
                    <td className="Image_Col"><img src="/images/emoji-7.png" alt="img" className="img-fluid" /></td>
                    <td className="Name_Col">kappa</td>
                    <td className="Appears_Col">Post flair, user flair</td>
                    <td className="Settings_Col">Edit</td>
                  </tr>
                  <tr className="communitytableList__user__tr">
                    <td className="Image_Col"><img src="/images/emoji-8.png" alt="img" className="img-fluid" /></td>
                    <td className="Name_Col">orly</td>
                    <td className="Appears_Col">Post flair, user flair</td>
                    <td className="Settings_Col">Edit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emoji