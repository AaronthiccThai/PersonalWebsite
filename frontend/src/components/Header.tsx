import type React from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Header: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  const goToTech = () => {
    navigate("/tech");
  }
  return (
  <nav className="bg-linear-to-r from-(--bg-start) to-(--bg-end) shadow">
      <div className="flex items-center justify-between px-12 py-4 text-white">
        <div>
          <span className="font-bold text-xl hover:text-blue-300 cursor-pointer" onClick={goToHome}>Aaron</span>
          <FontAwesomeIcon icon={faGithub} className="px-2 hover:text-blue-300 cursor-pointer text-2xl"
            onClick={() => window.open("https://github.com/AaronthiccThai", "_blank")}
          />
          <FontAwesomeIcon icon={faLinkedin} className="px-2 hover:text-blue-300 cursor-pointer text-2xl"
            onClick={() => window.open("https://www.linkedin.com/in/aaron-thai-917536256/", "_blank")}
          />
        </div> 

        <div className="flex space-x-6">
          <a onClick={goToHome} className="hover:text-blue-300 cursor-pointer">Home</a>
          <a onClick={goToAbout} className="hover:text-blue-300 cursor-pointer">About</a>
          <a onClick={goToTech} className="hover:text-blue-300 cursor-pointer">Tech</a>
          <a onClick={goToProjects} className="hover:text-blue-300 cursor-pointer">Projects</a>
          <a onClick={goToContact} className="hover:text-blue-300 cursor-pointer">Contact</a>
        </div>
      </div>
    </nav>
  )
}


export default Header