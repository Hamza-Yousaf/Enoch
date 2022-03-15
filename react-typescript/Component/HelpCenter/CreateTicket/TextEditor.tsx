import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

interface Props {
  ticketContent: any;
  setTicketContent: any;
}

const TextEditor: React.FC<Props> = ({ ticketContent, setTicketContent }) => {
  const dispatch = useDispatch();
  const { showNameTags } = bindActionCreators(actionCreators, dispatch);
  const showNameTagsValue = useSelector((state: State) => state.showNameTags);

  const changeTextContent = (e: any) => {
    if (e.target.value === "@") {
      showNameTags(true);
    }
    setTicketContent(e.target.value);
  };

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
            onChange={changeTextContent}
            value={ticketContent}
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="HelpCenter-textarea-btns">
          <div className="HelpCenter-textarea-btns-left">
            <div className="btn-send">
              <button>
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
          <div className="three-btns">
            <button className="btn-1">
              <a href="#">
                <img
                  src="images/gallery-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
                Image ...
              </a>
            </button>
            <button className="btn-2">
              <a href="#">
                <img
                  src="images/copy-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
                Copy...
              </a>
            </button>
            <button className="btn-3">
              <a href="#">+2</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
