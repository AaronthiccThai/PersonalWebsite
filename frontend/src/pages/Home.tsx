import React, { useEffect, useState } from "react"

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
    <div className="flex min-h-screen flex-col justify-center items-center">
      <p className="font-mono text-[50px] ">
        {displayed}
        {index < text.length && <span className="ml-1 animate-pulse">|</span>}
      </p>
    </div>

  )
}

export default Home
