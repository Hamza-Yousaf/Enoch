import React from "react";

const MergeAccountsForm = () => {
  return (
    <div className="accordion-marge-account">
      <p>
        Here’s the account you’re signed into now - you’ll keep this account and
        the connections from the duplicate account will be moved to this one.
      </p>
      <div className="marge-account-user">
        <span>
          <img src="images/avtr.png" alt="avater" className="img-fluid" />
        </span>
        Robert Miles
      </div>
      <div className="marge-account-email">
        <h3>Enter the email address and password of the duplicate account.</h3>
        <p>This lets us know you own the account.</p>
        <p>
          The connections from the account will be transferred. After you review
          and confirm, that account will be closed.
        </p>
        <div className="marge-account-email-form">
          <form>
            <div className="account-email-input">
              <input type="txt" placeholder="r.rose@gmail.com" />
            </div>
            <div className="account-email-input">
              <input type="password" placeholder="***************" />
            </div>
            <p>
              <a href="#">Having Trouble?</a>
            </p>
            <div>
              <button type="submit" className="bttn-primary mrgacc-bttn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MergeAccountsForm;
