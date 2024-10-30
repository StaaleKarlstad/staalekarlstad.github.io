import { useInView } from "react-intersection-observer";

export default function Music() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section id="music" ref={ref} className="bg-orange-200">
      <div className="container mx-auto px-10 py-20 md:flex-row items-center">
        <h1
          className={`sm:text-4xl text-xl font-extrabold title-font text-black mb-4 px-8 ${
            inView ? "animate-slidein100 opacity-0" : "opacity-0"
          }`}
        >
          MUSIC -- - --- -
        </h1>
        <div className={`items-center gap-7 grid md:grid-flow-col lg:md:grid-flow-col grid-flow-row ${
              inView ? "animate-slidein100 opacity-0" : "opacity-0"
            }`}>
          <p
            className={`mb-8 md:px-8 leading-relaxed md:text-2xl md:font-extrabold text-l text-black mx-auto`}
          >
            I once got myself a degree in music, and I have been putting it to
            use ever since. Over the years I have played plenty of awesome gigs,
            participated in exciting session work and I've obtained a lot of
            experience in music production using Logic. I even got to work two
            summers as a music teacher in China! You will usually find me
            rocking out on the electric bass, but I also sing, play guitar and
            piano.
          </p>

          <div
            className={`max-w-md w-full md:max-w-md md:w-full mx-auto object-center md:px-8 ${
              inView ? "animate-slidein100 opacity-0" : "opacity-0"
            }`}
          >
            <img
              className="object-cover object-center rounded size-3/4"
              alt="hero"
              src="./byting_konsert7.jpg"
            />
            <p className="italic py-4">
              High energy and good vibes at Tromsø <br></br> Countryfestival
              2024
            </p>
          </div>
        </div>
        <hr className="border-t-2 border-black my-10" />
          <div className={`py-10`}>
            <h3 className='mb-8 md:px-8 text-2xl font-extrabold text-black mx-auto'>
              Hear some of my music in the snippet below
            </h3>
            <video controls className='md:py-8 md:px-8 lg:w-5/6'>
              <source src='./Buncharted-ScreenRec.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
      </div>
    </section>
  );
}
