const Project = () => {   

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{["--bg-start" as any]: "#e3cb9b", ["--bg-end" as any]: "#da7bf0",}}
    >      
      <h1 className="z-10">Welcome to the Project Page - WIP</h1> 
      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>         
    </div>
  ) 
}
export default Project