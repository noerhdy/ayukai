// ModalProfil.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const ModalProfil = ({ isVisible, onClose }) => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="overflow-y-auto sm:w-3/5 sm:h-5/6 h-full text-wrap :top-0 z-20 space-y-2 dark:text-black bg-zinc-950 dark:bg-zinc-100 text-zinc-300 absolute sm:bottom-0 sm:right-0 p-8"
          initial={{ y: 800, rotate: 45 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: 800, rotate: 45 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex group relative justify-center max-w-screen-sm items-center">
            <div className="w-full h-full bg-black opacity-60 group-hover:opacity-0 ease-in-out z-30 duration-500 absolute"></div>
            <img
              className="object-cover w-full grayscale group-hover:grayscale-0 delay-200 aspect-video bg-center duration-500 ease-in-out "
              src="./byme.webp"
              alt="example"
            />
            <div className=" absolute z-40 text-sm font-medium top-5 flex justify-between w-full tracking-wider px-4 text-md group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500">
              <h1>name? </h1>
              <h1>my name's</h1>
            </div>
            <div className="text-4xl flex justify-center z-40 w-full absolute group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500 font-bold">
              <Typewriter
                options={{
                  strings: ["unknown", "blurryface"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className=" absolute z-40 font-medium bottom-5 text-sm flex justify-between w-full tracking-wider px-4 text-md group-hover:text-zinc-200 delay-200 duration-500 ease-in-out drop-shadow text-red-500">
              <h1>and i don't care</h1>
              <h1>what you think</h1>
            </div>
          </div>

          <div className="flex flex-col space-y-8 max-w-screen-sm py-12">
            <div className=" text-end">
              <button
                className="cursor-pointer font-medium text-sm hover:text-red-500 ease-in-out duration-500 delay-100"
                onClick={onClose}
              >
                close
              </button>
            </div>
            <div className="text-md w-full space-y-4  text-balance leading-10 ">
              <h1>
                This is profil of Ayukai, where <i>we</i> post thoughts and
                things that <i>we</i> think are worth keeping.
              </h1>
              <h1>
                <span className="font-medium  dark:text-black text-white ">
                  Why Ayukai?
                </span>
                <br /> This name is inspired by a theme in code editor called{" "}
                <span
                  className="underline cursor-pointer hover:text-red-500 ease-in-out duration-500 delay-100"
                  onClick={() =>
                    handleClick(
                      "https://marketplace.visualstudio.com/items?itemName=GulajavaMinistudio.mayukaithemevsc"
                    )
                  }
                >
                  Mayukai
                </span>
                . <i>We </i>
                chose Ayukai because <i>we</i> like the way it sounds. This
                theme uses the base color swatch from the{" "}
                <span
                  className="underline cursor-pointer hover:text-red-500 ease-in-out duration-500 delay-100"
                  onClick={() =>
                    handleClick("https://github.com/ayu-theme/vscode-ayu")
                  }
                >
                  Ayu Theme
                </span>
                , with some adjustments for syntax coloring. Last but not least,
                we simply like it overall.
              </h1>
              <div className="text-md w-full space-y-2 pt-4 text-balance ">
                <h1 className="font-medium  dark:text-black text-white ">
                  Have some fucking integrity{" "}
                </h1>
                <h1>
                  What you say matters. Your words are only as powerful as the
                  action precode. When you dont follow through, you rob them of
                  any value. Dont tell people what they want to hear. <br />
                  Dont live in the sad, artificial world of unfulfilled
                  commitment. Dont create an illusion of your intent, fulfill it
                  through setting goals and accepting consequencess. <br /> Your
                  responsibilities won't go away. when you chose not to face
                  them, You bar yourself from ever enjoying in the area of your
                  life that occupy.
                </h1>
              </div>
            </div>
          </div>

          <div className="flex max-w-screen-sm flex-col py-6  dark:border-none border-t border-dashed border-zinc-600 ">
            <h1 className="font-medium pb-4 cursor-default text-zinc-600 dark:text-black ">
              Connect
            </h1>
            <div className="flex w-full justify-between">
              <div className="w-1/2 cursor-default dark:text-zinc-950 text-red-500">
                Direct message where you open this site
              </div>
              <div className="dark:text-zinc-400 text-red-800 cursor-not-allowed">
                Personal site
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProfil;
