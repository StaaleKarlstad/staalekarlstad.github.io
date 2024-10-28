import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="bg-amber-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl font-extrabold hover:text-cyan-200">
            Ståle Karlstad
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="text-white mr-5 text-lg hover:text-cyan-200">
            Projects
          </a>
          <a href="#skills" className="text-white mr-5 text-lg hover:text-cyan-200">
            Skills
          </a>
          <a href="#drawings" className="text-white mr-5 text-lg hover:text-cyan-200">
            Drawings
          </a>
          <a href="#music" className="text-white mr-5 text-lg hover:text-cyan-200">
            Music
          </a>
          <a href="#contact" className="text-white mr-5 text-lg hover:text-cyan-200">
            Contact
          </a>
        </nav>
        <div className="flex items-center ml-auto">
          <a href="https://www.linkedin.com/in/st%C3%A5le-karlstad-a56556289/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-200 ml-3 hidden lg:block">
            <AiFillLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/StaaleKarlstad" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-200 ml-3 hidden lg:block">
            <AiFillGithub className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/stonkyart/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-200 ml-3 hidden lg:block">
            <AiFillInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
