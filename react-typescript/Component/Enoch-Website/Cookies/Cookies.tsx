
import React, { useState, Component } from "react";
import Cookies from 'universal-cookie';

interface CookiesInterFace {
  is_visible: boolean,
  isCookieSet: boolean
}
class CookiesWebsite extends React.Component<{}, CookiesInterFace> {
  constructor(props: any) {
    super(props);
    this.state = {
      is_visible: false,
      isCookieSet: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
    const cookies = new Cookies();
    this.setState({ isCookieSet: !!cookies.get('acceptCookie') });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  setCookie() {
    const cookies = new Cookies();
    cookies.set('acceptCookie', 'true', { path: '/' });
    this.setState({ isCookieSet: true });
  }

  render() {
    const { is_visible, isCookieSet } = this.state;
    return (
      <>
      {!isCookieSet ? (
      <div className="cookies-cls">
        <div className="enochweb-container">
          <div className="cookies-cls-bottm">
            <div className="cookies-cls-bottm-lft">
              <div>
                <img
                  src="/images/cookis.png"
                  alt="cookis"
                  className="img-fluid"
                />
              </div>
              <p>
                We use cookies to improve user experience, and analyze website
                traffic. For these reasons, we may share your site usage data
                with our analytics partners. By clicking "Accept &amp; Procced"
                you consent to store on your device all the technologies
                described in our <a href="#">Cookie Policy.</a>
              </p>
            </div>
            <div className="cookies-cls-bottm-right"   onClick={() => this.setCookie()}>
              <button className="cookies-btn">Accept &amp; Proceed</button>
            </div>
          </div>
        </div>
      </div>
      ) : null}
      </>
    );
  }
}


export default CookiesWebsite
