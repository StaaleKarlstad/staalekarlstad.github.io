import MoodIcon from '@mui/icons-material/Mood';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Ståle Karlstad
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <div className="flex items-center ml-auto">
          <a href="https://www.linkedin.com/in/st%C3%A5le-karlstad-a56556289/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 ml-3">
            <AiFillLinkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/thesepaperplanets/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 ml-3">
            <AiFillInstagram className="w-6 h-6" />
          </a>
          <a href="https://github.com/StaaleKarlstad" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 ml-3">
            <AiFillGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
