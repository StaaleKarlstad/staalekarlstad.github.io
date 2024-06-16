
interface ModalProps {
    isOpen : boolean,
    onClose : () => void,
    imageUrl : string,
}


const Modal = ({ isOpen, onClose, imageUrl } : ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex" 
        onClick={onClose}>
      <div className="relative p-8 bg-black w-full max-w-3xl m-auto flex-col flex rounded-lg">
        <img src={imageUrl} alt="Full size" className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default Modal;