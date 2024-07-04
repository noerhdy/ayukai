import React, { useState } from "react";
import { dataPlay } from "./constants";
import ModalContent from "./components/ModalContent";
import ModalProfil from "./components/ModalProfil";

function App() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isProfilVisible, setIsProfilVisible] = useState(false);

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

  return (
    <>
      <div className="absolute w-full z-10">
        <nav className="text-zinc-500 max-w-screen-2xl flex justify-between py-4 mx-4 text-lg">
          <h1 className="cursor-default ">Ayukai</h1>
          <h1
            className="cursor-pointer hover:text-red-500 ease-in-out duration-500 delay-100 "
            onClick={handleShowrealClick}
          >
            Showreal
          </h1>
        </nav>
      </div>

      <div className="max-w-screen-2xl h-screen items-end bg-black flex relative overflow-hidden">
        <div className="flex flex-col relative  space-y-1 p-4 max-w-screen-md mb-12">
          {dataPlay.map((item, index) => (
            <div
              key={index}
              className="space-x-36 flex justify-start w-full cursor-pointer text-zinc-500 hover:text-zinc-50 ease-in-out duration-200"
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
    </>
  );
}

export default App;
