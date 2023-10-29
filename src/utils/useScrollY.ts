import { useEffect, useState } from "react"

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleSetScrollY = () => {
        setScrollY(window.scrollY)
      }

      window.addEventListener("touchmove", handleSetScrollY)
      window.addEventListener("wheel", handleSetScrollY)
      handleSetScrollY()

      console.log(scrollY)

      return () => {
        window.removeEventListener("touchmove", handleSetScrollY)
        window.addEventListener("wheel", handleSetScrollY)
      }
    } else {
      return
    }
  }, [])

  return useScrollY
}

export default useScrollY