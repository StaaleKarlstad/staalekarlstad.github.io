import { useInView } from "react-intersection-observer";
import { projects } from "../data";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="projects" ref={ref} className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className={`sm:text-4xl text-3xl font-semibold title-font mb-4 text-white pb-10 pt-6 ${inView ? 'animate-slidein100 opacity-0' : 'opacity-0'}`}>
            Projects
          </h1>
          <p className={`text-left lg:w-2/3 mx-auto leading-relaxed text-2xl ${inView ? 'animate-slidein300 opacity-0' : 'opacity-0'}`}>
          What I love most about software development is the freedom to bring cool ideas to life. Below are some of my projects, including both academic and personal work. Hover over each project for a description, and click to view the GitHub repository (except for Handl, which is currently unavailable).

          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className={`min-h-[500px] flex-grow w-3/4 lg:w-3/4 p-4 mx-auto ${inView ? 'animate-slidein500 opacity-0' : 'opacity-0'}`}>
              <h2 className="text-white py-5 text-2xl">{project.title}</h2>
              <div className="flex relative h-80 overflow-hidden">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-auto object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-5 w-full border-4 border-orange-500 bg-cyan-900 opacity-0 hover:opacity-95">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-orange-500 mb-1">
                    {project.subtitle}
                  </h2>
                
                  <p className="leading-relaxed text-white lg:text-xl md:text-lg py-8 text-left text-sm">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}