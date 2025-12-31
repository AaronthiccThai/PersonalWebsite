import { Typewriter } from "react-simple-typewriter"
const About = () => {

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{["--bg-start" as any]: "#ead431", ["--bg-end" as any]: "#e9a398",}}
    >
      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>        

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
          />
        </p>

        
      </div>
    </div>
  ) 
}
export default About