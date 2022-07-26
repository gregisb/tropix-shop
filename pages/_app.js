import React from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import "../styles/globals.css";

import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  );
}

export default MyApp;
