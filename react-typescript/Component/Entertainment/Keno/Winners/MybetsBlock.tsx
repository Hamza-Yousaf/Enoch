import React from "react";

const MybetsBlock = () => {
  return (
    <div id="myBets" className="tourtabcontent keno-d-block">
      <div className="KT-table2">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th className="Sl-No">NO</th>
              <th className="TOURNAMENT">Game contest</th>
              <th className="WINNING-STRATEGY">BET ID</th>
              <th className="JACKPOT">AMMOUNT</th>
              <th className="GUESS-RANGE">mULTIPLIER</th>
              <th className="mr-0 TOURNAMENT-STATUS">PAYOUT</th>
              <th className="mr-0 TOURNAMENT-STATUS">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">1.</td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">2800 AMBER</td>
              <td className="">X6</td>
              <td className="">20,000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    //      <div id="myBets" className="tourtabcontent">
    //      <div className="KT-table2">
    //        <div className="mybet-no-bet">
    //          <div>
    //            <img
    //              src="/images/no-bet.png"
    //              className="img-fluid"
    //              alt="no bet"
    //            />
    //          </div>
    //          <p>NO BET FOUND</p>
    //        </div>
    //      </div>
    //    </div>
  );
};

export default MybetsBlock;
