import React, { useState } from "react";
import ModalContent from "../Fragments/ModalContent";
import ModalProfil from "../Fragments/ModalProfil";
import { dataAm, dataPm } from "../../constants";
import { useTheme } from "../theme-provider";
import Navbar from "../Fragments/Navbar";

function MainLayout() {
  const { theme } = useTheme();
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isProfilVisible, setIsProfilVisible] = useState(false);
  const [isAmSelected, setIsAmSelected] = useState(true);

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

  const data = isAmSelected ? dataAm : dataPm;

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Navbar
        onToggleAmPm={handleToggleAmPm}
        onShowrealClick={handleShowrealClick}
      />
      <div className="max-w-screen-2xl h-screen items-end bg-zinc-50 dark:bg-neutral-950 flex relative overflow-hidden">
        <div className="flex flex-col relative space-y-1 p-4 max-w-screen-md mb-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="sm:space-x-36 space-x-16 flex justify-start w-full sm:max-w-screen-sm cursor-pointer text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 ease-in-out duration-200"
              onClick={() => handleItemClick(item)}
            >
              <div>{item.id}</div>
              <div className="w-1/2">{item.title}</div>
              <div>{item.date}</div>
            </div>
          ))}
        </div>

        <ModalContent
          isVisible={isContentVisible}
          onClose={handleCloseContentClick}
          data={selectedItem}
        />
        <ModalProfil
          isVisible={isProfilVisible}
          onClose={handleCloseProfilClick}
        />
      </div>
    </div>
  );
}

export default MainLayout;
