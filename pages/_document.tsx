import { ColorSchemeScript } from "@mantine/core"
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <ColorSchemeScript />
        <meta name="prefers-color-scheme" content="dark"></meta>
        <meta name="darkreader-lock" content="dark"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
