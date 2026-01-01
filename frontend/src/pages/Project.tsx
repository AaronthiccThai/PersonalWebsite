const Project = () => {   
  const projects = [
    { name: "Random Game", 
      description: "A basic RTS game made in Unity", 
      tech: ["C#", "Unity"],
      link: "https://github.com/AaronthiccThai/MyGame" 
      
    },
    { name: "Bank Website", 
      description: "A non deployed bank website made with ReactJS.", 
      tech: ["SQL", "Python", "ReactJS"], 
      link: "https://github.com/AaronthiccThai/BankProject" 

    },
    { name: "Network Attack Visualiser", 
      description: "A network attack visualiser for my Cyber Security project", 
      tech: ["Python", "ReactJS"],
      link: "https://github.com/AaronthiccThai/NetworkAttackVisualiser" 
    },
    {
      name: "Basic Boss Fight Game",
      description: "A simple boss fight game made in Java",
      tech: ["Java"],
      link: "https://github.com/AaronthiccThai/BossFightGame"
    }
    
  ] // Placeholder for future project data

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{["--bg-start" as any]: "#e3cb9b", ["--bg-end" as any]: "#da7bf0",}}
    >      
      <h1 className="z-10 text-xl py-4">
        Any projects I did whether its basic or more advanced.
        These projects are mainly random projects I did to practice my skills which I prefer over doing LeetCode.
        <br></br>
        A lot of these projects were either not deployed or were really short and simple. Some were done right after doing a comp course 
        just to practice what I learned.
      </h1> 
      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 "> 
          {projects.map((project, index) => (
            <div key={index} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg border hover:scale-105">
              <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
              <p className="text-black wrap-break-words">{project.description}</p>
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="inline-block bg-gray-200 bg-opacity-50 text-gray-800 text-sm px-2 py-1 rounded-full mr-2 mt-2">
                  {tech}
                </span>
              ))}
              <a href={project.link} className="text-blue-500 hover:underline mt-4 block" target="_blank" rel="noreferrer">Repo</a>
            </div>
          ))
        }
    
      </div>       
    </div>
  ) 
}
export default Project