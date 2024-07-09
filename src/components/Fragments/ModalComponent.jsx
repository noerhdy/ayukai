import React from "react";
import ModalContent from "./Modal/ModalContent";
import ModalProfil from "./Modal/ModalProfil";
import InstructionModal from "./InstructionModal";
import ModalOther from "./Modal/ModalOther";

const ModalComponent = ({
  isContentVisible,
  handleCloseContentClick,
  selectedItem,
  isProfilVisible,
  handleCloseProfilClick,
  isInstructionVisible,
  handleCloseInstruction,
  handleToggleAmPm,
  isOtherModalVisible,
  handleCloseOtherModal,
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
      <ModalOther
        isVisible={isOtherModalVisible}
        onClose={handleCloseOtherModal}
      />
    </>
  );
};

export default ModalComponent;
