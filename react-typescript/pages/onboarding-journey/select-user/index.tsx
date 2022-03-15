import React, { useState } from 'react'
import classnames from "classnames";
import Link from 'next/link'
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";
import { USE_ENOCH_FOR_MUTATION } from "../../../graphql/userProfileMutations";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../Component/AlertModal"));

const SelectUser: React.FC = () => {
  const router = useRouter();
  const [userType, setUserType] = useState("business");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);


  const [enochFor, { data, loading, error }] = useMutation(USE_ENOCH_FOR_MUTATION);

  const onClickHandler = () => {
    //due to api not working move next page
    router.push("/onboarding-journey/create-user/step1");
    enochFor({
      variables: {
        useEnochFor: userType,
      },
    }).then((res) => {
      if (res) router.push("/onboarding-journey/create-user/step1");
    }).catch((err) => {
      console.log(err);
      setMessage(err.message);
      setShowAlert(true);
      setSuccess(false);
    });

  }

  console.log('errpr');
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="onboarding-new-container container-bg2">

          <AlertModal
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            message={message}
            success={success}
          />
          <div className="onboard-individual-body">
            <div className="onboard-business-logo"><img src="/images/businessNewLogo.png" className="img-fluid" alt="logo" /></div>
            <div className="onboard-business-bottm-img"><img src="/images/business-img.png" className="img-fluid" alt="logo" /></div>
            <div className="onboard-individual-innerbody">
              <h2>Personalize your experience</h2>
              <p>What are you going to use Enoch for?</p>
              <ul>
                <li
                  className={classnames("border-orng", {
                    "border-blue": userType == "individual",
                  })}
                  onClick={() => setUserType('individual')}
                >
                  <div className="onboard-business-look">
                    <h3>Individual</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  {userType == "individual" && <div className="onboard-tick"><img src="/images/business-tick.png" className="img-fluid" alt="tick" /></div>}
                </li>
                <li className={classnames("border-orng", {
                  "border-blue": userType == "business",
                })}
                  onClick={() => setUserType('business')}>
                  <div className="onboard-business-look">
                    <h3>Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  {userType == "business" && <div className="onboard-tick"><img src="/images/business-tick.png" className="img-fluid" alt="tick" /></div>}
                </li>
              </ul>
            </div>
            <div className="onboard-busines-nxt"
              onClick={() => onClickHandler()}
            ><button className="bunsinss-nxt-bttn">
                {loading ? (
                  <div
                    className="spinner-border text-light"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Next"
                )}
              </button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withApollo(SelectUser, { getDataFromTree });
