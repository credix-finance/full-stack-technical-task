import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  override render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-credix-primary font-mono min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
