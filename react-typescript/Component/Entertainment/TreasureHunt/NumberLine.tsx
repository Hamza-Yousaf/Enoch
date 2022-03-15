import React from "react";

interface Props {
  numbers: any;
}

const NumberLine: React.FC<Props> = ({ numbers }) => {
  return (
    <div className="treasurehunt-add-newline-block">
      <div className="treasurehunt-block2-luckyNo-mid pt-0 pb-0">
        <ul>
          {numbers.map((selectedNumber: any, key: any) => {
            return (
              <li key={key} className="luckyNo-active">
                {selectedNumber}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="treasurehunt-add-newline-overlay">
        <span>
          <button className="overlay-bttn">
            <img src="/images/tTrash.png" className="img-fluid" alt="trash" />
          </button>
        </span>
        <span>
          <button className="overlay-bttn">
            <img src="/images/tEdit.png" className="img-fluid" alt="edit" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default NumberLine;
