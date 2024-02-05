import { Layout } from "@/components";
import Head from "next/head";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContext>
        <Head>
          <title>Bodja</title>
        </Head>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
        <SpeedInsights />
        <Analytics />
      </StateContext>
    </>
  );
}
