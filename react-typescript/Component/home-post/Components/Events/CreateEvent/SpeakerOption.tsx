import React from "react";

interface Props {
  addToSpeakersArray: any;
  user: any;
}

const SpeakerOption: React.FC<Props> = ({ addToSpeakersArray, user }) => {
  return (
    <li>
      <div className="evnt-speaker-img">
        <img src={user.image} className="img-fluid" alt="pic" />
      </div>
      <div
        onClick={(e) =>
          addToSpeakersArray(e, {
            name: user.name,
            occupation: user.occupation,
            image: user.image,
          })
        }
        className="speaker-drop-list-right"
      >
        <h3>{user.name}</h3>
        <p>{user.occupation}</p>
      </div>
    </li>
  );
};

export default SpeakerOption;
