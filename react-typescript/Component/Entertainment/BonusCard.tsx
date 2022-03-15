import React from "react";

interface Props {
  image: string;
  imgClass: string;
}

const BonusCard: React.FC<Props> = ({ image, imgClass }) => {
  return (
    <li>
      <div className={imgClass}>
        <img src={image} className="img-fluid" alt="bonus" />
      </div>
    </li>
  );
};

export default BonusCard;
