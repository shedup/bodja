import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/static/logo1.jpg" />
        {/*<link rel="icon" href="/static/example_svg.ico" />*}
        {/* <link rel="icon" href="/static/example2.svg" /> */}
        <meta charSet="UTF-8"></meta>
        <meta
          name="keywords"
          content="Tibetan Tibet Bodja Podcast American Merch E-Commerce Tenzin Chaksam"
        ></meta>
        <meta name="description" content="To Inspire, Connect, and Uplift Tibetan youth in exile with stories that matter"></meta>
        <meta name="author" content="Tenzin Chaksam"></meta>
    <meta name="google-site-verification" content="7BDBOOa2RABkwYZbRG0va2Fm4J9P5omcuSZ6x3Mpblw" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
