import { useState } from "react";
import { drawings } from "../data";
import { AiFillInstagram } from "react-icons/ai";
import Modal from "./Modal";

export default function Drawings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section id="drawings" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="text-center lg:text-left mb-20 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Drawing
            </h1>
            <p className="text-4xl leading-relaxed xl:w-2/3 lg:w-full mx-auto lg:mx-0">
              Drawing was my first true passion in life, and it has followed me for about 25 years. Check out my Instagram for more.
            </p>
            <a
              href="https://www.instagram.com/thesepaperplanets/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 inline-block mt-4"
            >
              <AiFillInstagram className="w-6 h-6" />
            </a>
          </div>
          {/* Images Section */}
          <div className="flex flex-col space-y-4">
            {drawings.map((drawing) => (
              <div key={drawing} className="relative cursor-pointer" onClick={() => handleImageClick(drawing)}>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </section>
  );
}

