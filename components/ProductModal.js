import React from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ProductModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="flex justify-between items-center">
        <h2 className="mx-auto text-primary font-semi-bold text-2xl font-custom">
          Chat with Bianco Bangladesh
        </h2>
        <IoMdClose
          size={25}
          className="hover:text-red transition-colors duration-200"
          onClick={() => setShowModal(false)}
        />
      </div>
      <div className="text-center">
        <div className="relative p-6 flex-auto">
          <p className="my-4 text-slate-500 text-lg leading-relaxed">
            To place an order, provide us your contact details and we will be in
            touch with you shortly.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
