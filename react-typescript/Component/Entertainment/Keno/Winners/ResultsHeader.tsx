import React from "react";

const ResultsHeader = () => {
  return (
    <div className="Keno-Results-header-right">
      <div className="Treasure-Hunt input-fild">
        <a
          href="#"
          id="Treasure-dropbox-list-input"
          className="Treasure-hunt-box"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Treasure Hunt Monthly
        </a>
        <div
          id="Treasure-dropbox-list"
          className="dropdown-menu Treasure-hunt-dropbox-list"
        >
          <ul>
            <li>Treasure hunt monthly</li>
            <li>Treasure hunt monthly2</li>
            <li>Treasure hunt monthly3</li>
            <li>Treasure hunt monthly4</li>
            <li>Treasure hunt monthly5</li>
            <li>Treasure hunt monthly6</li>
          </ul>
        </div>
      </div>
      <div className="date-input-fild">
        <span>
          <img
            src="/images/keno-Calendar.png"
            alt="icon"
            className="img-fluid"
          />
        </span>
        <input type="text" placeholder="" value="Aug 12, 2021" />
      </div>
      <div className="time input-fild">
        <span>
          <img src="/images/keno-Clock.png" alt="icon" className="img-fluid" />
        </span>
        <a
          href="#"
          id="time-dropbox-list-input"
          className="time-hunt-box"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Select time
        </a>
        <div
          id="time-dropbox-list"
          className="dropdown-menu time-hunt-dropbox-list"
        >
          <div className="kWinner-cat">
            <input id="kWinner-check" name="b-plan" type="checkbox" />
            <label htmlFor="kWinner-check">
              <p className="kWinner-event-txt1">All day</p>
            </label>
          </div>
          <div className="time-select">
            <ul>
              <li>01:00 AM</li>
              <li>02:00 AM</li>
              <li>03:00 AM</li>
              <li>04:00 AM</li>
              <li className="time-sel-active">05:00 AM</li>
              <li>06:00 AM</li>
              <li>07:00 AM</li>
              <li>08:00 AM</li>
              <li>09:00 AM</li>
              <li>10:00 AM</li>
              <li>11:00 AM</li>
              <li>12:00 AM</li>
            </ul>
            <ul>
              <li>13:00 AM</li>
              <li>14:00 AM</li>
              <li>15:00 AM</li>
              <li>16:00 AM</li>
              <li>17:00 AM</li>
              <li>18:00 AM</li>
              <li>19:00 AM</li>
              <li>20:00 AM</li>
              <li>21:00 AM</li>
              <li>22:00 AM</li>
              <li>23:00 AM</li>
              <li>24:00 AM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;
