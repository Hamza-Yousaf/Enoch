import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const SignIn = dynamic(() => import("../../Component/SignIn"));
import { verifyToken } from "../../lib/verifyToken";
import router from "next/router";
import Communities from './Communities';

interface BoardingJourProps {}

interface BoardingJourState {}

class BoardingJourCommunity extends React.Component<
  BoardingJourProps,
  BoardingJourState
> {
  // constructor(props: BoardingJourProps) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    if (typeof window !== "undefined") {
      if (!verifyToken()) {
        router.replace("/");
        return <SignIn />;
      }
    }
    
    return (
      <div className="container-fluid dashboard-body-bg second-body-bg">
        <Header />
        <Communities/>
      </div>
    );
  }
}

export default BoardingJourCommunity;
