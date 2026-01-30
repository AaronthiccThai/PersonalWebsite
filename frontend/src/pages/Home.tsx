import React, { useEffect, useState } from "react"
import FloatingCircles from "../components/FloatingCircles"

const Home: React.FC = () => {
  const text = "Hi, I'm Aaron and this is my for fun website!"
  const speed = 80

  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    if (index >= text.length) return

    const timeout = setTimeout(() => {
      setDisplayed(prev => prev + text[index])
      setIndex(prev => prev + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [index])

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{["--bg-start" as any]: "#8f94fb", ["--bg-end" as any]: "#00ff99",}}
    >
      <p className="font-mono text-[50px] text-white z-10">
        {displayed}
        {index < text.length && <span className="ml-1 animate-pulse">|</span>}
      </p>
      <FloatingCircles></FloatingCircles>

    </div>
  )
}

export default Home
// #8f94fb, #4e54c8