import React, { useState, useEffect } from "react";
import { dataAm, dataPm } from "../../constants";
import { useTheme } from "../theme-provider";
import Navbar from "../Fragments/Navbar";
import ContentListComponent from "../Fragments/ContentList";
import ModalComponent from "../Fragments/ModalComponent";

const MainLayout = () => {
  const { theme } = useTheme();
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isProfilVisible, setIsProfilVisible] = useState(false);
  const [isAmSelected, setIsAmSelected] = useState(true);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

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

  const data = isAmSelected ? dataAm : dataPm;

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="w-screen h-screen justify-center  flex overflow-hidden ">
        <div className=" flex-col max-w-screen-2xl w-full h-screen ">
          <Navbar
            onToggleAmPm={handleToggleAmPm}
            onShowrealClick={handleShowrealClick}
          />
          <main className="flex flex-col items-center w-full ">
            <ContentListComponent
              data={data}
              handleItemClick={handleItemClick}
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
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
