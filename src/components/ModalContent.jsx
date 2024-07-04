// ModalContent.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import AudioContent from "./AudioContent";

const ModalContent = ({ isVisible, onClose, data }) => {
  return (
    <AnimatePresence>
      {isVisible && data && (
        <motion.div
          className="overflow-y-auto sm:w-3/5 sm:h-5/6 h-full :top-0 z-50 space-y-2 text-black absolute  sm:bottom-0 sm:right-0 p-8 bg-zinc-100"
          initial={{ y: 800, rotate: 45 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: 800, rotate: 45 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="font-medium text-2xl">{data.title}</div>
          <div className="flex w-full">
            <div className="w-1/2 text-xl">{data.subTitle}</div>
            <div className="w-1/2 cursor-pointer">
              <button onClick={onClose}>close</button>
            </div>
          </div>
          <div className="flex w-full py-12">
            <div className="w-1/2">view site</div>
            <div className="w-1/2">{data.Post}</div>
          </div>
          <img
            className="object-cover aspect-video bg-center duration-500 ease-in-out rounded-lg"
            src={data.thumbnail}
            alt="example"
          />
          <AudioContent />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalContent;
