import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C4D0JCJBKS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag("js", new Date());

              gtag("config", "G-C4D0JCJBKS");
            `
          }}
        />
        <meta
          name="description"
          content="Jano - Creative Multipurpose React NextJS Template"
        />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, business multipurpose, charity, creative, creative template, crypto, education, hosting, insurance, landing page, portfolio, real estate, responsive, react, nextjs"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}