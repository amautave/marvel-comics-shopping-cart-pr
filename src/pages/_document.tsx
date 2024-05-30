import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('/background.png')] h-full m-0 p-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
