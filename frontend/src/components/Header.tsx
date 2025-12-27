import type React from "react"
import { useNavigate } from "react-router-dom"

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

  return (
    <nav className="bg-[rgb(33,52,72)] dark:bg-gray-800 shadow">
      <div className="flex items-center justify-between px-12 py-4 text-white">
        <span className="font-bold text-xl hover:text-blue-300 cursor-pointer">Aaron</span>

        <div className="flex space-x-6">
          <a onClick={goToHome} className="hover:text-blue-300 cursor-pointer">Home</a>
          <a onClick={goToAbout} className="hover:text-blue-300 cursor-pointer">About</a>
          <a onClick={goToProjects} className="hover:text-blue-300 cursor-pointer">Projects</a>
          <a onClick={goToContact} className="hover:text-blue-300 cursor-pointer">Contact</a>
        </div>
      </div>
    </nav>
  )
}


export default Header