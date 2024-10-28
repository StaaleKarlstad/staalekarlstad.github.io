import { useState } from "react";
import { drawings } from "../data";
import Modal from "./Modal";
import { useInView } from "react-intersection-observer";

export default function Drawings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section
      id="drawings"
      ref={ref}
      className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center lg:text-left mb-20 lg:mb-0 py-24">
            <h1
              className={`sm:text-4xl text-3xl font-extrabold title-font text-white mb-4 ${
                inView ? "animate-slidein100 opacity-0" : "opacity-0"
              }`}
            >
              Drawing
            </h1>
            <br></br>
            <p
              className={`text-2xl leading-relaxed lg:w-full mx-auto lg:mx-0 italic ${
                inView ? "animate-slidein100 opacity-0" : "opacity-0"
              }`}
            >
              “I sometimes think there is nothing so delightful as drawing.”{" "}
              <br></br>
              <b>Vincent van Gogh</b>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <p
              className={`text-2xl leading-relaxed lg:w-full mx-auto lg:mx-0 ${
                inView ? "animate-slidein300 opacity-0" : "opacity-0"
              }`}
            >
              Drawing allows you to deeply engage with the world around you,
              while also providing an escape from it. It invites us to study
              light, colours, perspective, anatomy, composition and more. I
              really can't get enough of it!<br></br> Feel free to visit my
              instagram to see more.
            </p>
          </div>

          <div className="flex flex-col space-y-4 py-20">
            {drawings.map((drawing) => (
              <div
                key={drawing}
                className={`relative cursor-pointer ${
                  inView ? "animate-slidein300 opacity-0" : "opacity-0"
                }`}
                onClick={() => handleImageClick(drawing)}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    className="object-cover object-center w-full h-full"
                    alt="drawing"
                    src={drawing}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </section>
  );
}
