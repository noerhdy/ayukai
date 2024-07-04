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

          <div className="flex flex-col space-y-8 max-w-screen-sm pt-8">
            <div className=" text-end">
              <button className=" cursor-pointer" onClick={onClose}>
                close
              </button>
            </div>
            <div className="text-md w-full space-y-4  text-balance  ">
              <h1>
                This is profil of Ayukai, where <i>we</i> post thoughts and
                things that <i>we</i> think are worth keeping.
              </h1>
              <h1>
                <span className="font-medium">Why Ayukai?</span> This name is
                inspired by a theme in code editor called Mayukai. <i>We</i>
                chose Ayukai because <i>we</i> like the way it sounds. Last but
                not least, we simply like it overall.
              </h1>
              <div className="text-md w-full space-y-2 pt-4 text-balance ">
                <h1 className="font-medium">Have some fucking integrity </h1>
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

          <div className="flex max-w-screen-sm flex-col py-12">
            <h1 className="font-medium py-4 cursor-default">Lets Connect </h1>
            <div className="flex w-full justify-between">
              <div className="w-1/2 cursor-default">
                Direct message where you open this site
              </div>
              <div className="text-zinc-400 cursor-not-allowed">
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
