import React from "react";

interface Props {
  forwardMessage: () => void;
}

const ForwardTextEditor: React.FC<Props> = ({ forwardMessage }) => {
  return (
    <div className="HelpCenter-Resume-Writing-Sect">
      <div className="HelpCenter-Resume-Writing-Heading">
        <div className="HelpCenter-Resume-Writing-Heading-menu-1">
          <ul className="list-1">
            <li>
              <img src="images/A.png" alt="A" className="img-fluid" />
              <img src="images/dropdown.png" alt="icon" className="img-fluid" />
            </li>
          </ul>
          <ul className="list-2">
            <li>
              <img src="images/Bold.png" alt="B" className="img-fluid" />
            </li>
            <li>
              <img src="images/Italic.png" alt="I" className="img-fluid" />
            </li>
            <li>
              <img src="images/Underline.png" alt="U" className="img-fluid" />
            </li>
          </ul>
          <ul className="list-3">
            <li>
              <img
                src="images/text-aria-Link.png"
                alt="Link"
                className="img-fluid"
              />
            </li>
            <li>
              <img src="images/emoji.png" alt="emoji" className="img-fluid" />
            </li>
            <li>
              <img src="images/gallery.png" alt="img" className="img-fluid" />
            </li>
          </ul>
        </div>
        <div className="HelpCenter-Resume-Writing-Heading-menu-2">
          <ul className="list-4">
            <li>
              <img src="images/List.png" alt="emoji" className="img-fluid" />
            </li>
            <li>
              <img
                src="images/Numbered%20List.png"
                alt="img"
                className="img-fluid"
              />
            </li>
          </ul>
          <ul className="list-5">
            <li>
              <img
                src="images/Align-Left.png"
                alt="left"
                className="img-fluid"
              />
            </li>
            <li>
              <img
                src="images/Align-%20Center.png"
                alt="Center"
                className="img-fluid"
              />
            </li>
            <li>
              <img
                src="images/Align-Right.png"
                alt="Right"
                className="img-fluid"
              />
            </li>
            <li>
              <img
                src="images/Align-Justify.png"
                alt="Justify"
                className="img-fluid"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="HelpCenter-Resume-Writing-body">
        <div className="HelpCenter-textarea">
          <textarea
            placeholder="Write your message"
            defaultValue={` Hey Dan and Steve, Hope you are doing good. I am
              forwording this message to let you know that Enoch help
              desk is really great.`}
          ></textarea>
        </div>
        <div className="hInbox hInbox-border">
          <div className="hInbox-top-border">&nbsp;</div>
        </div>
        <div className="HelpCenter-Resume-Writing-inbox">
          <div className="Resume-Writing-inbox-person-1">
            <p>
              Hi Support,
              <br />
              Please find all desired attachment for my KYC to br done.
              <br />
              Thanks,
              <br />
              Robert Rose
            </p>
          </div>
        </div>
        <div className="HelpCenter-textarea-btns">
          <div className="HelpCenter-textarea-btns-left">
            <div className="btn-send">
              <button onClick={forwardMessage} className="close">
                <a href="#">Send</a>
                <div className="clock-btn">
                  <img
                    src="images/Time.png"
                    alt="clock"
                    className="img-fluid"
                  />
                </div>
              </button>
            </div>
            <div className="atachment-btn">
              <a href="#">
                <img
                  src="images/Attachment.png"
                  alt="icon"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwardTextEditor;
