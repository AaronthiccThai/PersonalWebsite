import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import FloatingCircles from "../components/FloatingCircles"
const About = () => {
  const [doneTyping, setDoneTyping] = useState(false)
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{["--bg-start" as any]: "#ead431", ["--bg-end" as any]: "#e9a398",}}
    >
      <FloatingCircles></FloatingCircles>
      

      <div className="relative z-10 max-w-4xl text-center space-y-6 px-6">
        <h1 className="text-white text-5xl leading-tight">
          I am a final year computer science student at{" "}
          <a
            href="https://www.unsw.edu.au/"
            target="_blank"
            className="underline underline-offset-4 hover:no-underline"
            rel="noreferrer"
          >
            UNSW
          </a>
        </h1>
        <p className="text-2xl font-mono text-white">
          {!doneTyping ? (
            <Typewriter
              words={[
                "I'm a frontend developer",
                "I'm a fullstack developer",
                "I'm a game developer",
                "I'm a chatgpt enthusiast and CEO of buggy codes",
                "I'm UNEMPLOYED :(",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={() => setDoneTyping(true)}
            />
          ) : (
            "I'm UMEMPLOYED :("
          )}
        </p>
      </div>
      {!doneTyping && (
        <button
          onClick={() => setDoneTyping(true)}
          className="mt-6 text-white/70 hover:text-white underline underline-offset-4 z-10 animate-bounce"
        >
          Skip intro →
        </button>
      )}
      {doneTyping && (
        <div className="mt-12 space-y-6 text-white text-left max-w-3xl mx-auto z-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-white/40 rounded" />

          <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-medium">
              Front of House — <span className="opacity-80">KFC</span>
            </h3>
            <p className="mt-2 text-white/80">
              Customer-facing role handling orders, payments, and teamwork
              in a fast-paced environment.
            </p>

            <p className="mt-1 text-sm text-white/60">
              2022 – 2023 
            </p>
            
          </div>
        </div>
      )}

    </div>
  ) 
}
export default About