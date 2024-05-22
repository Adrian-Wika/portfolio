import MainCanvas from "@/components/animatedComponents/CanvasManager"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`${inter.className} overflow-hidden `}
    >
      <MainCanvas />
    </main>
  )
}
