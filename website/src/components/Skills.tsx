import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className='bg-white'>
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl title-font font-bold text-black mb-4 pt-10">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-black rounded flex p-4 h-full items-center border-orange-400">
                <CheckCircleIcon className="text-orange-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-bold text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}