import { useInView } from 'react-intersection-observer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { skills } from "../data";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className='bg-orange-200'>
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="text-center mb-20">
          <h1 className={`sm:text-4xl text-3xl title-font font-bold text-black mb-4 pt-10 ${inView ? 'animate-slidein100 opacity-0' : 'opacity-0'}`}>
          -  --- -- - -- SKILLS &amp; TECHNOLOGIES -- - -- - ---  -
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className={`bg-cyan-900 rounded flex p-4 h-full items-center border-orange-400 ${inView ? `animate-slidein300 opacity-0` : 'opacity-0'}`}>
                <CheckCircleIcon className="text-orange-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-bold text-white text-3xl">
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
