import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AudioContent from "../Audio/AudioContent";
import ButtonCta from "../CTA/ButtonClose";
import ButtonLink from "../CTA/ButtonLink";

const ModalContent = ({ isVisible, onClose, data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (playing) => {
    setIsPlaying(playing);
  };

  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isVisible && data && (
        <motion.div
          className="overflow-y-auto overflow-hidden sm:w-3/5 sm:h-5/6 pt-24 sm:pt-0 md:pt-12 h-screen w-full z-40 space-y-2 dark:text-black bg-zinc-950 dark:bg-zinc-100 text-zinc-500 absolute sm:bottom-0 sm:right-0 p-8"
          initial={{ y: 800, rotate: 45 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: 800, rotate: 45 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex max-w-screen-md justify-center">
            <div className="flex flex-col justify-center space-y-2 items-start w-fit">
              <div className="font-semibold text-2xl cursor-default">
                {data.title}
              </div>
              <div className="text-xl font-medium pb-8 cursor-default">
                {data.subTitle}
              </div>
              <div className="flex relative justify-center items-center max-w-screen-sm">
                <div
                  className={`absolute rounded-lg w-full h-full bg-black ${
                    isPlaying ? "opacity-50" : "opacity-80"
                  } group-hover:opacity-0 ease-in-out z-30 duration-500`}
                ></div>
                <img
                  className="object-cover aspect-square bg-center duration-500 ease-in-out rounded-lg"
                  src={data.thumbnail}
                  alt="example"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <AudioContent
                    musicUrl={data.play}
                    onPlayPause={handlePlayPause}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between items-center pt-8 font-medium">
                <ButtonLink
                  name="view"
                  url={data.site}
                  onClick={handleLinkClick}
                  className="text-zinc-500 dark:text-zinc-500"
                  hoverClassName="group-hover:text-white group-hover:dark:text-black"
                />
                <ButtonCta onClick={onClose} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalContent;
