const Affiliate = () => {

    return (
        <>
        <div className="earn-progress-sect">
        <h2>Earning Progress</h2>
        <div className="earn-progress-chart-hd"><h3>Earning in USD</h3></div>
        <div className="earn-progress-chart-block">
            
            <ul className="chart-left-val">
                <li>$3000</li>
                <li>$2700</li>
                <li>$2400</li>
                <li>$2100</li>
                <li>$1800</li>
                <li>$1500</li>
                <li>$1200</li>
                <li>$900</li>
                <li>$600</li>
                <li>$300</li>
                <li>$100</li>
                <li>$0.00</li>
            </ul>
            <ul className="chart">
              <li>
                <span title="JAN"></span>
              </li>
              <li>
                <span title="FEB"></span>
              </li>
              <li>
                <span title="MAR"></span>
              </li>
              <li>
                <span title="APR"></span>
              </li>
              <li>
                <span title="MAY"></span>
              </li>
              <li>
                <span title="JUN"></span>
              </li>
              <li>
                <span title="JUL"></span>
              </li>
              <li>
                <span title="AUG"></span>
              </li>
              <li>
                <span title="SEP"></span>
              </li>
              <li>
                <span title="OCT"></span>
              </li>
              <li>
                <span title="NOV"></span>
              </li>
              <li>
                <span title="DEC"></span>
              </li>
            </ul>    
        </div>
    </div>
    <div className="earn-affiliate-transactHistory">
        <h3>Affiliate Transaction history</h3>
        <div className="affiliate-transactHistory-table table-responsive">
            <table className="table transactHistory-tbl">
                <thead>
                    <th>Timestamp</th>
                    <th>Transaction ID </th>
                    <th>Referal name   </th>
                    <th>Subject   </th>
                    <th>Type  </th>
                    <th>Royalty%  </th>
                    <th>Value </th>
                    <th>Status </th>
                </thead>
                <tbody>
                    <tr>
                        <td>13-10-2020</td>
                        <td>12345689</td>
                        <td>@Greatwilliam</td>
                        <td>Membership</td>
                        <td>Premium</td>
                        <td>4%</td>
                        <td>$0.75</td>
                        <td className="aff-pending-clr">Pending </td>
                    </tr>
                    <tr>
                        <td>13-10-2020</td>
                        <td>12345689</td>
                        <td>@Greatwilliam</td>
                        <td>Membership</td>
                        <td>Premium</td>
                        <td>4%</td>
                        <td>$0.75</td>
                        <td className="aff-pending-clr">Pending </td>
                    </tr>
                    <tr>
                        <td>13-10-2020</td>
                        <td>12345689</td>
                        <td>@Greatwilliam</td>
                        <td>Membership</td>
                        <td>Premium</td>
                        <td>4%</td>
                        <td>$0.75</td>
                        <td className="aff-pending-clr">Pending </td>
                    </tr>
                    <tr>
                        <td>13-10-2020</td>
                        <td>12345689</td>
                        <td>@Greatwilliam</td>
                        <td>Membership</td>
                        <td>Premium</td>
                        <td>4%</td>
                        <td>$0.75</td>
                        <td className="aff-pending-clr">Pending </td>
                    </tr>
                    <tr>
                        <td>13-10-2020</td>
                        <td>12345689</td>
                        <td>@Greatwilliam</td>
                        <td>Membership</td>
                        <td>Premium</td>
                        <td>4%</td>
                        <td>$0.75</td>
                        <td className="aff-pending-clr">Pending </td>
                    </tr>
                    <tr>
                        <td>13-10-2020</td>
                        <td>12345689</td>
                        <td>@Greatwilliam</td>
                        <td>Membership</td>
                        <td>Premium</td>
                        <td>4%</td>
                        <td>$0.75</td>
                        <td className="aff-pending-clr">Pending </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="aff-table-pagination">
            <ul className="">
                
                <li>					  	
                    <a href="javascript:void(0)" className="arow-link-lft"><i className="fa fa-angle-left" aria-hidden="true"></i></a>					    												      	
                </li>
                <li className="pagi-active">
                    <a href="javascript:void(0)" className="">1</a>
                </li>
                <li>
                    <a href="javascript:void(0)" className="">2</a>
                </li>
                <li><a href="javascript:void(0)" className="">3</a></li>
                
                <li>
                    <a href="javascript:void(0)" className="arow-link-right"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </li>
                
                                        
            </ul>
        </div>
    </div>
    <div className="affiliate-program-sect">
        <h3>Affiliate Program </h3>
        <div className="earn-refferal-block2">
            <div className="earn-refferal-block-lft refferal-block-padd-lft">
                <h3>Earn money with the BigCommerce Affiliate Program</h3>
                <div><button className="viiew-affiliate-btn">View Affiliate </button></div>
            </div>
            <div className="earn-refferal-block-right2">
                <img src="/images/refral-img2.png" className="img-fluid" alt="reward"/>
            </div>
        </div>
    </div>
    </>
    );
  };
  
  export default Affiliate;
  