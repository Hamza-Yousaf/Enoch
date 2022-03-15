import React from "react";

const AllBetsBlock = () => {
  return (
    <div id="allBets" className="tourtabcontent keno-d-block">
      <div className="KT-table2">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th className="">NO</th>
              <th className="">Game contest</th>
              <th className="">BET ID</th>
              <th className="">AMMOUNT</th>
              <th className="">mULTIPLIER</th>
              <th className="">PAYOUT</th>
              <th className="">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">
                <img
                  src="/images/bets-no.png"
                  className="img-fluid"
                  alt="icon"
                />
              </td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">7000 AMBER</td>
              <td className="">X10</td>
              <td className="payout-clr">50,000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr>
              <td className="">
                <img
                  src="/images/bets-no.png"
                  className="img-fluid"
                  alt="icon"
                />
              </td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">11000 AMBER</td>
              <td className="">X10</td>
              <td className="payout-clr">50,000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr>
              <td className="">
                <img
                  src="/images/bets-no.png"
                  className="img-fluid"
                  alt="icon"
                />
              </td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">7000 AMBER</td>
              <td className="">X10</td>
              <td className="payout-clr">50,000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr>
              <td className="">4.</td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">1700 AMBER</td>
              <td className="">X4</td>
              <td className="">22,000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr>
              <td className="">5.</td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">2800 AMBER</td>
              <td className="">X6</td>
              <td className="">22,000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr>
              <td className="">6.</td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">980 AMBER</td>
              <td className="">X6</td>
              <td className="">15,000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr className="winner-row-avtive">
              <td className="">7.</td>
              <td className="">
                Treasure Hunt Monthly
                <span className="ml-2">
                  <img
                    src="/images/TInfo.png"
                    className="img-fluid"
                    alt="imfo"
                  />
                </span>
              </td>
              <td className="">#30864451032842241</td>
              <td className="">1150 AMBER</td>
              <td className="">X4</td>
              <td className="">4,000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr>
              <td className="">8.</td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">900 AMBER</td>
              <td className="">X6</td>
              <td className="">39,00 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr>
              <td className="">9.</td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">2000 AMBER</td>
              <td className="">X1</td>
              <td className="">1000 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
            <tr>
              <td className="">10.</td>
              <td className="">Treasure Hunt Monthly</td>
              <td className="">#30864451032842241</td>
              <td className="">3600 AMBER</td>
              <td className="">X10</td>
              <td className="">800 AMBER</td>
              <td className="">Aug 12, 2021, 5:12 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="keno-table-pagination">
        <span className="pagi-angle">
          <i className="fa fa-angle-left"></i>
        </span>
        <ul>
          <li className="pagiactive">1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <span className="pagi-angle">
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
    </div>
  );
};

export default AllBetsBlock;
