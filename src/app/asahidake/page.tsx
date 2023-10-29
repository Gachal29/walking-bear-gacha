"use client"
import { NextPage } from "next"
import Image from "next/image"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import useWindowSize from "utils/useWindowSize"
import Link from "next/link"

// image
import LocationTop from "@/location-top.jpg"
import Location1 from "@/material/location1.jpg"
import Location2 from "@/material/location2.jpg"
import Location3 from "@/material/location3.jpg"
import Location4 from "@/material/location4.jpg"
import Location5 from "@/material/location5.jpg"
import Bear1 from "@/bear/bear1.png"

const Asahidake: NextPage = () => {
  const {width, height} = useWindowSize()
  const { scrollYProgress } = useScroll()

  const gachaTime = [
    {upper: 0.99, lower: 0.90, gachaled: false, confirm: false},
    {upper: 0.80, lower: 0.85, gachaled: false, confirm: false},
    {upper: 0.70, lower: 0.73, gachaled: false, confirm: false},
    {upper: 0.40, lower: 0.31, gachaled: false, confirm: false},
    {upper: 0.25, lower: 0.20, gachaled: false, confirm: false},
  ]

  const gachal = (index: number) => {
    const g = Math.floor(Math.random() * 2)
    if (g) {
      document.addEventListener('touchmove', (e) => {e.preventDefault()}, {passive: false})
      document.addEventListener('wheel', (e) => {e.preventDefault()}, {passive: false})
      console.log("bear")
      
      window.noticeDead.showModal()
    } else {
      gachaTime[index].confirm = true
      if (index+1 == gachaTime.length) {
        window.clear.showModal()
      } else {
        console.log("lucky!")
      }
    }
  }

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= gachaTime[0].upper && latest >= gachaTime[0].lower && !gachaTime[0].gachaled) {
      gachal(0)
      gachaTime[0].gachaled = true
    } else if (latest <= gachaTime[1].upper && latest >= gachaTime[1].lower && !gachaTime[1].gachaled) {
      gachal(1)
      gachaTime[1].gachaled = true
    } else if (latest <= gachaTime[2].upper && latest >= gachaTime[2].lower && !gachaTime[2].gachaled) {
      gachal(2)
      gachaTime[2].gachaled = true
    } else if (latest <= gachaTime[3].upper && latest >= gachaTime[3].lower && !gachaTime[3].gachaled) {
      gachal(3)
      gachaTime[3].gachaled = true
    } else if (latest <= gachaTime[4].upper && latest >= gachaTime[4].lower && !gachaTime[4].gachaled) {
      gachal(4)
      gachaTime[4].gachaled = true
    }
  })

  window.scrollTo(0, document.body.scrollHeight)

  return (
    <motion.main id="main">
      <Image src={ Location5 } alt="" width={ width } />
      <Image src={ Location4 } alt="" width={ width } />
      <Image src={ Location3 } alt="" width={ width } />
      <Image src={ Location2 } alt="" width={ width } />
      <Image src={ Location1 } alt="" width={ width } />

      <dialog id="notice-dead" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Your Dead!</h3>
          <Image src={Bear1} alt="" />
          <div className="modal-action">
            <Link href="/" className="btn">Ok</Link>
          </div>
        </form>
      </dialog>

      <dialog id="noticeDead" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Your Dead!</h3>
          <Image src={Bear1} alt="" />
          <div className="modal-action">
            <Link href="/" className="btn">Ok</Link>
          </div>
        </form>
      </dialog>
      <dialog id="clear" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Congratulation</h3>
          <Image src={LocationTop} alt="" />
          <div className="modal-action">
            <Link href="/" className="btn">Thank you!</Link>
          </div>
        </form>
      </dialog>
    </motion.main>
  )
}

export default Asahidake
