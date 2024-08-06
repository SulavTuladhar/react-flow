import React from "react";
import Modal from "react-modal";

interface ModalInterface {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

function ModalComponent({
  isModalOpen,
  closeModal,
  children,
  title,
}: ModalInterface) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="flex items-center justify-between pb-4">
        <p>{title}</p>
        <button onClick={() => closeModal()}>X</button>
      </div>
      <hr />
      {children}
    </Modal>
  );
}

export default ModalComponent;
