import React, { useState } from "react";
import ModalContent from "../Fragments/ModalContent";
import ModalProfil from "../Fragments/ModalProfil";
import { dataAm, dataPm } from "../../constants";
import { useTheme } from "../theme-provider";
import Navbar from "../Fragments/Navbar";
import DateDisplay from "../Fragments/DateDisplay";

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
      <div className="max-w-screen-2xl h-svh items-end bg-zinc-50 dark:bg-neutral-950 flex relative overflow-hidden">
        <div className="flex flex-col relative space-y-1  sm:max-w-screen-xl px-4 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="  flex place-content-start w-full sm:max-w-screen-sm  cursor-pointer text-sm text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 ease-in-out duration-200"
              onClick={() => handleItemClick(item)}
            >
              <div className=" sm:w-14 md:w-16 lg:w-24  w-16 ">
                <h1>{item.id} </h1>
              </div>
              <div className="sm:w-52 md:w-72 lg:w-96 w-64">
                <h1>{item.title} </h1>
              </div>
              <div className=" w-10 ">
                <h1 className="normal-nums">{item.date} </h1>
              </div>
            </div>
          ))}
          <div className="pt-6 pb-2 text-center pl-16 text-md text-zinc-500">
            <DateDisplay />
          </div>
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
