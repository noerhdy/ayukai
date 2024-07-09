import React from "react";
import DateDisplay from "../Fragments/DateDisplay";
import ModalOther from "./Modal/ModalOther";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const ContentListComponent = ({ data, handleItemClick, isPm }) => {
  const [isOtherModalVisible, setIsOtherModalVisible] = useState(false);

  const handleOtherItemClick = () => {
    setIsOtherModalVisible(true);
  };

  const handleCloseOtherModal = () => {
    setIsOtherModalVisible(false);
  };
  return (
    <div className="flex w-full justify-end  flex-col min-h-screen space-y-1">
      {/* list component for modalcontent */}
      <div className="flex flex-col  px-4 justify-start  space-y-1">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex place-content-start w-full cursor-pointer text-sm text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 ease-in-out duration-200"
            onClick={() => handleItemClick(item)}
          >
            <div className="w-16 sm:w-14 md:w-16 lg:w-24">
              <h1>{item.id}</h1>
            </div>
            <div className="w-64 sm:w-52 md:w-72 lg:w-96">
              <h1>{item.title}</h1>
            </div>
            <div className="w-10">
              <h1 className="normal-nums">{item.date}</h1>
            </div>
          </div>
        ))}

        {/* list component for modal other */}
        {isPm && (
          <div
            className="flex place-content-start w-full cursor-pointer text-sm font-bold text-zinc-700 dark:hover:text-[#fdb969]  ease-in-out duration-200"
            onClick={handleOtherItemClick}
          >
            <div className="w-16 sm:w-14 md:w-16 lg:w-24">
              <h1>00</h1>
            </div>
            <div className="w-64 sm:w-52 md:w-72 lg:w-96 text-start ">
              <Typewriter
                options={{
                  strings: ["Do I Wanna Know?", "On Repeat"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="w-10 text-end pr-2">
              <h1 className="normal-nums">00</h1>
            </div>
          </div>
        )}
        <div className="pt-6 pb-2 text-center lg:w-3/6 w-auto text-md text-zinc-500">
          <DateDisplay />
        </div>
      </div>
      <ModalOther
        isVisible={isOtherModalVisible}
        onClose={handleCloseOtherModal}
      />
    </div>
  );
};

export default ContentListComponent;
