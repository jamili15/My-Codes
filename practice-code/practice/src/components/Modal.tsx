// components/Modal.tsx
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className={` fixed top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center`}
      onClick={onClose}
    >
      <div
        className="bg-white p-[20px] rounded-[8px] w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="bg-[#ff4336] text-white border-none p-[10px] rounded-[4px] cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
