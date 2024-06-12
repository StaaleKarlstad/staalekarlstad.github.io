import { useState } from "react";
import { drawings } from "../data";
import { AiFillInstagram } from "react-icons/ai";
import Modal from "./Modal";

export default function Drawings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState <string>('');

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };
  
  return (
    <section id="drawings">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Drawings
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Drawing was my first true passion in life, and it has followed me for about 25 years. Check out my instagram for more
          </p>
          <a href="https://www.instagram.com/thesepaperplanets/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-300 ml-3 mx-auto">
            <AiFillInstagram className="w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {drawings.map((drawing) => (
            <div key={drawing} className="p-4 sm:w-1/2 w-full">
              <div
                className="h-64 w-full relative cursor-pointer"
                onClick={() => handleImageClick(drawing)}
              >
                <img
                  className="object-cover object-center w-full h-full rounded"
                  alt="drawing"
                  src={drawing}
                />
              </div>
            </div>
          ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
      </div>
    </section>
  );
}
