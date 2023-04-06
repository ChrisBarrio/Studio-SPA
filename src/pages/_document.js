import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="px-40 max-[900px]:px-4 max-md:px-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
