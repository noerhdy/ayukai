// MainLayout.js
import React, { useState, useEffect } from "react";
import { dataAm, dataPm } from "../../constants";
import { useTheme } from "../theme-provider";
import Navbar from "../Fragments/Navbar";
import ContentListComponent from "../Fragments/ContentList";
import ModalComponent from "../Fragments/ModalComponent";
import ModalOther from "../Fragments/Modal/ModalOther";

const MainLayout = () => {
  const { theme } = useTheme();
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isProfilVisible, setIsProfilVisible] = useState(false);
  const [isAmSelected, setIsAmSelected] = useState(true);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);
  const [isOtherModalVisible, setIsOtherModalVisible] = useState(false);

  useEffect(() => {
    setIsInstructionVisible(true);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsContentVisible(true);
  };

  const handleShowrealClick = () => {
    setIsProfilVisible(true);
  };

  const handleCloseProfilClick = () => {
    setIsProfilVisible(false);
  };

  const handleCloseContentClick = () => {
    setIsContentVisible(false);
    setSelectedItem(null);
  };

  const handleToggleAmPm = (isPm) => {
    setIsAmSelected(!isPm);
  };

  const handleCloseInstruction = () => {
    setIsInstructionVisible(false);
  };

  const handleCloseOtherModal = () => {
    setIsOtherModalVisible(false);
  };

  const data = isAmSelected ? dataAm : dataPm;

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="w-screen h-screen justify-center  flex overflow-hidden dark:text-black bg-zinc-100 dark:bg-zinc-950 text-zinc-300">
        <div className=" flex-col max-w-screen-2xl w-full h-screen ">
          <Navbar
            onToggleAmPm={handleToggleAmPm}
            onShowrealClick={handleShowrealClick}
          />
          <main className="flex flex-col items-center w-full ">
            <ContentListComponent
              data={data}
              handleItemClick={handleItemClick}
              isPm={!isAmSelected}
            />
            <ModalComponent
              isContentVisible={isContentVisible}
              handleCloseContentClick={handleCloseContentClick}
              selectedItem={selectedItem}
              isProfilVisible={isProfilVisible}
              handleCloseProfilClick={handleCloseProfilClick}
              isInstructionVisible={isInstructionVisible}
              handleCloseInstruction={handleCloseInstruction}
              handleToggleAmPm={handleToggleAmPm}
              isOtherModalVisible={isOtherModalVisible}
              handleCloseOtherModal={handleCloseOtherModal}
            />
            {/* Render ModalOther */}
            <ModalOther
              isVisible={isOtherModalVisible}
              onClose={handleCloseOtherModal}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
