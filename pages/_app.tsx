//import * as Sentry from "@sentry/node";
import App from "next/app";
import Head from "next/head";
import React from "react";

import "./index.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>sample-next-app</title>
        </Head>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </React.Fragment>
    );
  }
}

export default MyApp;
