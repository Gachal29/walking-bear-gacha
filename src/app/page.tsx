"use client"
import { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {

  return (
    <main className="h-screen flex items-center justify-center">
      <Link className="btn btn-accent btn-lg" href="/asahidake">「旭岳」をプレイ</Link>
    </main>
  )
}

export default Home
