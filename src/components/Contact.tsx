import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Contact(){
    return (
    <section id="contact" className="bg-amber-900">
        <div className="container px-5 py-10 mx-auto lg:px-20">
            <div className="md:text-4xl text-xl font-bold text-white grid grid-flow-row lg:grid-flow-col gap-8">
                <p>Email me: stalekarlstad@gmail.com</p>
                <div className="mx-auto md:pt-0 pt-5 grid grid-flow-col">
                    <a href="https://www.linkedin.com/in/st%C3%A5le-karlstad-a56556289/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-amber-700 ml-3 mx-auto lg:block">
                      <AiFillLinkedin className="w-10 h-10" />
                    </a>
                    <a href="https://github.com/StaaleKarlstad" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-amber-700 ml-3 lg:block">
                      <AiFillGithub className="w-10 h-10" />
                    </a>
                    <a href="https://www.instagram.com/stonkyart/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-amber-700 ml-3 lg:block">
                      <AiFillInstagram className="w-10 h-10" />
                    </a>
                </div>
            </div>
            
        </div>
    </section>
    )
}