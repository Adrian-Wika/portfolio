import MainCanvas from "@/components/canvas_test/mainCanvas"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`${inter.className} overflow-hidden `}
    >
      {/* <div className="w-full flex justify-center p-0 m-0 ">
        <img className="mt-[-240px] rotate-180 rounded-lg" src="./black_hole.gif" />
      </div> */}
      <MainCanvas />
    </main>
  )
}
