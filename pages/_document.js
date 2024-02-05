import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/static/example_svg.ico" />
        {/* <link rel="icon" href="/static/example2.svg" /> */}
        <meta charSet="UTF-8"></meta>
        <meta
          name="keywords"
          content="Tibetan Tibet Bodja Podcast American Merch E-Commerce Tenzin Chaksam"
        ></meta>
        <meta name="description" content="Bodja podcast website"></meta>
        <meta name="author" content="Tenzin Chaksam"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
