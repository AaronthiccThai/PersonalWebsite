import { FaReact, FaNodeJs, FaGit, FaJava, FaPython } from "react-icons/fa";
import { SiKotlin, SiMysql } from "react-icons/si";

import Rating from "../components/Rating";
import techs from "../data/techs.json";
import type { JSX } from "react";
import FloatingCircles from "../components/FloatingCircles";


const iconMap: Record<string, JSX.Element> = {
  react: <FaReact />,
  node: <FaNodeJs />,
  git: <FaGit />,
  kotlin: <SiKotlin />,   
  java: <FaJava/>,
  python: <FaPython/>,
  postgresql: <SiMysql/>

};

const Tech = () => {

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{["--bg-start" as any]: "#F29AAE", ["--bg-end" as any]: "#C47BE4",}}
    >      
      <FloatingCircles></FloatingCircles>
      
      <h1 className="text-3xl font-semibold tracking-tight z-10"> Tech Stack </h1>
      <div className="z-10">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-80 mb-4"
          >
            <div className="flex items-center gap-2">
              <div className="text-4xl">
                {iconMap[tech.icon]}
              </div>
              <span className="text-white">{tech.name}</span>
            </div>
            <Rating proficiency={tech.proficiency} />
          </div>
        ))}
      </div>     
    </div>  
  );



}

export default Tech;