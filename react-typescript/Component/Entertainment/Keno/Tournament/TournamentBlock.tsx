import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";

const TournamentBlock = () => {
  const dispatch = useDispatch();
  const { current_keno_tournament_tab } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const current_entertainment_popular_tab_value = useSelector(
    (state: State) => state.current_entertainment_sub_menu
  );

  const current_keno_tournament_tab_value = useSelector(
    (state: State) => state.currentKenoTournamentTab
  );

  const changeTab = (tabName: string) => {
    current_keno_tournament_tab(tabName);
  };
  return (
    <div id="Keno_Tournament" className="keno_tabcontent keno-d-block">
      <div className="Keno-Tournament-content">
        <div className="tab Keno-Tournament-tab">
          <button
            className={
              current_keno_tournament_tab_value === "upcoming"
                ? "tablinks active"
                : "tablinks"
            }
            onClick={() => changeTab("upcoming")}
          >
            UPCOMING
          </button>
          <button
            className={
              current_keno_tournament_tab_value === "ended"
                ? "tablinks active"
                : "tablinks"
            }
            onClick={() => changeTab("ended")}
          >
            ENDED
          </button>
        </div>

        {current_keno_tournament_tab_value === "upcoming" ? (
          <div id="UPCOMING" className="uptabcontent keno-d-block">
            <div className="KT-table">
              <table>
                <thead>
                  <tr className="table-header">
                    <th className="Sl-No">NO</th>
                    <th className="TOURNAMENT">TOURNAMENT</th>
                    <th className="WINNING-STRATEGY">WINNING STRATEGY</th>
                    <th className="JACKPOT">JACKPOT</th>
                    <th className="GUESS-RANGE">GUESS RANGE</th>
                    <th className="mr-0 TOURNAMENT-STATUS">
                      TOURNAMENT STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-F6F6F6">
                    <td className="Sl-No">1</td>
                    <td className="TOURNAMENT">Treasure Hunt Monthly</td>
                    <td className="WINNING-STRATEGY">A X BET = X Points</td>
                    <td className="JACKPOT">1,000,000 AMBER</td>
                    <td className="GUESS-RANGE">1 – 10 / 70</td>
                    <td className="mr-0 TOURNAMENT-STATUS">
                      <h2 className="open">OPen</h2>
                      <h3>Closing July 22 2020, 12:14 PM</h3>
                    </td>
                  </tr>

                  <tr className="bg-FCFCFC">
                    <td className="Sl-No">2</td>
                    <td className="TOURNAMENT">Kill the Boss / Qual #1</td>
                    <td className="WINNING-STRATEGY">A X BET = X Points</td>
                    <td className="JACKPOT">1,000,000 AMBER</td>
                    <td className="GUESS-RANGE">1 – 10 / 70</td>
                    <td className="mr-0 TOURNAMENT-STATUS">
                      <h2 className="open">OPen</h2>
                      <h3>Closing July 22 2020, 12:14 PM</h3>
                    </td>
                  </tr>

                  <tr className="bg-F6F6F6">
                    <td className="Sl-No">3</td>
                    <td className="TOURNAMENT">Treasure Hunt Monthly</td>
                    <td className="WINNING-STRATEGY">A X BET = X Points</td>
                    <td className="JACKPOT">1,000,000 AMBER</td>
                    <td className="GUESS-RANGE">1 – 10 / 70</td>
                    <td className="mr-0 TOURNAMENT-STATUS">
                      <h2 className="open">OPen</h2>
                      <h3>Closing July 22 2020, 12:14 PM</h3>
                    </td>
                  </tr>

                  <tr className="bg-FCFCFC">
                    <td className="Sl-No">4</td>
                    <td className="TOURNAMENT">Kill the Boss / Qual #1</td>
                    <td className="WINNING-STRATEGY">A X BET = X Points</td>
                    <td className="JACKPOT">1,000,000 AMBER</td>
                    <td className="GUESS-RANGE">1 – 10 / 70</td>
                    <td className="mr-0 TOURNAMENT-STATUS">
                      <h2 className="open">OPen</h2>
                      <h3>Closing July 22 2020, 12:14 PM</h3>
                    </td>
                  </tr>

                  <tr className="bg-F6F6F6">
                    <td className="Sl-No">5</td>
                    <td className="TOURNAMENT">Treasure Hunt Monthly</td>
                    <td className="WINNING-STRATEGY">A X BET = X Points</td>
                    <td className="JACKPOT">1,000,000 AMBER</td>
                    <td className="GUESS-RANGE">1 – 10 / 70</td>
                    <td className="mr-0 TOURNAMENT-STATUS">
                      <h2 className="open">OPen</h2>
                      <h3>Closing July 22 2020, 12:14 PM</h3>
                    </td>
                  </tr>

                  <tr className="bg-FCFCFC">
                    <td className="Sl-No">6</td>
                    <td className="TOURNAMENT">Kill the Boss / Qual #1</td>
                    <td className="WINNING-STRATEGY">A X BET = X Points</td>
                    <td className="JACKPOT">1,000,000 AMBER</td>
                    <td className="GUESS-RANGE">1 – 10 / 70</td>
                    <td className="mr-0 TOURNAMENT-STATUS">
                      <h2 className="open">OPen</h2>
                      <h3>Closing July 22 2020, 12:14 PM</h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div id="ENDED" className="uptabcontent keno-d-block">
            <div className="KT-table">
              <div className="mybet-no-bet">
                <div>
                  <img
                    src="images/no-bet.png"
                    className="img-fluid"
                    alt="no bet"
                  />
                </div>
                <p>NO BET FOUND</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentBlock;
