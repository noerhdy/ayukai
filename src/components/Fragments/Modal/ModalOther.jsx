import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonCta from "../CTA/ButtonClose";

const ModalOther = ({ isVisible, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handlePlaying = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);

      video.addEventListener("playing", handlePlaying);
      video.addEventListener("pause", handlePause);
      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("playing", handlePlaying);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      if (isVisible) {
        setIsPlaying(true);
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [isVisible]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="overflow sm:w-3/5 sm:h-5/6 h-screen w-full bg-[#050505] z-40 space-y-2 absolute sm:bottom-0 sm:right-0 sm:p-8 p-0"
          initial={{ y: 800, rotate: 45 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: 800, rotate: 45 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex max-w-screen-md relative h-full justify-center">
            <div className="flex flex-col justify-center space-y-2 items-start w-fit">
              <div className="w-full cursor-pointer" onClick={handleVideoClick}>
                <video
                  controls={false}
                  ref={videoRef}
                  width="750"
                  height="500"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="./mp4/am.mp4" type="video/mp4" />
                </video>
                {/* {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center z-40">
                    <div className="aspect-video w-full bg-transparent ease-in-out duration-500">
                      <div className="aspect-video h-1/2 w-full border-b-white border-b-2"></div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
            {!isPlaying && (
              <div className="absolute z-50 bottom-0 pb-20 sm:font-medium">
                <ButtonCta onClick={onClose} />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalOther;
