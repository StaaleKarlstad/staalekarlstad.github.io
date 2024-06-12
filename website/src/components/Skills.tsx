import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container bg-cyan-700 px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center border-orange-400">
                <CheckCircleIcon className="text-orange-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
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