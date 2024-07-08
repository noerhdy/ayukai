import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AmPm from "./AmPm";

const InstructionModal = ({ isVisible, onClose, onToggleAmPm }) => {
  const [hasSeenInstruction, setHasSeenInstruction] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenInstruction");
    if (hasSeen) {
      setHasSeenInstruction(true);
    }
  }, []);

  const handleClose = () => {
    setHasSeenInstruction(true);
    localStorage.setItem("hasSeenInstruction", "true");
    onClose();
  };

  return (
    <AnimatePresence>
      {!hasSeenInstruction && isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg dark:text-[#fdb969] font-bold pb-2 border-b border-zinc-400">
              Instructions!
            </h2>
            <div className="flex space-x-2 dark:text-zinc-200 mt-4">
              <p>Use</p>
              <AmPm onToggle={onToggleAmPm} />
              <p>to switch modes.</p>
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={handleClose}
                className="px-4 py-2 dark:text-zinc-900 text-white dark:bg-[#fdb969] bg-black rounded-md transition duration-200"
              >
                Gotcha
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstructionModal;
