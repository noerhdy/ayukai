// ModalProfil.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const ModalProfil = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="overflow-y-auto sm:w-3/5 sm:h-5/6 h-full :top-0 z-50 space-y-2 text-black absolute  sm:bottom-0 sm:right-0 p-8 bg-zinc-100"
          initial={{ y: 800, rotate: 45 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: 800, rotate: 45 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex group relative justify-center max-w-screen-sm items-center">
            <img
              className="object-cover w-full grayscale group-hover:grayscale-0 delay-200 aspect-video bg-center duration-500 ease-in-out "
              src="./byme.jpg"
              alt="example"
            />
            <div className=" absolute font-medium top-5 flex justify-between w-full tracking-wider px-4 text-md group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500">
              <h1>name? </h1>
              <h1>my name's</h1>
            </div>
            <div class="text-4xl  flex justify-center w-full absolute group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500 font-bold">
              <Typewriter
                options={{
                  strings: ["unknown", "blurryface"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className=" absolute font-medium bottom-5 flex justify-between w-full tracking-wider px-4 text-md group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500">
              <h1>and i don't care</h1>
              <h1>what you think</h1>
            </div>
          </div>

          <div className="flex max-w-screen-sm py-4">
            <div className="text-md w-3/4 flex flex-col space-y-4  ">
              <h1>
                This is profil of Ayukai, where we post thoughts and things that
                we think are worth keeping.
              </h1>
              <h1>
                Why Ayukai? This name is inspired by a theme in code editor
                called Mayukai. We chose Ayukai because we like the way it
                sounds. Last but not least, we simply like it overall.
              </h1>
            </div>
            <div className="w-1/4 cursor-pointer text-end">
              <button onClick={onClose}>close</button>
            </div>
          </div>
          <div className="flex w-full py-12">
            <div className="w-1/2">view site</div>
            <div className="w-1/2">hala pepek</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProfil;
