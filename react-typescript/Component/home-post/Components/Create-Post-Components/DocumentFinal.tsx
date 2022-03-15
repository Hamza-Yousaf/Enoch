import React from "react";

const DocumentFinal = (props: any) => {
  const { name, size, sizeByte } = props.data;
  return (
    <div>
      <div className="posting-steps-innerbody mt-5">
        <div className="pdf-uploaded-box">
          <div className="pdf-uploaded-img">
            <img
              src="images/uploaded-pdf-img.svg"
              alt="img"
              className="img-fluid"
            />
          </div>
          <div className="pdf-uploaded-text">
            <h4>{name}.pdf</h4>
            {/* <h5>{size} kb</h5> */}
          </div>
          <div className="pdf-uploaded-box-cancel">
            <img
              onClick={() => props.cancelClickDoc("")}
              src="images/uploaded-pdf-cancel-icon.svg"
              alt="icon"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentFinal;
