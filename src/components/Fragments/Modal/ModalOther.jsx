import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModalOther = ({ isVisible, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false); // Setelah video selesai, atur isPlaying menjadi false
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="overflow sm:w-3/5 sm:h-5/6 h-full w-full  z-40 space-y-2 bg-[#050505] absolute sm:bottom-0 sm:right-0 sm:p-8 p-0"
          initial={{ y: 800, rotate: 45 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: 800, rotate: 45 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex max-w-screen-md  relative h-full justify-center">
            <div className="flex flex-col justify-center space-y-2 items-start w-fit">
              <div className="w-full cursor-pointer" onClick={handleVideoClick}>
                <video
                  ref={videoRef}
                  width="750"
                  height="500"
                  onEnded={handleVideoEnded} // Tambahkan handler untuk event onEnded
                >
                  <source src="./mp4/am.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            {!isPlaying && ( // Tampilkan tombol Close hanya jika isPlaying false (video berhenti)
              <div className="absolute bottom-0 pb-20 sm:font-medium">
                <button
                  className="cursor-pointer font-medium text-md dark:hover:text-[#fdb969] dark:text-zinc-500 ease-in-out duration-500 delay-100"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalOther;
