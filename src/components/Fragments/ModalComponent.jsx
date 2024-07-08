import React from "react";
import ModalContent from "./ModalContent";
import ModalProfil from "./ModalProfil";
import InstructionModal from "./InstructionModal";

const ModalComponent = ({
  isContentVisible,
  handleCloseContentClick,
  selectedItem,
  isProfilVisible,
  handleCloseProfilClick,
  isInstructionVisible,
  handleCloseInstruction,
  handleToggleAmPm,
}) => {
  return (
    <>
      <ModalContent
        isVisible={isContentVisible}
        onClose={handleCloseContentClick}
        data={selectedItem}
      />
      <ModalProfil
        isVisible={isProfilVisible}
        onClose={handleCloseProfilClick}
      />
      <InstructionModal
        isVisible={isInstructionVisible}
        onClose={handleCloseInstruction}
        onToggleAmPm={handleToggleAmPm}
      />
    </>
  );
};

export default ModalComponent;
