import React from "react";

const ResultBlock = () => {
  return (
    <div id="Keno_Result" className="keno_tabcontent keno-d-block">
      <div className="Keno-Tournaments-Results">
        <div className="Keno-Tournaments-Results-header">
          <div className="Keno-Results-header-left">
            <h1>Keno Tournaments Results</h1>
          </div>
          <div className="Keno-Results-header-right">
            <div className="Treasure-Hunt input-fild">
              <a
                href="#"
                id="Treasure-dropbox-list-input2"
                className="Treasure-hunt-box"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Treasure Hunt Monthly
              </a>
              <div
                id="Treasure-dropbox-list2"
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
                <img
                  src="/images/keno-Clock.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
              <a
                href="#"
                id="time-dropbox-list-input2"
                className="time-hunt-box"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Select time
              </a>
              <div
                id="time-dropbox-list2"
                className="dropdown-menu time-hunt-dropbox-list"
              >
                <div className="kWinner-cat">
                  <input id="kWinner-check2" name="kWinner" type="checkbox" />
                  <label htmlFor="kWinner-check2">
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
        </div>
        <div className="keno-result-midblock">
          <div className="keno-result-midblock-top">
            <div className="keno-result-lft">
              <h3>Country</h3>
              <p>
                <img
                  src="/images/Globe-icon.png"
                  className="img-fluid"
                  alt="globe"
                />
              </p>
            </div>

            <div className="keno-result-mid">
              <h3>Schedule</h3>
              <p>Draws take place every 1 hour between 00:00 – 23:59 GMT</p>
            </div>
            <div className="keno-result-right">
              <h3>Guess Range</h3>
              <p>1 – 10 / 70</p>
            </div>
          </div>
          <div className="keno-result-midblock-bottom">
            <div className="keno-result-bottom-block">
              <ul>
                <li>
                  Contest: <span>Treasure Hunt </span>
                </li>
                <li>
                  Draw number: <span>59379 </span>
                </li>
                <li>
                  Estimated jackpot:
                  <span className="kresult-gcolor">1,000,000 AMBER</span>
                </li>
              </ul>
            </div>
            <div className="keno-result-bottom-circle">
              <ul>
                <li>6</li>
                <li>10</li>
                <li>22</li>
                <li>18</li>
                <li>19</li>
                <li>8</li>
                <li>21</li>
                <li>65</li>
                <li>10</li>
                <li>10</li>
                <li>6</li>
                <li>10</li>
                <li>10</li>
                <li>10</li>
                <li>10</li>
                <li>10</li>
                <li>10</li>
                <li>10</li>
                <li>10</li>
                <li>10</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="Multiplier-dropdown-sect">
          <h1>Multiplier</h1>
          <div className="Multiplier-dropdown">
            <a
              href="#"
              id="Multiplier-dropbox-list-input"
              className="Multiplier-hunt-box"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              1
            </a>
            <div
              id="Multiplier-dropbox-list"
              className="dropdown-menu Multiplier-hunt-dropbox-list"
            >
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="keno-restlt-table-sect-block">
          <div className="keno-restlt-table-sect">
            <div className="keno-restlt-table-tittle">
              <h1>Typed numbers</h1>
            </div>
            <div className="keno-restlt-table-content">
              <div className="keno-restlt-table-left-tittle">
                <h1>Correctly picked numbers</h1>
              </div>
              <div className="keno-restlt-table-Body">
                <table>
                  <tbody>
                    <tr className="top-row">
                      <td>&nbsp;</td>
                      <td className="bg-F1F3F3">10</td>
                      <td className="bg-F1F3F3">9</td>
                      <td className="bg-F1F3F3">8</td>
                      <td className="bg-F1F3F3">7</td>
                      <td className="bg-F1F3F3">6</td>
                      <td className="bg-F1F3F3">5</td>
                      <td className="bg-F1F3F3">4</td>
                      <td className="bg-F1F3F3">3</td>
                      <td className="bg-F1F3F3">2</td>
                      <td className="bg-F1F3F3">1</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3">10</td>
                      <td className="bg-ffffff">100000</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">9</td>
                      <td className="bg-ffffff">1500</td>
                      <td className="bg-ffffff">25000</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">8</td>
                      <td className="bg-ffffff">125</td>
                      <td className="bg-ffffff">375</td>
                      <td className="bg-ffffff">5000</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">7</td>
                      <td className="bg-ffffff">16</td>
                      <td className="bg-ffffff">50</td>
                      <td className="bg-ffffff">150</td>
                      <td className="bg-ffffff">750</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">6</td>
                      <td className="bg-ffffff">3</td>
                      <td className="bg-ffffff">5</td>
                      <td className="bg-ffffff">22</td>
                      <td className="bg-ffffff">33</td>
                      <td className="bg-ffffff">250</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">5</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">2</td>
                      <td className="bg-ffffff">4</td>
                      <td className="bg-ffffff">4</td>
                      <td className="bg-ffffff">27</td>
                      <td className="bg-ffffff">125</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">4</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">2</td>
                      <td className="bg-ffffff">3</td>
                      <td className="bg-ffffff">9</td>
                      <td className="bg-ffffff">30</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">3</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">2</td>
                      <td className="bg-ffffff">2</td>
                      <td className="bg-ffffff">9</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">2</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">2</td>
                      <td className="bg-ffffff">7</td>
                      <td className="bg-ffffff">&nbsp;</td>
                    </tr>

                    <tr>
                      <td className="bg-F1F3F3 no-top-border">1</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">1.5</td>
                    </tr>

                    <tr className="last-row">
                      <td className="bg-F1F3F3 no-top-border">0</td>
                      <td className="bg-ffffff">3</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">1</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">&nbsp;</td>
                      <td className="bg-ffffff">1.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="keno-result-bottm-block">
          <h3>Winning numbers and Keno prize distribution</h3>
          <p>
            Check the latest GG World Keno draw results here to see if you’ve
            been lucky and collected one of the prizes – or maybe you picked all
            the required numbers correctly and won the big jackpot.
          </p>
          <p>
            The prize breakdown for each draw is shown in the box. To understand
            the prizes for each type of bet, simply look at the number of
            numbers selected (chequered line at the top), and the number of
            correct guesses (shaded bar on the left).
          </p>
          <p>
            For example, if you have chosen 6 numbers between 1 and 70, with
            multiplier x1, and you have matched 6 of the 20 numbers of the
            winning combination, the prize you get according to the table is
            $250.
          </p>
          <p>
            So if the game has been 10 numbers and the numbers matched are also
            10, the prize is $100,000 (with multiplier x1).
          </p>
          <p>Simply match the vertical result with the horizontal result.</p>
          <p>
            Above this large box, there is a drop down that allows you to
            automatically make the change depending on the bet multiplier
            selected (1 to 10).
          </p>
          <h3>All today’s Keno results</h3>
          <p>
            You can also check the results of previous draws by selecting a date
            and time in the drop-down box to the right of the numbers
            corresponding to the winning combination.
          </p>
          <div className="keno-result-share-with">
            <h3>Share with:</h3>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="/images/media-icon1.png"
                    className="img-fluid"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/images/media-icon2.png"
                    className="img-fluid"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/images/media-icon3.png"
                    className="img-fluid"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/images/media-icon4.png"
                    className="img-fluid"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/images/media-icon5.png"
                    className="img-fluid"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/images/media-icon6.png"
                    className="img-fluid"
                    alt="icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBlock;
