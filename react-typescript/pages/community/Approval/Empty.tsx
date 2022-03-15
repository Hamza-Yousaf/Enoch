import React, { FC } from 'react'

interface Props{
    heading: string
    msg: string
    imgSrc: string
}
const Empty: FC<Props> = ({heading, msg, imgSrc}) => {
    return (
        <div id="AllUsers" className="tabcontent">
            <div className="AllUsers_Sect usermanage">
                <div className="AllUsers_Sect_contnet">
                    <div className="All_Users_headings">
                        <h2>{heading}</h2>
                    </div>
                    <div className="AllUsers_body">
                        <div className="AllUsers_body_img">
                            <img src={`/images/${imgSrc}`} alt="img" className="img-fluid" />
                        </div>
                        <h3>{msg}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empty