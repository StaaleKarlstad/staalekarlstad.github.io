import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
            The thing I love most about software development is the possibility to create cool stuff.
            I have been involved with some pretty neat projects, where I have been fortunate to work with some very skilled people.

          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className=" w-3/4 lg:w-1/2 w-100 p-4 mx-auto">
              <h2 className="text-white py-5 text-2xl">{project.title}</h2>
              <div className="flex relative h-48 overflow-hidden">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-5 w-full border-4 border-gray-800 bg-cyan-900 opacity-0 hover:opacity-85">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                    {project.subtitle}
                  </h2>
                
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}