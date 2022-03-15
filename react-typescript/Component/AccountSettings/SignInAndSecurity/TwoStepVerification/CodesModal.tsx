import React from "react";

interface Props {
  showCodesModal: boolean;
  setShowCodesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CodesModal: React.FC<Props> = ({ showCodesModal, setShowCodesModal }) => {
  return (
    <div className="enoch-setting-modal-block">
      <div
        id="backupcode-modal"
        className={showCodesModal ? "modal fade open" : "modal fade"}
      >
        <div className="modal-content setting-change-number regenerate-bkupcode">
          <span onClick={() => setShowCodesModal(false)} className="close">
            <img
              src="images/sCross.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>
          <div className="backupcode-modal-block">
            <h2>Backup codes</h2>
            <p>
              Make sure you have a copy of your codes.Store them using a
              password manager like LastPass or 1Password, or in an encrypted
              file.
            </p>
          </div>
          <div className="regenerate-tbl table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th colSpan={5}>Here are your codes</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="pt-2">
                    <div className="regenerate-tbl-txt">FGBSPH</div>
                  </td>
                  <td className="pt-2">
                    <div className="regenerate-tbl-txt">FGBSPH</div>
                  </td>
                  <td className="pt-2">
                    <div className="regenerate-tbl-txt">FGBSPH</div>
                  </td>
                  <td className="pt-2">
                    <div className="regenerate-tbl-txt">FGBSPH</div>
                  </td>
                  <td className="pt-2">
                    <div className="regenerate-tbl-txt">FGBSPH</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                  <td>
                    <div className="regenerate-tbl-txt">YSUCWP</div>
                  </td>
                </tr>
                <tr>
                  <td className="pb-2">
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                  <td className="pb-2">
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                  <td className="pb-2">
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                  <td className="pb-2">
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                  <td className="pb-2">
                    <div className="regenerate-tbl-txt">FSXMAF</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="authenticator2-accessible-bottom">
            <ul>
              <li className="ml-0">
                <a href="#">
                  <img
                    src="images/sprint.png"
                    alt="print"
                    className="img-fluid mr-2"
                  />
                  Print
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="images/sdownload.png"
                    alt="download"
                    className="img-fluid mr-2"
                  />
                  Download
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="images/ssave.png"
                    alt="save"
                    className="img-fluid mr-2"
                  />
                  Save
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodesModal;
