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
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📌</text></svg>" />
          <title>MJ Tucker</title>
        </Head>
        <NavBar />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
