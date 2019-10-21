import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import configureStore from "../store";
import { BodyLayoutCSS } from "../common/global";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <BodyLayoutCSS />
        <Head>
          <title>Personio App</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(MyApp);
