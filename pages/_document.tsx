import { ColorSchemeScript } from "@mantine/core"
import { Analytics } from '@vercel/analytics/react'
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
