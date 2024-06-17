import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Contact(){
    return (
    <section id="contact" className="bg-orange-200">
        <div className="container px-5 py-10 mx-auto lg:px-40">
            <div className="flex flex-wrap text-4xl font-bold">
                Email me: stalekarlstad@gmail.com
                <div className="flex items-center mx-auto">
                    <a href="https://www.linkedin.com/in/st%C3%A5le-karlstad-a56556289/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-amber-700 ml-3 mx-auto lg:block">
                      <AiFillLinkedin className="w-10 h-10" />
                    </a>
                    <a href="https://github.com/StaaleKarlstad" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-amber-700 ml-3 lg:block">
                      <AiFillGithub className="w-10 h-10" />
                    </a>
                    <a href="https://www.instagram.com/thesepaperplanets/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-amber-700 ml-3 lg:block">
                      <AiFillInstagram className="w-10 h-10" />
                    </a>
                </div>
            </div>
            
        </div>
    </section>
    )
}