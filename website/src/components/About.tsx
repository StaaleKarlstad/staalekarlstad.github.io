export default function About(){
    return (
        <section id="about" className="bg-white">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-black pb-10 mx-auto">
            Hi, I am:
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-4xl font-extrabold text-cyan-700 mx-auto">
            Ståle.
          </p>
          <p className="mb-8 leading-relaxed text-4xl font-extrabold mx-auto">
            Developer.
          </p>
          <p className="mb-8 leading-relaxed text-4xl font-extrabold mx-auto">
            Illustrator.
          </p>
          <p className="mb-8 leading-relaxed text-4xl font-extrabold mx-auto">
            Musician.
          </p>
        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mx-auto">
          <img
            className="object-cover object-center rounded size-3/4"
            alt="hero"
            src="./src/assets/website_portrait3.jpeg"
          />
        </div>
      </div>
    </section>
    )
    
}