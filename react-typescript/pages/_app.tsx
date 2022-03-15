import "antd/dist/antd.css";
import "../styles/bootstrap.min.css";
import "../styles/global.css";
import "../styles/dashboard-header.css";
import "../styles/dashboard-style.css";
import "../styles/helpCenterStyle.css";
import "../styles/help-center.css";
import "../styles/dApp-S-home.css";
import "../styles/home-post.css";
import "../styles/signup-signin-style.css";
import "../styles/other-style.css";
import "../styles/new-style.css";
import "../styles/responsive.css";
import "../styles/admin-help-center.css";
import "../styles/helpcenter-Admin.css";
import "../styles/community.css";
import "../styles/comunitySettings.css";
import "../styles/community-setting-style.css"
import "../styles/manage-community.css";
import "../styles/entertainment.css";
import "../styles/style.css";
import "../styles/account.css";
import "../styles/dash.css";
import "../styles/admin-profile.css";
import "../styles/earn.css";
import "../styles/trade.css";
import "../styles/company.css";
import "../styles/OnBoardingJourney.css";
import "../styles/team-journey.css";
import "../styles/admin-team.css";
import "../styles/onboarding-newstyle.css";
import "../styles/header-footer.css";
import "../styles/enochweb.css";
import "../styles/dashboard-header.css";
import "../styles/dashboard-style.css";
import "../styles/social.css";
import "../styles/mynetwork.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css";
import "render-smooth-image-react/build/style.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Stores } from "../state/index";
import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

//@ts-ignore

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={Stores.default.store}>
        <PersistGate persistor={Stores.default.persistedStore}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}
export default MyApp;
