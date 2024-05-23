//import * as Sentry from "@sentry/node";
import App from "next/app";
import Head from "next/head";
import React from "react";
import NavBar from "../src/components/nav-bar/nav-bar";

import "./index.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>MJ Tucker</title>
        </Head>
        <NavBar />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
