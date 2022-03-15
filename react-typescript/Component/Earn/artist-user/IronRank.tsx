const IronRank = () => {

  return (
    <div className="earn-iron-rank">
      <h3>Iron Rank</h3>
      <div className="earn-iron-rank-top">
        <div className="earn-iron-rank-top-lft">
          <h3>Personal Star</h3>
          <ul>
            <li><img src="/images/earn-star1.png" className="img-fluid" alt="star" /></li>
            <li><img src="/images/earn-star2.png" className="img-fluid" alt="star" /></li>
            <li><img src="/images/earn-star2.png" className="img-fluid" alt="star" /></li>
            <li><img src="/images/earn-star2.png" className="img-fluid" alt="star" /></li>
          </ul>
        </div>
        <div className="earn-iron-rank-top-mid">
          <h3>8 XP </h3>
          <p>Earned</p>
        </div>
        <div className="earn-iron-rank-top-right">
          <h3>Badges</h3>
          <ul>
            <li><span><img src="/images/badge1.png" className="img-fluid" alt="badge" /></span><span>CARRER BEST </span></li>
            <li><span><img src="/images/badge2.png" className="img-fluid" alt="badge" /></span><span>LEVEL UP</span></li>
            <li><span><img src="/images/badge2.png" className="img-fluid" alt="badge" /></span><span>LEVEL UP</span></li>
            <li><span><img src="/images/badge2.png" className="img-fluid" alt="badge" /></span><span>LEVEL UP</span></li>
          </ul>
        </div>
      </div>
      <div className="earn-iron-rank-bottom">
        <h3>FIRST WIN OF THE DAY <span>+500XP</span></h3>
        <div className="earn-iron-progressbar-block">
          <div className="earn-top-value"><span>4 XP</span><span>565 XP</span></div>
          <div className="earn-iron-progressbar">
            <div className="earn-iron-progressbar-nner">

            </div>
            <span className="progressbar-val">8XP</span>
          </div>
        </div>
        <p className="earn-iron-bottm-txt">+20% XP(BONUS ) </p>
      </div>
    </div>
  );
};

export default IronRank;
