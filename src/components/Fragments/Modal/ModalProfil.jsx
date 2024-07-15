// ModalProfil.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import { AcProfil1 } from "../AcProfil1";
import { AcProfil2 } from "../AcProfil2.";
import LastUpdatedComponent from "@/components/LastUpdatedComponent";

const ModalProfil = ({ isVisible, onClose }) => {
  const data = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/noerhdt/",
    },
  ];

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="overflow-y-scroll  sm:w-3/5 sm:h-5/6 pt-24 sm:pt-12 h-screen text-wrap z-20 space-y-2 dark:text-zinc-300 bg-zinc-100 dark:bg-[#050505] text-zinc-950 absolute sm:bottom-0 sm:right-0 p-8"
          initial={{ y: 800, rotate: 45 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: 800, rotate: 45 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex group relative justify-center max-w-screen-sm items-center">
            <div className="w-full h-full bg-black opacity-60 group-hover:opacity-0 ease-in-out z-30 duration-500 absolute"></div>
            <img
              className="object-cover w-full grayscale group-hover:grayscale-0 delay-200 aspect-video bg-center duration-500 ease-in-out"
              src="./byme.webp"
              alt="example"
            />

            <div className="flex flex-col z-40 w-full space-y-2 absolute group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500 font-bold">
              <div className="text-[12px] font-medium flex justify-center tracking-wider text-md group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500">
                {/* <h1>name? my name's </h1> */}
              </div>
              <div className="text-4xl flex justify-center">
                <Typewriter
                  options={{
                    strings: ["unknown", "not available", "undefined"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {/* <div className="text-[12px] font-medium flex justify-center tracking-wider text-md group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500">
                <h1>and idc what you think</h1>
              </div> */}
            </div>
          </div>

          <div className="flex flex-col space-y-4 pb-24 max-w-screen-sm py-4">
            <div className="flex justify-between pb-4">
              <LastUpdatedComponent />
              <button
                className="cursor-pointer font-medium text-sm dark:hover:text-[#fdb969] text-zinc-500 hover:text-black ease-in-out duration-500 delay-100"
                onClick={onClose}
              >
                close
              </button>
            </div>
            <div className="text-sm w-full space-y-4 text-balance leading-8">
              <h1 className="font-semibold">
                This is the profile of Ayukai, where <i>we</i> post thoughts and
                things that <i>we</i> think are worth keeping.
              </h1>
              {/* Accordion  */}
              <AcProfil1 />
              <AcProfil2 />
            </div>
          </div>

          <div className="flex max-w-screen-sm flex-col py-6 dark:border-none border-t border-dashed border-zinc-600">
            <h1 className="font-medium pb-4 cursor-default text-zinc-800 dark:text-[#fdb969]">
              Direct Message
            </h1>
            <div className="flex w-full justify-between">
              {data.map((item) => (
                <div
                  key={item.name}
                  className="w-1/2 cursor-pointer text-zinc-800 dark:text-zinc-300 underline hover:no-underline "
                  onClick={() => handleClick(item.url)}
                >
                  {item.name}
                </div>
              ))}
              <div className="text-zinc-400 dark:text-zinc-600 cursor-not-allowed line-through">
                Personal sites
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProfil;
