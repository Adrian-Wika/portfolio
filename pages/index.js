import MainCanvas from "@/components/canvas_test/mainCanvas"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <MainCanvas />
    </main>
  )
}
