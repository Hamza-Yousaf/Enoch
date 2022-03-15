import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import cookie from "cookie";

interface Props {
  accessToken: string;
}

//@ts-ignore
const EnochLanding: NextPage<Props> = ({ accessToken }) => {
  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      if (accessToken) {
        router.push("/feeds");
      }
    }, 3000);
  }, []);

  return (
    <>
      <div className="loader-screen">
        <div className="white-circle">
          <div className="circle-inner-content">
            <h3 className="circle-heading">Meet Evie AI</h3>
            <h3 className="circle-heading">Your Artificial Intelligence</h3>
            <div className="loader-img-box">
              <img
                className="loader-size"
                src="/images/loader.PNG"
                alt="img-fluid"
              />
            </div>
            <span className="crowd-text">Hello Crowd</span>
            <span className="w-enoch-text">Welcome to Enoch</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnochLanding;
